export const AGM_CONTACT_TO = "agms@experienceattend.com";
export const EVENTS_CONTACT_TO = "events@experienceattend.com";

const AGM_INTENTS = new Set(["host-agm", "join-agm"]);

export const INTENT_LABELS: Record<string, string> = {
  "host-agm": "I want to host an Annual General Meeting",
  "join-agm": "I want to join an Annual General Meeting",
  "setup-innovation": "I want to setup an Innovation Challenge",
  "join-innovation": "I want to participate in an Innovation Challenge",
  "launch-product": "I want to launch a new Product",
  others: "Others",
};

export function getContactRecipient(intent: string) {
  return AGM_INTENTS.has(intent) ? AGM_CONTACT_TO : EVENTS_CONTACT_TO;
}

type ContactFormPayload = {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  intent: string;
  additionalInfo?: string;
};

export async function sendContactForm(payload: ContactFormPayload) {
  const intentLabel = INTENT_LABELS[payload.intent] ?? payload.intent;
  const contactTo = getContactRecipient(payload.intent);

  const response = await fetch(`https://formsubmit.co/ajax/${contactTo}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: payload.fullName,
      email: payload.email,
      phone: payload.phone,
      organization: payload.organization,
      intent: intentLabel,
      message: payload.additionalInfo?.trim() || "—",
      _subject: `New Attend contact request from ${payload.fullName}`,
      _replyto: payload.email,
      _template: "table",
      _captcha: "false",
    }),
  });

  const result = (await response.json()) as { success?: string | boolean; message?: string };
  const success =
    result.success === true ||
    result.success === "true" ||
    (typeof result.success === "string" &&
      result.success.toLowerCase() !== "false" &&
      Boolean(result.success));

  return { ok: response.ok && success, result };
}
