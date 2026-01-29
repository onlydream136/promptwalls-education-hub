import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Mail, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="py-16 border-t border-border bg-card/50">
      <div className="container mx-auto px-6">
        {/* CTA Section */}
        <div className="text-center mb-16 pb-16 border-b border-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('準備好守護校園的 AI 未來了嗎？', "Ready to safeguard your school's AI future?")}
          </h2>
          <Button variant="hero" size="xl" asChild className="mt-6">
            <a href="mailto:business@popsand.com">
              {t('立即聯繫', 'Contact Us Now')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">PromptWalls</span>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              {t(
                '安全、私有、強大的校園 AI 基礎設施。由 Popsand Robotics Co. Ltd. 榮譽出品。',
                'Safe, Private, & Powerful AI Infrastructure for Education. A solution by Popsand Robotics Co. Ltd.'
              )}
            </p>
            <p className="text-sm text-muted-foreground">
              {t(
                '在您的數據與公共網絡之間建立物理與數位雙重防火牆。',
                'Creating a physical and digital wall between your data and the public internet.'
              )}
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              {t('快速連結', 'Quick Links')}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#hardware" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('硬體方案', 'Hardware Solutions')}
                </a>
              </li>
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('核心功能', 'Core Functions')}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('文檔', 'Documentation')}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('隱私政策', 'Privacy Policy')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              {t('聯絡我們', 'Contact')}
            </h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground text-sm font-medium">
                {t('聯絡人', 'Contact')}: Alex Ng
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+85294846531" className="hover:text-primary transition-colors">
                  9484 6531
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:business@popsand.com" className="hover:text-primary transition-colors">
                  business@popsand.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Globe className="w-4 h-4 text-primary" />
                <a href="https://www.promptwalls.com" className="hover:text-primary transition-colors">
                  www.promptwalls.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PromptWalls. {t('版權所有。', 'All rights reserved.')}
          </p>
          <p className="text-sm text-muted-foreground">
            {t('Popsand Robotics Co. Ltd. 產品', 'A product of Popsand Robotics Co. Ltd.')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
