# DylanOelofse_VirtualPortfolio

Personal portfolio website showcasing my projects, skills, and experience.

A modern, animated, fully responsive **bento-grid** portfolio built with vanilla
**HTML, CSS and JavaScript** — no frameworks, no build step.

## ✨ Features

- **Bento-grid layout** — a modular dashboard of tiles in varying sizes
- **Full-viewport hero** with a framed portrait and a typing effect, on an animated
  **constellation** background (drifting blue dots with connecting lines, canvas-based)
- **Preloader / splash screen** with a counting percentage and rotating status words
- Centered floating navigation with **scroll-spy** active highlighting + mobile hamburger menu
- Scroll-reveal "pop" animations (IntersectionObserver) with graceful fallback
- Scroll-progress bar and a back-to-top button
- A **My Journey** section (education + experience) and an **Integrations & APIs** feature tile
- Project cards that link straight to their GitHub repos
- Fully responsive (4 → 2 → 1 columns) and `prefers-reduced-motion` friendly

## 🧩 Sections

Hero → About → Skills & Tech → Integrations & APIs → My Journey → Selected Work → Contact

## 📁 Structure

```
.
├── index.html        # Markup
├── css/
│   └── style.css     # All styles + animations
├── js/
│   └── main.js       # Interactions (preloader, nav, reveal, typing, constellation)
└── Images/
    ├── DylanOelofse.jpg   # Hero portrait
    ├── Cisco.jpg          # Cisco Network Design project
    ├── CV_Portfolio.jpg   # Virtual Portfolio project
    └── MovieSite.jpg      # Movie Site project
```

## 🛠️ Tech shown

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** C# / .NET, ASP.NET, REST API, XML API
- **Databases:** SQL Server, MongoDB
- **Cloud Platforms:** Netlify, Render, Vercel
- **Integrations:** Sage 200, Sage Intacct, REST & XML APIs

## 🚀 Run locally

It's static — just open `index.html` in a browser, or serve it:

```bash
# Python
python -m http.server 8000
# then visit http://localhost:8000
```

## 🌐 Deploy on GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*.
4. Choose branch **`main`** and folder **`/ (root)`**, then **Save**.
5. Your site goes live at `https://dylanOelofse.github.io/DylanOelofse_VirtualPortfolio/`.

> Note: GitHub Pages is case-sensitive — the image folder is `Images/` (capital I), which the code matches exactly.

## 🔗 Links

- **GitHub:** https://github.com/dylanOelofse
- **LinkedIn:** https://www.linkedin.com/in/dylanoelofse
- **Email:** dylanoelofse2003@gmail.com
