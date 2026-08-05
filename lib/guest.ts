/** Client-only guest try: 3 free messages, no phone/CNIC. */
export const GUEST_MSG_LIMIT = 3;
const KEY = "aibaatopk_guest_used";

export function getGuestUsed(): number {
  if (typeof window === "undefined") return 0;
  try {
    const n = Number(localStorage.getItem(KEY) || 0);
    return Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0;
  } catch {
    return 0;
  }
}

export function getGuestLeft(): number {
  return Math.max(0, GUEST_MSG_LIMIT - getGuestUsed());
}

export function consumeGuestMessage(): boolean {
  const used = getGuestUsed();
  if (used >= GUEST_MSG_LIMIT) return false;
  try {
    localStorage.setItem(KEY, String(used + 1));
  } catch {
    /* ignore */
  }
  return true;
}
