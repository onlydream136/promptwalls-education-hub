import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Server, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-gradient mb-8 animate-fade-in">
            <Lock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">A solution by Popsand Robotics Co. Ltd.</span>
          </div>
          
          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-slide-up">
            <span className="text-foreground">Safe, Private, & Powerful</span>
            <br />
            <span className="text-gradient">AI Infrastructure</span>
            <br />
            <span className="text-foreground">for Education</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Unlock the Power of AI without Compromising Student Privacy.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl">
              Request a Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl font-bold text-foreground">100%</span>
              </div>
              <p className="text-sm text-muted-foreground">Private On-Premise</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl font-bold text-foreground">3000%</span>
              </div>
              <p className="text-sm text-muted-foreground">Faster Math Processing</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Server className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl font-bold text-foreground">Zero</span>
              </div>
              <p className="text-sm text-muted-foreground">Data Leaves Campus</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
