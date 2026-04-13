import { Scale } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy-dark border-t border-gold/10 py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-gold" />
          <span className="font-heading text-primary-foreground">ADV. Pooja Medtiya</span>
        </div>

        <div className="flex gap-6 text-sm">
          {["Home", "About", "Practice Areas", "Blog", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s/g, "")}`} className="text-primary-foreground/50 hover:text-gold transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gold/5 text-center">
        <p className="text-primary-foreground/40 text-xs leading-relaxed max-w-3xl mx-auto">
          <strong>Disclaimer:</strong> This website is for informational purposes only and does not constitute legal advice or create an attorney-client relationship. The information provided should not be relied upon as a substitute for professional legal counsel. As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. This website is meant solely for the purpose of providing information about the advocate and his areas of practice.
        </p>
        <p className="text-primary-foreground/30 text-xs mt-4">
          © {new Date().getFullYear()} ADV. Pooja Medtiya. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
