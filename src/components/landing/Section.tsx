import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  index: string; // e.g. "02"
  eyebrow: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, index, eyebrow, children, className = "" }: SectionProps) {
  const reduce = useReducedMotion();
  return (
    <section
      id={id}
      className={`relative px-6 md:px-12 lg:px-20 py-32 md:py-48 ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 30 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex items-baseline justify-between gap-8 border-b border-border pb-6"
        >
          <div className="flex items-baseline gap-6">
            <span className="text-fib-8 text-muted-foreground tabular-nums">{index}</span>
            <span className="text-fib-8 text-foreground">{eyebrow}</span>
          </div>
          <span className="text-fib-8 text-muted-foreground hidden md:inline">Felipe Burgos · Ministerio</span>
        </motion.div>
        {children}
      </div>
    </section>
  );
}