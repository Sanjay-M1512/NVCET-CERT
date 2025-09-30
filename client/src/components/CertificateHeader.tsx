import goiLogo from '@assets/generated_images/Government_of_India_emblem_bf452352.png';
import ncvetLogo from '@assets/generated_images/NCVET_official_logo_8eba4417.png';
import skillIndiaLogo from '@assets/generated_images/Skill_India_mission_logo_a63a0bd3.png';

export default function CertificateHeader() {
  return (
    <div className="w-full py-8">
      <div className="flex justify-between items-center max-w-5xl mx-auto px-4 gap-8">
        <div className="flex flex-col items-center flex-1">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-md flex items-center justify-center p-3">
            <img 
              src={ncvetLogo} 
              alt="NCVET Logo" 
              className="w-full h-full object-contain"
              data-testid="img-ncvet-logo"
            />
          </div>
          <p className="mt-2 text-xs md:text-sm font-semibold text-center text-foreground">NCVET</p>
        </div>

        <div className="flex flex-col items-center flex-1">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white shadow-lg flex items-center justify-center p-3">
            <img 
              src={goiLogo} 
              alt="Government of India" 
              className="w-full h-full object-contain"
              data-testid="img-goi-logo"
            />
          </div>
          <p className="mt-2 text-sm md:text-base font-bold text-center text-foreground font-official">Government of India</p>
        </div>

        <div className="flex flex-col items-center flex-1">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-md flex items-center justify-center p-3">
            <img 
              src={skillIndiaLogo} 
              alt="Skill India Logo" 
              className="w-full h-full object-contain"
              data-testid="img-skill-india-logo"
            />
          </div>
          <p className="mt-2 text-xs md:text-sm font-semibold text-center text-foreground">Skill India</p>
        </div>
      </div>

      <div className="mt-6 h-1 w-full max-w-5xl mx-auto" style={{
        background: 'linear-gradient(to right, hsl(25, 85%, 55%) 0%, hsl(25, 85%, 55%) 33.33%, hsl(0, 0%, 100%) 33.33%, hsl(0, 0%, 100%) 66.66%, hsl(140, 50%, 45%) 66.66%, hsl(140, 50%, 45%) 100%)'
      }}></div>
    </div>
  );
}
