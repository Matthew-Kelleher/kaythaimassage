import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import kayHeroBg from "@/assets/kay-hero-bg.jpg";
import thaiPattern from "@/assets/thai-pattern.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kay Thai Massage Kilkenny — Original Thai Massage" },
      { name: "description", content: "Authentic Thai massage therapy at 58 John Street Upper, Kilkenny. 4.8★ rated. Mon-Sat 10AM-8PM. Call 085 749 6528." },
      { property: "og:title", content: "Kay Thai Massage Kilkenny — Original Thai Massage" },
      { property: "og:description", content: "Authentic Thai massage therapy in Kilkenny. 4.8★ rated. Call 085 749 6528." },
    ],
  }),
  component: HomePage,
});

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const services = [
  { name: "Traditional Thai Massage", duration: "60 min", price: "€65", desc: "Ancient Thai techniques combining acupressure, stretching, and energy line work to relieve tension and improve flexibility." },
  { name: "Aromatherapy Oil Massage", duration: "60 min", price: "€65", desc: "Soothing massage with essential oils to promote relaxation, reduce stress, and alleviate pain by stimulating the senses." },
  { name: "Deep Tissue Massage", duration: "60 min", price: "€65", desc: "Firm pressure targeting deep muscle layers to release chronic tension, knots, and adhesions for lasting pain relief." },
  { name: "Hot Stone Massage", duration: "60 min", price: "€75", desc: "Smooth heated stones placed on key points and used as massage tools to melt away tension and promote circulation." },
  { name: "Hot Oil Massage", duration: "60 min", price: "€65", desc: "Long strokes and gentle kneading with natural oils to ease tension while providing a deeply relaxing experience." },
  { name: "Neck, Back & Shoulder", duration: "30 min", price: "€35", desc: "Focused treatment for the upper body's most common tension areas, ideal for desk workers and those with postural strain." },
];

