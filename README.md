# ai.baato (aibaatopk)

New product surface for **https://ai.baato.pk** — private Roman Urdu **AI companions**, not the legacy marketing dump of baato.pk.

## Why this repo exists

Built from product + design direction (Grok trust discussion + Baato /m learnings):

- Feel **safe & professional**, not a dating app
- “AI Companion” badges, roles like Listener / Dost / Mentor
- Trust strip: no phone/CNIC · private · not dating · clear privacy
- Guest **3 free messages** local try (LLM wire-up later)
- Calm navy + teal accents (not purple “AI SaaS purple” or dating pink)

## Stack

- Next.js 14 App Router · TypeScript · Tailwind

## Local

```bash
cd D:\Data\aibaatopk
npm install
npm run dev
```

Open **http://localhost:3000**

Optional hosts: `127.0.0.1 ai.baato.pk` then `http://ai.baato.pk:3000`

## Routes

| Path | Purpose |
|------|---------|
| `/` | Trust-first landing |
| `/discover` | Persona grid |
| `/chat/[id]` | Guest mock chat |
| `/about` | What we are |
| `/privacy` | Plain privacy |

## Next (production)

- Wire real LLM via Baato APIs or own backend
- Point Cloudflare / nginx `ai.baato.pk` at this app (separate deploy) OR monorepo later
- Signup + Mongo only when you graduate guest → account

## Relation to `dastaan` / baato.pk

- **baato.pk** = existing production Baato
- **aibaatopk** = clean AI-first brand at ai.baato.pk (no force-redirect to main marketing)
