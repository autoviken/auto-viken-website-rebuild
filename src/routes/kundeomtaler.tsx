import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/kundeomtaler")({
  head: () => ({
    meta: [
      { title: "Kundeomtaler — Auto Viken AS" },
      { name: "description", content: "Les hva våre kunder sier om Auto Viken. Ekte tilbakemeldinger fra fornøyde bilkjøpere." },
      { property: "og:title", content: "Kundeomtaler — Auto Viken AS" },
      { property: "og:description", content: "Les hva våre kunder sier om Auto Viken." },
    ],
  }),
  component: KundeomtalerPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const reviews = [
  { name: "Thomas K.", rating: 5, text: "Veldig profesjonell og hyggelig service. Bilen var akkurat som beskrevet, og hele prosessen var smidig fra start til slutt. Anbefales!", date: "Mars 2024" },
  { name: "Lise M.", rating: 5, text: "Kjøpte en BMW 3-serie her og er superfornøyd. De tok seg god tid til å forklare alt, og hjalp til med finansiering. Topp opplevelse!", date: "Februar 2024" },
  { name: "Erik S.", rating: 4, text: "God opplevelse med kommisjonssalg. Bilen ble solgt raskt og til en god pris. Eneste minus var at det tok litt tid å få oppgjøret.", date: "Januar 2024" },
  { name: "Maria H.", rating: 5, text: "Fantastisk kundeservice! De fant akkurat den bilen jeg var ute etter, og prisen var bedre enn forventet. Kommer definitivt tilbake.", date: "Desember 2023" },
  { name: "Anders J.", rating: 5, text: "Tredje bilen vi kjøper her. Alltid ærlige og hjelpsomme. Auto Viken er vår faste bilforhandler nå. Stå på!", date: "November 2023" },
  { name: "Kari N.", rating: 4, text: "Fin Volvo XC60 til en fornuftig pris. Godt vedlikeholdt bil. Litt ventetid på levering, men ellers topp.", date: "Oktober 2023" },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < count ? "fill-primary text-primary" : "text-muted-foreground/30"}`} />
      ))}
    </div>
  );
}

function KundeomtalerPage() {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="min-h-screen">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Kundeomtaler</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Hva kundene sier</h1>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Stars count={Math.round(Number(avgRating))} />
              <span className="text-2xl font-bold text-primary">{avgRating}</span>
              <span className="text-muted-foreground">/ 5 ({reviews.length} omtaler)</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.08 } } }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <Quote className="h-6 w-6 text-primary/30" />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{review.text}</p>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  <Stars count={review.rating} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