const reviews = [
  { name: "Conor Kirwan", rating: 5, time: "a month ago", text: "Unbelievable service. My back has been in bad shape for a while and I already feel the difference afterwards! Highly recommend." },
  { name: "John Delaney", rating: 5, time: "11 months ago", text: "I'm going to Kay Thai Massage a long time now, and wouldn't change. They are so professional and go out of their way to fit an appointment for you. It's so relaxing and therapeutic — always leave feeling amazing." },
  { name: "Dea Fusco", rating: 5, time: "2 years ago", text: "Had a massage here 3 times now. Last time was the best! My lower back was really painful and having difficulty to walk. The masseuse was very professional and knew exactly where the problem was. Highly recommend!" },
];

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-2">
      <div className="h-px w-12 bg-gold/40" />
      <div className="w-1.5 h-1.5 rotate-45 bg-gold/60" />
      <div className="h-px w-12 bg-gold/40" />
    </div>
  );
}

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-end justify-center overflow-hidden bg-purple-deep">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-mid/20 via-purple-deep to-purple-deep" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 pb-20 pt-[60vh] text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-sm md:text-base tracking-[0.3em] uppercase text-gold-light/70 mb-6">
              Authentic Thai Massage in Kilkenny
            </p>

            <h1 className="font-display text-6xl md:text-8xl font-bold text-gold leading-tight tracking-tight">
              Kay Thai Massage
            </h1>

            <GoldDivider />

            <p className="font-script text-3xl md:text-4xl text-gold-light/80 mt-4 italic">
              Original Thai Massage
            </p>

            <p className="mt-6 text-lg md:text-xl text-gold-light/60 max-w-lg mx-auto leading-relaxed">
              Revitalise your body, rejuvenate your soul in a tranquil setting
            </p>

            <div className="mt-10 flex justify-center">
              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 border border-gold/30 px-8 py-3.5 text-sm font-medium tracking-wider uppercase text-gold-light/80 hover:bg-gold/10 transition-colors"
              >
                View Services
              </button>
            </div>

            <div className="flex items-center justify-center gap-1 mt-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
              <span className="ml-2 text-sm text-gold-light/60">4.8/5 · 46 reviews</span>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 rounded-full border-2 border-gold/30 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-gold/50" />
          </div>
        </div>
      </section>


      {/* Services */}
      <section id="services" className="py-24 bg-cream">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-gold-dark mb-3">What We Offer</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-purple-deep">Our Services</h2>
            <GoldDivider />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card rounded-lg p-7 border border-border hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-lg font-semibold text-purple-deep group-hover:text-purple-mid transition-colors">{s.name}</h3>
                  <span className="text-sm font-bold text-gold-dark whitespace-nowrap ml-3">{s.price}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                  <Clock className="h-3 w-3" /> {s.duration}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="text-center mt-12 bg-purple-deep/5 border border-purple-deep/10 rounded-lg p-8 max-w-lg mx-auto">
            <p className="text-sm text-muted-foreground mb-4">To book an appointment, give us a call:</p>
            <a
              href="tel:0857496528"
              className="inline-flex items-center gap-2 bg-purple-deep px-8 py-3.5 text-sm font-semibold tracking-wider uppercase text-gold hover:bg-purple-mid transition-colors"
            >
              <Phone className="h-4 w-4" />
              085 749 6528
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-deep" />
        <div
          className="absolute inset-0 opacity-8"
          style={{ backgroundImage: `url(${thaiPattern})`, backgroundSize: "200px" }}
        />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-gold/60 mb-3">What Our Clients Say</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gold">Testimonials</h2>
            <GoldDivider />
          </motion.div>

          <div className="space-y-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-purple-mid/20 border border-gold/10 rounded-lg p-8"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="text-gold-light/70 text-sm leading-relaxed italic mb-4">
                  "{r.text}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center font-display text-sm font-semibold text-gold">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gold-light/90">{r.name}</p>
                    <p className="text-xs text-gold-light/40">{r.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-cream">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-gold-dark mb-3">Get In Touch</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-purple-deep">Contact Us</h2>
            <GoldDivider />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeIn} className="space-y-6">
              <div className="bg-card rounded-lg p-8 border border-border">
                {[
                  { icon: MapPin, label: "Address", value: "58 John Street Upper, Gardens,\nKilkenny, R95 K75T" },
                  { icon: Phone, label: "Phone", value: "085 749 6528", href: "tel:0857496528" },
                  { icon: Clock, label: "Opening Hours", value: "Monday – Saturday: 10 AM – 8 PM" },
                ].map(({ icon: Icon, label, value, href }, i) => (
                  <div key={label} className={`flex items-start gap-4 ${i > 0 ? "mt-6 pt-6 border-t border-border" : ""}`}>
                    <div className="w-10 h-10 rounded-full bg-purple-deep/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-purple-deep" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground text-sm mb-1">{label}</h3>
                      {href ? (
                        <a href={href} className="text-sm text-gold-dark hover:text-purple-deep transition-colors font-medium">{value}</a>
                      ) : (
                        <p className="text-sm text-muted-foreground whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="tel:0857496528"
                className="w-full inline-flex items-center justify-center gap-2 bg-purple-deep px-8 py-3.5 text-sm font-semibold tracking-wider uppercase text-gold hover:bg-purple-mid transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call to Book Now
              </a>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-lg overflow-hidden border border-border h-[400px] md:h-auto"
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

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-deep" />
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${thaiPattern})`, backgroundSize: "200px" }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gold mb-4">Ready to Feel Better?</h2>
          <p className="text-gold-light/50 mb-8 max-w-lg mx-auto text-sm">
            Book your appointment today and experience the healing power of authentic Thai massage.
          </p>
          <a
            href="tel:0857496528"
            className="inline-flex items-center gap-2 bg-gold px-10 py-4 text-sm font-semibold tracking-wider uppercase text-purple-deep hover:bg-gold-light transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call 085 749 6528
          </a>
        </div>
      </section>
    </div>
  );
}
