import SectionWrapper from "@/components/SectionWrapper";
import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-hero py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">About Neecop</h1>
          <p className="text-primary-foreground/70 max-w-2xl text-lg">
            We are dedicated to shaping India's future through data-driven research and high-impact policy engagement.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Neecop is a research-driven organization based in New Delhi, India. We operate at the intersection of energy policy and innovation, providing data-driven insights to steer India's sustainable development.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Founded with the vision of bridging the gap between research and policy, Neecop brings together researchers, industry experts, and policymakers to build a robust, science-backed roadmap for India's economic and environmental future.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-muted/50">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Our Mission", desc: "To provide evidence-based policy research that empowers decision-makers to build a sustainable and innovative India." },
            { icon: Eye, title: "Our Vision", desc: "To become India's leading think-tank for energy policy and innovation ecosystem analysis by 2030." },
            { icon: Heart, title: "Our Values", desc: "Rigorous research, policy impact, transparency, and commitment to sustainable growth." },
          ].map((item) => (
            <div key={item.title} className="bg-card rounded-xl p-8 shadow-card text-center">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default About;
