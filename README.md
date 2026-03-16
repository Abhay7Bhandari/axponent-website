# Axponent – React + Tailwind CSS

A fully responsive single-page website for Axponent built with **React 18** and **Tailwind CSS 3**.

## 📁 Project Structure

```
axponent/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed nav with mobile hamburger menu
│   │   ├── Hero.jsx            # Hero section with animated glow orb
│   │   ├── Sections1.jsx       # FadeSection, Stats, WhatWeDo, LogoTicker
│   │   ├── Sections2.jsx       # HowWeDo, FourAs (tabbed)
│   │   └── Sections3.jsx       # CaseStudy, TrustedBy, Testimonials, Events, Footer
│   ├── App.jsx                 # Root component – assembles all sections
│   ├── index.js                # React entry point
│   └── index.css               # Global styles + Tailwind directives
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm start
```
Opens at **http://localhost:3000**

### 3. Build for production
```bash
npm run build
```
Output in `/build` folder.

## 📐 Sections (in order)
1. **Navbar** – Fixed, scroll-aware, mobile responsive with hamburger overlay
2. **Hero** – "Built to deliver", animated blue glow orb, star field, email form
3. **Stats** – 65+ specialists · 3 offices · 4 products · 120+ countries · 200+ partners
4. **What We Do** – Performance Marketing, Targeting, Branding cards
5. **Logo Ticker** – Auto-scrolling marquee with partner brands
6. **How We Do** – 5 capability cards with SVG icons
7. **Axponent 4A's** – Tabbed: Analysis, Activation, Acquisition, Amplification
8. **Case Study** – 6-card grid (Bybit, Sber, AngelOne, Prime Video, Mashreq, Jeeny)
9. **Trusted By** – "200+ Brand Partners" banner
10. **Testimonials** – Masonry-layout review cards
11. **Axponent At Events** – 5 event photo cards
12. **Footer** – Newsletter, nav links, dual office addresses

## 🎨 Design Tokens
- **Primary font**: Syne (headings) + Inter (body)
- **Brand blue**: `#00A8FF`
- **Background**: `#040815`
- **Card surface**: `rgba(10,15,30,0.8)`

## 📱 Responsive Breakpoints
- **Mobile**: 1 column layout throughout
- **Tablet (sm/md)**: 2-column grids
- **Desktop (lg)**: Full multi-column layouts, fixed side indicators
