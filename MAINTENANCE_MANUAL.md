# Athena-Tek Website Maintenance Manual

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Common Tasks](#common-tasks)
6. [Monitor System](#monitor-system)
7. [Styling Guide](#styling-guide)
8. [Deployment](#deployment)
9. [Troubleshooting](#troubleshooting)

---

## Overview

The Athena-Tek website is a React-based single-page application (SPA) showcasing defense technology solutions. Key features include:

- Interactive monitor demos for Network, TED, and Applications
- Responsive design with mobile navigation
- Lazy-loaded pages for performance
- GitHub Pages deployment

**Live URL:** https://athenatek23.github.io/Athena-Tek-Website/

**Repository:** https://github.com/AthenaTek23/Athena-Tek-Website

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2.0 | UI framework |
| Vite | 5.1.0 | Build tool & dev server |
| React Router | 6.22.0 | Client-side routing |
| Tailwind CSS | 3.4.1 | Utility-first styling |
| Framer Motion | 11.0.0 | Animations |
| Lucide React | 0.344.0 | Icons |
| gh-pages | 6.3.0 | Deployment |

---

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Git installed
- Code editor (VS Code recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/AthenaTek23/Athena-Tek-Website.git
cd Athena-Tek-Website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will open at `http://localhost:3000`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Build and deploy to GitHub Pages |

---

## Project Structure

```
athena-tek-monitor-integration/
├── index.html                 # Entry HTML file
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
│
├── public/                    # Static assets (copied as-is)
│   ├── 404.html               # SPA redirect for GitHub Pages
│   ├── .nojekyll              # Disable Jekyll processing
│   └── monitors/              # Monitor demo assets
│       ├── Network/
│       │   ├── Images/
│       │   └── videos/
│       ├── TED/
│       │   ├── Images/
│       │   └── videos/
│       └── Applications/
│           ├── Images/
│           └── videos/
│
└── src/
    ├── main.jsx               # React entry point
    ├── App.jsx                # Main app with routing
    │
    ├── assets/                # Imported assets (processed by Vite)
    │   ├── Logo.png
    │   ├── BannerImg.jpg
    │   └── ...
    │
    ├── components/
    │   ├── ui/                # Reusable UI components
    │   │   ├── Button.jsx
    │   │   ├── Card.jsx
    │   │   └── index.js
    │   │
    │   ├── common/            # Shared page sections
    │   │   ├── PageHero.jsx
    │   │   ├── SectionHeader.jsx
    │   │   ├── CTASection.jsx
    │   │   └── index.js
    │   │
    │   ├── layout/            # Layout components
    │   │   ├── Header.jsx
    │   │   ├── Footer.jsx
    │   │   └── index.js
    │   │
    │   └── monitors/          # Interactive monitor system
    │       ├── MonitorApp.jsx
    │       ├── Sidebar.jsx
    │       ├── Content.jsx
    │       ├── View.jsx
    │       ├── Navigation.jsx
    │       ├── NavButton.jsx
    │       ├── Pill.jsx
    │       ├── GraphicPanel.jsx
    │       ├── TextPanel.jsx
    │       ├── index.js
    │       └── styles/
    │           ├── monitor-base.css
    │           ├── network-theme.css
    │           ├── ted-theme.css
    │           ├── applications-theme.css
    │           └── index.css
    │
    ├── config/
    │   └── monitors/          # Monitor view configurations
    │       ├── network-views.js
    │       ├── ted-views.js
    │       ├── applications-views.js
    │       └── index.js
    │
    ├── pages/                 # Page components
    │   ├── HomePage.jsx
    │   ├── NetworkPage.jsx
    │   ├── TEDPage.jsx
    │   ├── TrainingPage.jsx
    │   ├── TEPage.jsx
    │   ├── AIPage.jsx
    │   ├── PartnersPage.jsx
    │   ├── AboutPage.jsx
    │   ├── NewsPage.jsx
    │   ├── ContactUsPage.jsx
    │   └── index.js
    │
    └── styles/
        ├── index.css          # Global styles + Tailwind
        └── theme.js           # Design tokens & navigation
```

---

## Common Tasks

### Adding a New Page

1. **Create the page component** in `src/pages/`:

```jsx
// src/pages/NewPage.jsx
import { SectionHeader, CTASection } from '../components/common';

export default function NewPage() {
  return (
    <div>
      <section className="section-padding container-main">
        <SectionHeader
          tag="NEW PAGE"
          title="Page Title"
          subtitle="Optional subtitle"
        />
        {/* Page content */}
      </section>
      <CTASection />
    </div>
  );
}
```

2. **Export from index** in `src/pages/index.js`:

```jsx
export { default as NewPage } from './NewPage';
```

3. **Add route** in `src/App.jsx`:

```jsx
const NewPage = lazy(() => import('./pages/NewPage'));

// Inside Routes:
<Route path="/newpage" element={<NewPage />} />
```

4. **Add to navigation** in `src/styles/theme.js`:

```javascript
export const navItems = [
  // ... existing items
  { label: 'New Page', path: '/newpage' },
];
```

### Updating Navigation Links

Edit `src/styles/theme.js`:

```javascript
export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Network', path: '/network' },
  { label: 'TED', path: '/ted' },
  // Add, remove, or reorder items here
];
```

### Updating Company Information

Edit `src/styles/theme.js`:

```javascript
export const companyInfo = {
  name: 'ATHENA-TEK',
  tagline: 'AI-Driven Defense Technology',
  email: 'info@athena-tek.com',
  pressEmail: 'press@athena-tek.com',
  location: 'United States',
};
```

### Adding Images

**For page content (processed by Vite):**
1. Add image to `src/assets/`
2. Import in component:
```jsx
import myImage from '../assets/my-image.jpg';
// Use: <img src={myImage} alt="Description" loading="lazy" />
```

**For monitor demos (static):**
1. Add to `public/monitors/[Theme]/Images/`
2. Reference in config:
```javascript
{ src: 'my-image.jpg', alt: 'Description' }
```

### Updating Footer Links

Edit `src/components/layout/Footer.jsx`:

```javascript
const footerLinks = {
  solutions: [
    { label: 'Network', path: '/network' },
    // Add or modify links
  ],
  company: [
    { label: 'About', path: '/about' },
    // Add or modify links
  ],
};
```

---

## Monitor System

The monitor system is a reusable component for interactive product demos.

### Structure

```
MonitorApp (container)
├── Sidebar (navigation panel)
│   ├── Header (title, label, subtitle)
│   ├── Navigation (view buttons)
│   └── Footer (tips)
└── Content (main display)
    └── View (current view)
        ├── Pill (view label)
        ├── GraphicPanel (image or video)
        └── TextPanel (description)
```

### Adding a New Monitor View

Edit the relevant config file in `src/config/monitors/`:

```javascript
// Example: src/config/monitors/network-views.js
export const networkViewsConfig = {
  // Add new view
  newView: {
    id: 'newView',
    label: 'New View',           // Navigation button text
    pill: 'NEW',                 // Badge text
    graphic: {
      type: 'image',             // 'image' or 'video'
      src: 'my-image.jpg',       // Filename in public/monitors/Network/Images/
      alt: 'Description',
    },
    text: {
      title: 'View Title',
      description: 'Main description text.',
      emphasis: 'Optional emphasized text.',
      listItems: [
        'Bullet point 1',
        'Bullet point 2',
      ],
      footer: {
        text: 'Footer text with',
        links: ['link1', 'link2'],
      },
    },
  },
};
```

### Adding a Video

1. Add video file to `public/monitors/[Theme]/videos/`
2. Update view config:

```javascript
graphic: {
  type: 'video',
  video: 'my-video.mp4',
  poster: 'thumbnail.jpg',  // Optional thumbnail
  alt: 'Video description',
},
```

### Monitor Themes

Three themes available: `network`, `ted`, `applications`

Colors defined in:
- `src/components/monitors/styles/network-theme.css`
- `src/components/monitors/styles/ted-theme.css`
- `src/components/monitors/styles/applications-theme.css`

To modify theme colors, edit the CSS variables:

```css
.monitor-theme-network {
  --monitor-accent: #f5a623;        /* Primary accent color */
  --monitor-accent-soft: rgba(245, 166, 35, 0.12);
  --monitor-accent-glow: rgba(245, 166, 35, 0.5);
  /* ... other variables */
}
```

---

## Styling Guide

### Tailwind CSS Classes

The project uses Tailwind CSS. Common patterns:

```jsx
// Container with max-width and padding
<div className="container-main">

// Section with vertical padding
<section className="section-padding">

// Dark background section
<section className="section-dark section-padding">

// Gradient text
<span className="text-gradient">Highlighted text</span>

// Tag/badge
<span className="tag-base tag-primary">TAG TEXT</span>
```

### Custom Components

**Button:**
```jsx
<Button
  to="/path"           // Internal link
  href="https://..."   // External link
  variant="primary"    // primary, secondary, ghost, outline
  size="md"            // sm, md, lg
  icon={<Icon />}      // Optional icon
>
  Button Text
</Button>
```

**Card:**
```jsx
<Card
  variant="default"    // default, featured, dark, glass
  size="md"            // sm, md, lg, xl
  hover={true}         // Enable hover effects
>
  Card content
</Card>
```

**SectionHeader:**
```jsx
<SectionHeader
  tag="SECTION TAG"
  title="Section Title"
  subtitle="Optional subtitle"
  light={false}        // true for dark backgrounds
/>
```

### Color Palette

Defined in `tailwind.config.js`:

| Color | Usage |
|-------|-------|
| `primary-500` | Main brand color (light blue #729ecc) |
| `primary-navy` | Dark brand color (#012169) |
| `dark-950` | Page background |
| `dark-400` | Muted text |
| `white` | Headings and primary text |

### Adding Custom Styles

Add to `src/styles/index.css`:

```css
@layer components {
  .my-custom-class {
    @apply bg-primary-500 text-white rounded-lg p-4;
  }
}
```

---

## Deployment

### Deploy to GitHub Pages

```bash
npm run deploy
```

This command:
1. Builds the production bundle
2. Pushes to the `gh-pages` branch
3. GitHub Pages serves from this branch

### Manual Deployment Steps

```bash
# 1. Build
npm run build

# 2. Preview locally (optional)
npm run preview

# 3. Deploy
npx gh-pages -d dist --dotfiles
```

### GitHub Pages Configuration

In repository Settings → Pages:
- **Source:** Deploy from a branch
- **Branch:** `gh-pages` / `/ (root)`

### Custom Domain (Optional)

1. Add `CNAME` file to `public/` with your domain
2. Configure DNS with your domain provider
3. Enable HTTPS in GitHub Pages settings

---

## Troubleshooting

### Common Issues

**Problem:** Blank page after deployment

**Solution:** Check browser console for errors. Usually caused by:
- Incorrect `base` path in `vite.config.js`
- Missing 404.html for SPA routing

---

**Problem:** Images not loading

**Solution:**
- For `src/assets/`: Ensure import path is correct
- For `public/`: Use path starting with `/Athena-Tek-Website/`

---

**Problem:** Styles not updating

**Solution:**
```bash
# Clear cache and rebuild
rm -rf node_modules/.vite
npm run dev
```

---

**Problem:** Build fails with CSS errors

**Solution:** Check for:
- Missing Tailwind classes in `tailwind.config.js`
- Typos in `@apply` directives

---

**Problem:** Route not working after deployment

**Solution:** Ensure `public/404.html` exists with the SPA redirect script.

---

### Development Tips

1. **Use React DevTools** browser extension for debugging
2. **Check Network tab** for failed asset requests
3. **Use `npm run preview`** to test production build locally
4. **Clear browser cache** (Ctrl+Shift+R) after deploying

### Getting Help

- React docs: https://react.dev
- Tailwind CSS docs: https://tailwindcss.com/docs
- Vite docs: https://vitejs.dev/guide
- Framer Motion docs: https://www.framer.com/motion

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Dec 2024 | Initial release with optimizations |

---

*Last updated: December 2024*
