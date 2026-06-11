import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useScroll, a as useTransform, m as motion, b as useReducedMotion } from "../_libs/framer-motion.mjs";
import { A as ArrowUpRight, M as Mail, P as Phone, Y as Youtube, F as Facebook, I as Instagram, B as BookOpen, H as Headphones, a as Film } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const links = [
  { id: "biografia", label: "Biografía" },
  { id: "identidad", label: "Identidad" },
  { id: "historia", label: "Historia" },
  { id: "evangelismo", label: "Evangelismo" },
  { id: "testimonios", label: "Testimonios" },
  { id: "templo", label: "Templo" },
  { id: "contacto", label: "Contacto" }
];
function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 200],
    ["oklch(0.985 0.005 85 / 0)", "oklch(0.985 0.005 85 / 0.85)"]
  );
  const border = useTransform(scrollY, [0, 200], [0, 1]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      style: { backgroundColor: bg, backdropFilter: "blur(12px)" },
      className: "fixed inset-x-0 top-0 z-50",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: { opacity: border }, className: "hairline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20 py-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-3 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-2 w-2 rotate-45 bg-primary transition-transform group-hover:rotate-[225deg] duration-700" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-fib-21 tracking-tight", children: "Felipe Burgos" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden md:flex items-center gap-8", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `#${l.id}`, className: "text-fib-8 text-muted-foreground hover:text-primary transition-colors", children: l.label }) }, l.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contacto",
              className: "text-fib-8 border border-border hover:border-primary hover:text-primary transition-colors px-4 py-2",
              children: "Escribir"
            }
          )
        ] })
      ]
    }
  );
}
const heroBg = "/assets/HERO_BG_FL-DAoPr173.webp";
const pastorPhoto = "/assets/HERO_PASTOR_FL-9s8qwPOX.webp";
function Hero() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "top",
      ref,
      className: "relative mt-[var(--nav-height)] flex h-[calc(100vh-var(--nav-height))] max-h-[calc(100vh-var(--nav-height))] flex-col overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            style: { y, backgroundImage: `url(${heroBg})` },
            className: "absolute inset-0 bg-cover bg-center bg-no-repeat"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            style: { y: titleY, opacity },
            className: "relative z-10 mx-auto min-h-0 w-full max-w-7xl flex-1 px-6 pt-32 pb-10 md:px-12 md:pt-36 md:pb-12 lg:px-20 lg:pt-40",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 1, delay: 0.2 },
                    className: "text-fib-8 mb-8 text-primary",
                    children: "Pastor · Evangelista · Conferenciante"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.h1,
                  {
                    initial: { opacity: 0, y: 40 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
                    className: "font-display font-light leading-[0.9] tracking-tight",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-fib-55 md:text-fib-89", children: "Felipe" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-fib-55 italic gilt-text md:text-fib-89", children: "Burgos" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 1.2, delay: 0.9 },
                    className: "text-fib-21 mt-10 max-w-xl font-display italic text-foreground/85",
                    children: "“¡Oh Señor Jehová! He aquí que tú hiciste el cielo y la tierra con tu gran poder, y con tu brazo extendido, ni hay nada que sea difícil para ti.”"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 1, delay: 1.2 },
                    className: "text-fib-8 mt-4 text-primary",
                    children: "Jeremías 32:17"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: 40 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                  className: "pointer-events-none absolute inset-x-6 bottom-0 z-0 flex items-end justify-center md:inset-x-12 lg:inset-x-20 lg:justify-end",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: pastorPhoto,
                      alt: "Felipe Burgos",
                      className: "h-auto w-full max-w-xs object-contain object-bottom sm:max-w-sm md:max-w-md lg:max-w-none lg:w-[min(100%,28rem)] xl:w-[min(100%,32rem)]"
                    }
                  )
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function Section({ id, index, eyebrow, children, className = "" }) {
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id,
      className: `relative px-6 md:px-12 lg:px-20 py-32 md:py-48 ${className}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: reduce ? void 0 : { opacity: 0, y: 30 },
            whileInView: reduce ? void 0 : { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
            className: "mb-16 flex items-baseline justify-between gap-8 border-b border-border pb-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fib-8 text-muted-foreground tabular-nums", children: index }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fib-8 text-foreground", children: eyebrow })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fib-8 text-muted-foreground hidden md:inline", children: "Felipe Burgos · Ministerio" })
            ]
          }
        ),
        children
      ] })
    }
  );
}
function Biography() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "biografia", index: "01", eyebrow: "Biografía", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.h2,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 1 },
        className: "font-display text-fib-34 font-light md:text-fib-55",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gilt-text", children: "Biografía" }),
          " del Evangelista",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gilt-text", children: "Felipe Burgos" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 1, delay: 0.15 },
        className: "mt-12 space-y-6 text-fib-13 leading-relaxed text-foreground/80 md:mt-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "El evangelista ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gilt-text", children: "Felipe Burgos" }),
            " nació el 23 de agosto de 1992 en la ciudad de Cuautla, Morelos, México."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A la edad de 16 años tuvo un encuentro personal con Cristo, reconociéndolo como su Salvador y siendo lleno del Espíritu Santo en la iglesia Filadelfia de Chinameca, Morelos, donde sus abuelos ejercieron el ministerio pastoral. Desde aquel 26 de abril de 2009 se apartó para servir en el ministerio, bautizándose en agua el 6 de junio del mismo año e iniciando su labor predicando en diferentes comunidades." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "En agosto de 2010 ingresó al",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-semibold text-foreground/90", children: "Instituto Bíblico Magdiel" }),
            " en Matamoros, Tamaulipas, donde realizó un internado de tres años que fue clave para su formación ministerial. Durante ese tiempo profundizó en el conocimiento del amor de Dios como sustentador, protector y Padre. En mayo de 2013 se unió al ministerio del",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-semibold text-foreground/90", children: "Concilio de las Asambleas de Dios en México" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "En el instituto conoció a",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-semibold text-foreground/90", children: "Cesia Espinosa" }),
            ", con quien contrajo matrimonio el 25 de enero de 2014. En julio de 2016 nació su hijo,",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-semibold text-foreground/90", children: "Eliezer Burgos Espinosa" }),
            ". En agosto de 2014, junto a su esposa, fue invitado a formar parte del equipo pastoral en Lima, Perú."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "En abril de 2018 visitó Chile, donde ministró junto a la hermana Gladys Muñoz en diversas iglesias de la capital y en eventos evangelísticos en los alrededores. Desde 2015, junto a su esposa, ha servido como consejero y conferencista matrimonial, y en 2021 obtuvo un diplomado en consejería matrimonial por Enfoque a la Familia." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "En mayo de 2019 viajó a Cuba con un grupo de pastores para levantar una nueva iglesia, dejando un remanente de siervos comprometidos con la expansión del Reino de Dios. Ese mismo año, en septiembre, visitó la India junto a los pastores Rodolfo García y David González, predicando el mensaje de libertad y salvación en aldeas y casas hogar del norte del país. En octubre de 2022 regresó a Cuba acompañado de su esposa e hijo, llevando un mensaje de esperanza pese a las adversidades, experimentando la fidelidad de Cristo abriendo caminos y puertas." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "En 2020 cursó los seminarios 1 y 2 del",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-semibold text-foreground/90", children: "Instituto de Superación Ministerial (ISUM)" }),
            ", fortaleciendo su preparación teológica. En enero de 2022 participó en la convención de la",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-semibold text-foreground/90", children: "Comisión Estratégica de Plantación de Iglesias (CEPI)" }),
            " ",
            "y la ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-semibold text-foreground/90", children: "Red de Multiplicación" }),
            " en Cartagena, Colombia, donde recibió estrategias para la expansión del evangelio. En marzo de 2023 regresó a Colombia junto a los ministros Vladimir Sosa y José Estrella, predicando en las calles de Medellín y siendo testigo de conversiones y milagros."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Posteriormente, Dios le permitió servir como Administrador del",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-semibold text-foreground/90", children: "Departamento de Evangelismo de las Asambleas de Dios del Distrito Fronterizo" }),
            ". En mayo de 2023 fue invitado a colaborar como parte del cuerpo pastoral en el",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-semibold text-foreground/90", children: "Templo Jerusalén de las Asambleas de Dios en Brownsville, Texas, Estados Unidos" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Actualmente, el evangelista ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gilt-text", children: "Felipe Burgos" }),
            " ha sido",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-semibold text-foreground/90", children: "ordenado por las Asambleas de Dios en Estados Unidos de América" }),
            ", continuando con pasión y compromiso su llamado de anunciar el evangelio y servir a las naciones."
          ] })
        ]
      }
    )
  ] }) });
}
const identityImg = "/assets/identity-Dz55Orw1.jpg";
function Identity() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "identidad", index: "02", eyebrow: "Identidad y llamado", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 1 },
        className: "lg:col-span-5 relative aspect-[4/5] overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.img,
            {
              src: identityImg,
              alt: "Silueta editorial del Pastor Felipe Burgos",
              loading: "lazy",
              width: 1024,
              height: 1024,
              style: { y },
              className: "absolute inset-0 w-full h-[115%] object-cover grayscale"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 ring-1 ring-inset ring-border/40" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 lg:pt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h2,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 1 },
          className: "font-display font-light text-fib-34 md:text-fib-55",
          children: [
            "Un hogar al servicio del ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gilt-text", children: "Reino." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 text-fib-13 leading-relaxed text-foreground/80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Felipe Burgos camina junto a su esposa en un llamado conjunto: servir a las naciones con un evangelio sencillo, claro y poderoso. Lo suyo no es una plataforma; es una vida puesta a disposición." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "El ministerio nace en la intimidad de la oración y se extiende al púlpito, a los hogares y a las cruzadas, con la convicción de que la familia es la primera congregación." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-2 gap-px bg-border", children: [
        { k: "Llamado", v: "16 años" },
        { k: "Cobertura", v: "Naciones" },
        { k: "Misión", v: "Familia y Reino" },
        { k: "Ministerio", v: "Más allá de las fronteras" }
      ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-fib-8 text-muted-foreground", children: s.k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-fib-21", children: s.v })
      ] }, s.k)) })
    ] })
  ] }) });
}
const historyImg = "/assets/history-gHkYnrBy.jpg";
const milestones = [
  {
    year: "1989",
    title: "El llamado a los 16 años",
    body: "Una voz interior y una certeza que no se ha apagado: Dios lo apartó siendo apenas un adolescente para predicar a las naciones."
  },
  {
    year: "2001",
    title: "Más allá de las fronteras",
    body: "Funda el ministerio bajo la convicción de que el evangelio no se detiene en mapas, idiomas ni culturas."
  },
  {
    year: "2009",
    title: "La provisión inesperada",
    body: "Testimonios documentados de provisión sobrenatural en temporadas donde lo único visible era la fe."
  },
  {
    year: "2017",
    title: "Llamado a India",
    body: "Una puerta abierta a Oriente: cruzadas, iglesias y vidas alcanzadas con un mensaje que cruza océanos."
  }
];
function History() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "historia", index: "03", eyebrow: "Historia", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 lg:sticky lg:top-32 self-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h2,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 1 },
          className: "font-display font-light text-fib-34 md:text-fib-55",
          children: [
            "Una historia ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gilt-text", children: "escrita" }),
            " por la fidelidad de Dios."
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 relative aspect-[3/4] overflow-hidden hidden lg:block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: historyImg, alt: "Biblia abierta", loading: "lazy", className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "lg:col-span-7 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[7px] top-2 bottom-2 w-px bg-border" }),
      milestones.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.li,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.8, delay: i * 0.1 },
          className: "relative pl-12 pb-20 last:pb-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-2 h-4 w-4 rounded-full border border-primary bg-background" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-[5px] top-[13px] h-1.5 w-1.5 rounded-full bg-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-fib-8 text-primary", children: m.year }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-fib-21 md:text-fib-34", children: m.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-fib-13 text-foreground/75 max-w-prose leading-relaxed", children: m.body })
          ]
        },
        m.year
      ))
    ] })
  ] }) });
}
const evImg = "/assets/evangelism-BVJLRMjT.jpg";
const pillars = [
  { n: "I", t: "Cruzadas evangelísticas", d: "Plazas, estadios y ciudades alcanzadas con un evangelio claro y poderoso." },
  { n: "II", t: "Congresos pastorales", d: "Capacitación a líderes y pastores para fortalecer iglesias locales." },
  { n: "III", t: "Volando en primera clase", d: "Consejería matrimonial con una metodología única que restaura hogares." },
  { n: "IV", t: "Enfoque a la Familia", d: "Certificación oficial como consejero matrimonial." }
];
function Evangelism() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "evangelismo", index: "04", eyebrow: "Evangelismo y consejería", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[60vh] md:h-[80vh] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.img,
        {
          style: { y },
          src: evImg,
          alt: "Cruzada evangelística",
          loading: "lazy",
          className: "absolute inset-0 w-full h-[120%] object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-end p-8 md:p-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h2,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 1 },
          className: "font-display font-light text-fib-34 md:text-fib-55 max-w-3xl",
          children: [
            "Predicar, restaurar, ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gilt-text", children: "enviar." })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border", children: pillars.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.7, delay: i * 0.08 },
        className: "group bg-background p-8 md:p-10 hover:bg-card transition-colors duration-500",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display italic text-fib-34 text-primary", children: p.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-fib-21", children: p.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-fib-13 text-foreground/70 leading-relaxed", children: p.d }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 h-px w-8 bg-primary transition-all duration-500 group-hover:w-full" })
        ]
      },
      p.n
    )) })
  ] }) });
}
const items$1 = [
  {
    cat: "Sanidad",
    quote: "Llegué en silla de ruedas tras años de diagnóstico; la oración del pastor fue el momento exacto en el que volví a caminar.",
    by: "M. R. — Bogotá"
  },
  {
    cat: "Liberación",
    quote: "Algo se rompió esa noche. Volví a casa con paz por primera vez en una década. Mi familia entera se transformó.",
    by: "L. A. — Madrid"
  },
  {
    cat: "Profecía cumplida",
    quote: "Una palabra recibida hace siete años se cumplió al pie de la letra: hoy sirvo en el ministerio que él anunció.",
    by: "J. P. — Lima"
  }
];
function Testimonies() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "testimonios", index: "05", eyebrow: "Testimonios", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.h2,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 1 },
        className: "font-display font-light text-fib-34 md:text-fib-55 max-w-4xl",
        children: [
          "Vidas que cuentan, en ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gilt-text", children: "primera persona." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid grid-cols-1 md:grid-cols-3 gap-8", children: items$1.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.figure,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.9, delay: i * 0.12 },
        className: "relative border-t border-border pt-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fib-8 text-primary", children: t.cat }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-6 font-display italic text-fib-21 leading-snug text-foreground/90", children: [
            "“",
            t.quote,
            "”"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "mt-8 text-fib-8 text-muted-foreground", children: t.by })
        ]
      },
      t.by
    )) })
  ] });
}
function TemploJerusalen() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "templo", index: "06", eyebrow: "Templo Jerusalén", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 1 },
        className: "lg:col-span-7",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-light text-fib-34 md:text-fib-55", children: [
            "La casa local desde donde se ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gilt-text", children: "extiende" }),
            " el ministerio."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 max-w-2xl text-fib-13 leading-relaxed text-foreground/80", children: "Templo Jerusalén es la congregación que abraza, sostiene y envía. Una comunidad de familias que ora, sirve y se forma bajo el ministerio del Pastor Felipe Burgos." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://www.templojerusalem.org",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group mt-12 inline-flex items-center gap-6 border border-border hover:border-primary hover:bg-card transition-all duration-500 p-6 md:p-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-fib-21 md:text-fib-34", children: "Visitar Templo Jerusalén" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-12 w-12 items-center justify-center rounded-full border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 18, strokeWidth: 1.5 }) })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.aside,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 1, delay: 0.15 },
        className: "lg:col-span-5 border-l border-border lg:pl-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-fib-8 text-primary", children: "Contacto directo · Templo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-8 space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16, strokeWidth: 1.5, className: "mt-1 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-fib-8 text-muted-foreground", children: "Correo" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:Felipeministry@gmail.com", className: "font-display text-fib-21 hover:text-primary transition-colors break-all", children: "Felipeministry@gmail.com" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16, strokeWidth: 1.5, className: "mt-1 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-fib-8 text-muted-foreground", children: "Teléfono" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:9566204546", className: "font-display text-fib-21 hover:text-primary transition-colors", children: "956 620 4546" })
              ] })
            ] })
          ] })
        ]
      }
    )
  ] }) });
}
function Contact() {
  const [sending, setSending] = reactExports.useState(false);
  function onSubmit(e) {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);
    const body = encodeURIComponent(
      `Nombre: ${data.get("name")}
Correo: ${data.get("email")}

${data.get("message")}`
    );
    window.location.href = `mailto:Felipeministry@gmail.com?subject=${encodeURIComponent(
      "Contacto desde sitio web"
    )}&body=${body}`;
    toast.success("Abriendo tu cliente de correo…");
    setTimeout(() => setSending(false), 1200);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "contacto", index: "07", eyebrow: "Contacto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 1 },
        className: "lg:col-span-5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-light text-fib-34 md:text-fib-55", children: [
            "Escribir, llamar, ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gilt-text", children: "orar." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-fib-13 text-foreground/75 leading-relaxed max-w-md", children: "Para invitaciones, consejería, oración o coordinación de cruzadas, deja tu mensaje. Cada palabra se lee con atención." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-12 space-y-5 text-fib-13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-fib-8 text-muted-foreground", children: "Correo" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:text-primary transition-colors", href: "mailto:Felipeministry@gmail.com", children: "Felipeministry@gmail.com" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-fib-8 text-muted-foreground", children: "Teléfono" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:text-primary transition-colors", href: "tel:9566204546", children: "956 620 4546" }) })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.form,
      {
        onSubmit,
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 1, delay: 0.15 },
        className: "lg:col-span-7 space-y-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { id: "name", label: "Nombre", name: "name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { id: "email", label: "Correo", name: "email", type: "email", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border focus-within:border-primary transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "text-fib-8 text-muted-foreground", children: "Mensaje" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                id: "message",
                name: "message",
                required: true,
                rows: 4,
                className: "mt-3 w-full bg-transparent text-fib-13 outline-none resize-none pb-3"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "submit",
              disabled: sending,
              className: "group inline-flex items-center gap-4 border border-primary text-primary px-6 py-4 text-fib-8 hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-60",
              children: [
                sending ? "Enviando…" : "Enviar mensaje",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-px w-8 bg-current transition-all group-hover:w-16" })
              ]
            }
          )
        ]
      }
    )
  ] }) });
}
function Field({ id, label, name, type = "text", required }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border focus-within:border-primary transition-colors", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: id, className: "text-fib-8 text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        id,
        name,
        type,
        required,
        className: "mt-3 w-full bg-transparent text-fib-21 font-display outline-none pb-3"
      }
    )
  ] });
}
const tiles = [
  {
    icon: Youtube,
    title: "Mira milagros en acción",
    hoverTitle: "Cada predicación es una semilla.",
    meta: "YouTube",
    url: "https://youtube.com",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    icon: Facebook,
    title: "Conversa con la comunidad",
    hoverTitle: "Aquí se ora, se ríe, se acompaña.",
    meta: "Facebook",
    url: "https://facebook.com",
    span: "md:col-span-2"
  },
  {
    icon: Instagram,
    title: "Momentos detrás del ministerio",
    hoverTitle: "Lo cotidiano también predica.",
    meta: "Instagram",
    url: "https://instagram.com",
    span: "md:col-span-2"
  }
];
function Social() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "redes", index: "08", eyebrow: "Redes sociales", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.h2,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 1 },
        className: "font-display font-light text-fib-34 md:text-fib-55 max-w-3xl",
        children: [
          "No solo seguir. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gilt-text", children: "Acompañar." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-1 md:grid-cols-4 gap-px bg-border", children: tiles.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TileCard, { tile: t, index: i }, t.meta)) })
  ] });
}
function TileCard({ tile, index }) {
  const [hover, setHover] = reactExports.useState(false);
  const Icon = tile.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.a,
    {
      href: tile.url,
      target: "_blank",
      rel: "noopener noreferrer",
      onHoverStart: () => setHover(true),
      onHoverEnd: () => setHover(false),
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.8, delay: index * 0.1 },
      className: `group relative overflow-hidden bg-background hover:bg-card transition-colors duration-700 p-8 md:p-12 min-h-[260px] flex flex-col justify-between ${tile.span}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 28, strokeWidth: 1.25, className: "text-foreground/80 group-hover:text-primary transition-colors" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 18, strokeWidth: 1.5, className: "text-muted-foreground translate-x-0 translate-y-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[5.5rem] md:h-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h3,
            {
              animate: { opacity: hover ? 0 : 1, y: hover ? -8 : 0 },
              transition: { duration: 0.4 },
              className: "absolute inset-0 font-display text-fib-21 md:text-fib-34 leading-tight",
              children: tile.title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h3,
            {
              animate: { opacity: hover ? 1 : 0, y: hover ? 0 : 8 },
              transition: { duration: 0.4 },
              className: "absolute inset-0 font-display italic text-fib-21 md:text-fib-34 leading-tight gilt-text",
              children: tile.hoverTitle
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-fib-8 text-muted-foreground", children: tile.meta })
      ]
    }
  );
}
const items = [
  { icon: BookOpen, kind: "Libros", note: "Próximamente" },
  { icon: Headphones, kind: "Audios y prédicas", note: "Próximamente" },
  { icon: Film, kind: "Videos y series", note: "Próximamente" }
];
function Resources() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "recursos", index: "09", eyebrow: "Recursos", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h2,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 1 },
          className: "lg:col-span-7 font-display font-light text-fib-34 md:text-fib-55",
          children: [
            "Materiales para ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gilt-text", children: "edificar" }),
            ", en camino."
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "lg:col-span-5 text-fib-13 text-foreground/70 leading-relaxed", children: "Este espacio se irá llenando con libros, audios y videos del ministerio. Una biblioteca pensada para acompañar al lector y al creyente." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-border", children: items.map((it, i) => {
      const Icon = it.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.7, delay: i * 0.1 },
          className: "bg-background p-10 group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 24, strokeWidth: 1.25, className: "text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 font-display text-fib-21", children: it.kind }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-fib-8 text-muted-foreground", children: it.note }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 h-px w-8 bg-border group-hover:w-full group-hover:bg-primary transition-all duration-500" })
          ]
        },
        it.kind
      );
    }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative border-t border-border px-6 md:px-12 lg:px-20 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10 items-end", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-fib-34 leading-none", children: "Felipe Burgos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-fib-8 text-muted-foreground", children: "Pastor y Evangelista" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-fib-13 text-foreground/70", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "“Ni hay nada que sea difícil para ti.”" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-fib-8 text-primary", children: "Jeremías 32:17" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:text-right text-fib-8 text-muted-foreground space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Ministerio Felipe Burgos"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Diseño editorial · Proporción áurea" })
    ] })
  ] }) });
}
function Landing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative overflow-x-hidden bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Biography, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Identity, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(History, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Evangelism, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonies, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TemploJerusalen, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Social, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Resources, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Landing, {});
}
export {
  Index as component
};
