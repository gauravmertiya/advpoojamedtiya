import { Award, BookOpen, Building, Scale } from "lucide-react";
import lawyerPortrait from "@/assets/lawyer-portrait.jpg";

const stats = [
  { icon: Award, label: "Years of Experience", value: "15+" },
  { icon: Scale, label: "Cases Handled", value: "2000+" },
  { icon: Building, label: "Courts Practiced", value: "High Court, District Court" },
  { icon: BookOpen, label: "Qualification", value: "LLB, LLM (Criminal Law)" },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gold/10 rounded-lg -rotate-3" />
          <img src={lawyerPortrait} alt="Advocate Rajesh Sharma" className="relative rounded-lg shadow-xl w-full max-w-md mx-auto object-cover aspect-[3/4]" loading="lazy" width={800} height={1024} />
        </div>

        <div>
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-2 font-body">About</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 gold-underline pb-2">
            Committed to Justice
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Advocate Rajesh Sharma is a dedicated legal professional with over 15 years of experience practising in the High Court of Delhi and various District Courts across India. Specialising in Criminal, Family, and Corporate Law, he is known for his diligent case preparation and client-first approach.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Registered with the Bar Council of India (Reg. No. D/1234/2009), Adv. Sharma has consistently upheld the highest standards of legal ethics and professional conduct.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-start gap-3 p-3 rounded-lg bg-background border border-border">
                <s.icon className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="text-sm font-medium text-foreground">{s.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
