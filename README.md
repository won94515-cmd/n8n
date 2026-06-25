# EduOps Command

A dark-theme, mobile-first Expo application for a Class 11/12 PCM coaching institute.

## What this app includes

- Dual Admin / Teacher login shell with remember-me and security-key UI.
- Principal dashboard with institute KPIs, attendance progress, and SOP snapshot.
- Teacher management with credential visibility and WhatsApp / email sharing actions.
- Weekly teacher report screen with attendance thresholds and feedback metrics.
- Announcement system with urgent / normal counters.
- Admin security screen for master key and password management.
- Teacher SOP dashboard with daily checklist progress.
- Classroom attendance and exam result panels.
- Student CRM with risk, tier, attendance, and academic progress bars.
- Revenue tracker with INR collections, pending fees, overdue accounts, and transaction CTA.
- Resources matrix containing pricing, marketing calendar, and discovery-call scripts.

## Run locally with Expo Go

```bash
npm install
npm start
```

After `npm start`, Expo prints a QR code in the terminal. Scan it with Expo Go on Android or iOS.

## Build for Vercel

```bash
npm run build:web
```

Vercel uses `vercel.json` and outputs the static web build to `dist/`.

