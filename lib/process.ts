export type ProcessStep = {
  title: string;
  description: string;
  details: string[];
};

export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    description:
      "We’ll clarify the business goal, audience, current workflow, constraints, and what the project needs to achieve.",
    details: [
      "Business goals",
      "User needs",
      "Current problems",
      "Technical constraints",
    ],
  },
  {
    title: "Structure",
    description:
      "I’ll define scope, information architecture, core features, content, and the technical direction before execution.",
    details: [
      "Project scope",
      "Feature priorities",
      "Information architecture",
      "Technical direction",
    ],
  },
  {
    title: "Design",
    description:
      "I’ll design clear, responsive interfaces that reduce friction and make the product easier to understand and use.",
    details: [
      "UX structure",
      "Interface design",
      "Responsive layouts",
      "Design refinement",
    ],
  },
  {
    title: "Build",
    description:
      "I’ll develop the product with maintainable components, reliable integrations, and production-ready foundations.",
    details: [
      "Frontend development",
      "Backend integration",
      "CMS or product logic",
      "Performance foundations",
    ],
  },
  {
    title: "Launch",
    description:
      "I’ll test critical flows, handle deployment, connect required services, and prepare the product for real users.",
    details: ["Quality assurance", "Deployment", "Analytics", "Launch support"],
  },
  {
    title: "Improve",
    description:
      "I can keep improving the product around usage, feedback, operational needs, and new business priorities.",
    details: [
      "Ongoing support",
      "Conversion improvements",
      "Feature iteration",
      "Maintenance",
    ],
  },
];
