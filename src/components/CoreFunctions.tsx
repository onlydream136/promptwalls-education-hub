import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Zap, BookOpen, Image, Bot, Lock, Server, Brain, FileSearch, Eye } from "lucide-react";

const CoreFunctions = () => {
  const { t } = useLanguage();

  const functions = [
    {
      icon: Shield,
      number: 1,
      titleZh: '100% 私有化架構',
      titleEn: '100% Private, On-Premise Infrastructure',
      features: [
        {
          labelZh: '數據留校園',
          labelEn: 'Data Stays on Campus',
          descZh: '所有處理均在本地伺服器進行。',
          descEn: 'All processing happens locally on your server.'
        },
        {
          labelZh: '零洩漏',
          labelEn: 'Zero Leakage',
          descZh: '學生記錄、成績或教職員數據絕不接觸公共雲端。',
          descEn: 'No student records, grades, or staff data ever touch the public cloud.'
        },
        {
          labelZh: '完全掌控',
          labelEn: 'Total Control',
          descZh: '您擁有硬體與數據主權，消除外部數據抓取風險。',
          descEn: 'You own the hardware and the data, eliminating the risk of external data scraping.'
        }
      ]
    },
    {
      icon: Zap,
      number: 2,
      titleZh: 'STEM 算法加速',
      titleEn: 'STEM Algorithm Acceleration',
      features: [
        {
          labelZh: '數學運算強化',
          labelEn: 'Math Supercharge',
          descZh: '針對理工科優化算法，在數學相關任務中比傳統 LLM 快 3000%。',
          descEn: 'Enhanced with algorithm support specifically for Science and Math, delivering results 3000% faster than traditional LLMs in math-related tasks.'
        },
        {
          labelZh: '智能路由',
          labelEn: 'Smart Routing',
          descZh: '自動將複雜查詢路由至表現最佳的本地模型，以確保最大精確度。',
          descEn: 'Automatically routes complex queries to the best-performing local model for maximum accuracy.'
        }
      ]
    },
    {
      icon: BookOpen,
      number: 3,
      titleZh: '私有筆記本 (Notebook) LLM',
      titleEn: 'Private Notebook LLM',
      features: [
        {
          labelZh: '與您的課程對話',
          labelEn: 'Chat with Your Curriculum',
          descZh: '功能類似 NotebookLM，但完全託管於您的私有伺服器。',
          descEn: 'A feature similar to NotebookLM, but hosted entirely on your private server.'
        },
        {
          labelZh: '深度文檔分析',
          labelEn: 'Deep Document Analysis',
          descZh: '上傳教科書、研究論文和教案。AI 能深入理解您特定檔案的語境。',
          descEn: 'Upload textbooks, research papers, and lesson plans. The AI understands the context of your specific files.'
        },
        {
          labelZh: '教育實用性',
          labelEn: 'Educational Utility',
          descZh: '即時從上傳的文檔生成學習指南、摘要和測驗，無需暴露知識產權。',
          descEn: 'Instantly generate study guides, summaries, and quizzes from your uploaded documents without exposing intellectual property.'
        }
      ]
    },
    {
      icon: Image,
      number: 4,
      titleZh: '進階多媒體創作',
      titleEn: 'Advanced Multimedia Creation',
      features: [
        {
          labelZh: '本地生成',
          labelEn: 'Local Generation',
          descZh: '製作符合最新行業標準的高畫質圖像與影片。',
          descEn: 'Create high-definition images and videos up to the latest industry standards.'
        },
        {
          labelZh: '安全創意',
          labelEn: 'Safe Creativity',
          descZh: '讓學生探索 AI 藝術與媒體製作，無需承擔使用公共生成工具帶來的隱私風險。',
          descEn: 'Allows students to explore AI art and media production without the privacy risks associated with public generation tools.'
        }
      ]
    },
    {
      icon: Bot,
      number: 5,
      titleZh: '自主 AI 代理 (Agents)',
      titleEn: 'Autonomous AI Agents',
      features: [
        {
          labelZh: '工作流自動化',
          labelEn: 'Workflow Automation',
          descZh: '部署智能代理處理重複性行政工作。',
          descEn: 'Deploy intelligent agents to handle repetitive administrative tasks.'
        },
        {
          labelZh: '教學支援',
          labelEn: 'Teaching Support',
          descZh: '自動化助教批改、優化排課及規劃學生個人化學習路徑。',
          descEn: 'Automate grading for teaching assistants, optimize class scheduling, and plan personalized learning paths for students.'
        }
      ]
    },
    {
      icon: Lock,
      number: 6,
      titleZh: '專利內容防火牆',
      titleEn: 'Proprietary Content Firewall',
      highlight: true,
      highlightTextZh: '業界首創技術。',
      highlightTextEn: 'The First of its Kind.',
      descriptionZh: '如果您必須與公共網絡互動，我們獨有的內容防火牆會保護您，確保數據在離開網絡前已處理：',
      descriptionEn: 'If you must interact with the public web, our proprietary Content Firewall protects you before data leaves the network:',
      features: [
        {
          labelZh: '智能掃描',
          labelEn: 'Intelligent Scanning',
          descZh: '掃描文檔，在接觸公共 AI 領域前將隱私隱患分類並標記。',
          descEn: 'Scans documents to classify and flag privacy concerns before they touch the public AI domain.'
        },
        {
          labelZh: '去私隱化引擎',
          labelEn: 'Deprivatization Engine',
          descZh: '自動修訂或替換敏感內容 (PII)，確保文檔在不暴露身份的情況下安全地用於公共領域。',
          descEn: 'Automatically redacts or replaces sensitive content (PII), making documents safe for public domain usage without exposing identities.'
        }
      ]
    }
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('PromptWalls 六大核心功能', 'The 6 Core Functions of PromptWalls')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {functions.map((func) => (
            <div
              key={func.number}
              className={`group relative border-gradient p-6 rounded-2xl bg-card hover:bg-secondary/50 transition-all duration-500 card-shadow ${
                func.highlight ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Number badge */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                {func.number}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <func.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {t(func.titleZh, func.titleEn)}
              </h3>

              {/* Highlight text for Content Firewall */}
              {func.highlight && (
                <>
                  <p className="text-primary font-semibold mb-2">
                    {t(func.highlightTextZh!, func.highlightTextEn!)}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t(func.descriptionZh!, func.descriptionEn!)}
                  </p>
                </>
              )}

              {/* Features */}
              <ul className="space-y-3">
                {func.features.map((feature, idx) => (
                  <li key={idx}>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-foreground text-sm">
                          {t(feature.labelZh, feature.labelEn)}：
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {t(feature.descZh, feature.descEn)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-primary/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFunctions;
