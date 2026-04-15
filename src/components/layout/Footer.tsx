import { PERSONAL_INFO } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/30 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} {PERSONAL_INFO.name}
          </p>
          <p className="text-xs text-muted-foreground">
            Built with intention, not templates.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
