import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { getContactEmailConfig, sendContactEmail } from "../contact.email.server";

const contactPayloadSchema = z.object({
  name: z.string().trim().min(1, "El nombre es obligatorio."),
  email: z.string().trim().email("Correo inválido."),
  subject: z.string().trim().min(1, "El asunto es obligatorio."),
  message: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

export const submitContactEmail = createServerFn({ method: "POST" })
  .inputValidator(contactPayloadSchema)
  .handler(async ({ data }) => {
    const config = getContactEmailConfig();
    if (!config) {
      throw new Error("Resend no está configurado (falta RESEND_API_KEY).");
    }

    await sendContactEmail(data, config);
    return { ok: true as const };
  });
