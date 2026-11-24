import type { Skill } from '../types/typesx';

export const SKILLS_DATA: Skill[] = [
  // Frontend
  { name: 'HTML5', category: 'frontend', level: 95, tag: 'Semantic & SEO', color: 'from-orange-500 to-amber-500' },
  { name: 'CSS3', category: 'frontend', level: 92, tag: 'Flexbox & Grid', color: 'from-blue-500 to-cyan-400' },
  { name: 'JavaScript (ES6+)', category: 'frontend', level: 94, tag: 'Async / ESNext', color: 'from-yellow-400 to-amber-500' },
  { name: 'TypeScript', category: 'frontend', level: 88, tag: 'Type-Safe Code', color: 'from-blue-600 to-indigo-500' },
  { name: 'React.js', category: 'frontend', level: 92, tag: 'Hooks & Context', color: 'from-cyan-400 to-teal-500' },
  { name: 'Tailwind CSS', category: 'frontend', level: 95, tag: 'Utility-First UI', color: 'from-teal-400 to-emerald-500' },
  { name: 'Bootstrap', category: 'frontend', level: 85, tag: 'Responsive Grids', color: 'from-purple-500 to-indigo-600' },

  // Backend
  { name: 'Node.js', category: 'backend', level: 86, tag: 'Runtime Environment', color: 'from-green-500 to-emerald-600' },
  { name: 'Express.js', category: 'backend', level: 88, tag: 'REST APIs', color: 'from-slate-500 to-zinc-700' },
  { name: 'Java', category: 'backend', level: 84, tag: 'Enterprise OOP', color: 'from-red-500 to-orange-600' },
  { name: 'Spring Boot', category: 'backend', level: 80, tag: 'Microservices', color: 'from-emerald-600 to-green-700' },
  { name: 'REST API Design', category: 'backend', level: 90, tag: 'Endpoints & Auth', color: 'from-sky-500 to-blue-600' },

  // Android
  { name: 'Kotlin', category: 'android', level: 90, tag: 'Coroutines & Flows', color: 'from-purple-500 to-indigo-600' },
  { name: 'Android Studio', category: 'android', level: 88, tag: 'Gradle & Tooling', color: 'from-green-500 to-lime-600' },
  { name: 'Java (Android)', category: 'android', level: 85, tag: 'Legacy Apps', color: 'from-orange-500 to-red-600' },

  // Database
  { name: 'MySQL', category: 'database', level: 88, tag: 'Relational DB', color: 'from-blue-600 to-sky-500' },
  { name: 'PostgreSQL', category: 'database', level: 85, tag: 'Advanced SQL', color: 'from-indigo-600 to-blue-700' },
  { name: 'MongoDB', category: 'database', level: 82, tag: 'NoSQL Documents', color: 'from-emerald-500 to-green-600' },

  // Tools
  { name: 'Git & GitHub', category: 'tools', level: 92, tag: 'Version Control', color: 'from-orange-600 to-rose-600' },
  { name: 'Docker', category: 'tools', level: 78, tag: 'Containerization', color: 'from-blue-500 to-cyan-600' },
  { name: 'Linux / Bash', category: 'tools', level: 88, tag: 'Terminal & Scripts', color: 'from-amber-500 to-yellow-600' },
  { name: 'Postman', category: 'tools', level: 90, tag: 'API Testing', color: 'from-orange-500 to-amber-600' },
  { name: 'VS Code', category: 'tools', level: 95, tag: 'Primary IDE', color: 'from-sky-500 to-indigo-600' },
];