import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { doc, getDoc } from 'firebase/firestore';
import { getDb } from '@/lib/firebase';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { ExternalLink, Loader2 } from 'lucide-react';
import CertificateHeader from '@/components/CertificateHeader';
import BlockchainBadge from '@/components/BlockchainBadge';
import QRCodeSection from '@/components/QRCodeSection';
import CertificateCard from '@/components/CertificateCard';

interface CertificateRecord {
  name?: string;
  father_name?: string;
  mother_name?: string;
  trade_name?: string;
  establishment_name?: string;
  establishment_address?: string;
  training_duration?: string;
}

interface CertificateDoc extends CertificateRecord {}

export default function Certificate() {
  const [, setLocation] = useLocation();
  const [searchId, setSearchId] = useState('');

  // Read URL parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id'); // changed from 'name' to 'id'
    if (id) {
      setSearchId(id);
    }
  }, []);

  // React Query
  const { data, isLoading, error } = useQuery<CertificateDoc | null>({
    queryKey: ['firestore-certificate', searchId],
    queryFn: async () => {
      if (!searchId) return null;
      const db = getDb();
      const ref = doc(db, 'certificates', searchId);
      const snap = await getDoc(ref);
      if (!snap.exists()) throw new Error('Certificate not found');
      return snap.data() as CertificateDoc;
    },
    enabled: !!searchId,
    refetchOnWindowFocus: false,
  });

  const certificateUrl = searchId
    ? `${window.location.origin}?id=${encodeURIComponent(searchId)}`
    : '';

  // Map certificate data
  const certificateData = data
    ? {
        apprenticeName: data.name || 'N/A',
        fatherName: data.father_name || 'N/A',
        motherName: data.mother_name || 'N/A',
        tradeName: data.trade_name || 'N/A',
        establishmentName: data.establishment_name || 'N/A',
        establishmentAddress: data.establishment_address || 'N/A',
        trainingDuration: data.training_duration || 'N/A',
      }
    : null;

  return (
    <div
      className="min-h-screen py-8 px-4"
      style={{ background: 'linear-gradient(to bottom, hsl(40, 30%, 97%), hsl(0, 0%, 100%))' }}
    >
      <CertificateHeader />

      <div className="max-w-6xl mx-auto mt-8">
        {/* Loading */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-primary" />
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-12">
            <p className="text-destructive text-lg font-semibold">
              Certificate not found. Please check the certificate ID in the URL.
            </p>
          </div>
        )}

        {/* Certificate */}
        {certificateData && (
          <div className="space-y-8">
            <div className="flex justify-center">
              <BlockchainBadge />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <CertificateCard data={certificateData} />
              </div>

              <div className="flex flex-col gap-6">
                {/* <QRCodeSection url={certificateUrl} /> */}

                {searchId && (
                  <Button variant="default" className="w-full" asChild>
                    <a
                      href={`${window.location.origin}?id=${encodeURIComponent(searchId)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Share certificate link
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Empty state */}
        {!searchId && !isLoading && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold font-official mb-3" style={{ color: 'hsl(220, 60%, 25%)' }}>
              Blockchain Verified Apprenticeship Certificates
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Please provide a certificate link with <code>?id=DocumentID</code> in the URL to view the certificate.
            </p>
          </div>
        )}
      </div>

      <style>{`
        @media print {
          body { margin: 0; padding: 20px; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
}
