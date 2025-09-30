import { ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function BlockchainBadge() {
  return (
    <div className="flex items-center justify-center gap-3 py-4">
      <div 
        className="relative flex items-center justify-center w-14 h-14 rounded-full"
        style={{
          background: 'linear-gradient(135deg, hsl(142, 70%, 45%) 0%, hsl(140, 50%, 45%) 100%)',
          boxShadow: '0 0 20px hsla(142, 70%, 45%, 0.3)'
        }}
        data-testid="badge-blockchain-verified"
      >
        <ShieldCheck className="w-8 h-8 text-white" />
      </div>
      <div className="flex flex-col">
        <Badge 
          variant="outline" 
          className="text-sm font-semibold border-2 px-3 py-1"
          style={{
            borderColor: 'hsl(142, 70%, 45%)',
            color: 'hsl(142, 70%, 35%)'
          }}
        >
          BLOCKCHAIN VERIFIED
        </Badge>
        <p className="text-xs text-muted-foreground mt-1">Authenticated & Secure</p>
      </div>
    </div>
  );
}
