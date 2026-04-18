import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Users, Calendar } from "lucide-react";

export const Route = createFileRoute("/om-oss")({
  head: () => ({
    meta: [
      { title: "Om oss — Auto Viken AS" },
      { name: "description", content: "Lær mer om Auto Viken AS. Din pålitelige bilforhandler i Vestby med over 20 års erfaring." },
      { property: "og:title", content: "Om oss — Auto Viken AS" },
      { property: "og:description", content: "Din pålitelige bilforhandler i Vestby med over 20 års erfaring." },
    ],
  }),
  component: OmOssPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function OmOssPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Om oss</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Hos Auto Viken AS drives vi av en ekte lidenskap for bil og gode kundeopplevelser.</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Vår visjon er enkel: å tilby kvalitetsbiler kombinert med personlig og trygg service.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Vi holder til i Verpetveien 50 i Vestby, hvor vi hver dag hjelper kunder med å finne 
              bilen som passer deres behov og ønsker. Med solid erfaring og et sterkt fokus på 
              kvalitet, gjør vi bilkjøpet til en enkel og god opplevelse.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Calendar, title: "Erfaring som gir trygghet.", desc: "Lang erfaring i bruktbilbransjen sikrer kvalitet og trygghet i hver handel." },
              { icon: Users, title: "Personlig oppfølging", desc: "Hos oss er du ikke bare et kundenummer. Vi tar oss tid til hver enkelt kunde." },
              { icon: MapPin, title: "Sentralt i Vestby", desc: "Lett tilgjengelig beliggenhet ved E6, med god parkering og innendørs visningslokale." },
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

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">Vår historie</h2>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Auto Viken ble startet av bilentusiaster med en felles ambisjon: å gjøre bruktbilkjøp 
                til en trygg og positiv opplevelse. Det som begynte i det små, har utviklet seg 
                gjennom fornøyde kunder og et sterkt fokus på ærlighet, kvalitet og god service.
              </p>
              <p>
                I dag tilbyr vi et bredt utvalg av nøye utvalgte biler – fra praktiske familiebiler 
                til eksklusive premiumbiler. Vi tilbyr også kommisjonssalg, hvor vi tar hånd om 
                hele prosessen fra start til slutt.
              </p>
              <p>
                Vår filosofi er enkel: Du skal føle deg trygg og godt ivaretatt gjennom hele reisen. 
                Vi lytter til dine behov og hjelper deg med å finne bilen som passer akkurat deg.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="mb-8 text-3xl font-bold tracking-tight">Finn oss</h2>
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                title="Auto Viken lokasjon"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2048.5!2d10.7!3d59.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVerpetveien+50%2C+1543+Vestby!5e0!3m2!1sno!2sno!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
