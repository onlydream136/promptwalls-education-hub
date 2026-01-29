import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">PromptWalls</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#hardware" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            {t('硬體方案', 'Hardware')}
          </a>
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            {t('核心功能', 'Features')}
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            {t('聯絡我們', 'Contact')}
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button variant="hero" size="sm" asChild>
            <a href="#contact">{t('立即開始', 'Get Started')}</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
