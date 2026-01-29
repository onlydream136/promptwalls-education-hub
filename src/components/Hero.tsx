import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Server, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-0 bg-background/70" />
      
      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial opacity-60 z-0" />
      
      {/* Animated glow accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow z-0" style={{ animationDelay: '1.5s' }} />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] z-0"
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
            <span className="text-sm font-medium text-muted-foreground">
              {t('由 Popsand Robotics Co. Ltd. 榮譽出品', 'A solution by Popsand Robotics Co. Ltd.')}
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-slide-up">
            <span className="text-gradient">
              {t('校園私有 AI 伺服器', 'Private AI Server')}
            </span>
            <br />
            <span className="text-foreground">
              {t('', 'for ')}
            </span>
            <span className="text-gradient">
              {t('', 'Schools')}
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t(
              '出卷．改卷．STEM．行政．Workflow',
              'Exam Generation · Grading · STEM · Admin · Workflow'
            )}
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                {t('預約演示', 'Request a Demo')}
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#features">{t('了解更多', 'Learn More')}</a>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-20 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center glass rounded-xl p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl font-bold text-foreground">100%</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t('私有化架構', 'Private On-Premise')}
              </p>
            </div>
            <div className="text-center glass rounded-xl p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl font-bold text-foreground">3000%</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t('數學運算加速', 'Faster Math Processing')}
              </p>
            </div>
            <div className="text-center glass rounded-xl p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Server className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl font-bold text-foreground">{t('零', 'Zero')}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t('數據離開校園', 'Data Leaves Campus')}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
