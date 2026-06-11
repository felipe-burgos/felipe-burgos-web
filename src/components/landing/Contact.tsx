import { motion } from "motion/react";
import { useMemo, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { getContactConfig } from "@/lib/contact.config";
import { ContactSubmitError, submitContactForm } from "@/lib/contact.submit";
import { Section } from "./Section";

export function Contact() {
  const contact = useMemo(() => getContactConfig(), []);
  const [sending, setSending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("botcheck")) {
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      toast.error("Completa todos los campos.");
      return;
    }

    setSending(true);

    try {
      const result = await submitContactForm({ name, email, subject, message });

      if (result.provider === "mailto") {
        toast.success("Abriendo tu cliente de correo…");
      } else {
        form.reset();
        toast.success("Mensaje enviado. Gracias por escribir.");
      }
    } catch (error) {
      const message =
        error instanceof ContactSubmitError
          ? error.message
          : "No se pudo enviar el mensaje. Intenta de nuevo o escríbenos directamente.";
      toast.error(message);
    } finally {
      setSending(false);
    }
  }

  return (
    <Section id="contacto" index="07" eyebrow="Contacto">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-5"
        >
          <h2 className="font-display text-fib-34 font-light md:text-fib-55">
            Escribir, llamar, <span className="gilt-text italic">orar.</span>
          </h2>
          <p className="text-fib-13 mt-8 max-w-md leading-relaxed text-foreground/75">
            Para invitaciones, consejería, oración o coordinación de cruzadas, deja tu mensaje.
            Cada palabra se lee con atención.
          </p>
          <dl className="text-fib-13 mt-12 space-y-5">
            <div>
              <dt className="text-fib-8 text-muted-foreground">Correo</dt>
              <dd className="mt-1">
                <a
                  className="transition-colors hover:text-primary"
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-fib-8 text-muted-foreground">Teléfono</dt>
              <dd className="mt-1">
                <a className="transition-colors hover:text-primary" href={contact.phoneHref}>
                  {contact.phone}
                </a>
              </dd>
            </div>
          </dl>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          className="space-y-8 lg:col-span-7"
        >
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            className="pointer-events-none absolute h-0 w-0 opacity-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
            <Field id="contact-name" label="Nombre" name="name" autoComplete="name" required />
            <Field
              id="contact-subject"
              label="Asunto"
              name="subject"
              autoComplete="off"
              required
            />
          </div>
          <Field
            id="contact-email"
            label="Correo"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <div className="border-b border-border transition-colors focus-within:border-primary">
            <label htmlFor="contact-message" className="text-fib-8 text-muted-foreground">
              Mensaje
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              minLength={10}
              rows={5}
              autoComplete="off"
              className="text-fib-13 mt-3 w-full resize-none bg-transparent pb-3 outline-none"
            />
          </div>

          <div className="space-y-3">
            <button
              type="submit"
              disabled={sending}
              className="text-fib-8 bg-gilt-subtle inline-flex items-center gap-4 px-6 py-4 transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? "Enviando…" : "Enviar mensaje"}
              <span className="inline-block h-px w-8 bg-current opacity-80" />
            </button>
            {import.meta.env.DEV && (
              <p className="text-fib-8 text-muted-foreground">
                {contact.isLiveProvider
                  ? `Envío activo vía ${contact.provider}.`
                  : "Sin proveedor configurado: el formulario abre tu cliente de correo."}
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div className="border-b border-border transition-colors focus-within:border-primary">
      <label htmlFor={id} className="text-fib-8 text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="text-fib-21 mt-3 w-full bg-transparent pb-3 font-display outline-none"
      />
    </div>
  );
}
