import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold tracking-tight text-primary">AUTO&nbsp;VIKEN</span>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Kjøp – Salg – Kommisjon. Din pålitelige bilforhandler i Vestby siden 2003.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Sider</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { to: "/bilutvalg", label: "Bilutvalg" },
                { to: "/selg-din-bil", label: "Selg din bil" },
                { to: "/finansiering", label: "Finansiering" },
                { to: "/om-oss", label: "Om oss" },
                { to: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Kontakt</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Verpetveien 50, 1543 Vestby
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+4764982450" className="hover:text-primary">+47 649 82 450</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:post@autoviken.no" className="hover:text-primary">post@autoviken.no</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Åpningstider</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p>Man–Fre: 09:00–17:00</p>
                  <p>Lør: 10:00–15:00</p>
                  <p>Søn: Stengt</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Auto Viken AS. Alle rettigheter forbeholdt.
        </div>
      </div>
    </footer>
  );
}
