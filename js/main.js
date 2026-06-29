/* =========================================================
   Dylan Oelofse — Portfolio (bento)
   ========================================================= */
(function () {
    "use strict";

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---------- Year ---------- */
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---------- Preloader ---------- */
    const preloader = document.getElementById("preloader");
    const fill = document.getElementById("preFill");
    const countEl = document.getElementById("preCount");
    const wordEl = document.getElementById("preWord");
    const loadWords = ["Initializing", "Designing", "Developing", "Integrating", "Almost there"];

    function setWord(pct) {
        if (!wordEl) return;
        const idx = Math.min(loadWords.length - 1, Math.floor(pct / (100 / loadWords.length)));
        if (wordEl.textContent !== loadWords[idx]) {
            wordEl.textContent = loadWords[idx];
            wordEl.style.animation = "none";
            void wordEl.offsetWidth;
            wordEl.style.animation = "fade-up 0.4s ease both";
        }
    }
    function finishPreloader() {
        if (!preloader) return;
        preloader.classList.add("is-done");
        document.body.classList.remove("is-locked");
        window.setTimeout(() => preloader.remove(), 850);
    }
    if (preloader) {
        document.body.classList.add("is-locked");
        if (reduceMotion) {
            if (fill) fill.style.width = "100%";
            if (countEl) countEl.textContent = "100";
            if (wordEl) wordEl.textContent = "Welcome";
            window.setTimeout(finishPreloader, 300);
        } else {
            let pct = 0;
            const timer = window.setInterval(() => {
                pct += Math.floor(Math.random() * 8) + 3;
                if (pct >= 100) { pct = 100; window.clearInterval(timer); window.setTimeout(finishPreloader, 450); }
                if (fill) fill.style.width = pct + "%";
                if (countEl) countEl.textContent = pct;
                setWord(pct);
            }, 105);
        }
        window.setTimeout(finishPreloader, 4500); // safety
    }

    /* ---------- Scroll UI ---------- */
    const progress = document.getElementById("scrollProgress");
    const nav = document.getElementById("nav");
    const toTop = document.getElementById("toTop");
    const heroScroll = document.querySelector(".hero__scroll");
    function onScroll() {
        const y = window.scrollY || document.documentElement.scrollTop;
        if (nav) nav.classList.toggle("is-scrolled", y > 10);
        if (toTop) toTop.classList.toggle("is-visible", y > 600);
        if (heroScroll) heroScroll.classList.toggle("is-hidden", y > 20);
        if (progress) {
            const docH = document.documentElement.scrollHeight - window.innerHeight;
            progress.style.width = (docH > 0 ? (y / docH) * 100 : 0) + "%";
        }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* ---------- Mobile menu ---------- */
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("mobileMenu");
    const backdrop = document.getElementById("menuBackdrop");
    function setMenu(open) {
        if (!menu) return;
        menu.classList.toggle("is-open", open);
        if (backdrop) backdrop.classList.toggle("is-open", open);
        if (toggle) { toggle.classList.toggle("is-open", open); toggle.setAttribute("aria-expanded", String(open)); }
        document.body.classList.toggle("is-locked", open);
    }
    if (toggle) toggle.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
    if (backdrop) backdrop.addEventListener("click", () => setMenu(false));
    if (menu) menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

    /* ---------- Reveal tiles ---------- */
    const tiles = document.querySelectorAll(".tile");
    if ("IntersectionObserver" in window && !reduceMotion) {
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, i) => {
                    if (entry.isIntersecting) {
                        entry.target.style.transitionDelay = Math.min(i * 55, 220) + "ms";
                        entry.target.classList.add("is-visible");
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
        );
        tiles.forEach((el) => io.observe(el));
    } else {
        tiles.forEach((el) => el.classList.add("is-visible"));
    }

    /* ---------- Scroll-spy ---------- */
    const navLinks = document.querySelectorAll(".nav__link");
    const watched = Array.from(document.querySelectorAll("[id]")).filter((s) =>
        Array.from(navLinks).some((l) => l.getAttribute("href") === "#" + s.id)
    );
    if ("IntersectionObserver" in window && watched.length) {
        const spy = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        navLinks.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === "#" + id));
                    }
                });
            },
            { threshold: 0.1, rootMargin: "-30% 0px -55% 0px" }
        );
        watched.forEach((s) => spy.observe(s));
    }

    /* ---------- Hero constellation (drifting blue dots) ---------- */
    const canvas = document.getElementById("heroCanvas");
    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext("2d");
        const host = canvas.parentElement;
        let w = 0, h = 0, dpr = 1, dots = [], raf = 0;
        const DOT = "47,107,255"; // accent rgb
        const LINK_DIST = 120;

        function build() {
            const rect = host.getBoundingClientRect();
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            w = rect.width; h = rect.height;
            canvas.width = Math.round(w * dpr);
            canvas.height = Math.round(h * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const count = Math.max(34, Math.min(130, Math.round((w * h) / 9000)));
            dots = [];
            for (let i = 0; i < count; i++) {
                dots.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: (Math.random() - 0.5) * 0.28,
                    vy: (Math.random() - 0.5) * 0.28,
                    r: Math.random() * 1.8 + 1.3,
                });
            }
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);
            for (let i = 0; i < dots.length; i++) {
                const p = dots[i];
                p.x += p.vx; p.y += p.vy;
                if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
                if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(" + DOT + ",0.72)";
                ctx.fill();
                for (let j = i + 1; j < dots.length; j++) {
                    const q = dots[j];
                    const dx = p.x - q.x, dy = p.y - q.y;
                    const d = Math.hypot(dx, dy);
                    if (d < LINK_DIST) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.strokeStyle = "rgba(" + DOT + "," + (0.22 * (1 - d / LINK_DIST)).toFixed(3) + ")";
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }
            raf = window.requestAnimationFrame(draw);
        }

        function drawStatic() {
            ctx.clearRect(0, 0, w, h);
            dots.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(" + DOT + ",0.4)";
                ctx.fill();
            });
        }

        build();
        if (reduceMotion) { drawStatic(); } else { draw(); }

        let resizeTimer;
        window.addEventListener("resize", () => {
            window.clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(() => {
                window.cancelAnimationFrame(raf);
                build();
                if (reduceMotion) drawStatic(); else draw();
            }, 200);
        }, { passive: true });
    }

    /* ---------- Typing ---------- */
    const typedEl = document.getElementById("typed");
    if (typedEl) {
        const phrases = ["custom designs", "Sage integrations", "REST & XML APIs", "custom-built apps"];
        if (reduceMotion) {
            typedEl.textContent = phrases[0];
        } else {
            let p = 0, c = 0, deleting = false;
            function tick() {
                const word = phrases[p];
                c += deleting ? -1 : 1;
                typedEl.textContent = word.slice(0, c);
                let delay = deleting ? 40 : 85;
                if (!deleting && c === word.length) { delay = 1500; deleting = true; }
                else if (deleting && c === 0) { deleting = false; p = (p + 1) % phrases.length; delay = 320; }
                window.setTimeout(tick, delay);
            }
            window.setTimeout(tick, 800);
        }
    }
})();
