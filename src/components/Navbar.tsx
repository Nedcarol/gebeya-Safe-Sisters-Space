import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <span className="font-display font-bold text-xl gradient-text">
              Safe-Space Sisters
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Features
            </a>
            <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Demo
            </a>
            <a href="#activism" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              16 Days
            </a>
            <a href="#resources" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Resources
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button variant="hero" size="sm" className="gap-2">
              <Sparkles className="w-4 h-4" />
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/30 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                Features
              </a>
              <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                Demo
              </a>
              <a href="#activism" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                16 Days
              </a>
              <a href="#resources" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                Resources
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border/30">
                <Button variant="ghost" className="justify-start">Login</Button>
                <Button variant="hero" className="gap-2">
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
