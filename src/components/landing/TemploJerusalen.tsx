import { motion } from "motion/react";
import { useMemo } from "react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import jerusalemIcon from "@/assets/JERUSALEM_ICON.svg";
import { getContactConfig } from "@/lib/contact.config";
import { Section } from "./Section";

export function TemploJerusalen() {
  const contact = useMemo(() => getContactConfig(), []);
  return (
    <Section id="templo" index="06" eyebrow="Templo Jerusalem">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-7"
        >
          <h2 className="font-display font-light text-fib-34 md:text-fib-55">
            La casa local desde donde se <span className="italic gilt-text">extiende</span> el ministerio.
          </h2>
          <p className="mt-10 max-w-2xl text-fib-13 leading-relaxed text-foreground/80">
            Templo Jerusalem es la congregación que abraza, sostiene y envía. Una comunidad
            de familias que ora, sirve y se forma bajo el ministerio del Pastor Felipe Burgos.
          </p>

          <a
            href="https://www.templojerusalem.org"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-12 inline-flex w-full max-w-2xl items-center justify-between gap-6 bg-gilt-subtle p-6 transition-opacity duration-500 hover:opacity-95 md:p-8"
          >
            <img
              src={jerusalemIcon}
              alt=""
              aria-hidden="true"
              className="h-12 w-12 shrink-0 object-contain"
            />
            <span className="font-display text-fib-21 md:text-fib-34">Visitar Templo Jerusalem</span>
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary-foreground/25">
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </span>
          </a>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          className="lg:col-span-5 border-l border-border lg:pl-10"
        >
          <p className="text-fib-8 text-primary">Contacto directo · Templo</p>
          <ul className="mt-8 space-y-6">
            <li className="space-y-2">
              <div className="flex items-center gap-4">
                <Mail size={16} strokeWidth={1.5} className="shrink-0 text-primary" />
                <p className="text-fib-8 leading-none text-muted-foreground">Correo</p>
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="block pl-8 font-display text-fib-21 break-all transition-colors hover:text-primary"
              >
                {contact.email}
              </a>
            </li>
            <li className="space-y-2">
              <div className="flex items-center gap-4">
                <Phone size={16} strokeWidth={1.5} className="shrink-0 text-primary" />
                <p className="text-fib-8 leading-none text-muted-foreground">Teléfono</p>
              </div>
              <a
                href={contact.phoneHref}
                className="block pl-8 font-display text-fib-21 transition-colors hover:text-primary"
              >
                {contact.phone}
              </a>
            </li>
          </ul>
        </motion.aside>
      </div>
    </Section>
  );
}