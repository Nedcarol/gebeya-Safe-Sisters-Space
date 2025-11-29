import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative gradient-bg p-2 rounded-xl">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
            <span className="font-display font-bold text-lg sm:text-xl gradient-text">
              Safe-Space Sisters
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button onClick={() => scrollToSection("features")} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Features
            </button>
            <button onClick={() => scrollToSection("demo")} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Demo
            </button>
            <button onClick={() => scrollToSection("activism")} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              16 Days
            </button>
            <button onClick={() => scrollToSection("resources")} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Resources
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button variant="hero" size="sm" className="gap-2" onClick={() => scrollToSection("demo")}>
              <Sparkles className="w-4 h-4" />
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/30 animate-fade-in">
            <div className="flex flex-col gap-2">
              <button onClick={() => scrollToSection("features")} className="text-muted-foreground hover:text-foreground transition-colors font-medium py-3 text-left">
                Features
              </button>
              <button onClick={() => scrollToSection("demo")} className="text-muted-foreground hover:text-foreground transition-colors font-medium py-3 text-left">
                Demo
              </button>
              <button onClick={() => scrollToSection("activism")} className="text-muted-foreground hover:text-foreground transition-colors font-medium py-3 text-left">
                16 Days
              </button>
              <button onClick={() => scrollToSection("resources")} className="text-muted-foreground hover:text-foreground transition-colors font-medium py-3 text-left">
                Resources
              </button>
              <div className="flex flex-col gap-2 pt-4 border-t border-border/30">
                <Button variant="ghost" className="justify-start">Login</Button>
                <Button variant="hero" className="gap-2" onClick={() => scrollToSection("demo")}>
                  <Sparkles className="w-4 h-4" />
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
