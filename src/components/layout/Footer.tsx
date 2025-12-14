import { Sparkles, Mail, Linkedin, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/30 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <span className="font-mono font-bold text-lg text-foreground">
                Ujjwal
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building the future of the web with AI-powered development. 
              Transforming visions into reality, faster.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {["Services", "Skills", "Projects", "About", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono font-semibold text-foreground mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:iamkashyup@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                iamkashyup@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/youjjwal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                linkedin.com/in/youjjwal
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                851101, Bihar, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            © {currentYear} Ujjwal. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with <span className="text-primary">AI</span> + <span className="text-accent">Passion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
