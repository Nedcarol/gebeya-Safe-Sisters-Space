import { Shield, Sparkles, Clock, FileText, MessageSquare, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Toxicity Detection",
    description: "Advanced AI analyzes messages for harassment, hate speech, bullying, and threats with detailed scoring.",
    color: "coral",
  },
  {
    icon: Sparkles,
    title: "Safer Rewrites",
    description: "Get AI-generated safer alternatives to problematic messages, helping you respond with confidence.",
    color: "violet",
  },
  {
    icon: Clock,
    title: "History Tracking",
    description: "Save and review your scans, track patterns, and export reports for documentation purposes.",
    color: "amber",
  },
  {
    icon: FileText,
    title: "Evidence Export",
    description: "Download comprehensive reports of detected harassment for legal documentation or reporting.",
    color: "rose",
  },
  {
    icon: MessageSquare,
    title: "Response Templates",
    description: "Access pre-written responses for common harassment scenarios, customizable to your voice.",
    color: "coral",
  },
  {
    icon: Heart,
    title: "Support Resources",
    description: "Connect with local support networks, hotlines, and resources across Africa and beyond.",
    color: "violet",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 glow-effect opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            How <span className="gradient-text">Safe-Space Sisters</span> Protects You
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive tools designed specifically for women and girls navigating digital spaces.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group glass-card rounded-2xl p-6 lg:p-8 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`
                w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110
                ${feature.color === 'coral' ? 'bg-coral/10 text-coral' : ''}
                ${feature.color === 'violet' ? 'bg-violet/10 text-violet' : ''}
                ${feature.color === 'amber' ? 'bg-amber/10 text-amber' : ''}
                ${feature.color === 'rose' ? 'bg-rose/10 text-rose' : ''}
              `}>
                <feature.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold mb-3 group-hover:gradient-text transition-all">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
