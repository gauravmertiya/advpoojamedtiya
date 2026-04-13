import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Adv. Sharma handled my property dispute with exceptional professionalism. His thorough understanding of the law and dedication to the case gave me great confidence throughout the process.",
    name: "Amit Verma",
    role: "Property Dispute Client",
  },
  {
    text: "During a difficult family matter, Adv. Sharma provided compassionate yet firm legal counsel. His approach was ethical, transparent, and always in my best interest.",
    name: "Priya Kapoor",
    role: "Family Law Client",
  },
  {
    text: "I was impressed by his command of criminal law. He prepared my case meticulously and represented me with conviction. Highly recommended for anyone seeking reliable legal support.",
    name: "Suresh Mehta",
    role: "Criminal Law Client",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-gold text-sm tracking-[0.2em] uppercase mb-2 font-body">Client Voices</p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">What Our Clients Say</h2>
        <div className="w-16 h-[3px] bg-gold mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="p-6 rounded-xl bg-background border border-border hover:shadow-lg transition-shadow duration-300">
            <Quote className="w-8 h-8 text-gold/30 mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <p className="font-heading text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
