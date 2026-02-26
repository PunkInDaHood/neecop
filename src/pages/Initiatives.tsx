import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import { LayoutDashboard, Landmark, Newspaper, ArrowRight, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  {
    slug: "ncr-energy",
    icon: Zap,
    title: "NCR Energy Research Initiative",
    desc: "A joint research program with Kirori Mal College, surveying 100+ villages across NCR, Haryana, UP, and Rajasthan. We are mapping power usage patterns and the impact of smart meters, decentralized renewables, and battery storage systems on rural energy stability.",
  },
  {
    slug: "delhi-startup-policy",
    icon: Landmark,
    title: "Draft Delhi Startup Policy 2025",
    desc: "Facilitating high-level stakeholder research to propose a ₹200-crore Startup VC Fund, founder stipends (₹30k/50k), and 100% patent reimbursements. Our goal is to nurture 5,000+ startups in AI, Green Energy, and Drones by 2035.",
  },
  {
    slug: "india-europe-dialogue",
    icon: Globe,
    title: "India Europe Economic Policy Dialogue",
    desc: "A strategic research platform bridging academic insights from Kirori Mal College with international policy frameworks. We focus on enhancing bilateral trade foundations, green energy cooperation, and technological research in AI and Semiconductors.",
  },
];

const Initiatives = () => {
  return (
    <>
      <section className="bg-gradient-hero py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Initiatives</h1>
          <p className="text-primary-foreground/70 max-w-2xl text-lg">
            Strategic programs designed to drive systemic change in India's startup ecosystem.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="space-y-12">
          {items.map((item) => (
            <div key={item.title} className="bg-card rounded-xl p-8 md:p-12 shadow-card border border-border">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-7 w-7 text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-3">{item.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                  <Button variant="link" className="p-0 text-secondary gap-1" asChild>
                    <Link to={`/initiatives/${item.slug}`}>Learn More <ArrowRight className="h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Initiatives;
