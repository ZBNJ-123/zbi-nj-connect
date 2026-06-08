import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, MapPin, BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy">
                <BookOpen className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <span className="font-display text-lg font-bold">ZBI of NJ</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/75 max-w-xs">
              Helping you grow in faith, knowledge, and community.
            </p>
          </div>

          <div>
            <h3 className="text-cream text-sm font-bold uppercase tracking-[0.16em]">
              Quick Links
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-y-3 text-sm">
              {[
                ["/", "Home"],
                ["/about", "About Us"],
                ["/bible-class", "Bible Class"],
                ["/events", "Events"],
                ["/faculty", "Faculty"],
                ["/contact", "Contact"],
                ["/bible-class", "Apply Now"],
              ].map(([to, label]) => (
                <li key={label}>
                  <Link to={to} className="text-cream/80 hover:text-gold transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-cream text-sm font-bold uppercase tracking-[0.16em]">Connect</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/80">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" />
                <a href="mailto:zionbiblicalinstituteofnj@gmail.com" className="hover:text-gold">
                  zionbiblicalinstituteofnj@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" />
                New Jersey
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 hover:bg-gold hover:text-navy hover:border-gold transition"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 hover:bg-gold hover:text-navy hover:border-gold transition"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-cream/60 lg:px-10">
          © 2026 Zion Biblical Institute of New Jersey. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
