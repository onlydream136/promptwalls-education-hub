import { Shield, FileSearch, Lock, Eye, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Shield,
    title: "Privacy Portfolio Setup",
    description: "Customize privacy protocols specific to your school's policy requirements."
  },
  {
    icon: FileSearch,
    title: "Intelligent Scanning",
    description: "Scans documents to classify and flag privacy concerns before they touch the public AI domain."
  },
  {
    icon: Lock,
    title: "Deprivatization Engine",
    description: "Automatically redacts or replaces sensitive content (PII), making documents safe for public domain usage."
  }
];

const ContentFirewall = () => {
  return (
    <section id="firewall" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-gradient mb-6">
              <Eye className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Feature Spotlight</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              The Content Firewall
            </h2>
            <p className="text-2xl text-gradient font-display font-semibold mb-6">
              The First of its Kind.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              PromptWalls isn't just a server; it is a gatekeeper. If you must interact with the public web, our proprietary Content Firewall protects you.
            </p>
            
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right visual */}
          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto relative">
              {/* Main shield visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Outer ring */}
                  <div className="w-72 h-72 rounded-full border-2 border-primary/20 animate-pulse-glow" />
                  
                  {/* Middle ring */}
                  <div className="absolute inset-4 rounded-full border border-primary/30" />
                  
                  {/* Inner glow */}
                  <div className="absolute inset-12 rounded-full bg-gradient-radial" />
                  
                  {/* Center shield */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-primary flex items-center justify-center glow-box animate-float">
                      <Shield className="w-16 h-16 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Orbiting elements */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
                    <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4">
                    <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                      <Lock className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
                    <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                      <FileSearch className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
                    <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentFirewall;
