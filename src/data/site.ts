export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Writing', href: '/writing/' },
  { label: 'About', href: '/about/' },
];

export const roles = [
  {
    company: "Walmart Global Tech",
    role: "Senior iOS Developer · Cart & Checkout",
    period: "2025 — 2026",
    description: "iOS features for Sam’s Club cart and checkout. Worked with GraphQL, feature flags, accessibility, and production issues across customer purchase flows.",
    tags: ["Swift", "UIKit", "GraphQL", "Accessibility"],
  },
  {
    company: "Cincinnati AI",
    role: "Software Engineer · Backend Integrations",
    period: "2024 — Present",
    description: "Backend and client integrations using Laravel, REST APIs, React, Swift, and document-retrieval workflows with AI models.",
    tags: ["Laravel", "REST APIs", "React", "RAG"],
  },
  {
    company: "Transom",
    role: "Software / IoT Engineer",
    period: "2022 — 2024",
    description: "SCADA dashboards and alarm-monitoring solutions for infrastructure at SFO and LaGuardia airports, with SQL-backed reporting and industrial integrations.",
    tags: ["SCADA", "SQL Server", "BACnet", "OPC"],
  },
];

export const projects = [
  {
    id: "01",
    name: "Battleship on Paper",
    category: "Browser game",
    status: "IN DEVELOPMENT",
    description: "A notebook-inspired Battleship game using JavaScript and Three.js. An excuse to learn more about game state, interaction, and 3D on the web.",
    tags: ["JavaScript", "Three.js", "Game UI"],
  },
  {
    id: "02",
    name: "3D Object Viewer",
    category: "University archive",
    status: "PAST PROJECT",
    description: "An OpenGL project I built at university to load and explore 3D objects. One of my first experiences working directly with computer graphics.",
    tags: ["OpenGL", "Computer Graphics", "3D"],
  },
  {
    id: "03",
    name: "AI Experiments",
    category: "Personal lab",
    status: "EXPERIMENTING",
    description: "Small apps and prototypes where I practice integrating language models and using AI development tools. Some are hand-coded; some are vibe-coding experiments.",
    tags: ["LLMs", "APIs", "Prototyping"],
  },
];

export const stack = [
  { name: "Mobile", items: ["Swift", "UIKit", "SwiftUI", "Combine", "Core Data", "MapKit", "Android · learning"] },
  { name: "Backend", items: ["Java 21", "Spring Boot · learning", "PHP", "Laravel", "REST", "GraphQL", "RAG"] },
  { name: "Frontend & Games", items: ["JavaScript", "TypeScript", "React", "Astro", "Three.js", "HTML", "CSS", "OpenGL"] },
  { name: "Systems & Tools", items: ["SQL Server", "SCADA", "BACnet", "OPC", "Docker", "Git", "Postman", "Firebase"] },
];
