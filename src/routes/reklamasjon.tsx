import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle, ArrowRight, FileText, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/reklamasjon")({
  head: () => ({
    meta: [
      { title: "Reklamasjon — Auto Viken AS" },
      { name: "description", content: "Har du en reklamasjon? Vi tar det på alvor. Fyll ut skjemaet, så behandler vi saken din raskt." },
      { property: "og:title", content: "Reklamasjon — Auto Viken AS" },
      { property: "og:description", content: "Har du en reklamasjon? Fyll ut skjemaet, så behandler vi saken din raskt." },
    ],
  }),
  component: ReklamasjonPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ReklamasjonPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Reklamasjon</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Vi tar det på alvor</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Dersom du har oppdaget en feil eller mangel ved bilen du har kjøpt hos oss, 
              ønsker vi å hjelpe deg. Fyll ut skjemaet under, så tar vi kontakt så raskt som mulig.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-start gap-4 rounded-xl border border-border bg-background p-6">
              <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold">Dine rettigheter</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Som forbruker har du reklamasjonsrett i henhold til forbrukerkjøpsloven. 
                  Du kan reklamere i inntil 5 år fra kjøpsdato.
                </p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.1 } } }} className="flex items-start gap-4 rounded-xl border border-border bg-background p-6">
              <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold">Hvordan det fungerer</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Send inn skjemaet med beskrivelse av feilen. Vi vurderer saken og gir 
                  deg tilbakemelding innen 3–5 virkedager.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl font-bold">Reklamasjonsskjema</h2>

            {submitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
                <CheckCircle className="mx-auto h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">Takk for din henvendelse</h3>
                <p className="mt-2 text-muted-foreground">Vi behandler saken din og gir deg tilbakemelding innen 3–5 virkedager.</p>
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
                  <label className="mb-1.5 block text-sm font-medium">E-post *</label>
                  <input required type="email" className="w-full rounded-md border border-input bg-secondary px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Ordrenr. / Registreringsnr. *</label>
                    <input required className="w-full rounded-md border border-input bg-secondary px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Kjøpsdato</label>
                    <input type="date" className="w-full rounded-md border border-input bg-secondary px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Beskrivelse av feilen *</label>
                  <textarea required rows={5} placeholder="Beskriv hva som er feil, når det ble oppdaget, osv." className="w-full rounded-md border border-input bg-secondary px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Send reklamasjon <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
