import logoConcept1 from "@/assets/logo-concept-1.png";
import logoConcept2 from "@/assets/logo-concept-2.png";
import logoConcept3 from "@/assets/logo-concept-3.png";
import logoAir1 from "@/assets/logo-air-1.png";
import logoAir2 from "@/assets/logo-air-2.png";
import logoAir3 from "@/assets/logo-air-3.png";
import logoAir4 from "@/assets/logo-air-4.png";

const logos = [
  { src: logoConcept1, name: "Concept 1", desc: "Clean double leaf" },
  { src: logoConcept2, name: "Concept 2", desc: "Circular plant badge" },
  { src: logoConcept3, name: "Concept 3", desc: "Dynamic E lettermark" },
  { src: logoAir1, name: "Air 1", desc: "Lotus flow" },
  { src: logoAir2, name: "Air 2", desc: "Air spiral vortex" },
  { src: logoAir3, name: "Air 3", desc: "Circular flow + leaf" },
  { src: logoAir4, name: "Air 4", desc: "Fan blade leaves" },
];

export default function LogoGallery() {
  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold text-foreground mb-2">EnviroFlow Logo Concepts</h1>
      <p className="text-muted-foreground mb-8">Click any logo you like to discuss refinements</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {logos.map((logo) => (
          <div 
            key={logo.name}
            className="bg-card border border-border rounded-xl p-4 hover:shadow-lg hover:border-primary transition-all cursor-pointer"
          >
            <div className="aspect-square bg-white rounded-lg flex items-center justify-center mb-3">
              <img src={logo.src} alt={logo.name} className="w-full h-full object-contain p-2" />
            </div>
            <h3 className="font-semibold text-foreground">{logo.name}</h3>
            <p className="text-sm text-muted-foreground">{logo.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
