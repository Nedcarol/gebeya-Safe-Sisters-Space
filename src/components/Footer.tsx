import { Shield, Heart, Twitter, Github, Mail } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Demo", href: "#demo" },
    { label: "Safety Tips", href: "#" },
    { label: "Resources", href: "#resources" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Report Abuse", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  community: [
    { label: "16 Days of Activism", href: "#activism" },
    { label: "Partner Organizations", href: "#" },
    { label: "Volunteer", href: "#" },
    { label: "Donate", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer id="resources" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-4">
              <div className="gradient-bg p-2 rounded-xl">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-background">
                Safe-Space Sisters
              </span>
            </a>
            <p className="text-background/60 mb-6 max-w-sm">
              Empowering women and girls to navigate digital spaces safely with AI-powered protection tools.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-background/80">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-background/60 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-background/80">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-background/60 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-background/80">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-background/60 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/40">
            © 2024 Safe-Space Sisters. All rights reserved.
          </p>
          <p className="text-sm text-background/40 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for PowerHacks 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
