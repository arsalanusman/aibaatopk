import { NextResponse } from "next/server";
import { getMessages, listThreadsNeedingHuman } from "@/lib/support/db";

export const runtime = "nodejs";

function authorized(req: Request): boolean {
  const secret = process.env.ADMIN_SECRET?.trim();
  if (!secret) return false;
  const header = req.headers.get("x-admin-secret");
  return header === secret;
}

export async function GET(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const threads = listThreadsNeedingHuman(100);
  const enriched = threads.map((t) => {
    const msgs = getMessages(t.id);
    const last = msgs[msgs.length - 1];
    const firstUser = msgs.find((m) => m.role === "user");
    return {
      id: t.id,
      email: t.email,
      guestLabel: t.guest_label,
      updatedAt: t.updated_at,
      preview: firstUser?.content?.slice(0, 160) || last?.content?.slice(0, 160) || "",
      messageCount: msgs.length,
    };
  });

  return NextResponse.json({ threads: enriched });
}
