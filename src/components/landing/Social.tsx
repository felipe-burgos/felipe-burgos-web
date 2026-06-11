import { motion } from "motion/react";
import { useState } from "react";
import { Youtube, Facebook, Instagram, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

type Tile = {
  icon: typeof Youtube;
  title: string;
  hoverTitle: string;
  meta: string;
  url: string;
  span: string;
};

const tiles: Tile[] = [
  {
    icon: Youtube,
    title: "Mira milagros en acción",
    hoverTitle: "Cada predicación es una semilla.",
    meta: "YouTube",
    url: "https://youtube.com/@felipeburgosevangelista?si=B4qhnnPynmyK03kg",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    icon: Facebook,
    title: "Conversa con la comunidad",
    hoverTitle: "Aquí se ora, se ríe, se acompaña.",
    meta: "Facebook",
    url: "https://www.facebook.com/share/1BERTGoHZX/",
    span: "md:col-span-2",
  },
  {
    icon: Instagram,
    title: "Momentos detrás del ministerio",
    hoverTitle: "Lo cotidiano también predica.",
    meta: "Instagram",
    url: "https://www.instagram.com/felipeburgosministry?utm_source=qr&igsh=NmVhMGFnYm53NTdt",
    span: "md:col-span-2",
  },
];

export function Social() {
  return (
    <Section id="redes" index="08" eyebrow="Redes sociales">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="font-display font-light text-fib-34 md:text-fib-55 max-w-3xl"
      >
        No solo seguir. <span className="italic gilt-text">Acompañar.</span>
      </motion.h2>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-px bg-border">
        {tiles.map((t, i) => (
          <TileCard key={t.meta} tile={t} index={i} />
        ))}
      </div>
    </Section>
  );
}

function TileCard({ tile, index }: { tile: Tile; index: number }) {
  const [hover, setHover] = useState(false);
  const Icon = tile.icon;

  return (
    <motion.a
      href={tile.url}
      target="_blank"
      rel="noopener noreferrer"
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`group relative overflow-hidden bg-background hover:bg-card transition-colors duration-700 p-8 md:p-12 min-h-[260px] flex flex-col justify-between ${tile.span}`}
    >
      <div className="flex items-start justify-between">
        <Icon size={28} strokeWidth={1.25} className="text-foreground/80 group-hover:text-primary transition-colors" />
        <ArrowUpRight size={18} strokeWidth={1.5} className="text-muted-foreground translate-x-0 translate-y-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>

      <div className="relative h-[5.5rem] md:h-24">
        <motion.h3
          animate={{ opacity: hover ? 0 : 1, y: hover ? -8 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 font-display text-fib-21 md:text-fib-34 leading-tight"
        >
          {tile.title}
        </motion.h3>
        <motion.h3
          animate={{ opacity: hover ? 1 : 0, y: hover ? 0 : 8 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 font-display italic text-fib-21 md:text-fib-34 leading-tight gilt-text"
        >
          {tile.hoverTitle}
        </motion.h3>
      </div>

      <p className="text-fib-8 text-muted-foreground">{tile.meta}</p>
    </motion.a>
  );
}