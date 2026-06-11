import { motion } from "motion/react";
import { Section } from "./Section";

export function Biography() {
  return (
    <Section id="biografia" index="01" eyebrow="Biografía">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-fib-34 font-light md:text-fib-55"
        >
          <span className="italic gilt-text">Biografía</span> del Evangelista{" "}
          <span className="italic gilt-text">Felipe Burgos</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mt-12 space-y-6 text-fib-13 leading-relaxed text-foreground/80 md:mt-16"
        >
          <p>
            El evangelista <span className="italic gilt-text">Felipe Burgos</span> nació el 23 de agosto de 1992 en la
            ciudad de Cuautla, Morelos, México.
          </p>

          <p>
            A la edad de 16 años tuvo un encuentro personal con Cristo, reconociéndolo como su Salvador y siendo lleno
            del Espíritu Santo en la iglesia Filadelfia de Chinameca, Morelos, donde sus abuelos ejercieron el
            ministerio pastoral. Desde aquel 26 de abril de 2009 se apartó para servir en el ministerio, bautizándose
            en agua el 6 de junio del mismo año e iniciando su labor predicando en diferentes comunidades.
          </p>

          <p>
            En agosto de 2010 ingresó al{" "}
            <strong className="font-semibold text-foreground/90">Instituto Bíblico Magdiel</strong> en Matamoros,
            Tamaulipas, donde realizó un internado de tres años que fue clave para su formación ministerial. Durante ese
            tiempo profundizó en el conocimiento del amor de Dios como sustentador, protector y Padre. En mayo de 2013
            se unió al ministerio del{" "}
            <strong className="font-semibold text-foreground/90">
              Concilio de las Asambleas de Dios en México
            </strong>
            .
          </p>

          <p>
            En el instituto conoció a{" "}
            <strong className="font-semibold text-foreground/90">Cesia Espinosa</strong>, con quien contrajo matrimonio
            el 25 de enero de 2014. En julio de 2016 nació su hijo,{" "}
            <strong className="font-semibold text-foreground/90">Eliezer Burgos Espinosa</strong>. En agosto de 2014,
            junto a su esposa, fue invitado a formar parte del equipo pastoral en Lima, Perú.
          </p>

          <p>
            En abril de 2018 visitó Chile, donde ministró junto a la hermana Gladys Muñoz en diversas iglesias de la
            capital y en eventos evangelísticos en los alrededores. Desde 2015, junto a su esposa, ha servido como
            consejero y conferencista matrimonial, y en 2021 obtuvo un diplomado en consejería matrimonial por Enfoque a
            la Familia.
          </p>

          <p>
            En mayo de 2019 viajó a Cuba con un grupo de pastores para levantar una nueva iglesia, dejando un remanente
            de siervos comprometidos con la expansión del Reino de Dios. Ese mismo año, en septiembre, visitó la India
            junto a los pastores Rodolfo García y David González, predicando el mensaje de libertad y salvación en
            aldeas y casas hogar del norte del país. En octubre de 2022 regresó a Cuba acompañado de su esposa e hijo,
            llevando un mensaje de esperanza pese a las adversidades, experimentando la fidelidad de Cristo abriendo
            caminos y puertas.
          </p>

          <p>
            En 2020 cursó los seminarios 1 y 2 del{" "}
            <strong className="font-semibold text-foreground/90">
              Instituto de Superación Ministerial (ISUM)
            </strong>
            , fortaleciendo su preparación teológica. En enero de 2022 participó en la convención de la{" "}
            <strong className="font-semibold text-foreground/90">
              Comisión Estratégica de Plantación de Iglesias (CEPI)
            </strong>{" "}
            y la <strong className="font-semibold text-foreground/90">Red de Multiplicación</strong> en Cartagena,
            Colombia, donde recibió estrategias para la expansión del evangelio. En marzo de 2023 regresó a Colombia
            junto a los ministros Vladimir Sosa y José Estrella, predicando en las calles de Medellín y siendo testigo
            de conversiones y milagros.
          </p>

          <p>
            Posteriormente, Dios le permitió servir como Administrador del{" "}
            <strong className="font-semibold text-foreground/90">
              Departamento de Evangelismo de las Asambleas de Dios del Distrito Fronterizo
            </strong>
            . En mayo de 2023 fue invitado a colaborar como parte del cuerpo pastoral en el{" "}
            <strong className="font-semibold text-foreground/90">
              Templo Jerusalem de las Asambleas de Dios en Brownsville, Texas, Estados Unidos
            </strong>
            .
          </p>

          <p>
            Actualmente, el evangelista <span className="italic gilt-text">Felipe Burgos</span> ha sido{" "}
            <strong className="font-semibold text-foreground/90">
              ordenado por las Asambleas de Dios en Estados Unidos de América
            </strong>
            , continuando con pasión y compromiso su llamado de anunciar el evangelio y servir a las naciones.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
