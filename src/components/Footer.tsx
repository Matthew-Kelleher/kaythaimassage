import { MapPin, Phone, Clock } from "lucide-react";
import lotusIcon from "@/assets/lotus-icon.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={lotusIcon} alt="" width={32} height={32} className="brightness-200" />
              <span className="font-display text-lg font-semibold">Kay Thai Massage</span>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Authentic Thai massage therapy in the heart of Kilkenny. Experience traditional healing techniques for total relaxation and rejuvenation.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Visit Us</h3>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-gold" />
                <span>58 John Street Upper, Gardens,<br />Kilkenny, R95 K75T</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold" />
                <a href="tel:0857496528" className="hover:text-primary-foreground transition-colors">085 749 6528</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-gold" />
                <span>Open daily · Closes 7 pm</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <a href="/services" className="block hover:text-primary-foreground transition-colors">Our Services</a>
              <a href="/reviews" className="block hover:text-primary-foreground transition-colors">Reviews</a>
              <a href="/contact" className="block hover:text-primary-foreground transition-colors">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Kay Thai Massage Kilkenny. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
