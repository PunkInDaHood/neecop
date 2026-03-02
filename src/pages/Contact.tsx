import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, ArrowRight, ExternalLink } from "lucide-react";

const Contact = () => {
  const email = "hello@neecop.com";

  return (
    <>
      <section className="bg-gradient-hero py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Let's <span className="text-gradient">Innovate</span> Together
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed">
              Neecop is always looking for new partnerships, researchers, and visionaries to help shape India's future.
              Skip the forms—get in touch with us directly.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Main Direct Contact Column */}
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-card-hover relative overflow-hidden group hover:border-secondary/50 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <Mail className="h-48 w-48 text-secondary" />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:bg-secondary/20 transition-colors">
                  <Mail className="h-8 w-8 text-secondary" />
                </div>

                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Direct Email</h2>
                <p className="text-muted-foreground text-lg mb-10 max-w-md">
                  Send us your inquiries, research ideas, or partnership proposals. We typically respond within 24 hours.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 text-lg gap-3 shadow-lg shadow-secondary/20"
                    asChild
                  >
                    <a href={`mailto:${email}`}>
                      Email Us Now <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>

                  <div className="flex items-center gap-2 text-foreground font-semibold px-4">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Available Mon-Fri
                  </div>
                </div>

                <p className="mt-8 text-sm text-muted-foreground font-mono">
                  {email}
                </p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 bg-muted/30 border border-border rounded-2xl flex items-start gap-4"
              >
                <div className="p-3 bg-card rounded-xl border border-border shadow-sm">
                  <Linkedin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">LinkedIn</h4>
                  <p className="text-sm text-muted-foreground mb-3">Follow our latest research and policy updates.</p>
                  <a
                    href="https://www.linkedin.com/company/neecop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Follow Us <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 bg-muted/30 border border-border rounded-2xl flex items-start gap-4"
              >
                <div className="p-3 bg-card rounded-xl border border-border shadow-sm">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">Location</h4>
                  <p className="text-sm text-muted-foreground mb-1">New Delhi, India</p>
                  <p className="text-sm text-muted-foreground">Strategic Hub for Policy</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-3xl overflow-hidden h-[500px] shadow-card relative group"
            >
              <iframe
                title="Neecop Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="brightness-90 group-hover:brightness-100 transition-all duration-700 grayscale-[0.5] group-hover:grayscale-0"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-md border border-border p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h5 className="font-heading font-bold text-sm">Headquarters</h5>
                    <p className="text-xs text-muted-foreground">National Capital Region, New Delhi</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Contact;
