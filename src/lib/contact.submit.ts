import { submitContactEmail } from "@/lib/api/contact.functions";

import {
  getContactConfig,
  type ContactFormPayload,
  type ContactProvider,
} from "./contact.config";

export class ContactSubmitError extends Error {
  constructor(
    message: string,
    readonly status?: number,
  ) {
    super(message);
    this.name = "ContactSubmitError";
  }
}

export type ContactSubmitResult = {
  provider: ContactProvider;
};

async function parseErrorMessage(response: Response) {
  try {
    const data = (await response.json()) as { message?: string; error?: string };
    return data.message || data.error || `Error ${response.status}`;
  } catch {
    return `Error ${response.status}`;
  }
}

async function submitWeb3Forms(accessKey: string, payload: ContactFormPayload) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      name: payload.name,
      email: payload.email,
      message: payload.message,
      subject: payload.subject,
      from_name: payload.name,
      replyto: payload.email,
      botcheck: false,
    }),
  });

  const data = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !data.success) {
    throw new ContactSubmitError(data.message || `Error ${response.status}`, response.status);
  }
}

async function submitFormspree(formId: string, payload: ContactFormPayload) {
  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      message: payload.message,
      _subject: payload.subject,
    }),
  });

  if (!response.ok) {
    throw new ContactSubmitError(await parseErrorMessage(response), response.status);
  }
}

async function submitResend(payload: ContactFormPayload) {
  try {
    await submitContactEmail({ data: payload });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo enviar el mensaje.";
    throw new ContactSubmitError(message);
  }
}

function submitMailto(email: string, payload: ContactFormPayload) {
  const body = encodeURIComponent(
    `Nombre: ${payload.name}\nCorreo: ${payload.email}\n\n${payload.message}`,
  );

  window.location.href = `mailto:${email}?subject=${encodeURIComponent(payload.subject)}&body=${body}`;
}

export async function submitContactForm(payload: ContactFormPayload): Promise<ContactSubmitResult> {
  const config = getContactConfig();

  switch (config.provider) {
    case "resend":
      await submitResend(payload);
      return { provider: "resend" };

    case "web3forms":
      if (!config.web3formsAccessKey) {
        throw new ContactSubmitError("Web3Forms no está configurado.");
      }
      await submitWeb3Forms(config.web3formsAccessKey, payload);
      return { provider: "web3forms" };

    case "formspree":
      if (!config.formspreeFormId) {
        throw new ContactSubmitError("Formspree no está configurado.");
      }
      await submitFormspree(config.formspreeFormId, payload);
      return { provider: "formspree" };

    case "mailto":
      submitMailto(config.email, payload);
      return { provider: "mailto" };
  }
}
