import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Section } from "./Section";
import evImg from "@/assets/EVANG_CONSEJ.avif";

const pillars = [
  { n: "I", t: "Cruzadas evangelísticas", d: "Plazas, estadios y ciudades alcanzadas con un evangelio claro y poderoso." },
  { n: "II", t: "Congresos pastorales", d: "Capacitación a líderes y pastores para fortalecer iglesias locales." },
  { n: "III", t: "Volando en primera clase", d: "Consejería matrimonial con una metodología única que restaura hogares." },
  { n: "IV", t: "Enfoque a la Familia", d: "Certificación oficial como consejero matrimonial." },
];

export function Evangelism() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <Section id="evangelismo" index="04" eyebrow="Evangelismo y consejería">
      <div ref={ref} className="relative">
        <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
          <motion.img
            style={{ y }}
            src={evImg}
            alt="Cruzada evangelística"
            loading="lazy"
            className="absolute inset-0 w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
          <div className="absolute inset-0 flex items-end p-8 md:p-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-display font-light text-fib-34 md:text-fib-55 max-w-3xl"
            >
              Predicar, restaurar, <span className="italic gilt-text">enviar.</span>
            </motion.h2>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {pillars.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group bg-background p-8 md:p-10 hover:bg-card transition-colors duration-500"
            >
              <span className="font-display italic text-fib-34 text-primary">{p.n}</span>
              <h3 className="mt-6 font-display text-fib-21">{p.t}</h3>
              <p className="mt-4 text-fib-13 text-foreground/70 leading-relaxed">{p.d}</p>
              <div className="mt-8 h-px w-8 bg-primary transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}