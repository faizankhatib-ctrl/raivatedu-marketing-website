export const categories = [
  {
    id: "cat-web-dev",
    slug: "web-development",
    title: "Web & Fullstack Engineering",
    description: "Modern JavaScript, React, Next.js, Node.js, and cloud backend microservices.",
    coursesCount: 3,
    popularTopics: ["Next.js App Router", "Node & Express", "PostgreSQL", "System Architecture"],
    badgeColor: "indigo",
  },
  {
    id: "cat-ui-ux",
    slug: "ui-ux-design",
    title: "UI/UX & Design Systems",
    description: "Design theory, accessible component systems, wireframing, and Figma prototyping.",
    coursesCount: 2,
    popularTopics: ["Design Tokens", "Figma Auto-Layout", "User Research", "WCAG 2.1 AA"],
    badgeColor: "sun",
  },
  {
    id: "cat-data-ai",
    slug: "data-science-ai",
    title: "Data Science & Applied AI",
    description: "Python data pipelines, statistical modeling, machine learning, and LLM orchestration.",
    coursesCount: 2,
    popularTopics: ["Python", "Pandas", "Scikit-Learn", "Prompt Engineering"],
    badgeColor: "indigo",
  },
  {
    id: "cat-cloud-devops",
    slug: "cloud-devops",
    title: "Cloud Infrastructure & DevOps",
    description: "Containerization, CI/CD pipelines, Kubernetes, Terraform, and resilient cloud architecture.",
    coursesCount: 1,
    popularTopics: ["Docker", "Kubernetes", "AWS Fundamentals", "GitHub Actions"],
    badgeColor: "sun",
  },
  {
    id: "cat-product-mgmt",
    slug: "product-management",
    title: "Product Strategy & Management",
    description: "Product discovery, roadmap planning, metrics tracking, and cross-functional leadership.",
    coursesCount: 1,
    popularTopics: ["Product Discovery", "PRD Writing", "Cohort Analytics", "Agile Sprints"],
    badgeColor: "indigo",
  },
  {
    id: "cat-cybersecurity",
    slug: "cybersecurity",
    title: "Cyber Defense & Application Security",
    description: "Secure coding practices, penetration testing basics, and threat modeling fundamentals.",
    coursesCount: 1,
    popularTopics: ["OWASP Top 10", "Network Security", "Auth Protocols", "Penetration Testing"],
    badgeColor: "neutral",
  },
];

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug);
}
