import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle, ArrowRight, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt oss — Auto Viken AS" },
      { name: "description", content: "Ta kontakt med Auto Viken AS i Vestby. Ring, send e-post eller besøk oss i Verpetveien 50." },
      { property: "og:title", content: "Kontakt oss — Auto Viken AS" },
      { property: "og:description", content: "Ta kontakt med Auto Viken AS i Vestby." },
    ],
  }),
  component: KontaktPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function KontaktPage() {
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Kontakt</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Ta kontakt med oss</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Vi svarer gjerne på spørsmål om biler, finansiering eller andre henvendelser.
            </p>
            <div className="mt-8 space-y-3 text-base leading-relaxed text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Reklamasjonsskjema:</span> For saker som gjelder reklamasjon.
              </p>
              <p>
                Velg riktig skjema og fyll ut feltene nedenfor – vårt dedikerte kundeserviceteam vil ta kontakt så snart som mulig.
              </p>
              <p>Vi ser frem til å høre fra deg!</p>
              <p>
                <a href="/reklamasjon" className="font-semibold text-primary hover:underline">
                  Reklamasjonsskjema →
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-2xl font-bold">Kontaktinformasjon</h2>
              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-sm text-muted-foreground">Verpetveien 50, 1543 Vestby</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Åpningstider</p>
                    <div className="text-sm text-muted-foreground">
                      <p>Mandag–Fredag: 09:00–17:00</p>
                      <p>Lørdag: 10:00–15:00</p>
                      <p>Søndag: Stengt</p>
                    </div>
                  </div>
                </li>
              </ul>

              {/* Map */}
              <div className="mt-10 overflow-hidden rounded-xl border border-border">
                <iframe
                  title="Auto Viken lokasjon"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2048.5!2d10.7!3d59.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVerpetveien+50%2C+1543+Vestby!5e0!3m2!1sno!2sno!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.15 } } }}>
              <h2 className="text-2xl font-bold">Send oss en melding</h2>

              {submitted ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
                  <CheckCircle className="mx-auto h-12 w-12 text-primary" />
                  <h3 className="mt-4 text-xl font-semibold">Takk for din henvendelse!</h3>
                  <p className="mt-2 text-muted-foreground">Vi svarer deg så snart som mulig.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Navn *</label>
                      <input required className="w-full rounded-md border border-input bg-secondary px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Telefon</label>
                      <input type="tel" className="w-full rounded-md border border-input bg-secondary px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">E-post *</label>
                    <input required type="email" className="w-full rounded-md border border-input bg-secondary px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Emne</label>
                    <input className="w-full rounded-md border border-input bg-secondary px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Melding *</label>
                    <textarea required rows={5} placeholder="Skriv din melding her..." className="w-full rounded-md border border-input bg-secondary px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    Send melding <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
