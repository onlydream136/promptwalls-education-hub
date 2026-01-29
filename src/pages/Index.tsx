import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChallengeSection from "@/components/ChallengeSection";
import HardwareSolutions from "@/components/HardwareSolutions";
import CoreFunctions from "@/components/CoreFunctions";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <ChallengeSection />
          <HardwareSolutions />
          <CoreFunctions />
          <PerformanceMetrics />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
