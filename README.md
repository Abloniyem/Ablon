# 🛡️ Ablon Tech — React Website

Static responsive website for Ablon Tech IT Support, built with React + Vite.

---

## 📁 Structure

```
ablontech-react/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── logo.png
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/
    │   └── logo.png
    ├── hooks/
    │   └── useReveal.js
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Services.jsx
        ├── HowItWorks.jsx
        ├── WhyUs.jsx
        ├── Pricing.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

---

## 🖥️ Run Locally

### Requirements
- Node.js v18+ → https://nodejs.org

### Steps
```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open browser
# http://localhost:5173
```

---

## 🚀 Deploy to Vercel (Easiest)

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel
# Follow prompts — done!
```

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repository
2. Go to https://vercel.com → New Project
3. Import your GitHub repo
4. Framework: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click Deploy ✅

---

## 📦 Build for Production

```bash
npm run build
# Output is in /dist folder
# Upload /dist to any static host
```

### Other free hosts
- **Netlify:** drag & drop the `dist/` folder at netlify.com/drop
- **GitHub Pages:** push `dist/` to `gh-pages` branch
- **Cloudflare Pages:** connect GitHub repo, build command `npm run build`

---

## ✏️ Customize

Edit these to match your real info:

| File | What to change |
|------|----------------|
| `src/components/Hero.jsx` | Headline, description, stats |
| `src/components/Contact.jsx` | Phone, email, address, working hours |
| `src/components/Pricing.jsx` | Plan prices (ETB amounts) |
| `src/components/Footer.jsx` | Social links, address |
| `src/components/Services.jsx` | Service names & descriptions |
| `public/logo.png` | Replace with updated logo |

---

*Ablon Tech — Addis Ababa, Ethiopia 🇪🇹*
