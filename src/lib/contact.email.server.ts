import { Resend } from "resend";

import type { ContactFormPayload } from "./contact.config";

export type ContactEmailConfig = {
  apiKey: string;
  fromEmail: string;
  toEmail: string;
  siteUrl: string;
};

export function getContactEmailConfig(): ContactEmailConfig | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return null;

  const fromEmail = process.env.RESEND_FROM_EMAIL?.trim() || "contacto@felipeburgos.org";
  const toEmail =
    process.env.CONTACT_TO_EMAIL?.trim() ||
    process.env.VITE_CONTACT_EMAIL?.trim() ||
    "felipeminitry@gmail.com";
  const siteUrl = process.env.VITE_SITE_URL?.trim() || "https://felipeburgos.org";

  return { apiKey, fromEmail, toEmail, siteUrl };
}

export async function sendContactEmail(
  payload: ContactFormPayload,
  config: ContactEmailConfig,
) {
  const resend = new Resend(config.apiKey);
  const siteHost = config.siteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

  const text = [
    `Nuevo mensaje desde ${siteHost}`,
    "",
    `Nombre: ${payload.name}`,
    `Correo: ${payload.email}`,
    "",
    payload.message,
  ].join("\n");

  const { error } = await resend.emails.send({
    from: config.fromEmail,
    to: config.toEmail,
    replyTo: payload.email,
    subject: payload.subject,
    text,
  });

  if (error) {
    throw new Error(error.message);
  }
}
