import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, Landmark, Globe, CheckCircle2, BarChart3, Microscope, ImageIcon } from "lucide-react";
import ncr1 from "@/assets/ncr/DSC01584.JPG.jpeg";
import ncr2 from "@/assets/ncr/DSC01648.JPG.jpeg";
import ncr3 from "@/assets/ncr/DSC_0346.JPG.jpeg";
import ncr4 from "@/assets/ncr/DSC_0454.JPG.jpeg";
import rt1 from "@/assets/roundtable/WhatsApp Image 2026-02-27 at 19.59.38.jpeg";
import rt2 from "@/assets/roundtable/WhatsApp Image 2026-02-27 at 19.59.43.jpeg";
import rt3 from "@/assets/roundtable/WhatsApp Image 2026-02-27 at 19.59.50.jpeg";
import rt4 from "@/assets/roundtable/WhatsApp Image 2026-02-27 at 19.59.55.jpeg";
import rt5 from "@/assets/roundtable/WhatsApp Image 2026-02-27 at 20.00.01.jpeg";
import rt6 from "@/assets/roundtable/WhatsApp Image 2026-02-27 at 20.00.05.jpeg";

const initiativeData: Record<string, any> = {
    "ncr-energy": {
        title: "Evaluating Domestic Power Supply in the NCR",
        heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
        icon: Zap,
        summary: "A visionary research initiative launched by Hon’ble Minister of Power, Shri Manohar Lal Khattar ji, marking a significant leap toward data-driven energy policy in India.",
        pillars: [
            { title: "Smart Meter Efficiency", desc: "Capturing the pulse of domestic power supply across 35 districts in Delhi, Haryana, UP, and Rajasthan." },
            { title: "P2P Energy Trading", desc: "Exploring futures where you can buy power directly from your neighbour’s rooftop solar system as easily as UPI." },
            { title: "Decentralised Storage", desc: "Integrating battery storage systems to co-create people-centric, data-backed solutions for Viksit Bharat @2047." }
        ],
        detailedContent: "Imagine selling electricity to your friend or trading stored energy like stocks. This initiative, undertaken by Kirori Mal College, is more than research—it’s a roadmap for India’s energy future. By capturing data from 35 districts, we are advancing the green transition to unlock new markets for India’s youth.",
        recruitment: [
            "Research Consultants (Analytical Research)",
            "Field Investigators (On-ground Surveys)"
        ],
        gallery: [ncr1, ncr2, ncr3, ncr4]
    },
    "delhi-startup-policy": {
        title: "Draft Delhi Startup Policy 2025",
        heroImage: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1706&auto=format&fit=crop",
        icon: Landmark,
        summary: "Neecop, in collaboration with Kirori Mal College, convened a two-day Round Table Conference (8th-9th Sept 2025) to co-create a future-ready startup ecosystem.",
        pillars: [
            { title: "Financial Incentives", desc: "Accessing ₹200Cr VC funds, subsidies, and credit support for early-stage founders." },
            { title: "Policy Governance", desc: "Establishing robust implementation and monitoring mechanisms for transparency." },
            { title: "Empowerment & Inclusion", desc: "Focused dialogues on enabling women, youth, and marginalized groups within the ecosystem." }
        ],
        detailedContent: "This closed-door consultative dialogue brought together founders, investors, and policy experts. The round table was not just about discussions; it was about building consensus and ensuring every participant had a voice in co-creating the ₹200-crore Startup VC Fund and stipend policies.",
        highlights: ["Financial Incentives", "Infrastructure & Support", "Governance Mechanisms", "Awareness & Outreach"],
        gallery: [rt1, rt2, rt3, rt4, rt5, rt6]
    },
    "india-europe-dialogue": {
        title: "India Europe Economic Policy Dialogue",
        heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
        icon: Globe,
        summary: "A strategic research platform bridging academic insights from Kirori Mal College with international policy frameworks. We focus on enhancing bilateral trade foundations, green energy cooperation, and technological research in AI and Semiconductors.",
        pillars: [
            { title: "Trade Connectivity", desc: "Analyzing regulatory frameworks to streamline startup expansion between India and the EU." },
            { title: "Sustainability Exchange", desc: "Collaborative research on green hydrogen and carbon-neutral industrial clusters." },
            { title: "Tech Synergy", desc: "Bridging the gap in AI and semiconductor research through institutional partnerships." }
        ],
        detailedContent: "The India Europe Economic Policy Dialogue addresses the growing need for evidence-based cooperation in an increasingly interconnected world. By focusing on critical sectors like AI and green energy, Neecop provides the research bedrock for dialogues that strengthen both economic ties and technological resilience between the two regions."
    }
};

