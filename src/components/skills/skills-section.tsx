import { skills } from "@/data/skills";
import CourseworkMarquee from "@/components/credentials/coursework-marquee";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-shell border-t border-white/[0.05]"
    >
      {/* SECTION LABEL */}
      <div className="mb-16 flex items-center gap-4">
        <span className="text-[10px] tracking-[0.3em] text-[var(--color-stone-dim)]">
          03
        </span>

        <span
          className="h-px w-10 bg-[var(--color-carbon)]"
          aria-hidden="true"
        />

        <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-stone)]">
          Skills + Tech Stack
        </p>
      </div>

      {/* INTRO */}
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-stone-dim)]">
            What I work with
          </p>

          <h2 className="display-type mt-4 max-w-[30rem] text-[clamp(3rem,5vw,5.5rem)] leading-[0.95] tracking-[-0.04em] text-[var(--color-ivory)]">
            Tools for turning
            <br />
            ideas into products.
          </h2>

          <p className="mt-8 max-w-[29rem] text-sm leading-7 text-[var(--color-stone)]">
            I work across frontend, backend, databases, AI and software
            development tools to build complete applications from idea to
            deployment.
          </p>
        </div>

        {/* SKILL GROUPS */}
        <div className="border-t border-[var(--color-carbon)]">
          {skills.map((group) => (
            <article
              key={group.title}
              className="group border-b border-[var(--color-carbon)] py-8"
            >
              <div className="grid gap-6 md:grid-cols-[3rem_11rem_1fr] md:items-start">
                {/* NUMBER */}
                <p className="text-[9px] tracking-[0.25em] text-[var(--color-stone-dim)]">
                  {group.number}
                </p>

                {/* CATEGORY */}
                <h3 className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-ivory)]">
                  {group.title}
                </h3>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full
                        border border-white/[0.07]
                        bg-white/[0.015]
                        px-3 py-1.5
                        text-[9px]
                        tracking-[0.08em]
                        text-[var(--color-stone)]
                        transition-colors duration-200
                        group-hover:border-white/[0.12]
                      "
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
          RELEVANT COURSEWORK
      ====================================================== */}
      <div className="mt-24">
        <div className="mb-10 flex flex-col gap-4 border-b border-[var(--color-carbon)] pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-stone-dim)]">
              Computer Science
            </p>

            <h3 className="display-type mt-3 text-[clamp(2.6rem,4vw,4.5rem)] leading-[0.95] tracking-[-0.04em] text-[var(--color-ivory)]">
              Relevant coursework.
            </h3>
          </div>

          <p className="max-w-[22rem] text-sm leading-6 text-[var(--color-stone)] sm:text-right">
            A selection of courses shaping my software engineering and
            computing foundation.
          </p>
        </div>

        <CourseworkMarquee />
      </div>

    
    </section>
  );
}