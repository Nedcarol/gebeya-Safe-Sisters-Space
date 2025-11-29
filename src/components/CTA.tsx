import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Sparkles } from "lucide-react";

const CTA = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="cta" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-95" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-sm mb-6 sm:mb-8">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 sm:mb-6">
            Start Protecting Yourself Today
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 text-balance px-4">
            Join thousands of women and girls taking control of their digital safety. 
            Free, private, and powered by AI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white text-foreground hover:bg-white/90 hover:scale-105 font-bold shadow-lg group"
              onClick={() => scrollToSection("demo")}
            >
              Try It Now - Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm"
              onClick={() => scrollToSection("features")}
            >
              <Sparkles className="w-5 h-5" />
              Explore Features
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-white/60 flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" />
            Your messages are never stored. Complete privacy guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
