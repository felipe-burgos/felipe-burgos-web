import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useLayoutEffect, useState } from "react";

const links = [
  { id: "biografia", label: "Biografía" },
  { id: "identidad", label: "Identidad" },
  { id: "historia", label: "Historia" },
  { id: "evangelismo", label: "Evangelismo" },
  { id: "testimonios", label: "Testimonios" },
  { id: "templo", label: "Templo" },
  { id: "contacto", label: "Contacto" },
];

const INVITATION_URL = "https://www.templojerusalem.org/felipeburgos";

const MOBILE_MENU_DURATION = 0.65;
const MOBILE_MENU_EASE = [0.22, 1, 0.36, 1] as const;
const MOBILE_MENU_STAGGER = 0.04;
const MOBILE_MENU_BLUR = "18px";

const mobileMenuTransition = {
  duration: MOBILE_MENU_DURATION,
  ease: MOBILE_MENU_EASE,
};

function mobileMenuStagger(index: number) {
  const delay = index * MOBILE_MENU_STAGGER;
  return {
    delay,
    duration: MOBILE_MENU_DURATION - delay,
    ease: MOBILE_MENU_EASE,
  };
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-6 w-6 items-center justify-center" aria-hidden="true">
      <span
        className={`absolute block h-px w-5 bg-foreground transition-all duration-300 ease-out ${
          open ? "translate-y-0 rotate-45" : "-translate-y-[6px]"
        }`}
      />
      <span
        className={`absolute block h-px w-5 bg-foreground transition-all duration-300 ease-out ${
          open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
        }`}
      />
      <span
        className={`absolute block h-px w-5 bg-foreground transition-all duration-300 ease-out ${
          open ? "translate-y-0 -rotate-45" : "translate-y-[6px]"
        }`}
      />
    </span>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 200],
    ["oklch(0.985 0.005 85 / 0)", "oklch(0.985 0.005 85 / 0.85)"],
  );
  const border = useTransform(scrollY, [0, 200], [0, 1]);

  useLayoutEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      return;
    }

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <motion.header
        style={{ backgroundColor: bg, backdropFilter: "blur(12px)" }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <motion.div style={{ opacity: border }} className="hairline" />
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12 lg:px-20">
          <a href="#top" className="group flex items-center gap-3" onClick={closeMenu}>
            <span className="inline-block h-2 w-2 rotate-45 bg-primary transition-transform duration-700 group-hover:rotate-[225deg]" />
            <span className="font-display text-fib-21 tracking-tight">Felipe Burgos</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="text-fib-8 text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 md:gap-0">
            <a
              href={INVITATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="text-fib-8 bg-gilt-subtle inline-flex h-11 shrink-0 items-center px-4 leading-none transition-opacity hover:opacity-90 md:hidden"
            >
              Escribir
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-border leading-none transition-colors hover:border-primary md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((value) => !value)}
            >
              <MenuIcon open={open} />
            </button>
            <a
              href={INVITATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fib-8 bg-gilt-subtle hidden px-4 py-2 transition-opacity hover:opacity-90 md:inline-flex"
            >
              Escribir
            </a>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            key="mobile-nav"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={mobileMenuTransition}
            className="fixed inset-0 z-40 md:hidden"
            aria-label="Menú principal"
          >
            <motion.div
              className="absolute inset-0 bg-background/65 will-change-[backdrop-filter,opacity]"
              style={{
                backdropFilter: "blur(var(--menu-blur))",
                WebkitBackdropFilter: "blur(var(--menu-blur))",
              }}
              initial={{ opacity: 0, "--menu-blur": "0px" }}
              animate={{ opacity: 1, "--menu-blur": MOBILE_MENU_BLUR }}
              exit={{ opacity: 0, "--menu-blur": "0px" }}
              transition={mobileMenuTransition}
            />

            <div className="relative flex h-full flex-col px-6 pb-8 pt-[var(--nav-height)]">
              <ul className="flex flex-1 flex-col justify-center gap-2">
                {links.map((l, index) => (
                  <motion.li
                    key={l.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={mobileMenuStagger(index)}
                    className="w-full"
                  >
                    <a
                      href={`#${l.id}`}
                      onClick={closeMenu}
                      className="flex min-h-14 w-full items-center justify-center border-b border-border/50 px-4 py-4 text-fib-21 font-display tracking-tight text-foreground transition-colors active:bg-secondary/60"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href={INVITATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                initial={{ y: 16 }}
                animate={{ y: 0 }}
                exit={{ y: 10 }}
                transition={mobileMenuStagger(links.length)}
                className="text-fib-8 flex min-h-14 w-full transform-gpu items-center justify-center border border-foreground/20 bg-foreground px-4 py-4 leading-none text-background will-change-transform active:opacity-90"
              >
                Escribir
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
