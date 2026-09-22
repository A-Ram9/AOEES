# AOEES — Abu Omran Electrical Engineering Services

A marketing and corporate website for **Abu Omran Electrical Engineering Services LLC**, an electrical and renewable-energy contracting firm based in Muscat, Sultanate of Oman, in business since 1995. The site introduces the company, showcases its services and project portfolio, lists major clients, and provides a way for prospective clients to get in touch.

## What the site does

The site is a single-page application with the following sections/routes:

| Route | Page | Content |
|---|---|---|
| `/` | Home | Hero section with looping background video, headline, and calls to action |
| `/why-choose-us` | Why Choose Us | Company stats, differentiators (safety, timeliness, certified quality), and a 5-step project execution lifecycle (Consultation → Design → Installation → Testing → Handover) |
| `/services` | Services | Six core service lines: substation & switchgear installation, solar PV projects, switchgear installations, testing & commissioning, underground cable works, and overhead line network works |
| `/completed-works` | Completed Works | Portfolio of finished projects across commercial, residential, industrial, healthcare, and solar sectors |
| `/clients` | Clients | Logos of partner organizations (NAMA, Majan, Ministry of Education, Royal Oman Police, Galfar, etc.) and a client testimonial |
| `/about` | About | Company history, mission, vision, and core values |
| `/contact` | Contact | Contact details (phone, email, address, working hours) and an inquiry form |

The UI is built around a shared `Navbar` (with a "Services" dropdown), `Footer`, and a `ScrollToTop` helper that resets scroll position on navigation. Pages use scroll-triggered and hover animations (fade/slide-ins, animated progress bars, a lightning-bolt motif on interactive elements) to reinforce the electrical-engineering theme.

## Tech stack

- **[React 19](https://react.dev/)** + **[TypeScript](https://www.typescriptlang.org/)** — component-based UI
- **[Vite](https://vite.dev/)** — dev server and production build tooling
- **[React Router](https://reactrouter.com/)** (`HashRouter`) — client-side routing across pages
- **[Tailwind CSS v4](https://tailwindcss.com/)** (via `@tailwindcss/vite`) — utility-first styling, with a custom theme (`ultramarine` brand color, `Inter` font) defined in [`src/index.css`](src/index.css)
- **[Motion](https://motion.dev/)** (Framer Motion's successor) — scroll-triggered and hover animations throughout the pages
- **[lucide-react](https://lucide.dev/)** — icon set used across the navbar, cards, and content sections
- **`clsx` + `tailwind-merge`** — conditional/merged Tailwind class handling
- **ESLint** (`typescript-eslint`, React Hooks/Refresh plugins) — linting

## Project structure

```
src/
├── App.tsx              # Route definitions
├── main.tsx              # App entry point
├── components/
│   ├── Navbar.tsx         # Top navigation with dropdown + mobile menu
│   ├── Footer.tsx         # Site footer with quick links & contact info
│   └── ScrollToTop.tsx    # Scrolls to top on route change
└── pages/
    ├── Home.tsx
    ├── WhyChooseUs.tsx
    ├── Services.tsx
    ├── CompletedWorks.tsx
    ├── Clients.tsx
    ├── About.tsx
    └── Contact.tsx
public/reqimages/          # Project photos, client logos, and hero videos
```

## Getting started

**Prerequisites:** Node.js and npm.

```bash
# Install dependencies
npm install

# Start the development server (http://localhost:5173)
npm run dev

# Type-check and build for production
npm run build

# Preview the production build locally
npm run preview

# Run linting
npm run lint
```

## License

All rights reserved — © Abu Omran Electrical Engineering Services.
