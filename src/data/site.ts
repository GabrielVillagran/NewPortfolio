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
    period: "Aug 2025 – Aug 2026",
    location: "Sunnyvale, California",
    description: "iOS features for Sam’s Club cart and checkout. Worked with GraphQL, feature flags, accessibility, and production issues across customer purchase flows.",
    tags: ["Swift", "UIKit", "GraphQL", "Accessibility"],
    missionLabel: "MOBILE COMMERCE / CART & CHECKOUT",
    summary: "I worked on iOS cart and checkout experiences for Sam’s Club customers in the U.S., focusing on stable purchase flows, accessibility, and reliable releases.",
    responsibilities: [
      "Built and maintained API-driven iOS cart and checkout features.",
      "Resolved production issues involving dates, errors, analytics, images, fulfillment, and address validation.",
      "Extended GraphQL fragments and mobile models, coordinating changes for controlled rollouts.",
      "Improved VoiceOver behavior and accessibility across loading states, filters, carousels, bottom sheets, and focus restoration.",
      "Supported a new fulfillment beta and refined PDP, PLP, cart summary, and Thank You Page flows."
    ],
    impact: [
      "Supported critical U.S. purchase flows and fulfillment rollout validation.",
      "Improved consistency, accessibility, and production reliability."
    ],
    stack: ["Swift","UIKit","GraphQL","MVVM-C","VoiceOver","Feature flags","Auto Layout"],
  },
  {
    company: "Cincinnati AI",
    role: "Software Engineer · Backend Integrations",
    period: "Nov 2023 – Present",
    location: "Atlanta, Georgia",
    description: "Backend and client integrations using Laravel, REST APIs, React, Swift, and document-retrieval workflows with AI models.",
    tags: ["Laravel", "REST APIs", "React", "RAG"],
    missionLabel: "BACKEND / API INTEGRATIONS",
    summary: "I work across backend services, web applications, and iOS clients, connecting different systems through reusable APIs and integration layers.",
    responsibilities: [
      "Develop PHP/Laravel services integrating clients with Docker-based microservices.",
      "Design REST APIs for workspace, channel, and messaging workflows.",
      "Implement RAG workflows for document retrieval and AI-assisted features.",
      "Build React and iOS functionality with Swift, SwiftUI, Combine, Firebase, Core Data, and MapKit.",
      "Create service abstractions, improve testing and debugging, and mentor junior developers.",
      "Built a GitHub Actions CI/CD pipeline to standardize build, test, and delivery workflows."
    ],
    impact: [
      "Created training material that reduced junior developer onboarding time by approximately 30–50%.",
      "Reduced manual release steps through CI/CD automation."
    ],
    stack: ["PHP","Laravel","REST APIs","RAG","React","Swift","SwiftUI","Docker","GitHub Actions"],
  },
  {
    company: "Transom",
    role: "Software / IoT Engineer",
    period: "Jun 2021 – Oct 2023",
    location: "San Luis Potosi, Mexico",
    description: "SCADA dashboards and alarm-monitoring solutions for infrastructure at SFO and LaGuardia airports, with SQL-backed reporting and industrial integrations.",
    tags: ["SCADA", "SQL Server", "BACnet", "OPC"],
    missionLabel: "INDUSTRIAL SYSTEMS / MONITORING",
    summary: "I developed monitoring and alarm-management solutions for industrial infrastructure, including systems supporting SFO and LaGuardia airports.",
    responsibilities: [
      "Designed SCADA solutions using ICONICS, BMS, and EMCS systems.",
      "Built BACnet- and OPC-connected dashboards and data models supporting 300,000+ real-time field signals.",
      "Integrated SQL Server with SCADA platforms for reports, alarms, and historical analysis.",
      "Implemented alarm-management and predictive-maintenance workflows.",
      "Refactored legacy C and Visual Basic systems and diagnosed Siemens PLC integration issues."
    ],
    impact: [
      "Supported operational visibility across airport infrastructure.",
      "Built data and monitoring solutions handling more than 300,000 field signals."
    ],
    stack: ["SCADA","ICONICS","SQL Server","BACnet","OPC","Siemens PLC","C","Visual Basic"],
  },
];

export const projects = [
  {
    id: "01",
    name: "Battleship on Paper",
    category: "Browser game",
    status: "IN DEVELOPMENT",
    description: "A notebook-inspired Battleship game using JavaScript and Three.js. I'm building it to practice game state, interaction, UI, and 3D concepts on the web.",
    tags: ["JavaScript", "Three.js", "Game UI"],
  },
];

export const stack = [
  { name: "Mobile", items: ["Swift", "UIKit", "SwiftUI", "Combine", "Core Data", "MapKit", "Android · learning"] },
  { name: "Backend", items: ["Java 21", "Spring Boot · learning", "PHP", "Laravel", "REST", "GraphQL", "RAG"] },
  { name: "Frontend & Games", items: ["JavaScript", "TypeScript", "React", "Astro", "Three.js", "HTML", "CSS", "OpenGL"] },
  { name: "Systems & Tools", items: ["SQL Server", "SCADA", "BACnet", "OPC", "Docker", "Git", "Postman", "Firebase"] },
];
