import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, BarChart3, Workflow } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={logoFull}
              alt="EnviroFlow"
              className="block w-auto flex-none"
              style={{ height: 140 }}
            />
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Sign in</Button>
            </Link>
            <Link to="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Universal automation for
            <span className="text-primary"> environmental control</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor sensors, control devices, and automate your environment with powerful workflows. 
            Works with AC Infinity, Inkbird, and more.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="h-12 px-8">
                Start for free
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" size="lg" className="h-12 px-8">
                View demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Real-time Monitoring</h3>
            <p className="text-muted-foreground">
              Track temperature, humidity, VPD, and more with live sensor data from all your controllers.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Workflow className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Visual Automations</h3>
            <p className="text-muted-foreground">
              Build complex workflows with our drag-and-drop builder. No coding required.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Multi-brand Support</h3>
            <p className="text-muted-foreground">
              Connect AC Infinity, Inkbird, and generic WiFi controllers in one unified dashboard.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
