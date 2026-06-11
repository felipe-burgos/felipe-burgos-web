import { motion } from "motion/react";
import { Section } from "./Section";

const items = [
  {
    cat: "Sanidad",
    quote:
      "Llegué en silla de ruedas tras años de diagnóstico; la oración del pastor fue el momento exacto en el que volví a caminar.",
    by: "M. R. — Bogotá",
  },
  {
    cat: "Liberación",
    quote:
      "Algo se rompió esa noche. Volví a casa con paz por primera vez en una década. Mi familia entera se transformó.",
    by: "L. A. — Madrid",
  },
  {
    cat: "Profecía cumplida",
    quote:
      "Una palabra recibida hace siete años se cumplió al pie de la letra: hoy sirvo en el ministerio que él anunció.",
    by: "J. P. — Lima",
  },
];

export function Testimonies() {
  return (
    <Section id="testimonios" index="05" eyebrow="Testimonios">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="font-display font-light text-fib-34 md:text-fib-55 max-w-4xl"
      >
        Vidas que cuentan, en <span className="italic gilt-text">primera persona.</span>
      </motion.h2>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((t, i) => (
          <motion.figure
            key={t.by}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: i * 0.12 }}
            className="relative border-t border-border pt-8"
          >
            <span className="text-fib-8 text-primary">{t.cat}</span>
            <blockquote className="mt-6 font-display italic text-fib-21 leading-snug text-foreground/90">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-8 text-fib-8 text-muted-foreground">{t.by}</figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}