export const CONTACT_SITE_URL = "https://felipeburgos.org";

export const CONTACT_MOCK = {
  email: "felipeminitry@gmail.com",
  phone: "956 620 4546",
  phoneHref: "tel:9566204546",
} as const;

export type ContactProvider = "resend" | "web3forms" | "formspree" | "mailto";

export type ContactFormPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactConfig = {
  provider: ContactProvider;
  web3formsAccessKey?: string;
  formspreeFormId?: string;
  siteUrl: string;
  email: string;
  phone: string;
  phoneHref: string;
  isLiveProvider: boolean;
};

function normalizePhoneHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits ? `tel:${digits}` : CONTACT_MOCK.phoneHref;
}

function resolveProvider(
  forced: string | undefined,
  web3formsKey: string | undefined,
  formspreeId: string | undefined,
): ContactProvider {
  if (forced === "resend") return "resend";
  if (forced === "web3forms" && web3formsKey) return "web3forms";
  if (forced === "formspree" && formspreeId) return "formspree";
  if (forced === "mailto") return "mailto";
  if (web3formsKey) return "web3forms";
  if (formspreeId) return "formspree";
  return "mailto";
}

export function getContactConfig(): ContactConfig {
  const web3formsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() || undefined;
  const formspreeFormId = import.meta.env.VITE_FORMSPREE_FORM_ID?.trim() || undefined;
  const forcedProvider = import.meta.env.VITE_CONTACT_PROVIDER?.trim().toLowerCase();

  const provider = resolveProvider(forcedProvider, web3formsAccessKey, formspreeFormId);
  const phone = import.meta.env.VITE_CONTACT_PHONE?.trim() || CONTACT_MOCK.phone;

  const siteUrl = import.meta.env.VITE_SITE_URL?.trim() || CONTACT_SITE_URL;

  return {
    provider,
    web3formsAccessKey,
    formspreeFormId,
    siteUrl,
    email: import.meta.env.VITE_CONTACT_EMAIL?.trim() || CONTACT_MOCK.email,
    phone,
    phoneHref: normalizePhoneHref(phone),
    isLiveProvider: provider !== "mailto",
  };
}
