# AAR Networking Monitor v3.0 - User Guide

## Table of Contents
1. [Getting Started](#1-getting-started)
2. [System Requirements](#2-system-requirements)
3. [Installation](#3-installation)
4. [Starting the Application](#4-starting-the-application)
5. [Live Mode Operations](#5-live-mode-operations)
6. [AAR Mode Operations](#6-aar-mode-operations)
7. [Network Topology View](#7-network-topology-view)
8. [Troubleshooting](#8-troubleshooting)

---

## 1. Getting Started

The AAR Networking Monitor is a web-based application for monitoring soldier positions and network connectivity during military training exercises. It supports two primary modes:

- **LIVE Mode**: Real-time monitoring of TAK (Team Awareness Kit) devices
- **AAR Mode**: Playback and analysis of recorded training data from CSV files

---

## 2. System Requirements

### Hardware
- Modern web browser (Chrome, Firefox, Edge recommended)
- Display resolution: 1920x1080 or higher recommended
- Network connectivity to TAK multicast network (for LIVE mode)

### Software
- Node.js v18 or higher (for multicast proxy)
- npm (Node Package Manager)
-mcast_relay.py need to be running on the Gateway to forward traffic from WiFi “wlp1s0f0” to Ethernet “eth0”

### Network
- Access to multicast group 239.2.3.1:6969 (default TAK multicast)
- WebSocket connectivity (port 7000 default)

---

## 3. Installation

### Step 1: Install Dependencies

Open a terminal in the project directory and run:

```bash
cd C:\Users\william.sanchez\Development\PPEA\Assess\AAR-Networking-MonitorV3.0
npm install
```

### Step 2: Verify Installation

Check that all dependencies are installed:

```bash
npm list --depth=0
```

---

## 4. Starting the Application

### 4.1 Starting the Multicast Proxy (Required for LIVE Mode)

The multicast proxy bridges UDP multicast traffic to WebSocket for browser access.

#### Basic Start (Auto-detect Interface)
```bash
node multicast-websocket-proxy.js
```

#### Specify Network Interface
```bash
node multicast-websocket-proxy.js --interface 10.1.10.200
```

#### Full Configuration Example
```bash
node multicast-websocket-proxy.js --interface 10.1.10.200 --websocket-port 7000 --multicast-group 239.2.3.1 --multicast-port 6969 --log-level debug
```

#### Command Line Options

| Option | Default | Description |
|--------|---------|-------------|
| `--interface` | auto-detect | Network interface IP to bind |
| `--websocket-port` | 7000 | WebSocket server port |
| `--multicast-group` | 239.2.3.1 | TAK multicast group IP |
| `--multicast-port` | 6969 | TAK multicast port |
| `--log-level` | info | Logging verbosity (debug/info/warn/error) |

#### Expected Output
```
Script loaded, checking if running as main module...
Starting Multicast WebSocket Proxy Server...

[2024-12-10T10:00:00.000Z] [INFO] Available network interfaces:
[2024-12-10T10:00:00.000Z] [INFO]   Ethernet: 10.1.10.200
[2024-12-10T10:00:00.000Z] [INFO] Using manually configured interface: 10.1.10.200
[2024-12-10T10:00:00.000Z] [INFO] WebSocket server listening on 0.0.0.0:7000
[2024-12-10T10:00:00.000Z] [INFO] UDP socket listening on 0.0.0.0:6969
[2024-12-10T10:00:00.000Z] [INFO] Joined multicast group 239.2.3.1 on interface 10.1.10.200
[2024-12-10T10:00:00.000Z] [INFO] Multicast WebSocket Proxy is running
[2024-12-10T10:00:00.000Z] [INFO] Listening for multicast: 239.2.3.1:6969
[2024-12-10T10:00:00.000Z] [INFO] WebSocket server: ws://0.0.0.0:7000
[2024-12-10T10:00:00.000Z] [INFO] Ready to proxy COT messages from UDP to WebSocket clients
```

### 4.2 Starting the Web Application

In a **separate terminal**:

```bash
npm run dev
```

Expected output:
```
  VITE v5.x.x  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://10.1.10.200:5173/
  ➜  press h + enter to show help
```

### 4.3 Accessing the Application

Open your web browser and navigate to:
- **Local access**: `http://localhost:5173`
- **Network access**: `http://<your-ip>:5173`

---

## 5. Live Mode Operations

### 5.1 Connecting to TAK Network

1. Click the **"TAK Connection"** button in the toolbar
2. The TAK Connection window appears with connection settings:

   | Setting | Default | Description |
   |---------|---------|-------------|
   | Proxy Host | 192.168.111.3 | IP where multicast proxy runs |
   | Proxy Port | 7000 | WebSocket port |
   | Multicast Group | 239.2.3.1 | TAK multicast address |
   | Multicast Port | 6969 | TAK multicast port |

3. Click **"Connect"**
4. Status indicator shows connection state:
   - **Green**: Connected, receiving data
   - **Yellow**: Connecting/Warning
   - **Red**: Connection error

### 5.2 Live Mode Features

#### Map View
- Soldiers appear as military symbols on the map
- Symbols update in real-time as COT messages arrive
- Click on a soldier symbol to see details

#### Soldiers List
- Click **"Soldiers"** in toolbar
- Shows all connected soldiers with:
  - Callsign
  - IP Address
  - Connection type (Station/Mesh)
  - Telemetry (posture, heart rate, temperature)
  - Last seen timestamp

#### Network Topology
- Click **"Network Topology"** button
- Real-time visualization of 802.11ah mesh network
- Node colors indicate status:
  - **Green**: Active connection
  - **Yellow**: Warning (possible disconnect)
  - **Gray**: Stale/disconnected

#### Casualty Tracker
- Click **"Casualty Tracker"** button
- Monitors soldier status changes
- Alerts for critical events (fall detection, casualty state)

### 5.3 Adaptive Heartbeat Detection

The system automatically learns each node's message frequency and detects disconnects faster:

1. **Baseline Period**: After 3+ messages, calculates average interval
2. **Warning State**: Node turns yellow when 70% of expected time passes
3. **Stale Detection**: Node marked stale after 2.5x expected interval
4. **Quick Detection**: Nodes sending frequently (< 5s) are detected stale within 10s

Example: If a soldier sends messages every 2 seconds, the system expects the next message within 5 seconds (2.5 × 2s). If no message arrives, the node is marked stale.

---

## 6. AAR Mode Operations

### 6.1 Importing CSV Data

1. Click **"Import"** in the toolbar
2. Click **"Choose File"** or drag-and-drop a CSV file
3. Supported CSV format: 30-column position data file
4. After import, application switches to AAR mode

### 6.2 CSV Format Requirements

The CSV file must contain these columns (order matters):

| Column | Name | Required | Example |
|--------|------|----------|---------|
| 0 | callsign | Yes | ALPHA_1 |
| 1 | message_id | Yes | MSG001 |
| 2 | squad | Yes | ALPHA |
| 3 | ip | Yes | 10.100.5.12 |
| 8 | latitude | Yes | 28.594280 |
| 9 | longitude | Yes | -81.261269 |
| 11 | posture | No | lying/standing |
| 19 | nexthop | No | MAP_5 |

### 6.3 Timeline Navigation

After importing CSV:

1. **Timeline scrubber** appears at bottom of screen
2. **Drag** the slider to move through time
3. **Play/Pause** buttons for automatic playback
4. Current timestamp displayed above timeline

### 6.4 AAR Analysis Features

#### Playback Controls
- Use timeline to scrub through exercise
- Map and topology update to show state at selected time
- Voice notes (if available) sync with timeline

#### Network Topology
- Shows connectivity at selected time point
- Based on `nexthop` column in CSV
- Visualizes how soldiers connected to MAPs

#### Soldier Status Analysis
- Review casualty states over time
- Identify when soldiers went down
- Analyze posture changes

---

## 7. Network Topology View

### 7.1 Node Types

| Icon | Node Type | Description |
|------|-----------|-------------|
| Orange circle | MAP | Mesh Access Point |
| Blue rectangle | Gateway | Central infrastructure |
| Green circle | Station | DHCP-connected soldier |
| Purple hexagon | Mesh Point | Mesh-connected soldier |

### 7.2 Connection Types

| Line Style | Connection Type |
|------------|-----------------|
| Solid blue (thick) | MAP to Gateway |
| Solid green | Station to MAP |
| Dashed purple | Mesh Point to MAP |
| Dashed pink | Mesh Point to Gateway |
| Dash-dot orange | Multi-hop mesh |
| Dotted gray | Stale connection |

### 7.3 Topology Controls

- **Show Stale Nodes**: Toggle visibility of disconnected nodes
- **Auto Cleanup**: Automatically remove old stale nodes
- **Click node**: View detailed information in side panel

### 7.4 Node Status Indicators

| Color | Status | Description |
|-------|--------|-------------|
| Green | Active | Receiving messages regularly |
| Yellow | Warning | Message delayed, may disconnect |
| Gray | Stale | No recent messages, likely offline |

---

## 8. Troubleshooting

### 8.1 Multicast Proxy Issues

#### "No UDP messages received" Warning
**Cause**: Proxy not receiving multicast traffic

**Solutions**:
1. Verify correct network interface:
   ```bash
   node multicast-websocket-proxy.js --interface <your-ip> --log-level debug
   ```

2. Check firewall allows UDP port 6969

3. Verify multicast routing on network

4. Test with another multicast receiver tool

#### "Failed to join multicast group"
**Cause**: Network interface not available or wrong IP

**Solutions**:
1. List available interfaces:
   ```bash
   ipconfig  # Windows
   ifconfig  # Linux/Mac
   ```

2. Use correct interface IP:
   ```bash
   node multicast-websocket-proxy.js --interface 192.168.1.100
   ```

### 8.2 Web Application Issues

#### "WebSocket connection failed"
**Cause**: Cannot connect to multicast proxy

**Solutions**:
1. Verify proxy is running
2. Check proxy IP/port in TAK Connection settings
3. Verify no firewall blocking WebSocket port

#### "Waiting for real-time COT data..."
**Cause**: Connected but no data flowing

**Solutions**:
1. Check proxy is receiving multicast (look for message count)
2. Verify TAK devices are transmitting
3. Check for MAP/Gateway nodes in traffic (required for full topology)

#### Topology shows soldiers but no connections
**Cause**: No MAP or Gateway nodes detected

**Solutions**:
1. Ensure MAP devices have "MAP" in callsign (e.g., MAP_5)
2. Ensure Gateway has "GATEWAY" in callsign
3. Check soldier IPs match MAP subnet (e.g., 10.100.5.x connects to MAP_5)

### 8.3 CSV Import Issues

#### "Invalid CSV format"
**Cause**: CSV doesn't match expected 30-column format

**Solutions**:
1. Verify CSV has correct number of columns
2. Check column order matches expected format
3. Ensure no extra header rows

#### Timeline not showing data
**Cause**: Missing or invalid timestamp data

**Solutions**:
1. Check `sent_time_gmt` column has valid timestamps
2. Verify data is sorted chronologically

### 8.4 Performance Issues

#### Application running slowly
**Solutions**:
1. Reduce number of visible soldiers using filters
2. Close unused windows (Soldiers list, Topology)
3. Use Chrome or Firefox for best performance
4. Clear browser cache

#### High CPU usage
**Cause**: Too many nodes or frequent updates

**Solutions**:
1. Enable "Auto Cleanup" in topology view
2. Reduce map zoom level
3. Filter to specific squad or callsign

---

## Appendix A: Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Escape | Close active window |
| Space | Play/Pause timeline (AAR mode) |

---

## Appendix B: Default Network Configuration

| Parameter | Default Value |
|-----------|---------------|
| Multicast Group | 239.2.3.1 |
| Multicast Port | 6969 |
| WebSocket Port | 7000 |
| Proxy Host | localhost |
| Stale Timeout | 30 seconds |

---

## Appendix C: Browser Console Debugging

Open browser developer tools (F12) and use console:

```javascript
// Check application state
window.__DEBUG__.AppStore.getState()

// Check network statistics
window.__DEBUG__.NetworkStore.getNetworkStats()

// View all nodes
Array.from(window.__DEBUG__.NetworkStore.takNetworkData.values())

// Check heartbeat data for specific node
window.__DEBUG__.NetworkStore.nodeHeartbeats.get('SOLDIER_1')
```

---

## Support

For issues or feature requests:
- Review this guide's troubleshooting section
- Check browser console for error messages
- Contact development team with:
  - Browser console output
  - Proxy terminal output
  - Steps to reproduce issue

---

*User Guide Version: 3.0*
*Last Updated: December 2024*

