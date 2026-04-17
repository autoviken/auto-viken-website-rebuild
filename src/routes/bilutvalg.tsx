import { createFileRoute } from "@tanstack/react-router";

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

function BilutvalgPage() {
  return (
    <iframe
      src="https://autovikenas.autonet.no"
      title="Auto Viken bilutvalg"
      style={{ border: "none", width: "100%", height: "calc(100vh - 4rem)", display: "block" }}
    />
  );
}
