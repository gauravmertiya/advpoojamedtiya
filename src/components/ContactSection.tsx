import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Thank you! We will contact you shortly.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-navy-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-2 font-body">Get in Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-4">Book a Consultation</h2>
          <div className="w-16 h-[3px] bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="bg-navy-light/50 border-gold/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold"
            />
            <Input
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              maxLength={15}
              className="bg-navy-light/50 border-gold/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold"
            />
            <Textarea
              placeholder="Briefly describe your legal matter..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={5}
              className="bg-navy-light/50 border-gold/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold resize-none"
            />
            <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-primary-foreground">
              <Send className="w-4 h-4 mr-2" /> Send Message
            </Button>
          </form>

          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-primary-foreground font-medium">Phone</p>
                {/* <a href="tel:+919876543210" className="text-primary-foreground/60 hover:text-gold transition-colors text-sm">+91 98765 43210</a> */}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-primary-foreground font-medium">Email</p>
                {/* <a href="mailto:adv.poojamedtiya@example.com" className="text-primary-foreground/60 hover:text-gold transition-colors text-sm">adv.poojamedtiya@example.com</a> */}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-primary-foreground font-medium">Office</p>
                {/* <p className="text-primary-foreground/60 text-sm">Chamber No. 42, Tis Hazari Courts Complex,<br />Rajasthan</p> */}
              </div>
            </div>

            {/* WhatsApp */}
            <a
              // href={`https://wa.me/919876543210?text=${encodeURIComponent("Hello, I would like to book a consultation.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-green-600/10 border border-green-500/20 hover:bg-green-600/20 transition-colors"
            >
              <MessageCircle className="w-6 h-6 text-green-500" />
              <div>
                <p className="text-primary-foreground font-medium text-sm">Chat on WhatsApp</p>
                <p className="text-primary-foreground/50 text-xs">Quick response guaranteed</p>
              </div>
            </a>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-gold/10 h-48">
              <iframe
                title="Office Location"
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.7476!2d77.2173!3d28.6692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd00!2sTis+Hazari+Courts!5e0!3m2!1sen!2sin!4v1"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
