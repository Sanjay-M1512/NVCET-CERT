import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { Card } from '@/components/ui/card';

interface QRCodeSectionProps {
  url: string;
}

export default function QRCodeSection({ url }: QRCodeSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && url) {
      QRCode.toCanvas(canvasRef.current, url, {
        width: 180,
        margin: 2,
        color: {
          dark: '#1e3a8a',
          light: '#ffffff'
        }
      });
    }
  }, [url]);

  return (
    <Card className="p-4 flex flex-col items-center border-2 print:hidden" style={{ borderColor: 'hsl(142, 70%, 45%)' }}>
      <canvas ref={canvasRef} className="w-[180px] h-[180px]" data-testid="canvas-qr-code" />
      <p className="mt-3 text-sm font-semibold text-foreground">Scan to Verify</p>
      <p className="text-xs text-muted-foreground mt-1">Quick Certificate Validation</p>
    </Card>
  );
}
