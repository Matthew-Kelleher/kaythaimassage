import { MapPin, Phone, Clock } from "lucide-react";
import logoIcon from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-purple-deep text-gold-light/70">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoIcon} alt="" width={56} height={56} className="h-[56px] w-auto" />
              <span className="font-display text-lg font-semibold text-gold">Kay Thai Massage</span>
            </div>
            <p className="text-sm leading-relaxed">
              Authentic Thai massage therapy in the heart of Kilkenny. Original Thai Massage — experience traditional healing for total relaxation.
            </p>
          </div>

          <div>
            <h3 className="font-display text-base font-semibold mb-4 text-gold">Visit Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-gold/60" />
                <span>58 John Street Upper, Gardens,<br />Kilkenny, R95 K75T</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold/60" />
                <a href="tel:0857496528" className="hover:text-gold transition-colors">085 749 6528</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-gold/60" />
                <span>Mon – Sat: 10 AM – 8 PM</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-base font-semibold mb-4 text-gold">Quick Links</h3>
            <div className="space-y-2 text-sm">
              {["services", "testimonials", "contact"].map((id) => (
                <button
                  key={id}
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
                  className="block hover:text-gold transition-colors capitalize"
                >
                  {id}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/10 text-center text-xs text-gold-light/30">
          © {new Date().getFullYear()} Kay Thai Massage Kilkenny. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
