# Athena-Tek Monitor 1 - Network Focused (React)

Blue-themed React application showing network connectivity and training infrastructure.

## 📁 Project Structure

```
monitor1-react/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── (images go here)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── config/
    │   └── views.js          # 4 views: home, training, mesh, starlink
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
        └── index.css         # Blue theme
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Opens at http://localhost:3000

## 🎨 Theme

Blue color scheme:
- Accent: `#47c3ff`
- Background: `#020915`
- Cool blue gradients and borders

## 📦 Views

1. **Overview & Menu** - Introduction to Network Focused
2. **Training Area Challenge** - Terrain and LOS issues
3. **Expeditionary 5G + Mesh** - Hybrid network fabric
4. **Starlink & Range Systems** - Backhaul and reachback

## 🔧 Adding Views

Edit `src/config/views.js`:

```javascript
newView: {
  id: 'newView',
  label: 'Menu Label',
  badge: 'Category',
  title: 'View Title',
  tag: 'Tag',
  pillText: 'STATUS',
  image: { src: 'path/to/image.png', alt: 'Description' },
  panel: {
    title: 'Panel Title',
    description: 'Text...',
    listItems: ['Item 1', 'Item 2'],
    footer: { text: 'Footer text' }
  }
}
```

## 📋 Images

Place in `public/`:
- `Images/NF.jpg`
- `m1_training_area_challenge.png`
- `m1_expeditionary_5g_mesh.png`
- `m1_starlink_range_systems.png`

## 🔄 Running Both Monitors

Monitor 1 runs on port 3000, Monitor 3 on port 3001:

```bash
# Terminal 1
cd monitor1-react && npm run dev

# Terminal 2
cd monitor3-react && npm run dev
```
