import SectionWrapper from "@/components/SectionWrapper";
import { Rocket, TrendingUp, Globe, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Rocket,
    title: "Startup Support & Consulting",
    desc: "From ideation to scaling, we provide hands-on consulting, mentorship matching, and strategic guidance tailored to your stage.",
    features: ["Business model validation", "Go-to-market strategy", "Mentor matching", "Pitch deck review"],
  },
  {
    icon: TrendingUp,
    title: "Funding & Investor Connect",
    desc: "We bridge the gap between promising startups and the right investors through curated introductions and deal facilitation.",
    features: ["Angel investor access", "VC introductions", "Fundraising workshops", "Due diligence support"],
  },
  {
    icon: Globe,
    title: "Ecosystem Platforms",
    desc: "Our digital tools and dashboards help startups track progress, access resources, and stay connected with the ecosystem.",
    features: ["Neecop Dashboard", "Resource library", "Progress tracking", "Analytics & insights"],
  },
  {
    icon: Users,
    title: "Community & Networking",
    desc: "Connect with a vibrant community of founders, mentors, and leaders through events, meetups, and online forums.",
    features: ["Founder meetups", "Industry roundtables", "Online community", "Annual summit"],
  },
];

const Services = () => {
  return (
    <>
      <section className="bg-gradient-hero py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Services</h1>
          <p className="text-primary-foreground/70 max-w-2xl text-lg">
            Comprehensive support designed to help startups at every stage of their journey.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid gap-8">
          {services.map((s, i) => (
            <div key={s.title} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:[direction:rtl] md:[&>*]:[direction:ltr]" : ""}`}>
              <div>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <s.icon className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-3">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <Button variant="link" className="p-0 text-secondary gap-1" asChild>
                  <Link to="/contact">Get in touch <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="bg-muted rounded-xl p-6">
                <h4 className="font-heading font-semibold text-foreground mb-4 text-sm">Key Features</h4>
                <ul className="space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Services;
