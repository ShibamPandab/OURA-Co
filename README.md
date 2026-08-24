# OURA & CO. — Interior Design

> **We design the feeling of you.**

A responsive, single-page marketing website for **OURA & CO.**, a (fictional) interior design studio. Hand-built with standard **HTML, CSS, and vanilla JavaScript** — no framework, no build step, no dependencies.

**🔗 Live site: [oura-co-swart.vercel.app](https://oura-co-swart.vercel.app/)**

<p>
  <a href="https://oura-co-swart.vercel.app/"><img alt="Live Demo" src="https://img.shields.io/badge/Live_Demo-000000?logo=vercel&logoColor=white"></a>
  <img alt="HTML5"  src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white">
  <img alt="CSS3"   src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black">
  <img alt="No build step" src="https://img.shields.io/badge/build-none-brightgreen">
</p>

---

## ✨ Highlights

- **Zero dependencies** — one HTML file, one stylesheet, one script.
- **Fully responsive** — fluid layouts and breakpoints from mobile to widescreen.
- **Editorial type system** — Archivo, Archivo Narrow, and Bodoni Moda via Google Fonts.
- **Optimized imagery** — `webp` for showcase photos with `jpg` fallbacks, plus `loading="lazy"`.
- **Interactive services accordion** — rendered and controlled by `script.js`.
- **Client inquiry form** — with inline confirmation feedback.

## 📐 Sections

| Section | Description |
| --- | --- |
| **Hero** | Split-image intro — *"We design the feeling of you."* |
| **About** | Studio statement and stats — 4 years · 20 designers · 62 projects |
| **Process** | Research · Concept · Detailing · Execute |
| **Services** | Interactive accordion of six offerings |
| **Philosophy** | Balance · Comfort · Character |
| **Interior Design** | Showcase card |
| **Concept & Mood** | Inspiration and atmosphere gallery |
| **Contact** | Project inquiry form |

## 🗂 Project structure

```
.
├── index.html            # Markup for every section
├── styles.css            # All styling, animations, responsive breakpoints
├── script.js             # Services accordion + contact-form handler
├── assets/
│   └── img/              # Optimized photography (webp + jpg)
└── README.md
```

## 🚀 Run locally

The site uses relative asset paths, so serve it over a local HTTP server rather than opening the file directly.

**Python**

```bash
python -m http.server 8778
```

Then open <http://localhost:8778/>.

**Node (alternative)**

```bash
npx serve .
```

## 🌐 Deploy

This site is deployed on **Vercel** → [oura-co-swart.vercel.app](https://oura-co-swart.vercel.app/).

Being fully static, it deploys anywhere with no configuration:

- **Vercel** — import the repo; no build command, output directory `.`.
- **Netlify** — import the repo; no build command, publish directory `.`.
- **GitHub Pages** — Settings → Pages → deploy from the `main` branch (root).

## 🛠 Tech

- Semantic **HTML5**
- **CSS3** — grid, flexbox, custom properties, transitions
- **Vanilla JavaScript** (ES5-compatible, IIFE-scoped)
- **Google Fonts** — Archivo · Archivo Narrow · Bodoni Moda

## 📄 License

This project is for portfolio and demonstration purposes. OURA & CO. is a fictional brand created for this design.
