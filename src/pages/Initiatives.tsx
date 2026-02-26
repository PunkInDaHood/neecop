import SectionWrapper from "@/components/SectionWrapper";
import { LayoutDashboard, Landmark, Newspaper, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  {
    icon: Zap,
    title: "NCR Energy Research Initiative",
    desc: "A visionary research program 'Evaluating Domestic Power Supply in the National Capital Region' launched by the Hon'ble Minister of Power, Shri Manohar Lal Khattar. In collaboration with Kirori Mal College, we're mapping the roadmap for India's energy future through data-driven policy insights on smart meters and decentralized renewable energy.",
  },
  {
    icon: Landmark,
    title: "Draft Delhi Startup Policy 2025",
    desc: "Neecop, in collaboration with Kirori Mal College, University of Delhi, convened high-level Round Table Conferences to co-create the future of Delhi's startup ecosystem. We bring together founders, investors, and policy experts to build a robust, inclusive innovation hub.",
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
                  <Button variant="link" className="p-0 text-secondary gap-1">
                    Learn More <ArrowRight className="h-4 w-4" />
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
