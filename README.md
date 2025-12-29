## SaaS Launchpad

An open-source, multi-tenant SaaS starter kit built with Supabase and Next.js 16+ (App Router). It targets subscription products and ships as a clean, client-ready foundation with a clear roadmap and phased implementation plan.

---

## Status
- Current: project scaffold + Tailwind v4 setup
- Planned: Supabase auth, multi-tenant data model, billing, admin panel, and dashboard

See `CASE_STUDY.md` for the case study and planned roadmap.

---

## Tech Stack
- Next.js 16+ (App Router), React 19
- Supabase (Postgres, Auth, Storage, Edge Functions)
- Tailwind CSS v4
- shadcn/ui components
- Stripe (subscriptions)
- Resend (email)

---

## Getting Started

### Prerequisites
- Node.js 20+
- pnpm

### Install
```bash
pnpm install
```

### Run
```bash
pnpm dev
```

---

## Environment Variables
Create a local `.env` file from `.env.example`.

Planned keys (subject to change):
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SECRET_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `STRIPE_PRICE_FREE_MONTHLY`
- `STRIPE_PRICE_FREE_YEARLY`
- `STRIPE_PRICE_STANDARD_MONTHLY`
- `STRIPE_PRICE_STANDARD_YEARLY`
- `STRIPE_PRICE_PRO_MONTHLY`
- `STRIPE_PRICE_PRO_YEARLY`
- `RESEND_API_KEY`

---

## Scripts
- `pnpm dev` - start development server
- `pnpm build` - build for production
- `pnpm start` - run production server
- `pnpm lint` - lint

---

## Roadmap
This project is planned in phases with early testing and clear deliverables.
See `CASE_STUDY.md` for details.

---

## Contributing
Contributions are welcome. Open an issue for major changes so we can discuss the direction first.

---

## License
MIT. See `LICENSE`.
