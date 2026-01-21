import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoConcept1 from "@/assets/logo-concept-1.png";
import logoConcept2 from "@/assets/logo-concept-2.png";
import logoConcept3 from "@/assets/logo-concept-3.png";
import logoAir1 from "@/assets/logo-air-1.png";
import logoAir2 from "@/assets/logo-air-2.png";
import logoAir3 from "@/assets/logo-air-3.png";
import logoAir4 from "@/assets/logo-air-4.png";
import logoHybrid1 from "@/assets/logo-hybrid-1.png";
import logoHybrid2 from "@/assets/logo-hybrid-2.png";
import logoHybrid3 from "@/assets/logo-hybrid-3.png";
import logoHybrid4 from "@/assets/logo-hybrid-4.png";
import logoFinal1 from "@/assets/logo-final-1.png";
import logoFinal2 from "@/assets/logo-final-2.png";
import logoFinal3 from "@/assets/logo-final-3.png";
import logoChip1 from "@/assets/logo-chip-1.png";
import logoChip2 from "@/assets/logo-chip-2.png";
import logoChip3 from "@/assets/logo-chip-3.png";
import logoChip4 from "@/assets/logo-chip-4.png";
import logoChip5 from "@/assets/logo-chip-5.png";
import logoFull from "@/assets/logo-full.png";
import logoIcon from "@/assets/logo-icon.png";

const chips = [
  { src: logoChip5, name: "Chip 5 ⭐", desc: "Simplified chip + clean leaves" },
  { src: logoChip1, name: "Chip 1", desc: "Circuit board + leaves" },
  { src: logoChip2, name: "Chip 2", desc: "CPU pins + plant" },
  { src: logoChip3, name: "Chip 3", desc: "Minimal chip + leaves" },
  { src: logoChip4, name: "Chip 4", desc: "Outlined chip frame" },
];

const finals = [
  { src: logoFinal1, name: "Final 1", desc: "Flat light blue, clean" },
  { src: logoFinal2, name: "Final 2", desc: "Gradient, premium shadow" },
  { src: logoFinal3, name: "Final 3", desc: "Three leaves with veins" },
];

const hybrids = [
  { src: logoHybrid1, name: "Hybrid 1", desc: "Wordmark + wave flow" },
  { src: logoHybrid2, name: "Hybrid 2", desc: "Leaves in spiral crescent" },
  { src: logoHybrid3, name: "Hybrid 3", desc: "Air swirl + center leaves" },
  { src: logoHybrid4, name: "Hybrid 4", desc: "E lettermark + leaves" },
];

const originals = [
  { src: logoConcept1, name: "Concept 1", desc: "Clean double leaf" },
  { src: logoConcept2, name: "Concept 2", desc: "Circular plant badge" },
  { src: logoConcept3, name: "Concept 3", desc: "Dynamic E lettermark" },
  { src: logoAir1, name: "Air 1", desc: "Lotus flow" },
  { src: logoAir2, name: "Air 2", desc: "Air spiral vortex" },
  { src: logoAir3, name: "Air 3", desc: "Circular flow + leaf" },
  { src: logoAir4, name: "Air 4", desc: "Fan blade leaves" },
];

export default function LogoGallery() {
  const handleDownload = async (src: string, filename: string) => {
    // Fetch as a Blob so browsers consistently honor the requested filename.
    const res = await fetch(src);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();

    // Cleanup
    setTimeout(() => URL.revokeObjectURL(url), 0);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold text-foreground mb-2">EnviroFlow Logo Concepts</h1>
      <p className="text-muted-foreground mb-8">Tell me which one you like!</p>

      {/* Official Logo Download Section */}
      <div className="mb-10 p-6 bg-primary/5 border-2 border-primary rounded-xl">
        <h2 className="text-xl font-semibold text-primary mb-4">✅ Official Logo - Chip 5 + Lettering</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <img
              src={logoFull}
              alt="EnviroFlow Full Logo"
              className="h-28 sm:h-36 md:h-44 max-w-full object-contain"
            />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <img
              src={logoIcon}
              alt="EnviroFlow Icon"
              className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Button onClick={() => void handleDownload(logoFull, "enviroflow-logo-full.png")} className="gap-2">
              <Download className="h-4 w-4" />
              Download Full Logo
            </Button>
            <Button
              variant="outline"
              onClick={() => void handleDownload(logoIcon, "enviroflow-icon.png")}
              className="gap-2"
            >
              <Download className="h-4 w-4" />
              Download Icon Only
            </Button>
            <p className="text-sm text-muted-foreground">
              Preview is sized for the page; downloads keep the original file resolution.
            </p>
          </div>
        </div>
      </div>
      
      <h2 className="text-xl font-semibold text-primary mb-4">🔌 Chip + Leaf (Tech Meets Nature)</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {chips.map((logo) => (
          <div 
            key={logo.name}
            className="bg-card border-2 border-primary rounded-xl p-4 hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="aspect-square bg-white rounded-lg flex items-center justify-center mb-3">
              <img src={logo.src} alt={logo.name} className="w-full h-full object-contain p-2" />
            </div>
            <h3 className="font-semibold text-foreground">{logo.name}</h3>
            <p className="text-sm text-muted-foreground">{logo.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold text-muted-foreground mb-4">Rounded Square Options</h2>
      <div className="grid grid-cols-3 gap-6 mb-10">
        {finals.map((logo) => (
          <div 
            key={logo.name}
            className="bg-card border border-border rounded-xl p-4 hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="aspect-square bg-white rounded-lg flex items-center justify-center mb-3">
              <img src={logo.src} alt={logo.name} className="w-full h-full object-contain p-2" />
            </div>
            <h3 className="font-semibold text-foreground">{logo.name}</h3>
            <p className="text-sm text-muted-foreground">{logo.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold text-muted-foreground mb-4">Hybrid Concepts</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {hybrids.map((logo) => (
          <div 
            key={logo.name}
            className="bg-card border border-border rounded-xl p-3 hover:shadow-lg hover:border-primary transition-all cursor-pointer"
          >
            <div className="aspect-square bg-white rounded-lg flex items-center justify-center mb-2">
              <img src={logo.src} alt={logo.name} className="w-full h-full object-contain p-1" />
            </div>
            <h3 className="font-medium text-sm text-foreground">{logo.name}</h3>
            <p className="text-xs text-muted-foreground">{logo.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold text-muted-foreground mb-4">Original Concepts</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {originals.map((logo) => (
          <div 
            key={logo.name}
            className="bg-card border border-border rounded-xl p-3 hover:shadow-lg hover:border-primary transition-all cursor-pointer"
          >
            <div className="aspect-square bg-white rounded-lg flex items-center justify-center mb-2">
              <img src={logo.src} alt={logo.name} className="w-full h-full object-contain p-1" />
            </div>
            <h3 className="font-medium text-sm text-foreground">{logo.name}</h3>
            <p className="text-xs text-muted-foreground">{logo.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
