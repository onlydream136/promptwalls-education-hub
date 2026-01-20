import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import ContentFirewall from "@/components/ContentFirewall";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <ContentFirewall />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