const InitiativeDetail = () => {
    const { id } = useParams();
    const data = id ? initiativeData[id] : null;

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Initiative not found</h1>
                    <Button asChild><Link to="/initiatives">Back to Initiatives</Link></Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Button variant="ghost" className="text-white mb-8 gap-2 hover:bg-white/10" asChild>
                            <Link to="/initiatives"><ArrowLeft className="h-4 w-4" /> Back to Initiatives</Link>
                        </Button>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-tight">
                            {data.title}
                        </h1>
                        <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
                            {data.summary}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <SectionWrapper>
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Detailed Narrative */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                            <Microscope className="text-secondary h-8 w-8" /> Executive Summary
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            {data.detailedContent}
                        </p>

                        {data.recruitment && (
                            <div className="mt-12 p-8 bg-secondary/5 border border-secondary/20 rounded-2xl">
                                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">📢 Opportunities</h2>
                                <p className="text-muted-foreground mb-4 font-medium italic">We will soon be inviting applications for:</p>
                                <ul className="space-y-2">
                                    {data.recruitment.map((role: string) => (
                                        <li key={role} className="flex items-center gap-2 text-foreground font-semibold">
                                            <CheckCircle2 className="h-5 w-5 text-secondary" /> {role}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 text-sm text-muted-foreground">
                                    Be part of this nation-building journey in collaboration with the Ministry of Power.
                                </p>
                            </div>
                        )}

                        <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                            <BarChart3 className="text-secondary h-8 w-8" /> Key Research Pillars
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {data.pillars.map((pillar: any) => (
                                <div key={pillar.title} className="p-6 bg-card rounded-xl border border-border shadow-sm">
                                    <h3 className="font-heading font-bold text-foreground mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-secondary" /> {pillar.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {pillar.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar / CTA */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-muted rounded-2xl p-8 border border-border">
                                <h3 className="text-xl font-heading font-bold text-foreground mb-4">Collaborate with us</h3>
                                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                    Interested in our research data or looking to partner on this initiative?
                                </p>
                                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                                    <Link to="/contact">Get in Touch</Link>
                                </Button>
                            </div>

                            <div className="p-8 border border-border rounded-2xl">
                                <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-4">Related News</p>
                                <div className="space-y-4">
                                    {[
                                        { title: "Ministry of Power review of NCR Energy baseline...", path: "/news/energy-baseline" },
                                        { title: "Strategic Roadmap for India-Europe Trade...", path: "/news/india-europe-strategic-agenda" }
                                    ].map((news, idx) => (
                                        <Link
                                            key={idx}
                                            to={news.path}
                                            className="block text-sm font-medium hover:text-secondary cursor-pointer transition-colors"
                                        >
                                            {news.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Image Gallery */}
            {data.gallery && (
                <section className="pb-24 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-3 mb-12">
                            <ImageIcon className="text-secondary h-8 w-8" />
                            <h2 className="text-3xl font-heading font-bold text-foreground italic underline decoration-secondary/30 underline-offset-8">
                                Gallery
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6">
                            {data.gallery.map((img: string, idx: number) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative aspect-video overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-500"
                                >
                                    <img
                                        src={img}
                                        alt={`${data.title} Gallery ${idx + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <p className="text-white text-sm font-medium">Research Milestone View {idx + 1}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default InitiativeDetail;
