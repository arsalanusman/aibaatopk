import { NextResponse } from "next/server";
import { getMessages, getThread } from "@/lib/support/db";

export const runtime = "nodejs";

type Params = { params: { threadId: string } };

export async function GET(_req: Request, { params }: Params) {
  const thread = getThread(params.threadId);
  if (!thread) {
    return NextResponse.json({ error: "Thread not found" }, { status: 404 });
  }
  const messages = getMessages(params.threadId);
  return NextResponse.json({
    thread: {
      id: thread.id,
      needsHuman: thread.needs_human === 1,
      email: thread.email,
      updatedAt: thread.updated_at,
    },
    messages: messages.map((m) => ({
      id: m.id,
      role: m.role,
      content: m.content,
      createdAt: m.created_at,
    })),
  });
}
