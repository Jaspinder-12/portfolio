# Jaspinder Singh — Portfolio Website

> Production-ready portfolio built with Next.js, TypeScript, and Tailwind CSS. Optimized for recruiters, fast loading, and Vercel deployment.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Theme:** next-themes (Dark/Light)
- **Icons:** lucide-react
- **Forms:** Formspree (no backend required)
- **Deployment:** Vercel

---

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx           # Fixed nav + mobile drawer + theme toggle
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx             # Hero section with profile + CTAs
│   │   ├── About.tsx            # About me + highlight cards
│   │   ├── Skills.tsx           # Animated skill badges by category
│   │   ├── Experience.tsx       # Timeline for work & education
│   │   ├── Projects.tsx         # Project cards with filtering
│   │   ├── GitHubStats.tsx      # GitHub profile stats
│   │   ├── Resume.tsx           # Resume download + skills summary
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx          # Contact form + info
│   │   └── ThemeProvider.tsx
│   ├── globals.css
│   ├── layout.tsx               # Root layout + SEO metadata
│   └── page.tsx                 # Main landing page
├── public/
│   ├── images/                  # OG image, profile photo
│   └── resume/
│       └── Jaspinder Singh Resume.pdf
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── .env.local.example
```

---

## Installation

1. Copy this project folder to your workspace
2. Install dependencies:

```bash
npm install
```

3. Copy environment variables:

```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your values:
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT` — create a free account at formspree.io
   - `NEXT_PUBLIC_SITE_URL` — your production URL

5. Add your resume PDF to `public/resume/`

6. Run the dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

---

## Customization

### Update personal info
- Edit `app/components/Hero.tsx` — name, title, bio
- Edit `app/components/About.tsx` — About Me content
- Edit `app/components/Experience.tsx` — experience/education
- Edit `app/components/Projects.tsx` — project cards

### Change colors
- Edit `tailwind.config.js` → `theme.extend.colors`

### Add/remove sections
- Add components to `app/components/`
- Import and add them to `app/page.tsx`

---

## Deployment (Vercel)

1. Push this project to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Add environment variables in Vercel Dashboard → Settings → Environment Variables
5. Deploy

Vercel will automatically detect Next.js and configure the build.

---

## Build for Static Export

```bash
npm run build
```

Output goes to the `out/` directory.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on localhost:3000 |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## SEO Features

- Open Graph tags (Facebook/LinkedIn)
- Twitter Card metadata
- Sitemap.xml
- Robots.txt
- Clean URL slugs
- Fast static export

---

## Future Enhancements

- [ ] Replace placeholder OG image
- [ ] Add real project screenshots
- [ ] Replace Formspree with a backend API route
- [ ] Add blog section
- [ ] Add visitor counter
- [ ] Add resume download analytics
- [ ] Integrate live GitHub contribution chart API
- [ ] Add more testimonials from real mentors
- [ ] Implement contact form validation with Zod

---

## License

MIT — feel free to use this as a template for your own portfolio.
