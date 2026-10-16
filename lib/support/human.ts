/** Heuristic: payment / account issues need a human — never promise refunds in AI copy. */
const NEEDS_HUMAN_PATTERNS: RegExp[] = [
  /\b(refund|chargeback|paisa\s*wapis|money\s*back)\b/i,
  /\b(jazz\s*cash|jazzcash|easypaisa|payment|paid|subscribe|subscription|plus)\b/i,
  /\b(delete\s*account|account\s*delete|account\s*band|account\s*remove)\b/i,
  /\b(login\s*nahi|can'?t\s*login|password\s*reset|otp|sign\s*in\s*problem)\b/i,
  /\b(payment\s*fail|transaction|deduct|charged\s*twice)\b/i,
];

export function messageNeedsHuman(text: string): boolean {
  const t = text.trim();
  if (!t) return false;
  return NEEDS_HUMAN_PATTERNS.some((re) => re.test(t));
}
