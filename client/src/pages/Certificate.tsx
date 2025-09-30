import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

interface CertificateAPIResponse {
  records: CertificateRecord[];
}

export default function Certificate() {
  const [, setLocation] = useLocation();
  const [apprenticeName, setApprenticeName] = useState('');
  const [searchName, setSearchName] = useState('');

  // Read URL parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    if (name) {
      setSearchName(name);
      setApprenticeName(name);
    }
  }, []);

  // React Query v5 - object form
  const { data, isLoading, error } = useQuery<CertificateAPIResponse>({
    queryKey: ['/api/certificate', searchName],
    queryFn: async () => {
      const response = await fetch(
        `https://verfi-cert.onrender.com/get_certificate?name=${encodeURIComponent(searchName)}`
      );
      if (!response.ok) throw new Error('Certificate not found');
      return response.json();
    },
    enabled: !!searchName,
    refetchOnWindowFocus: false,
  });

  const handleSearch = () => {
    if (apprenticeName.trim()) {
      setSearchName(apprenticeName.trim());
      setLocation(`/?name=${encodeURIComponent(apprenticeName.trim())}`);
    }
  };

  const certificateUrl = searchName
    ? `${window.location.origin}?name=${encodeURIComponent(searchName)}`
    : '';

  // Map certificate data from first record
  const certificateData = data?.records?.[0]
    ? {
        apprenticeName: data.records[0].name || 'N/A',
        fatherName: data.records[0].father_name || 'N/A',
        motherName: data.records[0].mother_name || 'N/A',
        tradeName: data.records[0].trade_name || 'N/A',
        establishmentName: data.records[0].establishment_name || 'N/A',
        establishmentAddress: data.records[0].establishment_address || 'N/A',
        trainingDuration: data.records[0].training_duration || 'N/A',
      }
    : null;

  return (
    <div
      className="min-h-screen py-8 px-4"
      style={{ background: 'linear-gradient(to bottom, hsl(40, 30%, 97%), hsl(0, 0%, 100%))' }}
    >
      <CertificateHeader />

      <div className="max-w-6xl mx-auto mt-8">
        {/* Search Input */}
        <div className="mb-8 print:hidden">
          <div className="flex gap-3 max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Enter apprentice name to verify certificate..."
              value={apprenticeName}
              onChange={(e) => setApprenticeName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="flex-1"
              data-testid="input-apprentice-name"
            />
            <Button
              onClick={handleSearch}
              disabled={!apprenticeName.trim() || isLoading}
              data-testid="button-search"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Verify'}
            </Button>
          </div>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-primary" data-testid="loader-fetching" />
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-12">
            <p className="text-destructive text-lg font-semibold" data-testid="text-error">
              Certificate not found. Please check the apprentice name and try again.
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
                <QRCodeSection url={certificateUrl} />

                <Button variant="default" className="w-full" asChild data-testid="button-verify-blockchain">
                  <a
                    href={`https://verfi-cert.onrender.com/get_certificate?name=${encodeURIComponent(searchName)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on Blockchain
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="w-full print:hidden"
                  onClick={() => window.print()}
                  data-testid="button-print"
                >
                  Print Certificate
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Empty state */}
        {!searchName && !isLoading && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold font-official mb-3" style={{ color: 'hsl(220, 60%, 25%)' }}>
              Blockchain Verified Apprenticeship Certificates
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enter an apprentice name above to view and verify their official vocational training certificate, authenticated
              on the blockchain for security and authenticity.
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
