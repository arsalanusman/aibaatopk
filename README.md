# Baato — aibaatopk (ai.baato.pk)

Full product UI for private Roman Urdu **AI companions** (not dating).

## Run

```bash
cd D:\Data\aibaatopk
npm install
npm run dev
```

Open http://localhost:3020 (or whatever port is free).

## Screens (complete)

| Route | Purpose |
|-------|---------|
| `/` | Landing: hero, trust bar, cards, how-it-works, trust list, CTA, footer |
| `/discover` | All characters + filters |
| `/search` | Search by name/role |
| `/chat/[id]` | Guest chat (3 free) |
| `/login` `/signup` | Auth forms (UI ready) |
| `/profile` | Guest profile CTAs |
| `/settings` | Guest quota reset + links |
| `/about` `/privacy` | Trust copy |
| `/support` | Support chat (AI auto-reply + human follow-up) |
| `/admin/support` | Flagged threads (needs `ADMIN_SECRET`) |

## Mobile

Bottom nav: Home · Search · New Chat · Settings · Profile  
Top bar: logo + hamburger menu (drawer)

## Support chat

- Footer / Settings → **Support chat** (`/support`). Threads persist in `data/support.sqlite` (local).
- Optional: copy `.env.example` → `.env.local` and set `OPENAI_API_KEY` (uses `OPENAI_MODEL`, default `gpt-4o-mini`). Without a key, canned acknowledgement still includes the 24h team line.
- Payment/account messages set `needs_human` on the thread; list at `/admin/support` with `ADMIN_SECRET`.

## Next

- Wire real LLM/auth from main Baato APIs
- Deploy to ai.baato.pk
