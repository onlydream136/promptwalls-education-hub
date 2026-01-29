import { useLanguage } from "@/contexts/LanguageContext";
import { Cpu, Database, Zap, Users, BookOpen, Video } from "lucide-react";

const HardwareSolutions = () => {
  const { t } = useLanguage();

  const plans = [
    {
      id: 'A',
      icon: Cpu,
      titleZh: '科研訓練 (STEM 專用)',
      titleEn: 'Research & Training (STEM Focus)',
      poweredByZh: '由 NVIDIA DGX Spark 驅動',
      poweredByEn: 'Powered by NVIDIA DGX Spark',
      specs: [
        {
          labelZh: '強大顯存',
          labelEn: 'Massive VRAM',
          valueZh: '128GB HBM 高頻寬記憶體',
          valueEn: '128GB HBM High-Bandwidth Memory'
        },
        {
          labelZh: '極速互連',
          labelEn: 'Ultra-Fast Interconnect',
          valueZh: 'NVLink PCIe Gen 6',
          valueEn: 'NVLink PCIe Gen 6'
        }
      ],
      advantageZh: '專為高強度「數學演算法」及模型微調 (Fine-tuning) 而工程設計。這是純算力最強的選擇。',
      advantageEn: 'Engineered for high-intensity "Math Algorithms" and model fine-tuning. The most powerful option for raw calculation.',
      bestForZh: '10-20 位進階用戶進行 STEM 科研、競賽或複雜數據科學專案。',
      bestForEn: '10-20 advanced users engaging in STEM research, competitions, or complex data science.',
      bestForIcon: Users,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'B',
      icon: Database,
      titleZh: '深度語境與知識庫 (RAG 專用)',
      titleEn: 'Deep Context & Knowledge Base (RAG Focus)',
      poweredByZh: '由 Mac Studio (M3 Ultra) 驅動',
      poweredByEn: 'Powered by Mac Studio (M3 Ultra)',
      specs: [
        {
          labelZh: '特大記憶體',
          labelEn: 'Massive Memory',
          valueZh: '512GB 統一記憶體',
          valueEn: '512GB Unified Memory'
        },
        {
          labelZh: '高速傳輸',
          labelEn: 'High-Speed Transfer',
          valueZh: 'Thunderbolt 5 (120Gb/s)',
          valueEn: 'Thunderbolt 5 (120Gb/s)'
        }
      ],
      advantageZh: '擁有龐大的上下文視窗 (Context Window)，是用作「私有 Notebook」功能分析整套教科書與大量檔案的最佳選擇。',
      advantageEn: 'Features a massive Context Window, making it the superior choice for the "Private Notebook" feature to analyze entire textbooks and archives.',
      bestForZh: '1-10 人小組研討、人文歷史文獻分析及可堆疊擴展。',
      bestForEn: '1-10 user workgroups, Humanities/History document analysis, and stackable expansion.',
      bestForIcon: BookOpen,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'C',
      icon: Zap,
      titleZh: '即時推論與多媒體 (課堂專用)',
      titleEn: 'Real-time Inference & Media (Classroom Focus)',
      poweredByZh: '由 NVIDIA RTX 5090 Server 驅動',
      poweredByEn: 'Powered by NVIDIA RTX 5090 Server',
      specs: [
        {
          labelZh: '次世代顯存',
          labelEn: 'Next-Gen VRAM',
          valueZh: '32GB GDDR7 (最新記憶體技術)',
          valueEn: '32GB GDDR7 (Latest Memory Tech)'
        },
        {
          labelZh: '架構',
          labelEn: 'Architecture',
          valueZh: '次世代 Blackwell 架構，配備增強型 Tensor Cores',
          valueEn: 'Next-Gen Blackwell Architecture with enhanced Tensor Cores'
        }
      ],
      advantageZh: '提供最快的 Token 生成速度與低延遲 (Low-latency) 的圖像/影片生成能力。',
      advantageEn: 'Delivers the fastest token generation speeds and low-latency image/video generation.',
      bestForZh: '標準班級 (20-30人) 進行即時 AI 互動及創意多媒體創作。',
      bestForEn: 'Standard class sizes (20-30 students) requiring instant AI interaction and creative media generation.',
      bestForIcon: Video,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="hardware" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('硬體方案：靈活且強大', 'Hardware Solutions: Flexible & Powerful')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('三種針對不同教學需求量身打造的硬體架構。', 'Three distinct architectures tailored to your specific teaching needs.')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className="relative group border-gradient p-8 rounded-2xl bg-card hover:bg-secondary/50 transition-all duration-500 card-shadow"
            >
              {/* Plan badge */}
              <div className={`absolute -top-4 left-8 px-4 py-1 rounded-full bg-gradient-to-r ${plan.color} text-white font-bold text-sm`}>
                {t('方案', 'Plan')} {plan.id}
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-6 mt-2 group-hover:scale-110 transition-transform duration-300`}>
                <plan.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {t(plan.titleZh, plan.titleEn)}
              </h3>
              <p className="text-sm text-primary font-medium mb-6">
                {t(plan.poweredByZh, plan.poweredByEn)}
              </p>

              {/* Specs */}
              <div className="space-y-3 mb-6">
                {plan.specs.map((spec, idx) => (
                  <div key={idx} className="glass rounded-lg p-3">
                    <span className="text-xs text-muted-foreground block mb-1">
                      {t(spec.labelZh, spec.labelEn)}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {t(spec.valueZh, spec.valueEn)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Core Advantage */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-2">
                  {t('核心優勢', 'Core Advantage')}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(plan.advantageZh, plan.advantageEn)}
                </p>
              </div>

              {/* Best For */}
              <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                <plan.bestForIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-muted-foreground block mb-1">
                    {t('最佳用途', 'Best For')}
                  </span>
                  <p className="text-sm text-foreground">
                    {t(plan.bestForZh, plan.bestForEn)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardwareSolutions;
