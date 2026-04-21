import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-spa.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kay Thai Massage Kilkenny — Authentic Thai Massage Therapy" },
      { name: "description", content: "Experience authentic Thai massage therapy at Kay Thai Massage, 58 John Street Upper, Kilkenny. 4.8★ rated. Book now: 085 749 6528." },
      { property: "og:title", content: "Kay Thai Massage Kilkenny — Authentic Thai Massage Therapy" },
      { property: "og:description", content: "Experience authentic Thai massage therapy at Kay Thai Massage, 58 John Street Upper, Kilkenny. 4.8★ rated." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Kay Thai Massage spa interior" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center md:text-left w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm text-primary-foreground/80">4.8/5 · 46 reviews</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-tight tracking-tight">
              Authentic Thai
              <span className="block text-gold-light">Massage</span>
            </h1>

            <p className="mt-6 text-lg text-primary-foreground/70 max-w-lg leading-relaxed">
              Discover the ancient art of Thai massage therapy in the heart of Kilkenny. Restore balance, relieve tension, and rejuvenate your body and mind.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="tel:0857496528"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-foreground hover:bg-gold-light transition-colors"
              >
                <Phone className="h-4 w-4" />
                Book Appointment
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/20 px-8 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                View Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Strip */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold-light" />
            <span>58 John Street Upper, Kilkenny</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-gold-light" />
            <a href="tel:0857496528" className="hover:underline">085 749 6528</a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gold-light" />
            <span>Open daily · Closes 7 pm</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-gold-dark mb-3">Why Choose Us</p>
            <h2 className="font-display text-4xl font-bold text-foreground">The Art of Healing Touch</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Traditional Techniques", desc: "Authentic Thai massage methods passed down through generations, combining acupressure, stretching, and energy work." },
              { title: "Professional Therapists", desc: "Our skilled therapists bring years of experience and training from Thailand to deliver exceptional results." },
              { title: "Personalised Care", desc: "Every session is tailored to your specific needs, whether you seek pain relief, relaxation, or improved mobility." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                  <div className="w-3 h-3 rounded-full bg-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <blockquote className="font-display text-2xl md:text-3xl font-medium text-foreground leading-relaxed italic">
              "Unbelievable service. My back has been in bad shape for a while and I already feel the difference afterwards! Highly recommend"
            </blockquote>
            <p className="mt-6 text-sm text-muted-foreground">— Conor Kirwan</p>
            <Link
              to="/reviews"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold-dark hover:text-primary transition-colors"
            >
              Read all reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">Ready to Feel Better?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
            Book your appointment today and experience the healing power of authentic Thai massage.
          </p>
          <a
            href="tel:0857496528"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-10 py-4 text-base font-semibold text-foreground hover:bg-gold-light transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call 085 749 6528
          </a>
        </div>
      </section>
    </div>
  );
}
