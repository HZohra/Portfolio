import { skills } from "@/data/skills";
import { experience } from "@/data/experience";
import { coursework } from "@/data/coursework";

const currentlyLearning = [
  {
    title: "Android Development",
    description:
      "Building Android applications with Java, Kotlin, XML, Room and modern mobile development patterns.",
  },
  {
    title: "Machine Learning",
    description:
      "Developing experience with supervised learning, classification, model evaluation and practical machine learning workflows.",
  },
  {
    title: "Cloud / AWS",
    description:
      "Learning cloud fundamentals, deployment concepts and AWS services while strengthening my understanding of cloud-based applications.",
  },
  {
    title: "System Design",
    description:
      "Learning how frontend applications, backend services, APIs, databases and infrastructure work together in larger software systems.",
  },
];

/*
 * Keep the most professionally relevant roles in the main section.
 * Older leadership/community roles are displayed separately below.
 */
const professionalExperience = experience.filter((item) =>
  [
    "city-assistant-coordinator",
    "math-coding-tutor",
    "city-youth-leader",
    "lazeez and baskin-robbins",
  ].includes(item.id),
);

const leadershipExperience = experience.filter(
  (item) =>
    ![
      "city-assistant-coordinator",
      "math-coding-tutor",
      "city-youth-leader",
      "lazeez and baskin-robbins",
    ].includes(item.id),
);

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-shell border-t border-white/[0.05] pt-32"
      aria-labelledby="experience-title"
    >
      {/* =====================================================
          PAGE LABEL
      ====================================================== */}
      <div className="mb-16 flex items-center gap-4">
        <span className="text-[10px] tracking-[0.3em] text-[var(--color-stone-dim)]">
          02
        </span>

        <span
          className="h-px w-10 bg-[var(--color-carbon)]"
          aria-hidden="true"
        />

        <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-stone)]">
          Experience
        </p>
      </div>

      {/* =====================================================
          PAGE INTRO
      ====================================================== */}
      <div className="mb-28 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-stone-dim)]">
            Skills · Work · Leadership
          </p>

          <h1
            id="experience-title"
            className="display-type mt-4 max-w-[48rem] text-[clamp(3.5rem,6vw,6.5rem)] leading-[0.93] tracking-[-0.045em] text-[var(--color-ivory)]"
          >
            Building skills through
            <br />
            real experience.
          </h1>
        </div>

        <p className="max-w-[32rem] text-sm leading-7 text-[var(--color-stone)] lg:text-right">
          My experience spans software development, technical learning,
          education, community programs and leadership. Together, these
          experiences have strengthened both my engineering and communication
          skills.
        </p>
      </div>

      {/* =====================================================
          TECHNICAL SKILLS
      ====================================================== */}
      <div className="mb-28">
        <div className="mb-10 flex flex-col gap-6 border-b border-[var(--color-carbon)] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-stone-dim)]">
              Technical Foundation
            </p>

            <h2 className="display-type mt-3 text-[clamp(2.8rem,4.5vw,5rem)] leading-[0.97] tracking-[-0.04em] text-[var(--color-ivory)]">
              Skills &amp; technologies.
            </h2>
          </div>

          <p className="max-w-[26rem] text-sm leading-6 text-[var(--color-stone)] sm:text-right">
            Technologies I&apos;ve used across coursework, personal projects
            and software development work.
          </p>
        </div>

        <div className="border-t border-[var(--color-carbon)]">
          {skills.map((group) => (
            <article
              key={group.title}
              className="group border-b border-[var(--color-carbon)] py-8"
            >
              <div className="grid gap-6 md:grid-cols-[3rem_13rem_1fr] md:items-start">
                {/* NUMBER */}
                <p className="text-[10px] tracking-[0.25em] text-[var(--color-stone-dim)]">
                  {group.number}
                </p>

                {/* CATEGORY */}
                <h3 className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-ivory)]">
                  {group.title}
                </h3>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-[var(--color-stone)] transition-colors duration-200 group-hover:text-[var(--color-ivory)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* =====================================================
          CURRENTLY LEARNING
      ====================================================== */}
      <div className="mb-28">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-stone-dim)]">
              Current Development
            </p>

            <h2 className="display-type mt-3 text-[clamp(2.8rem,4.5vw,5rem)] leading-[0.97] tracking-[-0.04em] text-[var(--color-ivory)]">
              Currently learning.
            </h2>
          </div>

          <p className="max-w-[27rem] text-sm leading-6 text-[var(--color-stone)] lg:text-right">
            Areas I&apos;m actively developing alongside my Computer Science
            coursework and personal projects.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {currentlyLearning.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-white/[0.06] bg-white/[0.012] p-6 transition-colors duration-300 hover:border-white/[0.11] md:p-8"
            >
              <div className="flex items-start justify-between gap-5">
                <p className="text-[10px] tracking-[0.24em] text-[var(--color-stone-dim)]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <span className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[8px] uppercase tracking-[0.18em] text-[var(--color-stone)]">
                  Learning
                </span>
              </div>

              <h3 className="mt-6 text-lg font-medium text-[var(--color-ivory)]">
                {item.title}
              </h3>

              <p className="mt-3 max-w-[34rem] text-sm leading-7 text-[var(--color-stone)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* =====================================================
          PROFESSIONAL EXPERIENCE
      ====================================================== */}
      <div className="mb-28">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-stone-dim)]">
              Work Experience
            </p>

            <h2 className="display-type mt-3 text-[clamp(2.8rem,4.5vw,5rem)] leading-[0.97] tracking-[-0.04em] text-[var(--color-ivory)]">
              Professional experience.
            </h2>
          </div>

          <p className="max-w-[28rem] text-sm leading-6 text-[var(--color-stone)] lg:text-right">
            Roles that strengthened my communication, problem-solving,
            teaching, teamwork and leadership skills.
          </p>
        </div>

        <div className="border-t border-[var(--color-carbon)]">
          {professionalExperience.map((item, index) => (
            <article
              key={item.id}
              className="border-b border-[var(--color-carbon)] py-9"
            >
              <div className="grid gap-6 lg:grid-cols-[3rem_1fr_auto]">
                {/* NUMBER */}
                <p className="text-[10px] tracking-[0.24em] text-[var(--color-stone-dim)]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                {/* ROLE */}
                <div>
                  <h3 className="text-lg font-medium leading-7 text-[var(--color-ivory)]">
                    {item.role}
                  </h3>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[var(--color-stone-dim)]">
                    {item.organization}
                  </p>

                  <p className="mt-3 text-sm text-[var(--color-stone)]">
                    {item.location}
                  </p>
                </div>

                {/* PERIOD */}
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-stone-dim)] lg:text-right">
                  {item.period}
                </p>
              </div>

              {/* DESCRIPTION */}
              <ul className="mt-7 grid gap-x-12 gap-y-3 md:pl-[3.75rem] lg:grid-cols-2">
                {item.summary.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-7 text-[var(--color-stone)]"
                  >
                    <span
                      className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                      aria-hidden="true"
                    />

                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {/* =====================================================
          LEADERSHIP + COMMUNITY
      ====================================================== */}
      <div className="mb-28">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-stone-dim)]">
              Leadership + Community
            </p>

            <h2 className="display-type mt-3 text-[clamp(2.8rem,4.5vw,5rem)] leading-[0.97] tracking-[-0.04em] text-[var(--color-ivory)]">
              Leading beyond software.
            </h2>
          </div>

          <p className="max-w-[28rem] text-sm leading-6 text-[var(--color-stone)] lg:text-right">
            Community and leadership roles that developed my ability to
            communicate, coordinate people and take responsibility.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {leadershipExperience.map((item) => (
            <article
              key={item.id}
              className="rounded-[1.5rem] border border-white/[0.06] bg-white/[0.012] p-6 transition-colors duration-300 hover:border-white/[0.11] md:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-medium leading-6 text-[var(--color-ivory)]">
                    {item.role}
                  </h3>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[var(--color-stone-dim)]">
                    {item.organization}
                  </p>
                </div>

                <p className="shrink-0 text-[9px] uppercase tracking-[0.18em] text-[var(--color-stone-dim)]">
                  {item.period}
                </p>
              </div>

              <p className="mt-3 text-sm text-[var(--color-stone)]">
                {item.location}
              </p>

              <ul className="mt-6 space-y-3">
                {item.summary.slice(0, 2).map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-7 text-[var(--color-stone)]"
                  >
                    <span
                      className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                      aria-hidden="true"
                    />

                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {/* =====================================================
          RELEVANT COURSEWORK
      ====================================================== */}
      <div>
        <div className="mb-10 flex flex-col gap-6 border-b border-[var(--color-carbon)] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-stone-dim)]">
              Computer Science
            </p>

            <h2 className="display-type mt-3 text-[clamp(2.8rem,4.5vw,5rem)] leading-[0.97] tracking-[-0.04em] text-[var(--color-ivory)]">
              Relevant coursework.
            </h2>
          </div>

          <p className="max-w-[26rem] text-sm leading-6 text-[var(--color-stone)] sm:text-right">
            Coursework supporting my foundation in software engineering,
            systems, mobile development and machine learning.
          </p>
        </div>

        <div className="grid border-t border-[var(--color-carbon)] sm:grid-cols-2 lg:grid-cols-3">
          {coursework.map((course, index) => (
            <article
              key={course.title}
              className="border-b border-[var(--color-carbon)] py-7 sm:pr-8"
            >
              <p className="text-[9px] tracking-[0.24em] text-[var(--color-stone-dim)]">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-4 text-base font-medium text-[var(--color-ivory)]">
                {course.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--color-stone)]">
                {course.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}