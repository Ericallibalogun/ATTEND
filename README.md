# ATTEND

Event management and attendance platform — marketing site built with Next.js from the [Figma design](https://www.figma.com/design/K8A6g0h4I96aytJxqUp1AX/ATTEND).

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── app/                    # Routes (matches Figma DESIGN frames)
│   ├── page.tsx            # Home
│   ├── blog/
│   ├── agms/
│   ├── hackathons/
│   ├── product-launch/
│   └── gallery/
├── components/
│   └── layout/             # Header, footer, page shell
└── lib/
    └── site.ts             # Site config, nav, contact info
```

## Design tokens

Colors are defined in `src/app/globals.css` from the Figma file:

- **Primary** (`Pry 100%`) — dark green brand color
- **Background** — white
- **Canvas** — `#444444`

Update the exact primary hex from Figma Dev Mode when available.

## Environment variables

Optional — copy `.env.example` to `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```
