import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import ParticleNetwork from "@/components/ParticleNetwork";
import { Rocket, Users, TrendingUp, Globe, Shield, Zap, Target, Lightbulb, ArrowRight, Quote } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const initiatives = [
  { slug: "ncr-energy", title: "NCR Energy Research Initiative", desc: "Data-driven energy policy research launched by the Ministry of Power to steer India's sustainable ecosystem.", cta: "Explore Initiative" },
  { slug: "delhi-startup-policy", title: "Project Delhi Policy 2025", desc: "Co-creating an inclusive startup ecosystem through high-level consultative roundtables and policy dialogues.", cta: "Learn More" },
  { slug: "india-europe-dialogue", title: "India Europe Economic Dialogue", desc: "Bridging academic research and international policy, focusing on Green Energy, AI, Semiconductors, and Trade connectivity.", cta: "Read More" },
];


const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Research and Policy" className="w-full h-full object-cover opacity-30" loading="eager" />
          <div className="absolute inset-0 bg-gradient-hero opacity-70" />
        </div>
        <ParticleNetwork className="z-[1]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Advancing India's{" "}
              <span className="text-gradient">Research & Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
              Neecop leads data-driven research in energy efficiency and startup policy, bridging the gap between academic insights and national development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8" asChild>
                <Link to="/initiatives">Explore Research</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent text-base px-8" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">About Neecop</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Building bridges in India's innovation landscape
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Neecop is a research-driven organization dedicated to energy policy, startup ecosystem analysis, and driving systemic change across India through evidence-based insights.
            </p>
            <Button variant="outline" asChild>
              <Link to="/about" className="gap-2">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="bg-muted rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
            <div className="grid grid-cols-2 gap-6 text-center">
              {[
                { num: "100+", label: "Villages Surveyed" },
                { num: "₹200Cr+", label: "Proposed VC Fund" },
                { num: "20+", label: "Policy Roundtables" },
                { num: "5000+", label: "Target Startups" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-heading font-bold text-secondary">{stat.num}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>


      {/* Initiatives */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">Our Initiatives</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Driving Impact at Scale</h2>
        </div>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
        >
          {initiatives.map((item) => (
            <motion.div key={item.title} variants={fadeUpItem} className="bg-card rounded-xl p-8 shadow-card border border-border hover:shadow-card-hover transition-shadow">
              <h3 className="font-heading font-semibold text-foreground text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{item.desc}</p>
              <Button variant="link" className="p-0 text-secondary gap-1" asChild>
                <Link to={`/initiatives/${item.slug}`}>{item.cta} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>


      {/* Final CTA */}
      <section className="relative bg-gradient-hero py-20 overflow-hidden">
        <ParticleNetwork className="z-0 opacity-50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Driving India's Innovation<br />through Policy Research
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Collaborate with Neecop to build a data-driven future for India's economy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8" asChild>
                <Link to="/initiatives">Learn More</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent text-base px-8" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neecop Scoop Section */}
      <SectionWrapper className="bg-muted/30">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">The Neecop Scoop</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights on the forces shaping India’s economic, business, and tech landscape, curated from our latest policy research and LinkedIn updates.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Energy Future", highlight: "Ministry of Power approves ₹3,600Cr for NCR infrastructure upgrades and smart grid expansion.", id: "energy-baseline" },
            { title: "Fostering Innovation", highlight: "Draft Delhi Startup Policy 2025 proposes ₹200Cr VC fund to support 5,000 startups by 2035.", id: "startup-policy" },
            { title: "Global Dialogues", highlight: "New Strategic EU-India Agenda 2025 targets FTA conclusion and clean energy partnerships.", id: "india-europe-strategic-agenda" }
          ].map((news, idx) => (
            <div key={idx} className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-heading font-bold text-primary mb-3">🔹 {news.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{news.highlight}</p>
              <Button variant="link" size="sm" className="p-0 text-secondary" asChild>
                <Link to={`/news/${news.id}`}>Read More <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Index;
