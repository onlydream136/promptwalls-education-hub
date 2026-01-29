import { useLanguage } from "@/contexts/LanguageContext";
import { AlertTriangle, Shield } from "lucide-react";

const ChallengeSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12 border-gradient relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-destructive/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {t('核心挑戰', 'Core Challenge')}
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t(
                  '公開版 AI 工具（如 ChatGPT）存在嚴重的數據隱私風險。PromptWalls 為您的校園建立專屬 AI 系統，在校園網絡內築起一道物理與數位防火牆，徹底隔離公網隱私隱患。',
                  'Public AI tools (like ChatGPT) pose severe data privacy risks. PromptWalls establishes an exclusive AI system for your campus, building both a physical and digital firewall within your school network to completely isolate your data from public internet privacy threats.'
                )}
              </p>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20">
                <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-foreground font-medium">
                  {t(
                    'PromptWalls：物理與數位雙重防護',
                    'PromptWalls: Physical & Digital Dual Protection'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
