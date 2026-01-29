import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle, Zap, ShieldCheck } from "lucide-react";

const PerformanceMetrics = () => {
  const { t } = useLanguage();

  const metrics = [
    {
      icon: CheckCircle,
      titleZh: '品質',
      titleEn: 'Quality',
      descZh: '模型回應精準度媲美 Gemini 與 OpenAI。',
      descEn: 'Model response precision rivals Gemini and OpenAI.',
      color: 'text-green-500'
    },
    {
      icon: Zap,
      titleZh: '速度',
      titleEn: 'Speed',
      descZh: '優化的硬體配置確保 Token 與代碼生成近乎零延遲。',
      descEn: 'Optimized hardware setups ensure near-zero latency for token and code generation.',
      color: 'text-yellow-500'
    },
    {
      icon: ShieldCheck,
      titleZh: '安全',
      titleEn: 'Security',
      descZh: '軍用級數據隔離，學校擁有 100% 的硬體與數據主權。',
      descEn: 'Military-grade data isolation; the school retains 100% hardware and data sovereignty.',
      color: 'text-primary'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('性能指標', 'Performance Metrics')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center glass rounded-2xl p-8 border-gradient"
            >
              <metric.icon className={`w-12 h-12 mx-auto mb-4 ${metric.color}`} />
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                {t(metric.titleZh, metric.titleEn)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(metric.descZh, metric.descEn)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;
