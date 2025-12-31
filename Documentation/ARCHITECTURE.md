# Architecture Documentation

## System Overview

The Schofield Barracks 3D Terrain Viewer is a client-server web application that renders 3D geospatial terrain data using modern web technologies.

```
┌─────────────────────────────────────────────────────────────────┐
│                         Web Browser                              │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    CesiumJS Viewer                       │    │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │    │
│  │  │   Globe     │  │   3D Tiles  │  │  UI Controls    │  │    │
│  │  │   Renderer  │  │   Loader    │  │  Layer Panel    │  │    │
│  │  └─────────────┘  └─────────────┘  └─────────────────┘  │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP/HTTPS
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Express.js Server                           │
│  ┌─────────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │  Static Files   │  │  REST API   │  │  CORS Middleware    │  │
│  │  /public        │  │  /api/*     │  │                     │  │
│  └─────────────────┘  └─────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ File System
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    3D Tiles Data Store                           │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  Schofield_Barracks/Builds/2023-02-28-build-rc1/        │    │
│  │  ├── product_package_*_w158n21_ul/                      │    │
│  │  ├── product_package_*_w159n21_ur/                      │    │
│  │  ├── product_package_*_w158n21_ll/                      │    │
│  │  └── product_package_*_w159n21_lr/                      │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

## Component Architecture

### 1. Frontend (Client-Side)

#### Technology Stack
- **CesiumJS 1.113** - 3D geospatial visualization library
- **HTML5/CSS3** - User interface structure and styling
- **Vanilla JavaScript** - Application logic (no framework dependencies)

#### Key Components

```
public/index.html
├── CesiumJS Viewer
│   ├── Scene (3D rendering context)
│   ├── Globe (Earth ellipsoid with imagery)
│   ├── Camera (viewpoint control)
│   └── Primitives (3D Tiles tilesets)
├── UI Layer
│   ├── Header (branding)
│   ├── Layer Panel (toggles)
│   ├── Info Panel (coordinates)
│   ├── View Controls (navigation buttons)
│   └── Console Panel (debug output)
└── Application Logic
    ├── Tileset Loading
    ├── Event Handlers
    └── State Management
```

#### Data Flow (Client)

```
User Interaction
       │
       ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   UI Event   │───▶│   Handler    │───▶│   Cesium     │
│   (click)    │    │   Function   │    │   API Call   │
└──────────────┘    └──────────────┘    └──────────────┘
                                               │
                                               ▼
                                        ┌──────────────┐
                                        │   Scene      │
                                        │   Update     │
                                        └──────────────┘
```

### 2. Backend (Server-Side)

#### Technology Stack
- **Node.js** - JavaScript runtime
- **Express.js 4.x** - Web application framework
- **cors** - Cross-origin resource sharing

#### Server Architecture

```
server.js
├── Middleware Stack
│   ├── cors() - Enable CORS headers
│   ├── express.static('public') - Serve frontend
│   └── Custom tiles middleware - Set content types
├── API Routes
│   ├── GET /api/health - Server status
│   ├── GET /api/tilesets - List available tilesets
│   └── GET /api/extent/:package - Get extent GeoJSON
└── Static File Routes
    └── GET /tiles/* - Serve 3D Tiles data
```

#### Request Flow

```
HTTP Request
     │
     ▼
┌─────────────────────────────────────┐
│          Express Server             │
├─────────────────────────────────────┤
│  1. CORS Middleware                 │
│     └─ Add Access-Control headers   │
├─────────────────────────────────────┤
│  2. Route Matching                  │
│     ├─ /api/* → API handlers        │
│     ├─ /tiles/* → Static tiles      │
│     └─ /* → Static public files     │
├─────────────────────────────────────┤
│  3. Response                        │
│     └─ JSON / File / Error          │
└─────────────────────────────────────┘
```

### 3. Data Layer

#### 3D Tiles Structure

```
tileset.json (root)
├── asset: { version: "1.1" }
├── extensions: { MAXAR_extent, MAXAR_content_3tz }
├── geometricError: 16384.0
├── groups: [ ... metadata for each content type ]
├── root: {
│   boundingVolume: { region: [...] }
│   children: [
│       { content: { uri: "terrain.3tz" } }
│       { content: { uri: "refined_buildings.3tz" } }
│       { content: { uri: "refined_bridges.3tz" } }
│       { content: { uri: "vectors/*/..." } }
│   ]
│ }
└── schema: { ... property definitions }
```

#### Data Package Layout

```
product_package_schofield_barracks_live_w159n21_ur/
├── vricon_ste_refined/
│   ├── tileset.json          # 3D Tiles manifest
│   ├── manifest.json         # Package manifest
│   ├── extent.geojson        # Geographic bounds
│   ├── sha256.txt            # File checksums
│   ├── terrain.3tz           # Terrain mesh (SQLite archive)
│   ├── refined_buildings.3tz # Building models
│   ├── refined_bridges.3tz   # Bridge models
│   ├── licenses/             # License documents
│   └── vectors/              # Vector feature archives
│       ├── Aeronautic/
│       ├── Culture/
│       ├── Facility/
│       ├── Hydrography/
│       ├── LandCover/
│       ├── Military/
│       ├── Population/
│       ├── Recreation/
│       ├── Settlement/
│       ├── Structure/
│       ├── TransportationGround/
│       └── UtilityInfrastructure/
├── wkf_vectors/              # GeoPackage format vectors
└── vector_validation/        # Validation reports
```

## Technology Decisions

### Why CesiumJS?

| Requirement | CesiumJS Capability |
|-------------|---------------------|
| 3D Tiles support | Native OGC 3D Tiles 1.0/1.1 loader |
| Globe rendering | WGS84 ellipsoid with terrain |
| Performance | WebGL-based GPU rendering |
| Open source | Apache 2.0 license |
| No API key required | Works without Cesium Ion |

### Why Express.js?

| Requirement | Express Capability |
|-------------|-------------------|
| Static file serving | Built-in middleware |
| CORS handling | cors package integration |
| Minimal footprint | ~2MB with dependencies |
| Easy deployment | Single Node.js process |

### Why No Build System?

This project intentionally avoids bundlers (webpack, vite) to:
- Simplify deployment
- Reduce dependencies
- Enable direct file editing
- Support air-gapped environments

## Security Considerations

### CORS Configuration

```javascript
// Current: Allow all origins (development)
app.use(cors());

