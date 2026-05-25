import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, BookOpen } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/bible-class", label: "Bible Class" },
  { to: "/events", label: "Events" },
  { to: "/faculty", label: "Faculty" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-navy text-cream shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy">
            <BookOpen className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-base font-bold text-cream">ZBI of NJ</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-cream/70">
              Zion Biblical Institute
            </span>
          </div>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-sm font-medium text-cream/85 transition hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/bible-class" hash="apply" className="hidden btn-gold lg:inline-flex">
          Apply Now
        </Link>

        <button
          className="lg:hidden text-cream"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-cream/10 bg-navy-deep">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-cream/90 hover:text-gold"
                  activeProps={{ className: "text-gold" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/bible-class"
                hash="apply"
                onClick={() => setOpen(false)}
                className="btn-gold w-full justify-center"
              >
                Apply Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
