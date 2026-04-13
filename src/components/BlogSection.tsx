import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "How to File an FIR in India: A Step-by-Step Guide",
    excerpt: "Understanding the process of filing a First Information Report, your rights, and what to expect at the police station.",
    date: "15 Mar 2026",
    category: "Criminal Law",
  },
  {
    title: "Divorce Procedure in India: Mutual vs Contested",
    excerpt: "An overview of divorce laws in India under the Hindu Marriage Act and Special Marriage Act, covering timelines and requirements.",
    date: "02 Mar 2026",
    category: "Family Law",
  },
  {
    title: "Tenant Rights in India: What Every Renter Should Know",
    excerpt: "A comprehensive guide on tenant rights, rent agreements, eviction procedures, and the Model Tenancy Act.",
    date: "18 Feb 2026",
    category: "Property Law",
  },
];

const BlogSection = () => (
  <section id="blog" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-gold text-sm tracking-[0.2em] uppercase mb-2 font-body">Legal Insights</p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Latest Articles</h2>
        <div className="w-16 h-[3px] bg-gold mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.title} className="group rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card">
            <div className="p-6">
              <span className="text-xs text-gold font-medium uppercase tracking-wider">{p.category}</span>
              <h3 className="font-heading text-lg text-card-foreground mt-2 mb-3 group-hover:text-gold transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" /> {p.date}
                </span>
                <span className="text-gold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
