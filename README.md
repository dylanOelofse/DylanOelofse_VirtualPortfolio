# DylanOelofse_VirtualPortfolio

Personal portfolio website showcasing my projects, skills, and experience.

A modern, animated, fully responsive single-page portfolio built with vanilla
**HTML, CSS and JavaScript** — no frameworks, no build step.

## ✨ Features

- Dark "tech / neon" theme with animated gradient blobs and a grid backdrop
- Sticky navigation with scroll-spy active highlighting + mobile hamburger menu
- Animated typing effect in the hero
- Scroll-reveal animations (IntersectionObserver) with graceful fallback
- Scroll-progress bar and back-to-top button
- Interactive skill cards with cursor-tracking glow
- Project cards that link straight to their GitHub repos
- Fully responsive and `prefers-reduced-motion` friendly

## 📁 Structure

```
.
├── index.html        # Markup
├── css/
│   └── style.css     # All styles + animations
├── js/
│   └── main.js       # Interactions (nav, reveal, typing, etc.)
└── Images/
    ├── DylanOelofse.jpg   # Hero portrait
    ├── Cisco.jpg          # Cisco Network Design project
    └── CV_Portfolio.jpg   # Portfolio project
```

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

## 🔗 Links

- **GitHub:** https://github.com/dylanOelofse
- **LinkedIn:** https://www.linkedin.com/in/dylanoelofse
- **Email:** dylanoelofse2003@gmail.com
