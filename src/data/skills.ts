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
      "Next.js",
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
    title: "Databases",
    skills: [
      "MySQL",
      "MongoDB",
      "Room",
      "SQLite",
      "Relational Database Design",
    ],
  },
  {
    number: "05",
    title: "AI & Machine Learning",
    skills: [
      "Anthropic Claude API",
      "LLM Integration",
      "scikit-learn",
      "Machine Learning",
    ],
  },
  {
    number: "06",
    title: "Mobile",
    skills: [
      "Android",
      "Java",
      "Kotlin",
      "XML",
      "Room",
      "ML Kit",
    ],
  },
  {
    number: "07",
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Linux",
      "VS Code",
      "Figma",
      "Render",
    ],
  },
];