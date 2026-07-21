# Portfolio Update Instructions for Claude Code

## Overview
This file contains all instructions to update Hari Priya Vedala's portfolio website (`blog-build` repo).
Run through each task in order. The project is a React app using MUI and Tailwind.

---

## Task 1 — Update Tagline in `Resume.js`

**File:** `src/components/Resume.js`

Find this line:
```jsx
<p>Full Stack Developer</p>
```

Replace with:
```jsx
<p>Code. Ship. Repeat. · Full Stack · Vibe Coder</p>
```

---

## Task 2 — Update Hero/Header Tagline

**File:** `src/components/Header2.js` (and `src/components/Header.js` if it is still in use)

Find anywhere the subtitle or role description appears (e.g. "Graduate Assistant, UNT CVAD | MS CS @ UNT Denton TX US | Full Stack Web Developer")

Replace with:
```
Freelance Full Stack Developer · Vibe Coder · Builder | India
```

Also update the tagline in `src/pages/HomePage.js` if it appears there too — search for "Graduate Assistant" or "MS CS" and update accordingly.

---

## Task 3 — Add "Vibe Coded Projects" Section

**File:** `src/pages/HomePage.js` (or wherever the existing Featured Projects section lives — search for "Featured Projects" or "Unified Scheduler" to find the right file)

### 3a — Add a new section AFTER the existing projects section

The new section should visually match the existing projects section exactly — same card style, same layout, same tech tag chips. Just add a new section heading called **"Vibe Coded Projects"** with a small subtitle like:
> *"Shipped fast. Deployed live. Built with AI."*

### 3b — Add these three project cards:

---

**Card 1: VRK Diet Companion**
- Tags: `React.js` · `PWA` · `Mobile App (In Progress)` · `Vercel`
- Date: `2024 — Present`
- Bullet 1 — **Wellness Tracking App**: Built a personalised diet companion based on the VRK Diet system, helping users track meals, weight, and hydration.
- Bullet 2 — **PWA to Native**: Started as a Progressive Web App and currently being converted into a fully native mobile application.
- Bullet 3 — **Live & Maintained**: Deployed and actively maintained at [https://vrk-diet-companion.vercel.app/](https://vrk-diet-companion.vercel.app/)
- GitHub: [https://github.com/codeflux-ai](https://github.com/codeflux-ai)

---

**Card 2: AquaRemind**
- Tags: `React.js` · `PWA` · `Wellness` · `Vercel`
- Date: `2024 — Present`
- Bullet 1 — **Hydration & Supplement Reminders**: A wellness app that sends smart reminders to help users stay on top of hydration and supplement schedules.
- Bullet 2 — **Live & Deployed**: Fully deployed and actively maintained at [https://aqua-hydrate.vercel.app/](https://aqua-hydrate.vercel.app/)
- Bullet 3 — **Vibe Coded**: Built and shipped rapidly using AI-assisted vibe coding tools including Lovable, Cursor, and Claude.
- GitHub: [https://github.com/codeflux-ai](https://github.com/codeflux-ai)

---

**Card 3: AI Security Auditor**
- Tags: `React.js` · `Gemini API` · `Supabase` · `Vercel`
- Date: `2024 — Present`
- Bullet 1 — **AI-Powered Security Analysis**: A web app that leverages Google Gemini's API to perform intelligent security audits and vulnerability assessments.
- Bullet 2 — **Zero-Cost Architecture**: Built entirely on free-tier tools — Gemini API, Supabase, GitHub, and Vercel — with quota guardrails and UI warnings built in.
- Bullet 3 — **Vibe Coded & Deployed**: Scaffolded in Lovable and refined with Cursor. GitHub org: [https://github.com/codeflux-ai](https://github.com/codeflux-ai)

---

## Task 4 — Add GitHub Links in Footer or Bio Section

**File:** `src/components/Footer.js`

Currently the footer links to `https://github.com/hpv333` twice. Update it so it shows:
- One link to `https://github.com/hpv333` — label it "Enterprise Projects" or use the existing GitHub icon
- Add a second GitHub/org link to `https://github.com/codeflux-ai` — label it "Vibe Projects" or use a second CodeIcon

Use the existing icon style (`GitHubIcon` or `CodeIcon` from MUI) to stay consistent.

---

## Task 5 — Navbar Update (Optional but recommended)

**File:** `src/components/Header2.js`

The `pages` array currently is:
```js
const pages = ['Blog', 'Projects', 'Work Experience', 'Skills', 'Education'];
```

Add `'Vibe Projects'` to the array so users can navigate directly to the new section:
```js
const pages = ['Blog', 'Projects', 'Vibe Projects', 'Work Experience', 'Skills', 'Education'];
```

Make sure the new Vibe Coded Projects section has the matching `id` so scroll navigation works:
```jsx
<section id="vibe-projects">
```

---

## Task 6 — Find and Update Bio/Profile Description

Search the entire `src/` folder for any of these strings and update them:
- `"Graduate Assistant"` → remove or update to `"Freelance Full Stack Developer"`
- `"MS CS @ UNT"` → can keep or update to `"MS CS, UNT (2025)"`
- `"Full Stack Web Developer"` → update to `"Full Stack Developer · Vibe Coder"`

---

## Summary of All Changes

| File | Change |
|------|--------|
| `src/components/Resume.js` | Update tagline to "Code. Ship. Repeat. · Full Stack · Vibe Coder" |
| `src/components/Header2.js` | Update role description + add Vibe Projects to nav |
| `src/pages/HomePage.js` | Add Vibe Coded Projects section with 3 cards |
| `src/components/Footer.js` | Add codeflux-ai GitHub link alongside existing hpv333 link |
| Any file with old bio text | Update role/title strings |

---

## Notes for Claude Code
- Match the existing project card component exactly — do not invent new styles
- If projects use a mapped array/data file (e.g. `projects.js` or `projectsData.js`), add the new vibe projects to that data file instead of hardcoding JSX
- Keep all existing content intact — only add, don't remove
- After all changes, run `npm run build` to confirm no errors
