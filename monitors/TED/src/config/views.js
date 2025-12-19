// Monitor 2 - TED (Training Edge Device) - View Configuration
export const viewsConfig = {
  home: {
    id: 'home',
    label: 'TED Overview',
    badge: null,
    title: 'Training Edge Device',
    tag: 'TED Overview',
    pillText: 'SOLDIER-WORN NODE',
    image: {
      src: 'Images/TED-2.jpg',
      alt: 'TED hero visual'
    },
    panel: {
      title: 'TED in One Glance',
      description: 'TED is a rugged soldier-worn device that brings precision sensing, resilient networking and AI to the edge. It glues the network built on Monitor 1 to the training effects shown on Monitor 3.',
      listItems: [
        'Tracks 3D soldier position, posture and movement.',
        'Acts as a node in hybrid 5G / LTE / 900 MHz mesh.',
        'Runs AI models for RTCA, image understanding and safety.'
      ],
      footer: {
        text: 'Use the menu to dive deeper into sensors, radios, AI and safety capabilities.'
      }
    },
    isHome: true
  },

  sensors: {
    id: 'sensors',
    label: 'Sensors & Positioning',
    badge: 'Capability',
    title: 'Sensors & Positioning',
    tag: 'Sensor Fusion',
    pillText: 'RTK + IMU + EMITTERS',
    image: {
      src: 'Images/TED-SP.png',
      alt: 'TED sensors and positioning artwork'
    },
    panel: {
      title: 'Precision Through Sensor Fusion',
      description: 'TED combines RTK GPS, a high-grade IMU, and a barometric sensor to know exactly where a soldier is and what they’re doing – standing, prone, kneeling, climbing. When GPS is denied, TED uses nearby mesh, BLE, and ZigBee emitters to trilaterate room-level position. The result is a continuous 3D soldier state that live training systems can trust for realistic casualty assessment',
      listItems: [
        'RTK GPS for centimeter-level accuracy',
        'IMU tracks posture and movement (prone, kneel, stand).',
        'Trilateration indoors with mesh',
	'BLE and ZigBee'
      ],
      footer: {
        text: 'This 3D state is the foundation for realistic RTCA and eBullet adjudication.'
      }
    }
  },

  radios: {
    id: 'radios',
    label: 'Radios & Mesh',
    badge: 'Capability',
    title: 'Radios & Mesh',
    tag: 'Network Swiss-Army Knife',
    pillText: '5G / LTE / MESH',
    image: {
      src: '/Images/TED-RM.png',
      alt: 'TED radios and mesh interfaces'
    },
    panel: {
      title: 'Built for Every Network',
      description: 'TED is a network Swiss army knife. It speaks 5G and LTE when infrastructure is present, and it forms its own five-watt, nine-hundred megahertz mesh when it’s not. Every TED can forward data, so the more soldiers you field, the stronger the network becomes. Any node can backhaul through Starlink or another gateway to reach TAK and LTEC services.',
      listItems: [
        '5G and LTE CAT-M where available.',
        '5 W 900 MHz Wi-Fi HaLow mesh for long-range training fabrics.',
        'Standards-based IP for integration with Starlink and TAK.'
      ],
      footer: {
        text: 'The more TEDs you field, the stronger and more resilient the training network becomes.'
      }
    }
  },

  ai: {
    id: 'ai',
    label: 'AI Engine',
    badge: 'Capability',
    title: 'AI Engine',
    tag: 'Edge Intelligence',
    pillText: 'ON-DEVICE MODELS',
    image: {
      src: '/Images/TED-AI.png',
      alt: 'TED AI engine, models and TPU'
    },
    panel: {
      title: 'AI at the Tactical Edge',
      description: 'Under the hood, TED is an AI computer. It runs lightweight models using ONNX and TensorFlow, with support for vision models like YOLO and speech models similar to Whisper. For high-demand scenarios, TED can be paired with a Google TPU to deliver tera-operations of compute at the edge. That means faster, more accurate decisions for weapon engagements and soldier safety – without waiting on the cloud',
      listItems: [
        'Runs tiny models at the edge',
        'Supports YOLO, Whisper like models',
        'Integrates with Google TPU accelerators'
      ],
      footer: {
        text: 'AI on TED feeds RTCA, safety logic and advanced AAR insights.'
      }
    }
  },

  safety: {
    id: 'safety',
    label: 'Soldier Safety',
    badge: 'Capability',
    title: 'Soldier Safety',
    tag: 'Health & Alerts',
    pillText: 'WEARABLE INTEGRATION',
    image: {
      src: 'Images/TED-SS.png',
      alt: 'TED soldier safety and wearables'
    },
    panel: {
      title: 'Realism Without Real Injuries',
      description: 'TED also protects soldiers. It connects to wearables that monitor core temperature, movement, and elevation. If a soldier goes down and stays unresponsive beyond a configured threshold, TED notifies the Observer/Controller. With hundreds of soldiers on an exercise, TED filters the noise and only raises the alerts that matter, helping reduce real-world injuries while still keeping training intense.',
      listItems: [
        'Detects man down / unresponsive soldiers over time.',
	'Core temperature & motion monitoring',
        'Alerts Observer Controllers only when action is required.',
        'Supports heat and injury risk reduction'
      ],
      footer: {
        text: "Pair this with the Solution Driven monitor to see how TED's data changes RTCA and After Action Review."
      }
    }
  },

  videoTED: {
    id: 'videoTED',
    label: 'Video: TED Description',
    badge: 'Video',
    title: 'TED Description',
    tag: 'Video Demo',
    pillText: 'VIDEO',
    video: {
      src: 'videos/TED-Description.mp4',
      poster: 'Images/TED-2.jpg'
    },
    panel: {
      title: '',
      description: '',
      listItems: [],
      footer: {
        text: ''
      }
    }
  }
};

export const siteConfig = {
  title: 'Athena-Tek | Monitor 2 – TED',
  sidebar: {
    label: null,
    title: 'TED',
    subtitle: 'The Training Edge Device – the soldier-worn AI node that glues the network and effects together.',
    menuLabel: 'Select Capability',
    footerTip: 'Tip: After exploring TED, move to Monitor 3 to see how these capabilities change training effects and AARs.'
  },
  defaultView: 'home'
};
