import { Calendar, Globe, FileCheck, Users, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const impactPoints = [
  {
    icon: FileCheck,
    text: "Document evidence of digital harassment and abuse",
  },
  {
    icon: Globe,
    text: "Access resources and support networks across Africa",
  },
  {
    icon: Shield,
    text: "Empower yourself with knowledge and tools to stay safe",
  },
];

const stats = [
  { value: "73%", label: "of women have experienced online violence" },
  { value: "16", label: "Days of global activism (Nov 25 - Dec 10)" },
  { value: "1 in 3", label: "women face gender-based violence" },
];

const Activism = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="activism" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-coral/5 via-transparent to-violet/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4 sm:mb-6">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold">November 25 - December 10</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
              <span className="gradient-text">16 Days of Activism</span>
              <br />
              <span className="text-foreground">Against Gender-Based Violence</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Digital harassment is a form of gender-based violence. This tool stands in solidarity 
              with the global movement to end violence against women and girls, online and offline.
            </p>

            {/* Impact Points */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {impactPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4 group">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <point.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                  </div>
                  <p className="text-sm sm:text-base text-foreground pt-1.5 sm:pt-2">{point.text}</p>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="gap-2" onClick={() => scrollToSection("demo")}>
              <Heart className="w-4 h-4" />
              Join the Movement
            </Button>
          </div>

          {/* Right - Stats Card */}
          <div className="relative mt-8 lg:mt-0">
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-coral/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-violet/10 rounded-full blur-2xl" />

            <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 relative">
              {/* Orange Ribbon Visual */}
              <div className="absolute -top-4 right-8 w-8 h-16 gradient-bg rounded-b-full shadow-glow" />
              
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                <h3 className="font-display font-bold text-lg sm:text-xl">The Impact</h3>
              </div>

              <div className="space-y-5 sm:space-y-6">
                {stats.map((stat, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold gradient-text">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground mt-1">{stat.label}</p>
                    {index < stats.length - 1 && (
                      <div className="absolute -bottom-2.5 sm:-bottom-3 left-0 right-0 h-px bg-gradient-to-r from-border via-border/50 to-transparent" />
                    )}
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-border/50">
                <p className="text-xs sm:text-sm italic text-muted-foreground">
                  "Violence against women is a manifestation of historically unequal power relations."
                </p>
                <p className="text-xs text-primary mt-2 font-semibold">— UN Declaration, 1993</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activism;
