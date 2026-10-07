export type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  summary: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "city-assistant-coordinator",
    role: "Children & Youth Assistant Coordinator",
    organization: "City of Kitchener",
    location: "Kitchener, Ontario, Canada",
    period: "Jun 2023 — Present",
    summary: [
      "Supported planning and delivery of structured, engaging programs for youth aged 12–17.",
      "Acted as an on-site program lead, helping ensure safe, inclusive and high-quality activities.",
      "Coordinated with staff, participants and families in a fast-paced community environment.",
    ],
  },
  {
    id: "math-coding-tutor",
    role: "Math & Coding Tutor",
    organization: "Aga Khan Education Board / Tutoring",
    location: "Waterloo Region, Ontario",
    period: "2024 — 2026",
    summary: [
      "Teach mathematics and introductory Python to students ages 10–16.",
      "Adapt explanations and exercises to different learning needs and technical skill levels.",
      "Design beginner programming activities that strengthen problem-solving, logical reasoning and computational thinking.",
    ],
  },
  {
    id: "city-youth-leader",
    role: "Children & Youth Leader",
    organization: "City of Kitchener",
    location: "Kitchener, Ontario, Canada",
    period: "Jun 2022 — Jun 2023",
    summary: [
      "Planned and led engaging recreational programs including sports, arts, crafts and games for youth aged 12–17.",
      "Supported safe supervision, activity delivery and positive participant engagement.",
      "Helped create welcoming and inclusive youth program experiences.",
    ],
  },
  
  {
    id: "akeb-vice-principal",
    role: "Parents & Guardians' Vice Principal - BUI",
    organization: "Aga Khan Education Board",
    location: "Kitchener, Ontario",
    period: "Sep 2022 — Feb 2023",
    summary: [
      "Supported a safe, respectful and structured educational environment by managing student behaviour and discipline.",
      "Maintained communication with parents regarding attendance, academic progress and behavioural concerns.",
      "Helped strengthen parent engagement and collaboration within the school community.",
    ],
  },
  {
    id: "akeb-ambassador",
    role: "AKEB Ambassador (Community & Youth Liaison)",
    organization: "Aga Khan Education Board for Canada",
    location: "Kitchener, Ontario",
    period: "Sep 2021 — Sep 2022",
    summary: [
      "Served as a liaison between youth, families and the Aga Khan Education Board.",
      "Helped promote educational programming and community engagement initiatives.",
      "Shared feedback from the community and supported access to AKEB services and programs.",
    ],
  },
  {
    id: "lazeez and baskin-robbins",
    role: "Customer Service",
    organization: "Lazeez Shawarma & Baskin-Robbins",
    location: "Kitchener, Ontario",
    period: "2021 — 2022",
    summary: [
      "Provided customer service in a busy environment.",
      "Supported food preparation according to standards.",
      "Handled cash transactions accurately and collaborated with coworkers during busy periods.",
    ],
  },
  {
    id: "ismaili-centre-vice-captain",
    role: "Vice Captain",
    organization: "Kitchener Headquarters Jamatkhana - Ismaili Community Centre",
    location: "Kitchener, Ontario",
    period: "2021 — 2022",
    summary: [
        "Support the planning and coordination of community events, programs and volunteer activities.",
        "Work with leadership and volunteer teams to help ensure events run smoothly and community needs are supported.",
        "Assist with communication, organization and on-site coordination during community programs and events.",
    ],
    },
  {
    id: "young-scientist-journal",
    role: "STEM: Science Ambassador to Afghanistan & Central Asia",
    organization: "Young Scientist Journal",
    location: "Remote",
    period: "Apr 2020 — Nov 2020",
    summary: [
      "Helped promote the journal across the region through outreach and communication.",
      "Worked with the outreach team to help grow the program and identify new talent.",
      "Supported content accessibility and blog editing for published materials.",
    ],
  },
  {
    id: "covid-youth-support",
    role: "COVID-19 Youth Support Leader",
    organization: "Aga Khan Youth Sports Board",
    location: "Kitchener, Ontario",
    period: "Mar 2020 — Aug 2020",
    summary: [
      "Supported children participating in online activities during the COVID-19 period.",
      "Provided technical guidance and emotional support to help children engage successfully.",
      "Contributed to the overall leadership and delivery of the program.",
    ],
  },
];