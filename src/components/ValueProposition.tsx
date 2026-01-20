import { Server, Shield, Brain, Zap, Image, Bot } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Private, On-Premise AI",
    description: "We provide a dedicated GPU Server PC. All data processing happens locally—no student or staff data ever leaves your campus.",
    highlights: ["Hardware Included", "Total Control", "Zero Privacy Concerns"]
  },
  {
    icon: Brain,
    title: "High-Performance Architecture",
    description: "Pre-installed multi-LLM ecosystem with smart routing that automatically selects the best model for each task.",
    highlights: ["Multi-LLM Ecosystem", "Smart Routing", "Gemini/OpenAI Quality"]
  },
  {
    icon: Zap,
    title: "Specialized Educational Algorithms",
    description: "Enhanced with algorithm support specifically for STEM, delivering results 3000% faster in math-related tasks.",
    highlights: ["Math Supercharge", "Multimedia Creation", "AI Agents & Workflow"]
  }
];

const ValueProposition = () => {
  return (
    <section id="features" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            The PromptWalls Advantage
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A turnkey, private GPU server solution that brings top-tier AI performance inside your school's network.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group relative border-gradient p-8 rounded-2xl bg-card hover:bg-secondary/50 transition-all duration-500 card-shadow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Highlights */}
              <ul className="space-y-2">
                {feature.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground/80">{highlight}</span>
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

export default ValueProposition;
