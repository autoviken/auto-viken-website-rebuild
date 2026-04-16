import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { placeholderCars, type Car } from "@/lib/cars-data";

export const Route = createFileRoute("/bilutvalg")({
  head: () => ({
    meta: [
      { title: "Bilutvalg — Auto Viken AS" },
      { name: "description", content: "Se vårt utvalg av kvalitetsbiler. Filtrer etter merke, pris, drivstoff og mer." },
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
  const [search, setSearch] = useState("");
  const [fuelFilter, setFuelFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const fuels = useMemo(() => [...new Set(placeholderCars.map((c) => c.fuel))], []);

  const filtered = useMemo(() => {
    return placeholderCars.filter((car) => {
      const q = search.toLowerCase();
      const matchSearch = !q || `${car.make} ${car.model}`.toLowerCase().includes(q);
      const matchFuel = !fuelFilter || car.fuel === fuelFilter;
      return matchSearch && matchFuel;
    });
  }, [search, fuelFilter]);

  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Bilutvalg</h1>
          <p className="mt-3 text-muted-foreground">
            {filtered.length} biler tilgjengelig{fuelFilter ? ` (${fuelFilter})` : ""}
          </p>
        </motion.div>

        {/* Search + Filters */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Søk etter merke eller modell..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-md border border-input bg-secondary py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 rounded-md border border-input bg-secondary px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
          >
            <SlidersHorizontal className="h-4 w-4" /> Filter
          </button>
        </div>

        {showFilters && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setFuelFilter("")}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${!fuelFilter ? "bg-primary text-primary-foreground" : "border border-input text-muted-foreground hover:text-foreground"}`}
            >
              Alle
            </button>
            {fuels.map((fuel) => (
              <button
                key={fuel}
                onClick={() => setFuelFilter(fuel)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${fuelFilter === fuel ? "bg-primary text-primary-foreground" : "border border-input text-muted-foreground hover:text-foreground"}`}
              >
                {fuel}
              </button>
            ))}
          </motion.div>
        )}

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((car, i) => (
            <motion.div
              key={car.id}
              initial="hidden"
              animate="visible"
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.05 } } }}
            >
              <button
                onClick={() => setSelectedCar(car)}
                className="group block w-full overflow-hidden rounded-xl border border-border bg-card text-left transition-colors hover:border-primary/30"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={car.image} alt={`${car.make} ${car.model}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">{car.make}</p>
                  <h3 className="mt-1 text-lg font-semibold">{car.model}</h3>
                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span>{car.year}</span>
                    <span>{car.mileage.toLocaleString("nb-NO")} km</span>
                    <span>{car.fuel}</span>
                    <span>{car.transmission}</span>
                  </div>
                  <p className="mt-3 text-xl font-bold text-primary">{car.price.toLocaleString("nb-NO")} kr</p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center text-muted-foreground">
            <p>Ingen biler funnet. Prøv å justere søket eller filtrene.</p>
          </div>
        )}
      </div>

      {/* Car Detail Modal */}
      {selectedCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4" onClick={() => setSelectedCar(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card p-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelectedCar(null)} className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 backdrop-blur-sm hover:bg-background">
              <X className="h-4 w-4" />
            </button>
            <div className="aspect-[16/10] overflow-hidden rounded-t-2xl">
              <img src={selectedCar.image} alt={`${selectedCar.make} ${selectedCar.model}`} className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-primary">{selectedCar.make}</p>
              <h2 className="mt-1 text-2xl font-bold">{selectedCar.model}</h2>
              <p className="mt-3 text-2xl font-bold text-primary">{selectedCar.price.toLocaleString("nb-NO")} kr</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{selectedCar.description}</p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                {[
                  ["Årsmodell", selectedCar.year],
                  ["Kilometerstand", `${selectedCar.mileage.toLocaleString("nb-NO")} km`],
                  ["Drivstoff", selectedCar.fuel],
                  ["Girkasse", selectedCar.transmission],
                  ["Hestekrefter", `${selectedCar.horsepower} hk`],
                  ["Farge", selectedCar.color],
                ].map(([label, value]) => (
                  <div key={String(label)} className="rounded-lg bg-secondary p-3">
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="font-semibold">{value}</p>
                  </div>
                ))}
              </div>
              <a
                href="tel:+4764982450"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Ring oss om denne bilen
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
