import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, Award, Handshake, ArrowRight, Car } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Auto Viken AS — Kjøp, Salg & Kommisjon i Vestby" },
      { name: "description", content: "Din pålitelige bilforhandler i Vestby. Kvalitetsbiler til konkurransedyktige priser. Kjøp, salg og kommisjon." },
      { property: "og:title", content: "Auto Viken AS — Kjøp, Salg & Kommisjon" },
      { property: "og:description", content: "Din pålitelige bilforhandler i Vestby. Kvalitetsbiler til konkurransedyktige priser." },
    ],
  }),
  component: HomePage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Auto Viken AS
            </p>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-7xl">
              Din neste <span className="text-primary">drømmebil</span> venter
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Kvalitetsbiler til konkurransedyktige priser. Kjøp, salg og kommisjon — alt under ett tak i Vestby.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/bilutvalg"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Se bilutvalget
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/selg-din-bil"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-accent"
              >
                Selg din bil
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Find biler — CTA til bilutvalg */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Vårt utvalg</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Finn din neste bil</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Hele vårt oppdaterte lager — med bilder, pris og spesifikasjoner — finner du under{" "}
              <Link to="/bilutvalg" className="font-medium text-primary hover:underline">Bilutvalg</Link>.
              Du er også hjertelig velkommen innom oss i Verpetveien 50, 1543 Vestby for en uforpliktende prat og prøvekjøring.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/bilutvalg" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Se bilutvalget <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+4764982450" className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent">
                Ring oss
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Hvorfor velge Auto Viken?</h2>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Shield, title: "Trygt bilkjøp", desc: "Alle biler gjennomgår en grundig sjekk. Du handler med trygghet og full garanti." },
              { icon: Award, title: "Kvalitet i fokus", desc: "Vi håndplukker biler med lav kjørelengde og godt vedlikeholdshistorikk." },
              { icon: Handshake, title: "Personlig service", desc: "Hos oss møter du ekte mennesker med lidenskap for bil og kundetilfredshet." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.15 } } }}
                className="rounded-xl border border-border bg-background p-8 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-card to-card p-12 text-center md:p-16"
          >
            <Car className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Vil du selge bilen din?</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Vi tilbyr kommisjonssalg og direkte kjøp. Få en uforpliktende verdivurdering i dag.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/selg-din-bil" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Selg din bil
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent">
                Kontakt oss
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
