import { Card } from '@/components/ui/card';

interface CertificateData {
  apprenticeName: string;
  fatherName: string;
  motherName: string;
  tradeName: string;
  establishmentName: string;
  establishmentAddress: string;
  trainingDuration: string;
}

interface CertificateCardProps {
  data: CertificateData;
}

export default function CertificateCard({ data }: CertificateCardProps) {
  return (
    <Card className="relative overflow-visible p-8 md:p-12 bg-white" style={{
      border: '8px double',
      borderColor: 'hsl(45, 75%, 50%)',
      boxShadow: 'inset 0 0 0 4px hsl(220, 60%, 25%), var(--shadow-lg)'
    }}>
      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4" style={{ borderColor: 'hsl(45, 75%, 50%)' }}></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4" style={{ borderColor: 'hsl(45, 75%, 50%)' }}></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4" style={{ borderColor: 'hsl(45, 75%, 50%)' }}></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4" style={{ borderColor: 'hsl(45, 75%, 50%)' }}></div>

      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-certificate tracking-wide" style={{ color: 'hsl(220, 60%, 25%)' }}>
          APPRENTICESHIP CERTIFICATE
        </h1>
        <p className="text-base md:text-lg font-official mt-2 text-muted-foreground">
          National Council for Vocational Education and Training
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground">Apprentice Name</label>
          <p className="text-lg font-semibold border-b border-dotted pb-2" style={{ color: 'hsl(220, 60%, 25%)' }} data-testid="text-apprentice-name">
            {data.apprenticeName}
          </p>
        </div>

        <div className="space-y-1">
          <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground">Trade Name</label>
          <p className="text-lg font-semibold border-b border-dotted pb-2" style={{ color: 'hsl(220, 60%, 25%)' }} data-testid="text-trade-name">
            {data.tradeName}
          </p>
        </div>

        <div className="space-y-1">
          <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground">Father's / Guardian Name</label>
          <p className="text-lg font-semibold border-b border-dotted pb-2" style={{ color: 'hsl(220, 60%, 25%)' }} data-testid="text-father-name">
            {data.fatherName}
          </p>
        </div>

        <div className="space-y-1">
          <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground">Mother's Name</label>
          <p className="text-lg font-semibold border-b border-dotted pb-2" style={{ color: 'hsl(220, 60%, 25%)' }} data-testid="text-mother-name">
            {data.motherName}
          </p>
        </div>

        <div className="space-y-1 lg:col-span-2">
          <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground">Establishment Name</label>
          <p className="text-lg font-semibold border-b border-dotted pb-2" style={{ color: 'hsl(220, 60%, 25%)' }} data-testid="text-establishment-name">
            {data.establishmentName}
          </p>
        </div>

        <div className="space-y-1 lg:col-span-2">
          <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground">Establishment Address</label>
          <p className="text-lg font-semibold border-b border-dotted pb-2" style={{ color: 'hsl(220, 60%, 25%)' }} data-testid="text-establishment-address">
            {data.establishmentAddress}
          </p>
        </div>

        <div className="space-y-1">
          <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground">Training Duration</label>
          <p className="text-lg font-semibold border-b border-dotted pb-2" style={{ color: 'hsl(220, 60%, 25%)' }} data-testid="text-training-duration">
            {data.trainingDuration}
          </p>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-muted-foreground">Authorized Signatory</p>
          <div className="mt-2 border-t-2 border-foreground pt-1 w-48">
            <p className="text-sm font-semibold">Digital Signature</p>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm font-medium text-muted-foreground">Official Seal</p>
          <div className="mt-2 w-24 h-24 mx-auto md:mx-0 border-4 rounded-full flex items-center justify-center" style={{ borderColor: 'hsl(25, 85%, 55%)' }}>
            <p className="text-xs font-bold text-center" style={{ color: 'hsl(220, 60%, 25%)' }}>NCVET<br/>Certified</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
