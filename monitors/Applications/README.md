# Athena-Tek Monitor 3 - Solution Driven (React)

Gold/amber themed React application showing TED use cases and training outcomes.

## 📁 Project Structure

```
monitor3-react/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── (images go here)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── config/
    │   └── views.js          # 5 views: home, smallarms, indirect, aar, ste
    ├── components/
    │   ├── index.js
    │   ├── Sidebar.jsx
    │   ├── Navigation.jsx
    │   ├── NavButton.jsx
    │   ├── Content.jsx
    │   ├── View.jsx
    │   ├── Pill.jsx
    │   ├── GraphicPanel.jsx
    │   └── TextPanel.jsx
    └── styles/
        └── index.css         # Gold/amber theme
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Opens at http://localhost:3001

## 🎨 Theme

This monitor uses a gold/amber color scheme:
- Accent: `#ffcc5a`
- Background: `#060807`
- Warm gradients and borders

## 📦 Views

1. **Overview** - Introduction to Solution Driven
2. **Small Arms – eBullet** - Modernizing MILES
3. **Indirect Fire in MOUT** - Terrain-aware RTCA
4. **AI-Driven AAR** - LLM analytics
5. **STE & Army Alignment** - Future integration

## 🔧 Adding Views

Edit `src/config/views.js` - same structure as Monitor 1.

## 📋 Images

Place in `public/`:
- `Images/SD.jpg`
- `m3_small_arms_ebullet.png`
- `m3_indirect_fire_mout.png`
- `m3_ai_driven_aar.png`
- `m3_ste_alignment.png`
