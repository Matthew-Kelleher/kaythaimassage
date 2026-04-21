import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import lotusIcon from "@/assets/lotus-icon.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={lotusIcon} alt="Kay Thai Massage" width={40} height={40} />
          <span className="font-display text-xl font-semibold text-foreground tracking-tight">
            Kay Thai Massage
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" activeProps={{ className: "text-sm font-medium text-primary" }}>Home</Link>
          <Link to="/services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" activeProps={{ className: "text-sm font-medium text-primary" }}>Services</Link>
          <Link to="/reviews" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" activeProps={{ className: "text-sm font-medium text-primary" }}>Reviews</Link>
          <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" activeProps={{ className: "text-sm font-medium text-primary" }}>Contact</Link>
        </nav>

        <a href="tel:0857496528" className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-gold-dark transition-colors">
          <Phone className="h-4 w-4" />
          Book Now
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setOpen(false)} className="text-sm font-medium text-foreground">Home</Link>
          <Link to="/services" onClick={() => setOpen(false)} className="text-sm font-medium text-foreground">Services</Link>
          <Link to="/reviews" onClick={() => setOpen(false)} className="text-sm font-medium text-foreground">Reviews</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="text-sm font-medium text-foreground">Contact</Link>
          <a href="tel:0857496528" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
            <Phone className="h-4 w-4" /> Call to Book
          </a>
        </div>
      )}
    </header>
  );
}
