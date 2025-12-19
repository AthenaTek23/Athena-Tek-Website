// Monitor 3 - Solution Driven - View Configuration
export const viewsConfig = {
  home: {
    id: 'home',
    label: 'Overview',
    badge: 'Monitor 3',
    title: 'Solution Driven',
    tag: 'Use Cases',
    pillText: 'TRAINING EFFECTS',
    image: {
      src: 'Images/Solutions.jpg',
      alt: 'Solution Driven overview artwork'
    },
    panel: {
      title: '',
      description: ``,
      listItems: [
        ' ',
        ' ',
        ''
      ],
      footer: {
        text: 'Select any use case on the left to explore the impact.'
      }
    },
    isHome: true
  },

  smallarms: {
    id: 'smallarms',
    label: 'Small Arms – eBullet',
    badge: 'Use Case',
    title: 'Small Arms – From Laser to eBullet',
    tag: 'Legacy + NGSW',
    pillText: 'DIRECT FIRE',
    image: {
      src: 'Images/SD-SA.png',
      alt: 'Small arms eBullet visual'
    },
    panel: {
      title: 'Modernizing Legacy MILES',
      description: `Legacy MILES systems are limited by line-of-sight and simple codes. TED keeps that inventory useful but upgrades it with eBullet messages over RF. Each trigger pull is paired with weapon orientation, RTK position, posture, and even camera imagery when available. That data becomes a digital bullet that training systems can use to adjudicate hits more realistically – in woods, through light foliage, and around complex structures`,
      listItems: [
        'Includes shooter ID, TSPI, posture and weapon type.',
        'Optional weapon camera + YOLO validate what was actually seen.',
        'Works in forests and urban terrain, not just open LOS.'
      ],
      footer: {
        text: 'For NGSW weapons, TED simply taps into the digital fire control and optics that are already on the rifle.'
      }
    }
  },

  indirect: {
    id: 'indirect',
    label: 'Indirect Fire in MOUT',
    badge: 'Use Case',
    title: 'Indirect Fire in MOUT',
    tag: 'Area Weapons',
    pillText: '3D RTCA',
    image: {
      src: 'Images/SD-IF.png',
      alt: 'Indirect fire RTCA in MOUT'
    },
    panel: {
      title: 'Terrain-Aware RTCA at the Edge',
      description: `For mortars, Javelin, Stinger, and other area weapons, TED enables true 3D casualty assessment. As the simulated round lands, each TED knows its soldier’s exact floor, wall, and cover conditions using One World Terrain and hybrid positioning. Instead of a random casualty table, effects are resolved at the point of impact – who is exposed, who is behind solid cover, and who is shielded by a vehicle. No god gun required.`,
      listItems: [
        'Knows floor, wall and vehicle cover for each soldier.',
        'Applies realistic blast effects instead of random tables.',
        'Removes the need for O/C "god gun" adjudication.',
	'RTCA resolved at the point of impact'
      ],
      footer: {
        text: 'The same architecture supports future STE-LTS indirect-fire concepts and experimentation.'
      }
    }
  },

  aar: {
    id: 'aar',
    label: 'AI-Driven AAR',
    badge: 'Use Case',
    title: 'AI-Driven After Action Review',
    tag: 'Insights',
    pillText: 'LLM ANALYTICS',
    image: {
      src: 'Images/SD-AAR.png',
      alt: 'AI-driven After Action Review dashboard'
    },
    panel: {
      title: 'From Data to Information',
      description: `For After Action Review, Athena-Tek uses large language models at the TAK server to assemble the story. TED provides engagement data, movement traces, exposure time, and biometric trends. LLMs turn that raw data into clear narratives and recommendations – by soldier, by squad, by training lane. The same system also analyzes network formation and safety events, so every rotation improves the next.`,
      listItems: [
        'LLMs synthesize training data',
        'Per-soldier, squad & Platoon.',
        'Network performance & safety insights.'
      ],
      footer: {
        text: 'Commanders receive unit-level insight, while every soldier can review a personalized AAR.'
      }
    }
  },

  ste: {
    id: 'ste',
    label: 'STE & Army Alignment',
    badge: 'Context',
    title: 'STE & Army Alignment',
    tag: 'Future Ready',
    pillText: 'STE-LTS',
    image: {
      src: 'Images/SD-STE.png',
      alt: 'TED alignment with STE, OWT, TAK and LTEC'
    },
    panel: {
      title: 'Built for STE and Beyond',
      description: `TED is designed from the ground up to support the Army’s Synthetic Training Environment and live training modernization. It brings eBullet and geo-pairing concepts into practice, uses One World Terrain for terrain-aware RTCA, and connects cleanly into TAK and LTEC services. That means units can modernize training today, while staying aligned to where STE is going tomorrow`,
      listItems: [
	'STE Live Training System',
        'eBullet and geo-pairing concepts',
        'One World Terrain & TAK inegration',
        
      ],
      footer: {
        text: 'Visitors who reach this screen are primed for a live TED demo at your booth to see the full system in action.'
      }
    }
  },

  videoSensorFusion: {
    id: 'videoSensorFusion',
    label: 'Video: Sensor Fusion',
    badge: 'Video',
    title: 'Sensor Fusion',
    tag: 'Video Demo',
    pillText: 'VIDEO',
    video: {
      src: 'videos/SensorFusion.mp4',
      poster: 'Images/Solutions.jpg'
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
  title: 'Athena-Tek | Monitor 3 – Solution Driven',
  sidebar: {
    label: 'Monitor 3',
    title: 'Solution Driven',
    subtitle: 'How TED and the network transform training realism, RTCA and AAR.',
    menuLabel: 'Select Use Case',
    footerTip: 'Tip: Use this monitor to tell the "so what" story – show visitors what changes for soldiers, O/Cs and commanders.'
  },
  defaultView: 'home'
};
