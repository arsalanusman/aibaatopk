import { NextResponse } from "next/server";
import { createThread } from "@/lib/support/db";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: { guestLabel?: string; email?: string } = {};
  try {
    body = await req.json();
  } catch {
    /* empty body ok */
  }
  const thread = createThread({
    guestLabel: body.guestLabel?.slice(0, 120),
    email: body.email?.slice(0, 200),
  });
  return NextResponse.json({
    threadId: thread.id,
    needsHuman: thread.needs_human === 1,
  });
}
