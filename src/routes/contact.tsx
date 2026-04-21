import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kay Thai Massage Kilkenny" },
      { name: "description", content: "Get in touch with Kay Thai Massage at 58 John Street Upper, Kilkenny. Call 085 749 6528 to book your appointment." },
      { property: "og:title", content: "Contact — Kay Thai Massage Kilkenny" },
      { property: "og:description", content: "Get in touch with Kay Thai Massage at 58 John Street Upper, Kilkenny. Call 085 749 6528." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-gold-dark mb-3">Get In Touch</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">Contact Us</h1>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Ready to book? Give us a call or visit us in the heart of Kilkenny city.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-sm text-muted-foreground">58 John Street Upper, Gardens,<br />Kilkenny, R95 K75T</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:0857496528" className="text-sm text-gold-dark hover:text-primary transition-colors font-medium">085 749 6528</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Opening Hours</h3>
                    <p className="text-sm text-muted-foreground">Open daily · Closes 7 pm</p>
                  </div>
                </div>
              </div>

              <a
                href="tel:0857496528"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-gold-dark transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call to Book Now
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden border border-border h-[400px] md:h-auto"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2387.5!2d-7.254!3d52.654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDM5JzE0LjQiTiA3wrAxNScxNC40Ilc!5e0!3m2!1sen!2sie!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kay Thai Massage location"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
