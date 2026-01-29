import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
      className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">
        {language === 'zh' ? 'EN' : '中文'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
