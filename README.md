# Tyler Jameson Martinez — Personal Portfolio

A four-page personal portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Pages

| Route           | Page               | Accent Color |
|-----------------|--------------------|-------------|
| `/`             | Home / Landing     | Tricolor    |
| `/acting`       | Acting             | `#e8514a` Red |
| `/voice-acting` | Voice Acting       | `#4ab8e8` Blue |
| `/software`     | Software Dev       | `#a855f7` Purple |

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Structure

```
tyler-portfolio/
├── app/
│   ├── layout.tsx          # Fonts (Playfair Display + DM Sans), metadata
│   ├── globals.css
│   ├── page.tsx            # Home — split-name hero + discipline cards
│   ├── acting/page.tsx
│   ├── voice-acting/page.tsx
│   └── software/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed nav, adapts accent per route
│   │   └── PageShell.tsx   # Shared hero + footer for discipline pages
│   └── ui/
│       └── DisciplineCard.tsx
```

## Customising

**Update your credits / projects:** Edit the arrays at the top of each page file (`CREDITS`, `PROJECTS`, etc.) — no component changes needed.

**Change accent colors:** Each page uses an `accent` and `accentDark` prop passed to `PageShell`. Update in the page file.

**Add a new page:** Create `app/your-page/page.tsx`, wrap with `<PageShell>`, add a link in `Navbar.tsx`.

## Deploy

**Vercel (recommended):**
```bash
git push  # Vercel auto-deploys on every push
```

**GitHub Pages:**
Add `output: 'export'` and `basePath` to `next.config.js` — see the powersports project README for the full guide.
# tyler-web-portfolio
