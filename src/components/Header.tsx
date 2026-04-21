import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logoIcon from "@/assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-purple-deep/95 backdrop-blur-md border-b border-purple-mid/30">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-2">
        <a href="#hero" onClick={() => scrollTo("hero")} className="flex items-center gap-0.5">
          <img src={logoIcon} alt="Kay Thai Massage" width={72} height={72} className="h-[72px] w-auto" />
          <span className="font-display text-xl font-semibold text-gold tracking-tight">
            Kay Thai Massage
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {[
            ["Services", "services"],
            ["Testimonials", "testimonials"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm font-medium tracking-widest uppercase text-gold-light/70 hover:text-gold transition-colors"
            >
              {label}
            </button>
          ))}
        </nav>

        <a
          href="tel:0857496528"
          className="hidden md:inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-2.5 text-sm font-semibold tracking-wider uppercase text-purple-deep hover:bg-gold-light transition-colors"
        >
          <Phone className="h-4 w-4" />
          Call to Book
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-gold">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-purple-deep border-t border-purple-mid/30 px-6 py-4 flex flex-col gap-4">
          {[
            ["Services", "services"],
            ["Testimonials", "testimonials"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm font-medium text-gold-light/80 text-left hover:text-gold"
            >
              {label}
            </button>
          ))}
          <a
            href="tel:0857496528"
            className="inline-flex items-center justify-center gap-2 bg-gold px-5 py-2.5 text-xs font-semibold uppercase text-purple-deep"
          >
            <Phone className="h-3.5 w-3.5" /> Call to Book
          </a>
        </div>
      )}
    </header>
  );
}
