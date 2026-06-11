import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Section } from "./Section";
import identityImg from "@/assets/BIO_BG_PASTOR.avif";

export function Identity() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <Section id="identidad" index="02" eyebrow="Identidad y llamado">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 relative aspect-[4/5] overflow-hidden"
        >
          <motion.img
            src={identityImg}
            alt="Silueta editorial del Pastor Felipe Burgos"
            loading="lazy"
            width={1024}
            height={1024}
            style={{ y }}
            className="absolute inset-0 w-full h-[115%] object-cover grayscale"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-border/40" />
        </motion.div>

        <div className="lg:col-span-7 lg:pt-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display font-light text-fib-34 md:text-fib-55"
          >
            Un hogar al servicio del <span className="italic gilt-text">Reino.</span>
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 text-fib-13 leading-relaxed text-foreground/80">
            <p>
              Felipe Burgos camina junto a su esposa en un llamado conjunto: servir a las
              naciones con un evangelio sencillo, claro y poderoso. Lo suyo no es una
              plataforma; es una vida puesta a disposición.
            </p>
            <p>
              El ministerio nace en la intimidad de la oración y se extiende al púlpito,
              a los hogares y a las cruzadas, con la convicción de que la familia es la
              primera congregación.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-px bg-border">
            {[
              { k: "Llamado", v: "16 años" },
              { k: "Cobertura", v: "Naciones" },
              { k: "Misión", v: "Familia y Reino" },
              { k: "Ministerio", v: "Más allá de las fronteras" },
            ].map((s) => (
              <div key={s.k} className="bg-background p-6">
                <p className="text-fib-8 text-muted-foreground">{s.k}</p>
                <p className="mt-2 font-display text-fib-21">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}