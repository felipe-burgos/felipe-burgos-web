import { motion } from "motion/react";
import { BookOpen, Headphones, Film } from "lucide-react";
import { Section } from "./Section";

const items = [
  { icon: BookOpen, kind: "Libros", note: "Próximamente" },
  { icon: Headphones, kind: "Audios y prédicas", note: "Próximamente" },
  { icon: Film, kind: "Videos y series", note: "Próximamente" },
];

export function Resources() {
  return (
    <Section id="recursos" index="09" eyebrow="Recursos">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-7 font-display font-light text-fib-34 md:text-fib-55"
        >
          Materiales para <span className="italic gilt-text">edificar</span>, en camino.
        </motion.h2>
        <p className="lg:col-span-5 text-fib-13 text-foreground/70 leading-relaxed">
          Este espacio se irá llenando con libros, audios y videos del ministerio.
          Una biblioteca pensada para acompañar al lector y al creyente.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.kind}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-background p-10 group"
            >
              <Icon size={24} strokeWidth={1.25} className="text-primary" />
              <p className="mt-8 font-display text-fib-21">{it.kind}</p>
              <p className="mt-3 text-fib-8 text-muted-foreground">{it.note}</p>
              <div className="mt-8 h-px w-8 bg-border group-hover:w-full group-hover:bg-primary transition-all duration-500" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}