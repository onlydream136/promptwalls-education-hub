import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Shield, LogIn, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const Header = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/#hardware", label: t('硬體方案', 'Hardware') },
    { href: "/#features", label: t('核心功能', 'Features') },
    { href: "/#contact", label: t('聯絡我們', 'Contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">PromptWalls</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
          <Link to="/login" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium flex items-center gap-1">
            <LogIn className="w-4 h-4" />
            {t('登入', 'Login')}
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          
          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background">
              <SheetHeader>
                <SheetTitle className="text-left">{t('選單', 'Menu')}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-foreground hover:text-primary transition-colors text-base font-medium py-2"
                  >
                    {item.label}
                  </a>
                ))}
                <Link 
                  to="/login" 
                  onClick={() => setOpen(false)}
                  className="text-foreground hover:text-primary transition-colors text-base font-medium py-2 flex items-center gap-2"
                >
                  <LogIn className="w-4 h-4" />
                  {t('登入', 'Login')}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          
          <Button variant="hero" size="sm" asChild className="hidden sm:flex">
            <a href="/#contact">{t('立即開始', 'Get Started')}</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
