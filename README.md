# NORTHLINE

> _Dressed for movement._

A concept brand website for **NORTHLINE** — an outdoor/streetwear clothing brand. Built as a frontend portfolio project using HTML, SCSS (BEM methodology), and vanilla JavaScript.

---

## About the Project

NORTHLINE is a single-page brand experience, not a traditional e-commerce site. The goal is atmosphere over conversion — the site tells the story of the brand before showing the product.

The site is structured as five full-screen sections that scroll vertically:

| Section        | Purpose                                            |
| -------------- | -------------------------------------------------- |
| **Hero**       | First impression — fullscreen visual, logo, slogan |
| **Manifesto**  | Brand philosophy in 2–3 sentences                  |
| **Gallery**    | Editorial photo grid — clothing in real life       |
| **Collection** | Horizontal carousel — product as object            |
| **Find Us**    | Store address, map, hours, contact                 |

---

## Tech Stack

- HTML5
- SCSS (BEM methodology)
- Vanilla JavaScript
- No frameworks, no libraries

---

## Project Structure

```
northline/
├── assets/
│   └── images/
│       ├── gallery/
│       ├── hero/
│       ├── manifest/
│       └── track/
├── css/
│   ├── modal-fixes.css
│   ├── style.css
│   └── style.min.css
├── js/
│   ├── components/
│   │   ├── about-cards.js
│   │   ├── findUs-cards.js
│   │   ├── gallery-cards.js
│   │   ├── hero-cards.js
│   │   └── manifest-cards.js
│   ├── data/
│   │   ├── about-data.js
│   │   ├── findUs-data.js
│   │   ├── gallery-data.js
│   │   ├── hero-data.js
│   │   └── manifest-data.js
│   ├── modules/
│   │   ├── about/
│   │   │   ├── init-slider.js
│   │   │   ├── product-modal.js
│   │   │   └── render-about.js
│   │   ├── findUs/
│   │   │   └── render-findUs.js
│   │   ├── gallery/
│   │   │   ├── gallery-modal.js
│   │   │   └── render-gallery.js
│   │   ├── hero/
│   │   │   └── render-hero.js
│   │   └── manifest/
│   │       └── render-manifest.js
│   └── page/
│       └── main.js
├── scss/
│   ├── _collection.scss
│   ├── _find-us.scss
│   ├── _gallery.scss
│   ├── _hero.scss
│   ├── _manifesto.scss
│   ├── _variables.scss
│   └── style.scss
├── index.html
└── README.md
```

---

## Status

🚧 In progress — built as part of a frontend development portfolio.

---

## Author

Ron — junior frontend developer in training.
