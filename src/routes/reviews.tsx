import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Kay Thai Massage Kilkenny" },
      { name: "description", content: "Read what our clients say about Kay Thai Massage Kilkenny. 4.8★ rated with 46+ Google reviews." },
      { property: "og:title", content: "Reviews — Kay Thai Massage Kilkenny" },
      { property: "og:description", content: "Read what our clients say about Kay Thai Massage Kilkenny. 4.8★ rated with 46+ Google reviews." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Conor Kirwan", rating: 5, time: "a month ago", text: "Unbelievable service. My back has been in bad shape for a while and I already feel the difference afterwards! Highly recommend." },
  { name: "John Delaney", rating: 5, time: "11 months ago", text: "I'm going to Kay Thai Massage a long time now, and wouldn't change. They are so professional and go out of their way to fit an appointment for you. It's so relaxing and therapeutic — always leave feeling amazing." },
  { name: "Dea Fusco", rating: 5, time: "2 years ago", text: "Had a massage here 3 times now. Last time was the best! My lower back was really painful and having difficulty to walk. The masseuse was very professional and knew exactly where the problem was. Highly recommend!" },
];

function ReviewsPage() {
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
            <p className="text-sm font-medium tracking-widest uppercase text-gold-dark mb-3">Testimonials</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">What Our Clients Say</h1>
            <div className="mt-6 flex items-center justify-center gap-6">
              <div className="text-center">
                <div className="flex items-center gap-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-1">4.8/5 on Google · 46 reviews</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center font-display font-semibold text-gold-dark">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.time}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(r.rating)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
