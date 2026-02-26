import SectionWrapper from "@/components/SectionWrapper";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Newspaper, Calendar, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const scoopData: Record<string, any> = {
    "12": {
        date: "Feb 2026",
        title: "Leadership Shifts & Disruption",
        items: [
            { subtitle: "Tata Sons in Transition", text: "Vice-chairman Vijay Singh steps down as the group navigates an RBI-mandated IPO deadline." },
            { subtitle: "Rupee Pressures", text: "Foreign outflows and tariff tensions push the currency closer to its all-time low." },
            { subtitle: "AI Disruption", text: "Replit’s billion-dollar leap highlights the accelerating disruption in tech ecosystems." }
        ]
    },
    "11": {
        date: "Jan 2026",
        title: "Transparency & AI Infrastructure",
        items: [
            { subtitle: "SEBI Pushes Transparency", text: "New rules mandate AIFs to upload NAVs within 15 days, strengthening investor trust." },
            { subtitle: "AI Infrastructure Boom", text: "Equinix launches a ₹574 crore AI-ready data center in Chennai." },
            { subtitle: "Urban Company IPO", text: "Shares debut with a 57% pop on Dalal Street, signaling strong market interest." }
        ]
    },
    "energy-baseline": {
        date: "Feb 2026",
        title: "Ministry of Power Review: NCR Energy Baseline",
        items: [
            { subtitle: "35 District Coverage", text: "Evaluating domestic power supply across Delhi, Haryana, UP, and Rajasthan." },
            { subtitle: "Data-Driven Policy", text: "Launching a significant leap toward evidence-based energy infrastructure planning." },
            { subtitle: "Ministerial Launch", text: "Initiative officially unveiled by Shri Manohar Lal Khattar, Hon'ble Minister of Power." }
        ]
    },
    "startup-policy": {
        date: "Sept 2025",
        title: "Round Table on Delhi Startup Policy 2025",
        items: [
            { subtitle: "Financial Incentives", text: "Consultations on ₹200Cr VC fund and founder stipends for marginalized groups." },
            { subtitle: "Infrastructure Support", text: "Dialogue on incubator benchmarks and lab facilities for hardware startups." },
            { subtitle: "Policy Governance", text: "Establishing implementation monitoring to ensure transparent benefit disbursement." }
        ]
    }
};

const News = () => {
    const { id } = useParams();
    const scoop = id ? scoopData[id] : null;

    if (!scoop) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">News Edition Not Found</h1>
                    <Button asChild><Link to="/">Back Home</Link></Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <section className="bg-gradient-hero py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <Button variant="ghost" className="text-white mb-8 gap-2 hover:bg-white/10" asChild>
                        <Link to="/"><ArrowLeft className="h-4 w-4" /> Back Home</Link>
                    </Button>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                            {scoop.title}
                        </h1>
                        <div className="flex items-center gap-2 text-white/70 text-sm font-medium">
                            <Calendar className="h-4 w-4" /> {scoop.date} | The Neecop Scoop
                        </div>
                    </motion.div>
                </div>
            </section>

            <SectionWrapper>
                <div className="max-w-4xl mx-auto">
                    <div className="grid gap-8">
                        {scoop.items.map((item: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 bg-card rounded-2xl border border-border shadow-sm hover:border-secondary/50 transition-colors"
                            >
                                <h3 className="text-xl font-heading font-bold text-primary mb-3 flex items-center gap-3">
                                    <span className="text-secondary">0{idx + 1}</span> {item.subtitle}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 p-8 bg-muted rounded-2xl border border-border text-center">
                        <Newspaper className="h-10 w-10 text-secondary mx-auto mb-4" />
                        <h3 className="text-xl font-heading font-bold mb-2">Want more insights?</h3>
                        <p className="text-muted-foreground mb-6">
                            Follow Neecop on LinkedIn for real-time updates on India's energy and policy landscape.
                        </p>
                        <Button variant="outline" className="gap-2" asChild>
                            <a href="https://www.linkedin.com/company/neecop" target="_blank" rel="noopener noreferrer">
                                Follow us on LinkedIn <ExternalLink className="h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default News;
