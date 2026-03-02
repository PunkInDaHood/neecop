import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, TrendingUp, Handshake, ArrowRight } from "lucide-react";

const roles = [
  {
    icon: Rocket,
    title: "For Startups",
    desc: "Access mentorship, funding connections, ecosystem tools, and a vibrant founder community. Whether you're pre-revenue or scaling, Neecop accelerates your journey.",
    cta: "Register as Startup",
  },
  {
    icon: TrendingUp,
    title: "For Investors",
    desc: "Discover curated deal flow, connect with vetted startups, and co-invest with a trusted network. From angel investing to institutional rounds, we've got you covered.",
    cta: "Join as Investor",
  },
  {
    icon: Handshake,
    title: "For Partners",
    desc: "Collaborate with Neecop as an incubator, accelerator, corporate partner, or government body. Together, we can amplify impact across the ecosystem.",
    cta: "Partner With Us",
  },
];

const GetInvolved = () => {
  return (
    <>
      <section className="bg-gradient-hero py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Get Involved</h1>
          <p className="text-primary-foreground/70 max-w-2xl text-lg">
            There's a place for everyone in the Neecop ecosystem. Find your role and start making an impact.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((r) => (
            <div key={r.title} className="bg-card rounded-xl p-8 shadow-card border border-border flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <r.icon className="h-7 w-7 text-secondary" />
              </div>
              <h2 className="text-xl font-heading font-bold text-foreground mb-3">{r.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{r.desc}</p>
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 w-full" asChild>
                <Link to="/contact">{r.cta} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default GetInvolved;
