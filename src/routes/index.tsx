import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Felipe Burgos — Pastor y Evangelista" },
      { name: "description", content: "Sitio oficial del Pastor y Evangelista Felipe Burgos. Cruzadas, consejería matrimonial y un ministerio que cruza fronteras." },
      { property: "og:title", content: "Felipe Burgos — Pastor y Evangelista" },
      { property: "og:description", content: "Sitio oficial del Pastor y Evangelista Felipe Burgos. Cruzadas, consejería matrimonial y un ministerio que cruza fronteras." },
    ],
  }),
  component: Index,
});

function Index() {
  return <Landing />;
}
