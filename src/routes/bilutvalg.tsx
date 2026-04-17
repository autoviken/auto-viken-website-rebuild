import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/bilutvalg")({
  head: () => ({
    meta: [
      { title: "Bilutvalg — Auto Viken AS" },
      { name: "description", content: "Se vårt utvalg av kvalitetsbiler hos Auto Viken i Vestby." },
      { property: "og:title", content: "Bilutvalg — Auto Viken AS" },
      { property: "og:description", content: "Se vårt utvalg av kvalitetsbiler i Vestby." },
    ],
  }),
  component: BilutvalgPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function BilutvalgPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Bilutvalg</h1>
          <p className="mt-3 text-muted-foreground">
            Se vårt oppdaterte utvalg av kvalitetsbiler — direkte fra vårt lager.
          </p>
        </motion.div>

        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card">
          <iframe
            src="https://autovikenas.autonet.no"
            title="Auto Viken bilutvalg"
            className="block w-full"
            style={{ border: "none", height: "1000px" }}
          />
        </div>
      </div>
    </div>
  );
}
