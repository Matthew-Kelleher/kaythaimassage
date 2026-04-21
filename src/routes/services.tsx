import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, Clock } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Kay Thai Massage Kilkenny" },
      { name: "description", content: "Traditional Thai massage, deep tissue, aromatherapy and more at Kay Thai Massage Kilkenny. View our full treatment menu." },
      { property: "og:title", content: "Services — Kay Thai Massage Kilkenny" },
      { property: "og:description", content: "Traditional Thai massage, deep tissue, aromatherapy and more at Kay Thai Massage Kilkenny." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { name: "Traditional Thai Massage", duration: "60 min", desc: "Full-body massage using ancient Thai techniques including acupressure, stretching, and energy line work to relieve tension and improve flexibility." },
  { name: "Thai Oil Massage", duration: "60 min", desc: "A soothing combination of traditional Thai techniques with aromatic oils to deeply relax muscles and nourish the skin." },
  { name: "Deep Tissue Massage", duration: "60 min", desc: "Firm pressure targeting deep muscle layers to release chronic tension, knots, and adhesions for lasting pain relief." },
  { name: "Back, Neck & Shoulder", duration: "30 min", desc: "Focused treatment for the upper body's most common tension areas, ideal for desk workers and those with postural strain." },
  { name: "Foot Reflexology", duration: "45 min", desc: "Therapeutic pressure applied to reflex points on the feet, promoting healing throughout the body and deep relaxation." },
  { name: "Hot Stone Massage", duration: "75 min", desc: "Smooth heated stones placed on key points and used as massage tools to melt away tension and promote circulation." },
];

function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-gold-dark mb-3">Our Treatments</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">Massage Services</h1>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Each treatment is tailored to your individual needs by our experienced Thai therapists.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{s.name}</h3>
                  <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground bg-muted rounded-full px-3 py-1 whitespace-nowrap">
                    <Clock className="h-3 w-3" /> {s.duration}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="tel:0857496528"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-gold-dark transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call to Book
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