// Production recommendation:
app.use(cors({
  origin: ['https://your-domain.com'],
  methods: ['GET'],
  credentials: false
}));
```

### Content Security Policy

The application should implement CSP headers:

```javascript
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' https://cesium.com; " +
    "style-src 'self' 'unsafe-inline' https://cesium.com; " +
    "img-src 'self' data: blob: https://*.openstreetmap.org; " +
    "connect-src 'self' https://*.openstreetmap.org"
  );
  next();
});
```

### Data Classification

The terrain data is marked as:
- **CUI (Controlled Unclassified Information)**
- **Distribution Statement C** - U.S. Government and contractors only

Ensure appropriate access controls in production deployments.

## Performance Optimization

### Client-Side

1. **Level of Detail (LOD)** - CesiumJS automatically loads appropriate detail level
2. **Frustum Culling** - Only visible tiles are rendered
3. **Memory Management** - Configure `maximumMemoryUsage` option

```javascript
const tileset = await Cesium.Cesium3DTileset.fromUrl(url, {
  maximumScreenSpaceError: 16,    // Higher = less detail
  maximumMemoryUsage: 512,        // MB limit
  skipLevelOfDetail: true,        // Skip intermediate LODs
  cullWithChildrenBounds: true    // Aggressive culling
});
```

### Server-Side

1. **Static File Caching** - Set cache headers for tile files
2. **Compression** - Enable gzip for JSON responses
3. **Connection Keep-Alive** - Reuse HTTP connections

## Deployment Options

### Local Development

```bash
npm start
# Server at http://localhost:8080
```

### Production Deployment

1. **Reverse Proxy (nginx)**
```nginx
server {
    listen 80;
    server_name terrain.example.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
    }

    location /tiles/ {
        alias /path/to/Schofield_Barracks/Builds/;
        expires 1d;
    }
}
```

2. **Docker Container**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]
```

3. **Process Manager (PM2)**
```bash
pm2 start server.js --name terrain-viewer
pm2 save
pm2 startup
```

## Future Enhancements

### Potential Improvements

1. **.3tz Archive Support** - Server-side SQLite extraction
2. **Cesium Ion Integration** - Cloud-hosted terrain streaming
3. **User Authentication** - Access control for CUI data
4. **Measurement Tools** - Distance, area, elevation queries
5. **Export Capabilities** - Screenshot, GeoJSON export
6. **Offline Mode** - Service worker for cached viewing

### Architecture for .3tz Support

```
┌────────────────────────────────────────────────────┐
│                 Enhanced Server                     │
├────────────────────────────────────────────────────┤
│  ┌──────────────┐    ┌──────────────────────────┐  │
│  │   SQLite     │    │   Virtual File System    │  │
│  │   Reader     │───▶│   /tiles/path.3tz/tile   │  │
│  │   (better-   │    │                          │  │
│  │   sqlite3)   │    │   Maps: tile.3tz/x/y/z   │  │
│  └──────────────┘    │         → SQLite query   │  │
│                      └──────────────────────────┘  │
└────────────────────────────────────────────────────┘
```

---

*Document Version: 1.0.0*
*Last Updated: December 2024*
