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

## Mobile

Bottom nav: Home · Search · New Chat · Settings · Profile  
Top bar: logo + hamburger menu (drawer)

## Next

- Wire real LLM/auth from main Baato APIs
- Deploy to ai.baato.pk
