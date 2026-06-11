import { motion } from "motion/react";
import { Section } from "./Section";
import historyImg from "@/assets/history.jpg";

const milestones = [
  {
    year: "1992",
    title: "Nacimiento",
    body: "El 23 de agosto de 1992 nace en Cuautla, Morelos, México, en el seno de una familia donde la fe y el servicio marcarían su camino.",
  },
  {
    year: "2009",
    title: "El llamado a los 16 años",
    body: "A los 16 años tiene un encuentro personal con Cristo en la iglesia Filadelfia de Chinameca. El 26 de abril de 2009 se aparta para el ministerio; el 6 de junio se bautiza en agua e inicia a predicar en distintas comunidades.",
  },
  {
    year: "2013",
    title: "Más allá de las fronteras",
    body: "Tras su formación en el Instituto Bíblico Magdiel, en mayo de 2013 se une al ministerio del Concilio de las Asambleas de Dios en México, con la convicción de que el evangelio no se detiene en mapas, idiomas ni culturas.",
  },
  {
    year: "2019",
    title: "Llamado a India",
    body: "En septiembre de 2019 visita la India junto a los pastores Rodolfo García y David González, predicando el mensaje de libertad y salvación en aldeas y casas hogar del norte del país.",
  },
];

export function History() {
  return (
    <Section id="historia" index="03" eyebrow="Historia">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display font-light text-fib-34 md:text-fib-55"
          >
            Una historia <span className="italic gilt-text">escrita</span> por la fidelidad de Dios.
          </motion.h2>
          <div className="mt-10 relative aspect-[3/4] overflow-hidden hidden lg:block">
            <img src={historyImg} alt="Biblia abierta" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>

        <ol className="lg:col-span-7 relative">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-border" />
          {milestones.map((m, i) => (
            <motion.li
              key={`${m.year}-${m.title}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative pb-20 last:pb-0"
            >
              <div className="flex items-center gap-6">
                <span className="relative z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-primary bg-background">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                <p className="text-fib-8 leading-none text-primary">{m.year}</p>
              </div>
              <div className="ml-10 mt-3">
                <h3 className="font-display text-fib-21 md:text-fib-34">{m.title}</h3>
                <p className="mt-4 text-fib-13 text-foreground/75 max-w-prose leading-relaxed">{m.body}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}