"use client";

import { useEffect, useRef, useState } from "react";
import { experience } from "@/data/experience";

export default function ExperienceSection() {
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

    window.addEventListener("scroll", updateActiveDot, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveDot);

    return () => {
      window.removeEventListener("scroll", updateActiveDot);
      window.removeEventListener("resize", updateActiveDot);
    };
  }, []);

  return (
    <section
      id="experience"
      className="section-shell border-t border-white/[0.05] pt-32"
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
          Experience
        </p>
      </div>

      {/* INTRO */}
      <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-stone-dim)]">
            Work + Leadership
          </p>

          <h1 className="display-type mt-4 max-w-[42rem] text-[clamp(3.5rem,6vw,6.5rem)] leading-[0.93] tracking-[-0.045em] text-[var(--color-ivory)]">
            Learning, leading
            <br />
            and building.
          </h1>
        </div>

        <p className="max-w-[28rem] text-sm leading-7 text-[var(--color-stone)] lg:text-right">
          Experience across software, education, community programs and
          leadership.
        </p>
      </div>

      {/* TIMELINE */}
      <div ref={timelineRef} className="relative">
        {/* MAIN LINE */}
        <div
          className="absolute bottom-2 left-[6px] top-2 w-px -translate-x-1/2 bg-[var(--color-carbon)]"
          aria-hidden="true"
        />

        {/* ACTIVE DOT */}
        <div
          className="pointer-events-none absolute left-0 z-20 h-3 w-3 rounded-full border border-[var(--color-ivory)] bg-[var(--color-obsidian)] transition-transform duration-300 ease-out"
          style={{
            transform: `translateY(${activeDotTop}px)`,
          }}
          aria-hidden="true"
        >
          <span className="absolute inset-[3px] rounded-full bg-[var(--color-ivory)]" />
        </div>

        {/* EXPERIENCE ITEMS */}
        <div className="space-y-8">
          {experience.map((item, index) => (
            <article key={item.id} className="relative pl-10">
              {/* EMPTY TIMELINE NODE */}
              <span
                ref={(el) => {
                  nodeRefs.current[index] = el;
                }}
                className="absolute left-0 top-7 z-10 h-3 w-3 rounded-full border border-[var(--color-carbon)] bg-[var(--color-obsidian)]"
                aria-hidden="true"
              />

              {/* EXPERIENCE CARD */}
              <div className="rounded-[1.5rem] border border-white/[0.06] bg-white/[0.012] px-6 py-6 transition-all duration-300 hover:border-white/[0.11] hover:bg-white/[0.018] md:px-8 lg:px-10">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
                  <div>
                    <h2 className="text-lg font-medium leading-7 text-[var(--color-ivory)]">
                      {item.role}
                    </h2>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[var(--color-stone-dim)]">
                      {item.organization}
                    </p>

                    <p className="mt-3 text-sm text-[var(--color-stone)]">
                      {item.location}
                    </p>
                  </div>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-stone-dim)] lg:text-right">
                    {item.period}
                  </p>
                </div>

                <ul className="mt-6 grid gap-x-10 gap-y-3 lg:grid-cols-2">
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
    </section>
  );
}