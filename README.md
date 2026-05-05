# Nicolas Bustamante — Operations Automation Portfolio

> Python automation, data workflows, API integrations, dashboards, alert systems, business operations, and client-facing tools.

A portfolio website showcasing Python automation, data workflows, API integrations, dashboards, alert systems, business operations, client-facing tools, and practical automation systems.

## ✨ Features

- **Premium UI** — Minimalist, modern design with smooth Framer Motion animations
- **Interactive Particle Field** — Neural mesh background effect
- **Typewriter Hero** — Animated role rotation
- **3D Tilt Cards** — Skills and projects with perspective transforms
- **Animated Stats Counter** — Numbers count up on scroll
- **Glass Morphism Navbar** — Scroll-aware with active section indicator
- **Offline Chatbot Widget** — Smart pre-built responses (no live AI API)
- **Custom Cursor** — Glowing orb with trailing effect (desktop)
- **Scroll Progress Bar** — Gradient indicator at top of page
- **Fully Responsive** — Works on mobile, tablet, and desktop

## 🛠 Tech Stack

- React 19 + TypeScript
- Vite 6 (fast builds)
- Tailwind CSS 4
- Framer Motion (animations)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server (opens on port 3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio-final/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   ├── favicon.svg
│   └── manifest.json
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── lib/
    │   └── utils.ts
    └── components/
        ├── ScrollProgress.tsx
        ├── CustomCursor.tsx
        ├── Navbar.tsx
        ├── Hero.tsx
        ├── ParticleField.tsx
        ├── About.tsx
        ├── Timeline.tsx
        ├── StatsCounter.tsx
        ├── Skills.tsx
        ├── Services.tsx
        ├── Projects.tsx
        ├── Contact.tsx
        ├── Footer.tsx
        └── ChatbotWidget.tsx
```

## 🎨 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Operations automation positioning and Upwork/remote CTA |
| **About** | Business operations + customer success + Python automation |
| **Skills** | Python automation, APIs, data operations, business operations, customer success, bilingual EN/ES |
| **Services** | Automation, data workflows, API alerts, business workflows, and lead-flow systems without public pricing |
| **Projects** | Featured automation projects + technical labs, including dashboards, data pipelines, alert systems, websites, chatbot/lead flows, and experiments |
| **Chatbot** | Offline portfolio assistant with smart pre-built responses |
| **Stats** | Business experience, points of sale opened, weekly flow managed, automation tools built |

## 🌐 Deploy

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm i -g serve
CMD ["serve", "-s", "dist", "-l", "3000"]
EXPOSE 3000
```

## 📝 License

MIT
