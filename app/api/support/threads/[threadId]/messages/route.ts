import { NextResponse } from "next/server";
import { generateSupportReply } from "@/lib/support/ai";
import {
  addMessage,
  getMessages,
  getThread,
  setThreadNeedsHuman,
} from "@/lib/support/db";
import { messageNeedsHuman } from "@/lib/support/human";

export const runtime = "nodejs";

type Params = { params: { threadId: string } };

export async function POST(req: Request, { params }: Params) {
  const thread = getThread(params.threadId);
  if (!thread) {
    return NextResponse.json({ error: "Thread not found" }, { status: 404 });
  }

  let text = "";
  try {
    const body = await req.json();
    text = String(body?.text || "").trim();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!text || text.length > 4000) {
    return NextResponse.json({ error: "Message required (max 4000 chars)" }, { status: 400 });
  }

  const userMsg = addMessage(params.threadId, "user", text);

  const prior = getMessages(params.threadId)
    .filter((m) => m.role === "user" && m.id !== userMsg.id)
    .map((m) => m.content);

  const { reply, needsHuman } = await generateSupportReply(text, {
    priorUserSnippets: prior,
  });

  const flagHuman = needsHuman || messageNeedsHuman(text) || thread.needs_human === 1;
  if (flagHuman) {
    setThreadNeedsHuman(params.threadId, true);
  }

  const assistantMsg = addMessage(params.threadId, "assistant", reply);

  return NextResponse.json({
    userMessage: {
      id: userMsg.id,
      role: userMsg.role,
      content: userMsg.content,
      createdAt: userMsg.created_at,
    },
    assistantMessage: {
      id: assistantMsg.id,
      role: assistantMsg.role,
      content: assistantMsg.content,
      createdAt: assistantMsg.created_at,
    },
    needsHuman: flagHuman,
  });
}
