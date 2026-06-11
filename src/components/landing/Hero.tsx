import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroBg from "@/assets/HERO_BG_FL.webp";
import pastorPhoto from "@/assets/HERO_PASTOR_FL.webp";
import { useIsMobile } from "@/hooks/use-mobile";

const pastorImageClass =
  "h-auto w-full max-w-xs object-contain object-bottom sm:max-w-sm md:max-w-md lg:max-w-none lg:w-[min(100%,28rem)] xl:w-[min(100%,32rem)]";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative mt-[var(--nav-height)] flex flex-col overflow-x-hidden md:h-[calc(100vh-var(--nav-height))] md:max-h-[calc(100vh-var(--nav-height))] md:overflow-hidden"
    >
      {isMobile ? (
        <div
          style={{ backgroundImage: `url(${heroBg})` }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
      ) : (
        <motion.div
          style={{ y, backgroundImage: `url(${heroBg})` }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />

      <motion.div
        style={isMobile ? undefined : { y: titleY, opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-8 pt-10 md:min-h-0 md:flex-1 md:px-12 md:pb-12 md:pt-36 lg:px-20 lg:pt-40"
      >
        {/* Mobile: centrado, imagen en flujo */}
        <div className="flex flex-col items-center text-center md:hidden">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-fib-8 mb-6 text-primary"
          >
            Pastor · Evangelista · Conferenciante
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-visible font-display font-light tracking-tight"
          >
            <span className="block text-[5.25rem] leading-[0.9]">Felipe</span>
            <span className="gilt-text text-[5.25rem] italic leading-[1.2]">Burgos</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 w-full max-w-xs"
          >
            <img src={pastorPhoto} alt="Felipe Burgos" className={pastorImageClass} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="text-fib-21 mt-8 max-w-sm font-display italic text-foreground/85"
          >
            “¡Oh Señor Jehová! He aquí que tú hiciste el cielo y la tierra con tu gran poder, y con tu
            brazo extendido, no hay nada que sea difícil para ti.”
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-fib-8 mt-4 text-primary"
          >
            Jeremías 32:17
          </motion.p>
        </div>

        {/* Desktop: layout original */}
        <div className="relative z-10 hidden max-w-xl md:block">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-fib-8 mb-8 text-primary"
          >
            Pastor · Evangelista · Conferenciante
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-light leading-[0.9] tracking-tight"
          >
            <span className="block text-fib-55 md:text-fib-89">Felipe</span>
            <span className="gilt-text block text-fib-55 italic leading-[1.2] md:text-fib-89">Burgos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="text-fib-21 mt-10 max-w-xl font-display italic text-foreground/85"
          >
            “¡Oh Señor Jehová! He aquí que tú hiciste el cielo y la tierra con tu gran poder, y con tu
            brazo extendido, no hay nada que sea difícil para ti.”
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-fib-8 mt-4 text-primary"
          >
            Jeremías 32:17
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-x-6 bottom-0 z-0 hidden items-end justify-center md:flex md:inset-x-12 lg:inset-x-20 lg:justify-end"
        >
          <img src={pastorPhoto} alt="" aria-hidden="true" className={pastorImageClass} />
        </motion.div>
      </motion.div>
    </section>
  );
}
