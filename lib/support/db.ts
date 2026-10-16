import Database from "better-sqlite3";
import fs from "fs";
import path from "path";
import { randomUUID } from "crypto";

export type SupportMessageRow = {
  id: string;
  thread_id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
};

export type SupportThreadRow = {
  id: string;
  guest_label: string | null;
  email: string | null;
  needs_human: number;
  created_at: string;
  updated_at: string;
};

const DB_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DB_DIR, "support.sqlite");

let db: Database.Database | null = null;

function getDb(): Database.Database {
  if (db) return db;
  if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true });
  db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS support_threads (
      id TEXT PRIMARY KEY,
      guest_label TEXT,
      email TEXT,
      needs_human INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS support_messages (
      id TEXT PRIMARY KEY,
      thread_id TEXT NOT NULL,
      role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
      content TEXT NOT NULL,
      created_at TEXT NOT NULL,
      FOREIGN KEY (thread_id) REFERENCES support_threads(id)
    );
    CREATE INDEX IF NOT EXISTS idx_support_messages_thread ON support_messages(thread_id);
    CREATE INDEX IF NOT EXISTS idx_support_threads_needs_human ON support_threads(needs_human);
  `);
  return db;
}

function nowIso(): string {
  return new Date().toISOString();
}

export function createThread(opts?: { guestLabel?: string; email?: string }): SupportThreadRow {
  const conn = getDb();
  const id = randomUUID();
  const ts = nowIso();
  conn
    .prepare(
      `INSERT INTO support_threads (id, guest_label, email, needs_human, created_at, updated_at)
       VALUES (?, ?, ?, 0, ?, ?)`
    )
    .run(id, opts?.guestLabel ?? null, opts?.email ?? null, ts, ts);
  return getThread(id)!;
}

export function getThread(id: string): SupportThreadRow | null {
  const row = getDb()
    .prepare(`SELECT * FROM support_threads WHERE id = ?`)
    .get(id) as SupportThreadRow | undefined;
  return row ?? null;
}

export function listThreadsNeedingHuman(limit = 50): SupportThreadRow[] {
  return getDb()
    .prepare(
      `SELECT * FROM support_threads WHERE needs_human = 1 ORDER BY updated_at DESC LIMIT ?`
    )
    .all(limit) as SupportThreadRow[];
}

export function setThreadNeedsHuman(threadId: string, needsHuman: boolean): void {
  getDb()
    .prepare(`UPDATE support_threads SET needs_human = ?, updated_at = ? WHERE id = ?`)
    .run(needsHuman ? 1 : 0, nowIso(), threadId);
}

export function addMessage(
  threadId: string,
  role: "user" | "assistant",
  content: string
): SupportMessageRow {
  const conn = getDb();
  const id = randomUUID();
  const ts = nowIso();
  conn
    .prepare(
      `INSERT INTO support_messages (id, thread_id, role, content, created_at) VALUES (?, ?, ?, ?, ?)`
    )
    .run(id, threadId, role, content, ts);
  conn.prepare(`UPDATE support_threads SET updated_at = ? WHERE id = ?`).run(ts, threadId);
  return { id, thread_id: threadId, role, content, created_at: ts };
}

export function getMessages(threadId: string): SupportMessageRow[] {
  return getDb()
    .prepare(
      `SELECT * FROM support_messages WHERE thread_id = ? ORDER BY created_at ASC`
    )
    .all(threadId) as SupportMessageRow[];
}
