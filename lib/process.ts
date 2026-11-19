export type ProcessPhase = {
  title: string;
  summary: string;
  outcome: string;
  steps: { title: string; description: string }[];
};

export const processPhases: ProcessPhase[] = [
  {
    title: "Define what matters",
    summary: "We get clear on the problem, the people using the product, and what needs to be ready for launch.",
    outcome: "A clear brief, agreed scope, and shared priorities.",
    steps: [
      {
        title: "Understand the business",
        description: "We talk through what your customers or team need to do, what gets in the way, and what a useful result looks like.",
      },
      {
        title: "Agree on the plan",
        description: "We define the scope, priorities, and responsibilities before design and development begins.",
      },
    ],
  },
  {
    title: "Design and build",
    summary: "Designs and working previews make progress visible, so you can give useful feedback early.",
    outcome: "Working software you’ve had a chance to use and review.",
    steps: [
      {
        title: "Shape the experience",
        description: "I design the key screens and journeys around the people using them, across desktop and mobile.",
      },
      {
        title: "Build and review",
        description: "I share working previews as the product takes shape. We check the important flows together and refine the details.",
      },
    ],
  },
  {
    title: "Launch and improve",
    summary: "We test the important journeys, prepare a considered handover, and decide what comes next.",
    outcome: "A tested release, a practical handover, and agreed next steps.",
    steps: [
      {
        title: "Prepare for launch",
        description: "I check the critical flows, responsive layouts, and required integrations before connecting the finished product to your domain.",
      },
      {
        title: "Hand over and improve",
        description: "You get a walkthrough of how to manage the product. We agree on any ongoing support or next priorities.",
      },
    ],
  },
];
