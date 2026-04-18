import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle, ArrowRight, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/reklamasjon")({
  head: () => ({
    meta: [
      { title: "Reklamasjonsskjema — Auto Viken AS" },
      { name: "description", content: "Send inn reklamasjon til Auto Viken AS. Vårt kundeserviceteam tar kontakt så snart som mulig." },
      { property: "og:title", content: "Reklamasjonsskjema — Auto Viken AS" },
      { property: "og:description", content: "Send inn reklamasjon til Auto Viken AS." },
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
    // TODO: Kobles til e-post (reklamasjon@autoviken.no) når Domeneshop SMTP er konfigurert
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Reklamasjon</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Reklamasjonsskjema</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Fyll ut skjemaet under for saker som gjelder reklamasjon. Vårt dedikerte kundeserviceteam
              vil ta kontakt med deg så snart som mulig.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-muted-foreground">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p>
                Vennligst beskriv saken så detaljert som mulig. Det hjelper oss å behandle henvendelsen
                din raskere og mer presist.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="border-t border-border bg-card pb-24 pt-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-xl border border-primary/30 bg-primary/5 p-10 text-center"
              >
                <CheckCircle className="mx-auto h-14 w-14 text-primary" />
                <h2 className="mt-6 text-2xl font-semibold">Takk for din henvendelse!</h2>
                <p className="mt-3 text-muted-foreground">
                  Vi har mottatt reklamasjonen din og tar kontakt så snart som mulig.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personalia */}
                <div>
                  <h2 className="mb-4 text-lg font-semibold">Dine opplysninger</h2>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Fornavn *</label>
                      <input
                        required
                        name="fornavn"
                        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Etternavn *</label>
                      <input
                        required
                        name="etternavn"
                        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">E-post *</label>
                      <input
                        required
                        type="email"
                        name="epost"
                        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Telefon *</label>
                      <input
                        required
                        type="tel"
                        name="telefon"
                        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <label className="mb-1.5 block text-sm font-medium">Adresse</label>
                    <input
                      name="adresse"
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Postnummer</label>
                      <input
                        name="postnummer"
                        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Poststed</label>
                      <input
                        name="poststed"
                        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Bilinformasjon */}
                <div className="border-t border-border pt-6">
                  <h2 className="mb-4 text-lg font-semibold">Informasjon om bilen</h2>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Registreringsnummer *</label>
                      <input
                        required
                        name="regnr"
                        placeholder="AB12345"
                        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Merke og modell *</label>
                      <input
                        required
                        name="merke_modell"
                        placeholder="f.eks. Volvo XC60"
                        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Kjøpsdato</label>
                      <input
                        type="date"
                        name="kjopsdato"
                        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Kilometerstand ved kjøp</label>
                      <input
                        type="number"
                        name="km_kjop"
                        placeholder="99000 km"
                        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <label className="mb-1.5 block text-sm font-medium">Nåværende kilometerstand</label>
                    <input
                      type="number"
                      name="km_naa"
                      placeholder="112229 km"
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Reklamasjon */}
                <div className="border-t border-border pt-6">
                  <h2 className="mb-4 text-lg font-semibold">Beskriv reklamasjonen</h2>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Når oppdaget du feilen? *</label>
                    <input
                      required
                      type="date"
                      name="oppdaget_dato"
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="mt-5">
                    <label className="mb-1.5 block text-sm font-medium">Beskrivelse av feilen *</label>
                    <textarea
                      required
                      rows={5}
                      name="beskrivelse"
                      placeholder="Beskriv hva som er feil med bilen, når feilen oppstod, og hvordan den oppleves..."
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="mt-5">
                    <label className="mb-1.5 block text-sm font-medium">
                      Har feilen vært undersøkt av et verksted?
                    </label>
                    <textarea
                      rows={3}
                      name="verksted"
                      placeholder="Hvis ja, oppgi navn på verksted og hva som ble konstatert..."
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="mt-5">
                    <label className="mb-1.5 block text-sm font-medium">Ønsket løsning</label>
                    <textarea
                      rows={3}
                      name="losning"
                      placeholder="Hva ønsker du at vi skal gjøre? (f.eks. reparasjon, prisavslag, heving av kjøp)"
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Honeypot — skjult felt for spam-beskyttelse */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground">
                    Felter merket med * er obligatoriske.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    Send reklamasjon <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
