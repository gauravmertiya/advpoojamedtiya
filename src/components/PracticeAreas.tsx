import { Gavel, Users, Building2, Home, Shield } from "lucide-react";

const areas = [
  { icon: Gavel, title: "Criminal Law", desc: "Defence in criminal trials, bail applications, anticipatory bail, and appeals. Representation in Sessions Court and High Court." },
  { icon: Users, title: "Family Law", desc: "Expert guidance on divorce, child custody, maintenance claims, and domestic violence matters under Indian family law." },
  { icon: Building2, title: "Corporate Law", desc: "Company registration, compliance, contract drafting, partnership disputes, and corporate litigation." },
  { icon: Home, title: "Property Law", desc: "Property disputes, title verification, transfer of property, landlord-tenant matters, and real estate documentation." },
  { icon: Shield, title: "Cyber Law", desc: "Cyber crime complaints, online fraud, data privacy issues, and representation under the IT Act, 2000." },
];

const PracticeAreas = () => (
  <section id="practice" className="py-20 bg-navy-gradient">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-gold text-sm tracking-[0.2em] uppercase mb-2 font-body">Expertise</p>
        <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-4">Practice Areas</h2>
        <div className="w-16 h-[3px] bg-gold mx-auto rounded-full" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {areas.map((a) => (
          <div key={a.title} className="group p-6 rounded-xl bg-navy-light/50 border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
              <a.icon className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-heading text-xl text-primary-foreground mb-2">{a.title}</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PracticeAreas;
