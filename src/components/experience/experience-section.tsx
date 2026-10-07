"use client";

import { useEffect, useRef, useState } from "react";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/project-card";

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const [activeDotTop, setActiveDotTop] = useState(0);

  useEffect(() => {
    const updateActiveDot = () => {
      if (!timelineRef.current || nodeRefs.current.length === 0) return;

      const viewportMarker = window.innerHeight * 0.42;

      let activeIndex = 0;

      nodeRefs.current.forEach((node, index) => {
        if (!node) return;

        const rect = node.getBoundingClientRect();
        const center = rect.top + rect.height / 2;

        if (center <= viewportMarker) {
          activeIndex = index;
        }
      });

      const activeNode = nodeRefs.current[activeIndex];
      if (!activeNode || !timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const nodeRect = activeNode.getBoundingClientRect();

      const top = nodeRect.top - timelineRect.top;

      setActiveDotTop(top);
    };

    updateActiveDot();

    window.addEventListener("scroll", updateActiveDot, { passive: true });
    window.addEventListener("resize", updateActiveDot);

    return () => {
      window.removeEventListener("scroll", updateActiveDot);
      window.removeEventListener("resize", updateActiveDot);
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
          <div ref={timelineRef} className="relative mt-14">
            {/* MAIN VERTICAL LINE */}
            <div
              className="absolute left-[6px] top-2 bottom-2 w-px -translate-x-1/2 bg-[var(--color-carbon)]"
              aria-hidden="true"
            />

            {/* ACTIVE MOVING DOT — snaps INTO the empty circles */}
            <div
              className="pointer-events-none absolute left-0 z-20 h-3 w-3 rounded-full border border-[var(--color-ivory)] bg-[var(--color-obsidian)] transition-transform duration-300 ease-out"
              style={{
                transform: `translateY(${activeDotTop}px)`,
              }}
              aria-hidden="true"
            >
              <span className="absolute inset-[3px] rounded-full bg-[var(--color-ivory)]" />
            </div>

            {/* ITEMS */}
            <div className="space-y-12">
              {experience.map((item, index) => (
                <article key={item.id} className="relative pl-10">
                  {/* EMPTY CIRCLE NODE */}
                  <span
                    ref={(el) => {
                      nodeRefs.current[index] = el;
                    }}
                    className="absolute left-0 top-2 z-10 h-3 w-3 rounded-full border border-[var(--color-carbon)] bg-[var(--color-obsidian)]"
                    aria-hidden="true"
                  />

                  <div className="rounded-[1.25rem] border border-white/[0.05] bg-white/[0.015] p-6 backdrop-blur-sm transition-colors duration-200 hover:border-white/[0.09]">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-medium leading-6 text-[var(--color-ivory)]">
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
        <div id="projects" className="scroll-mt-28">
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