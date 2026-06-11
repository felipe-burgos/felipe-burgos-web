import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Biography } from "./Biography";
import { Identity } from "./Identity";
import { History } from "./History";
import { Evangelism } from "./Evangelism";
import { Testimonies } from "./Testimonies";
import { TemploJerusalen } from "./TemploJerusalen";
import { Contact } from "./Contact";
import { Social } from "./Social";
import { Resources } from "./Resources";
import { Footer } from "./Footer";

export function Landing() {
  return (
    <main className="relative overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <Biography />
      <Identity />
      <History />
      <Evangelism />
      <Testimonies />
      <TemploJerusalen />
      <Contact />
      <Social />
      <Resources />
      <Footer />
    </main>
  );
}