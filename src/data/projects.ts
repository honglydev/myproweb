import type { Project } from '../types/typesx';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'angkor-go',
    title: 'AngkorGo — Smart Heritage Guide Android App',
    category: 'android',
    typeLabel: 'Android App',
    year: '2025',
    summary:
      'Offline-first Android travel companion for Siem Reap and Angkor Archaeological Park featuring interactive GPS temple maps and Khmer-English audio guides.',
    fullDescription:
      'AngkorGo empowers travelers exploring Cambodia’s ancient temples with zero-connectivity offline vector maps, historical Khmer inscriptions decoded in plain language, and an intuitive UI built with Kotlin and Material 3.',
    tech: ['Kotlin', 'Android Studio', 'Room DB', 'Google Maps SDK'],
    highlights: [
      '100% offline map caching for remote temple complexes',
      'Bilingual Khmer and English narrated cultural tours',
      'Optimized battery geofencing for proximity audio triggers',
    ],
    accentGradient: 'from-amber-500 via-yellow-600 to-orange-700',
    demoUrl: 'https://angkorgo-demo.example.com',
    repoUrl: 'https://github.com/honglydev/angkor-go-android',
  },
  {
    id: 'khmerpay-portal',
    title: 'KhmerPay — KHQR Merchant Analytics Portal',
    category: 'web',
    typeLabel: 'Web App',
    year: '2025',
    summary:
      'Real-time fintech merchant dashboard supporting Bakong KHQR payment tracking, settlement analytics, and instant automated invoice generation.',
    fullDescription:
      'Built for growing retail businesses in Cambodia, KhmerPay unifies Bakong KHQR transaction streams into a responsive React and TypeScript dashboard with sub-second WebSocket updates and KHR/USD dual-currency reconciliation.',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    highlights: [
      'Real-time KHR & USD dual-currency ledger reconciliation',
      'Dynamic KHQR code generator with instant webhook verification',
      'Exportable tax-ready monthly financial statements',
    ],
    accentGradient: 'from-cyan-500 via-teal-600 to-emerald-700',
    demoUrl: 'https://khmerpay-portal.example.com',
    repoUrl: 'https://github.com/honglydev/khmerpay-dashboard',
  },
  {
    id: 'srok-srae',
    title: 'SrokSrae — AgriTech Crop & Weather Android App',
    category: 'android',
    typeLabel: 'Android App',
    year: '2024',
    summary:
      'Empowering Cambodian farmers with localized Mekong basin rainfall alerts, crop disease photo diagnostics, and daily regional market prices in Khmer.',
    fullDescription:
      'Designed specifically for rural connectivity conditions, SrokSrae features high-contrast outdoor legibility, voice-guided Khmer navigation, and lightweight leaf disease detection tools.',
    tech: ['Kotlin', 'Android SDK', 'Firebase', 'Retrofit', 'MySQL'],
    highlights: [
      'On-device crop disease identification guides',
      'Daily wholesale crop price alerts across Cambodian provinces',
      'Accessible Khmer typography and audio read-aloud support',
    ],
    accentGradient: 'from-emerald-500 via-green-600 to-teal-800',
    demoUrl: 'https://sroksrae-app.example.com',
    repoUrl: 'https://github.com/honglydev/sroksrae-android',
  },
  {
    id: 'code-nation-api',
    title: 'Code Nation — Developer Community REST API',
    category: 'backend',
    typeLabel: 'Backend Service',
    year: '2024',
    summary:
      'Robust backend microservice architecture powering code snippet sharing, authentication, and technical discussions for Cambodian programmers.',
    fullDescription:
      'Engineered with Node.js, Express, and PostgreSQL, this secure API handles JWT authentication, rate limiting, role-based access control, and asynchronous job queues for community notifications.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'JWT Auth'],
    highlights: [
      'Secure token-based authentication and role authorization',
      'Optimized SQL queries with connection pooling',
      'Fully containerized with Docker for seamless cloud deployment',
    ],
    accentGradient: 'from-blue-600 via-indigo-700 to-purple-900',
    demoUrl: 'https://codenation-api.example.com',
    repoUrl: 'https://github.com/honglydev/code-nation-api',
  },
  {
    id: 'kbach-portfolio',
    title: 'KbachUI — Khmer Geometric React Kit',
    category: 'web',
    typeLabel: 'Web App',
    year: '2024',
    summary:
      'An open-source accessible React & Tailwind component kit featuring geometric Kbach SVG dividers, bilingual typography scales, and dark glassmorphism.',
    fullDescription:
      'Created to help developers build culturally resonant yet ultra-modern web applications, KbachUI ships customizable components with full keyboard accessibility and zero runtime overhead.',
    tech: ['React.js', 'Tailwind CSS', 'SVG Geometry', 'JavaScript'],
    highlights: [
      'Customizable glassmorphic and Khmer-bordered components',
      'Pre-tuned line-height metrics for Kantumruy Pro font',
      'Zero external dependencies beyond React and Tailwind',
    ],
    accentGradient: 'from-yellow-500 via-amber-600 to-indigo-900',
    demoUrl: 'https://kbach-ui.example.com',
    repoUrl: 'https://github.com/honglydev/kbach-ui',
  },
];