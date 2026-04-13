import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={heroBg} alt="Law office" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
    <div className="absolute inset-0 bg-navy-dark/80" />
    
    <div className="relative z-10 container mx-auto text-center px-4 py-32">
      <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">Advocate & Legal Consultant</p>
      <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 animate-fade-in-up leading-tight">
        Adv. Pooja <span className="text-gradient-gold">Medtiya</span>
      </h1>
      <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        Expert in Criminal, Family & Corporate Law — Providing trusted legal counsel with integrity and dedication.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-primary-foreground px-8 text-base">
          <a href="#contact">Book Consultation</a>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-gold/40 text-gold hover:bg-gold/10 px-8 text-base">
          <a href="#practice">Our Services</a>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/60 text-sm animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-gold transition-colors">
          {/* <Phone className="w-4 h-4" /> +91 98765 43210 */}
        </a>
        <a href="mailto:adv.poojamedtiya@example.com" className="flex items-center gap-2 hover:text-gold transition-colors">
          <Mail className="w-4 h-4" /> adv.poojamedtiya@example.com
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
