## Rayal Park – Hotel Landing Page

A fast, responsive landing page built with Vite, Tailwind CSS, Alpine.js, and AOS (Animate On Scroll).

### Tech Stack
- **Build tool**: Vite
- **Styling**: Tailwind CSS
- **Interactivity**: Alpine.js
- **Animations**: AOS (Animate On Scroll)

### Develop
```bash
npm run dev
```
- Starts Vite dev server and live-reloads changes.
- Entry HTML: `index.html`
- App script: `src/js/main.js`

### Build
```bash
npm run build
```
- Outputs production assets to `dist/`.

### Preview production build
```bash
npm run preview
```

### Project structure
```
Rayal_Park/
  index.html
  src/
    css/
      main.css
    js/
      main.js
  vite.config.js
  package.json
```

### AOS usage (per-component animations)
AOS is initialized in `src/js/main.js` and its CSS is imported there, so you only need to add attributes in HTML:

- Add an animation to any element using `data-aos`.
- Use `data-aos-delay`, `data-aos-duration`, and `data-aos-easing` for variety.

Common animation names: `fade-up`, `fade-down`, `fade-left`, `fade-right`, `zoom-in`, `zoom-in-up`, `flip-left`, `flip-right`, `flip-up`, `flip-down`.

See the full options in the AOS docs: `https://michalsnik.github.io/aos/`.

### Anchor navigation
Top navigation links map to section IDs like `#Home`, `#About`, `#Services`, `#Explore`. Ensure matching `id` attributes exist on target elements in `index.html`.

### Tailwind
Tailwind is integrated via the Vite plugin. Add/adjust utility classes directly in your HTML and `src/css/main.css`.

### Alpine.js
Lightweight interactivity is handled by Alpine (e.g., mobile menu). Initialize or extend behaviors in `src/js/main.js`.

### License
MIT
