import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Bot, BookOpen, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const { t } = useLanguage();

  // Configure these URLs as needed
  const loginLinks = {
    schoolAI: "#", // Replace with actual URL
    agent: "#",    // Replace with actual URL
    notebook: "#", // Replace with actual URL
  };

  const loginOptions = [
    {
      id: "schoolAI",
      icon: GraduationCap,
      title: t("School AI", "School AI"),
      description: t("校園 AI 教學系統", "Campus AI Teaching System"),
      url: loginLinks.schoolAI,
    },
    {
      id: "agent",
      icon: Bot,
      title: t("Agent", "Agent"),
      description: t("AI 代理工作流程", "AI Agent Workflow"),
      url: loginLinks.agent,
    },
    {
      id: "notebook",
      icon: BookOpen,
      title: t("NoteBook", "NoteBook"),
      description: t("私有筆記本 LLM", "Private Notebook LLM"),
      url: loginLinks.notebook,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial opacity-40 z-0" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow z-0" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-6 py-12 relative z-10 flex-1 flex flex-col items-center justify-center">
        {/* Back button */}
        <Link 
          to="/" 
          className="absolute top-6 left-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">{t("返回首頁", "Back to Home")}</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t("選擇登入系統", "Choose Login System")}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            {t("請選擇您要登入的服務平台", "Please select the service platform you want to log in to")}
          </p>
        </div>

        {/* Login options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
          {loginOptions.map((option) => (
            <Card 
              key={option.id} 
              className="glass border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <a href={option.url} className="block">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <option.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-display text-foreground">
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <CardDescription className="text-muted-foreground">
                    {option.description}
                  </CardDescription>
                  <Button variant="hero" size="lg" className="mt-6 w-full">
                    {t("登入", "Login")}
                  </Button>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
