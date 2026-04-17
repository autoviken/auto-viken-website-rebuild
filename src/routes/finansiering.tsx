import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calculator, Percent, Shield, Phone } from "lucide-react";

export const Route = createFileRoute("/finansiering")({
  head: () => ({
    meta: [
      { title: "Finansiering — Auto Viken AS" },
      { name: "description", content: "Fleksible finansieringsløsninger for ditt bilkjøp. Vi hjelper deg med lån og forsikring." },
      { property: "og:title", content: "Finansiering — Auto Viken AS" },
      { property: "og:description", content: "Fleksible finansieringsløsninger for ditt bilkjøp." },
    ],
  }),
  component: FinansieringPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function FinansieringPage() {
  return (
    <div className="min-h-screen">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Finansiering</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Skreddersydde finansieringsløsninger</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Vi samarbeider med ledende finansinstitusjoner for å tilby deg de beste betingelsene. 
              Uansett budsjett finner vi en løsning som passer.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Calculator, title: "Fleksible nedbetalingsplaner", desc: "Velg nedbetalingstid fra 1 til 8 år. Vi tilpasser månedlige beløp etter din økonomi." },
              { icon: Percent, title: "Konkurransedyktige renter", desc: "Vi forhandler de beste rentene fra våre samarbeidspartnere for deg." },
              { icon: Shield, title: "Forsikring inkludert", desc: "Vi hjelper deg med å finne riktig forsikringsdekning — kasko, delkasko eller ansvar." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.1 } } }}
                className="rounded-xl border border-border bg-background p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Våre partnere</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Vi samarbeider med Norges ledende banker</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Gjennom våre finanspartnere sikrer vi deg gode betingelser og rask behandling.
            </p>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {[
              { name: "Brage Finans", short: "Brage" },
              { name: "Santander Consumer Bank", short: "Santander" },
              { name: "SpareBank 1", short: "SpareBank 1" },
              { name: "Nordea", short: "Nordea" },
            ].map((p) => (
              <li
                key={p.name}
                className="flex h-24 items-center justify-center rounded-xl border border-border bg-card px-6 text-center transition-colors hover:border-primary/40"
                title={p.name}
              >
                <span className="text-lg font-bold tracking-tight text-foreground">{p.short}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-bold tracking-tight">Slik fungerer det</h2>
            <ol className="mt-10 space-y-8">
              {[
                { step: "01", title: "Velg din drømmebil", desc: "Finn bilen du ønsker i vårt utvalg, eller fortell oss hva du leter etter." },
                { step: "02", title: "Vi ordner finansieringen", desc: "Vi innhenter tilbud fra flere banker og presenterer det beste alternativet for deg." },
                { step: "03", title: "Signer og kjør", desc: "Når alt er i orden, signerer du avtalen og kan kjøre hjem med din nye bil." },
              ].map((item) => (
                <li key={item.step} className="flex gap-6">
                  <span className="text-3xl font-bold text-primary/30">{item.step}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Phone className="mx-auto h-10 w-10 text-primary" />
            <h2 className="mt-6 text-3xl font-bold">Ønsker du å vite mer?</h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Ta kontakt med oss for en uforpliktende finansieringssamtale.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="tel:+4764982450" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Ring oss
              </a>
              <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent">
                Send melding
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
