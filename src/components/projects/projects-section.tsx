"use client";

import { useEffect, useRef, useState } from "react";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/project-card";

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [dotY, setDotY] = useState(0);

  useEffect(() => {
    const updateDotPosition = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const trackHeight = trackRef.current.offsetHeight;

      const startPoint = viewportHeight * 0.55;
      const totalScrollableDistance =
        sectionRect.height - viewportHeight * 0.3;

      const progress =
        (startPoint - sectionRect.top) / totalScrollableDistance;

      const clampedProgress = Math.min(1, Math.max(0, progress));

      const dotSize = 16;
      const maxTravel = Math.max(0, trackHeight - dotSize);

      setDotY(clampedProgress * maxTravel);
    };

    updateDotPosition();

    window.addEventListener("scroll", updateDotPosition, {
      passive: true,
    });

    window.addEventListener("resize", updateDotPosition);

    return () => {
      window.removeEventListener("scroll", updateDotPosition);
      window.removeEventListener("resize", updateDotPosition);
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-shell border-t border-white/[0.05]"
    >
      {/* SECTION LABEL */}
      <div className="mb-16 flex items-center gap-4">
        <span className="text-[10px] tracking-[0.3em] text-[var(--color-stone-dim)]">
          02
        </span>

        <span
          className="h-px w-10 bg-[var(--color-carbon)]"
          aria-hidden="true"
        />

        <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-stone)]">
          Experience + Selected Work
        </p>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid gap-20 xl:grid-cols-[0.95fr_1.05fr] xl:gap-24">
        {/* =====================================================
            EXPERIENCE
        ====================================================== */}
        <div>
          <p className="mb-8 text-[9px] uppercase tracking-[0.3em] text-[var(--color-stone-dim)]">
            Experience
          </p>

          <h2 className="display-type max-w-[30rem] text-[clamp(2.8rem,4.5vw,5rem)] leading-[0.97] tracking-[-0.04em] text-[var(--color-ivory)]">
            Learning, leading
            <br />
            and building.
          </h2>

          {/* TIMELINE */}
          <div className="relative mt-14">
            {/* VERTICAL TRACK */}
            <div
              ref={trackRef}
              className="absolute bottom-0 left-[7px] top-2 w-px bg-[var(--color-carbon)]"
              aria-hidden="true"
            />

            {/* MOVING PROGRESS DOT */}
            <div
              className="pointer-events-none absolute left-0 top-2 z-20 h-4 w-4 rounded-full border border-[var(--color-ivory)] bg-[var(--color-obsidian)] transition-transform duration-150 ease-out"
              style={{
                transform: `translateY(${dotY}px)`,
              }}
              aria-hidden="true"
            >
              <span className="absolute inset-[4px] rounded-full bg-[var(--color-ivory)]" />
            </div>

            {/* EXPERIENCE ITEMS */}
            <div className="space-y-10 pl-10">
              {experience.map((item) => (
                <article
                  key={item.id}
                  className="relative"
                >
                  {/* STATIC TIMELINE DOT */}
                  <span
                    className="absolute -left-[2.28rem] top-2 h-3 w-3 rounded-full border border-[var(--color-carbon)] bg-[var(--color-obsidian)]"
                    aria-hidden="true"
                  />

                  <div className="border-b border-[var(--color-carbon)] pb-10">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-base font-medium leading-6 text-[var(--color-ivory)]">
                          {item.role}
                        </h3>

                        <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[var(--color-stone-dim)]">
                          {item.organization}
                        </p>

                        <p className="mt-2 text-sm text-[var(--color-stone)]">
                          {item.location}
                        </p>
                      </div>

                      <p className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-[var(--color-stone-dim)]">
                        {item.period}
                      </p>
                    </div>

                    <ul className="mt-5 space-y-3">
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
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            PROJECTS
        ====================================================== */}
        <div
          id="projects"
          className="scroll-mt-28"
        >
          <div className="mb-8 flex items-end justify-between gap-8">
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-stone-dim)]">
                Selected work
              </p>

              <h2 className="display-type mt-3 text-[clamp(2.8rem,4.5vw,5rem)] leading-[0.97] tracking-[-0.04em] text-[var(--color-ivory)]">
                Projects that
                <br />
                solve real problems.
              </h2>
            </div>

            <p className="hidden max-w-[15rem] text-right text-xs leading-6 text-[var(--color-stone)] md:block">
              A selection of full-stack, AI and systems-focused work.
            </p>
          </div>

          <div>
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                number={project.number}
                title={project.title}
                category={project.category}
                description={project.description}
                technologies={project.technologies}
                href={project.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}