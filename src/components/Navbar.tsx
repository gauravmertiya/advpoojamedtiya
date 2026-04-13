import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Practice Areas", href: "#practice" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="font-heading text-xl text-primary-foreground tracking-wide">
          Adv. <span className="text-gold">Pooja Medtiya</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="bg-gold hover:bg-gold-dark text-primary-foreground">
            <a href="#contact"><Phone className="w-4 h-4 mr-1" /> Book Consultation</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-dark/98 backdrop-blur-md border-t border-gold/10 animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-primary-foreground/80 hover:text-gold transition-colors py-2">
                {l.label}
              </a>
            ))}
            <Button asChild className="bg-gold hover:bg-gold-dark text-primary-foreground w-full">
              <a href="#contact" onClick={() => setOpen(false)}><Phone className="w-4 h-4 mr-1" /> Book Consultation</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
