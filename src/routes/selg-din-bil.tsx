import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle, ArrowRight, Shield, Banknote, Clock } from "lucide-react";

export const Route = createFileRoute("/selg-din-bil")({
  head: () => ({
    meta: [
      { title: "Selg din bil — Auto Viken AS" },
      { name: "description", content: "Selg bilen din enkelt gjennom Auto Viken. Vi tilbyr kommisjonssalg og direkte kjøp til gode priser." },
      { property: "og:title", content: "Selg din bil — Auto Viken AS" },
      { property: "og:description", content: "Selg bilen din enkelt gjennom Auto Viken." },
    ],
  }),
  component: SelgDinBilPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function SelgDinBilPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Selg din bil</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Vi kjøper bilen din</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Enten du ønsker kommisjonssalg eller direkte kjøp — vi gjør prosessen enkel og 
              problemfri. Fyll ut skjemaet under for en uforpliktende verdivurdering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Banknote, title: "Konkurransedyktige priser", desc: "Vi gir deg en rettferdig pris basert på markedsverdi." },
              { icon: Clock, title: "Rask prosess", desc: "Fra henvendelse til salg — vi håndterer alt effektivt." },
              { icon: Shield, title: "Trygt og enkelt", desc: "Vi tar oss av papirarbeid, omregistrering og oppgjør." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.1 } } }}
                className="flex items-start gap-4 rounded-xl border border-border bg-background p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl font-bold">Få en verdivurdering</h2>
            <p className="mt-2 text-sm text-muted-foreground">Fyll ut informasjonen under, så tar vi kontakt innen 24 timer.</p>

            {submitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
                <CheckCircle className="mx-auto h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">Takk for henvendelsen!</h3>
                <p className="mt-2 text-muted-foreground">Vi tar kontakt med deg innen 24 timer.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Navn *</label>
                    <input required className="w-full rounded-md border border-input bg-secondary px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Telefon *</label>
                    <input required type="tel" className="w-full rounded-md border border-input bg-secondary px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">E-post</label>
                  <input type="email" className="w-full rounded-md border border-input bg-secondary px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Merke *</label>
                    <input required placeholder="f.eks. Volvo" className="w-full rounded-md border border-input bg-secondary px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Modell *</label>
                    <input required placeholder="f.eks. XC60" className="w-full rounded-md border border-input bg-secondary px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-3">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Årsmodell</label>
                    <input type="number" placeholder="2020" className="w-full rounded-md border border-input bg-secondary px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Kilometerstand</label>
                    <input type="number" placeholder="50 000" className="w-full rounded-md border border-input bg-secondary px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Registreringsnr.</label>
                    <input placeholder="AB12345" className="w-full rounded-md border border-input bg-secondary px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Tilleggsinformasjon</label>
                  <textarea rows={4} placeholder="Beskriv bilens tilstand, utstyr osv." className="w-full rounded-md border border-input bg-secondary px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Send inn <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
