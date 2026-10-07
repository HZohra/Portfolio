export type SkillGroup = {
  title: string;
  number: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    number: "01",
    title: "Languages",
    skills: [
      "Java",
      "Python",
      "C",
      "JavaScript",
      "TypeScript",
      "SQL",
    ],
  },
  {
    number: "02",
    title: "Frontend",
    skills: [
      "Angular",
      "React",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    number: "03",
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Server-Side Validation",
    ],
  },
  {
    number: "04",
    title: "Databases & AI",
    skills: [
      "MySQL",
      "MongoDB",
      "Relational Databases",
      "Anthropic Claude API",
      "LLM Integration",
    ],
  },
  {
    number: "05",
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "VS Code",
      "Figma",
      "Render",
      "GitHub Projects",
    ],
  },
];