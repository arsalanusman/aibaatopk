import { SUPPORT_ACK_LINE } from "./constants";
import { messageNeedsHuman } from "./human";

const DEFAULT_MODEL = "gpt-4o-mini";

function looksEnglish(text: string): boolean {
  const latin = (text.match(/[a-zA-Z]/g) || []).length;
  const urdu = (text.match(/[\u0600-\u06FF]/g) || []).length;
  if (latin === 0 && urdu === 0) return false;
  return latin > urdu * 2;
}

function cannedReply(userText: string, needsHuman: boolean): string {
  const en = looksEnglish(userText);
  if (en) {
    const extra = needsHuman
      ? " Our team will review payment or account details manually — we cannot promise refunds here."
      : " For login issues, try clearing cache or use the same email you signed up with.";
    return (
      `Thanks for reaching out. This is Baato AI support (Roman Urdu companions app — not Baato Maps). ` +
      `We've noted your message and a human will follow up soon.${extra} ${SUPPORT_ACK_LINE}`
    );
  }
  const extra = needsHuman
    ? " Payment ya account ke masail ke liye team manually dekhegi — refund ya fix ka promise nahi kar sakte yahan."
    : " Login ke liye cache clear karein ya wahi email use karein jis se sign up kiya tha.";
  return (
    `Shukriya — yeh Baato AI support hai (Roman Urdu companions, Baato Maps nahi). ` +
    `Aapka message receive ho gaya.${extra} ${SUPPORT_ACK_LINE}`
  );
}

function ensureAck(reply: string): string {
  if (reply.includes(SUPPORT_ACK_LINE)) return reply.trim();
  return `${reply.trim()}\n\n${SUPPORT_ACK_LINE}`;
}

const SYSTEM_PROMPT = `You are Baato (baato.pk / ai.baato.pk) customer support — a Roman Urdu AI companion app, NOT Baato Maps.
Reply in Roman Urdu unless the user wrote mostly in English, then reply in English.
Keep answers under 120 words, polite and calm.
Help with: login, Baato Plus subscription / JazzCash payment, free message limits, delete account, app not loading.
NEVER promise refunds, chargebacks, or guaranteed fixes. Say the team will review and follow up.
Always end with this exact sentence on its own line:
${SUPPORT_ACK_LINE}`;

export type SupportAiResult = {
  reply: string;
  needsHuman: boolean;
  usedLlm: boolean;
};

export async function generateSupportReply(
  userText: string,
  opts?: { priorUserSnippets?: string[] }
): Promise<SupportAiResult> {
  const needsHuman = messageNeedsHuman(userText);
  const apiKey = process.env.OPENAI_API_KEY?.trim();
  if (!apiKey) {
    return {
      reply: cannedReply(userText, needsHuman),
      needsHuman,
      usedLlm: false,
    };
  }

  const model = process.env.OPENAI_MODEL?.trim() || DEFAULT_MODEL;
  const history = (opts?.priorUserSnippets || []).slice(-3).join("\n---\n");
  const userBlock = history
    ? `Recent user messages:\n${history}\n\nLatest message:\n${userText}`
    : userText;

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        max_tokens: 180,
        temperature: 0.4,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userBlock },
        ],
      }),
    });

    if (!res.ok) {
      return {
        reply: cannedReply(userText, needsHuman),
        needsHuman,
        usedLlm: false,
      };
    }

    const data = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const raw = data.choices?.[0]?.message?.content?.trim();
    if (!raw) {
      return {
        reply: cannedReply(userText, needsHuman),
        needsHuman,
        usedLlm: false,
      };
    }

    return {
      reply: ensureAck(raw),
      needsHuman,
      usedLlm: true,
    };
  } catch {
    return {
      reply: cannedReply(userText, needsHuman),
      needsHuman,
      usedLlm: false,
    };
  }
}
