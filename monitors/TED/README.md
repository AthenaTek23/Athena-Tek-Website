# Athena-Tek Monitor 2 - TED (React)

Cyan/teal themed React application showcasing the Training Edge Device capabilities.

## 📁 Project Structure

```
monitor2-react/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── (images go here)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── config/
    │   └── views.js          # 5 views: home, sensors, radios, ai, safety
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
        └── index.css         # Cyan/teal theme
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Opens at http://localhost:3002

## 🎨 Theme

Cyan/teal color scheme:
- Accent: `#46e0ff`
- Background: `#05060a`
- Cool gradients with green accents

## 📦 Views

1. **TED Overview** - Introduction to Training Edge Device
2. **Sensors & Positioning** - RTK, IMU, sensor fusion
3. **Radios & Mesh** - 5G, LTE, mesh networking
4. **AI Engine** - On-device AI models
5. **Soldier Safety** - Wearables and health monitoring

## 🔧 Adding Views

Edit `src/config/views.js` with the same structure as other monitors.

## 📋 Images

Place in `public/`:
- `Images/TED.jpg`
- `m2_sensors_positioning.png`
- `m2_radios_mesh.png`
- `m2_ai_engine.png`
- `m2_soldier_safety.png`

## 🔄 Running All Monitors

Each monitor runs on a different port:

```bash
# Terminal 1 - Monitor 1 (Network Focused)
cd monitor1-react && npm run dev  # Port 3000

# Terminal 2 - Monitor 2 (TED)
cd monitor2-react && npm run dev  # Port 3002

# Terminal 3 - Monitor 3 (Solution Driven)
cd monitor3-react && npm run dev  # Port 3001
```
