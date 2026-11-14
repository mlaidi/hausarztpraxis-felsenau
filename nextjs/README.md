# Hausarztpraxis Duebendorf – Next.js Website

Moderner Webauftritt für die Hausarztpraxis Duebendorf.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# → http://localhost:3000
```

## Production Build

```bash
npm run build
npm start
```

## Project Structure

```
hausarztpraxis/
├── app/
│   ├── layout.js          # Root layout + metadata/SEO
│   ├── page.js            # Homepage (all sections)
│   ├── datenschutz/       # Datenschutzerklärung
│   └── impressum/         # Impressum
├── components/
│   ├── FadeIn.js          # Scroll animation wrapper
│   ├── Icons.js           # All SVG icon components
│   ├── MedicalHero.js     # Hero radial tree component
│   └── ServiceModal.js    # Leistungen detail popup
├── data/
│   └── siteData.js        # All site content, services, team
├── public/
│   └── images/            # Local images
├── styles/
│   ├── globals.css        # CSS variables, fonts, animations
│   └── components.css     # All component styles
├── next.config.js         # Next.js config
├── package.json
└── README.md
```

## Customization

### Content
Edit `data/siteData.js` to change:
- Contact info (phone, email, address, hours)
- Services list (title, description, images)
- Team members
- Navigation links
- Footer partners
- Naturmedizin & Longevity treatments

### Styles
Edit `styles/` files:
- `globals.css` — CSS variables (colors, fonts)
- `components.css` — Component-specific styles

### Images
Local images are stored in `public/images/`.
- Service images: `public/images/services/`
- Team photos: `public/images/team/`
- Praxis photos: `public/images/praxis/`

## Deployment (IONOS/Plesk)

```bash
# Build
npm run build

# Upload .next/, public/, package.json, next.config.js
# On server:
npm install --production
pm2 start npm --name "hausarztpraxis-duebendorf" -- start
```

### Nginx Reverse Proxy (Plesk)
```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

## Tech Stack
- **Next.js 14** (App Router)
- **React 18**
- **DM Serif Display** + **Inter** fonts
- **Pure CSS** (no Tailwind, no UI library)
- **Swiss Clinical Blue palette** (#15366C / #3CA1DE)

---
Designed by **Jerumed Nexus GmbH**
