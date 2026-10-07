import { coursework } from "@/data/coursework";

function CourseworkCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="flex h-[19rem] w-[19rem] shrink-0 flex-col items-center justify-center rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.01))] px-8 text-center transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.025] sm:h-[20rem] sm:w-[21rem]">
      {/* COURSE LABEL */}
      <div className="mb-8 flex h-11 items-center justify-center rounded-full border border-white/[0.08] px-6">
        <span className="text-[8px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
          Course
        </span>
      </div>

      {/* TITLE */}
      <h3 className="max-w-[16rem] text-[clamp(1.45rem,2vw,2rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-[var(--color-ivory)]">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-5 max-w-[16rem] text-sm leading-7 text-[var(--color-stone)]">
        {description}
      </p>
    </article>
  );
}

export default function CourseworkMarquee() {
  /*
   * Duplicate the exact same list.
   * This allows the animation to loop without a visible jump.
   */
  const duplicatedCoursework = [...coursework, ...coursework];

  return (
    <div className="group/marquee relative w-full overflow-hidden">
      {/* LEFT FADE */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[var(--color-obsidian)] to-transparent sm:w-24 lg:w-32"
        aria-hidden="true"
      />

      {/* RIGHT FADE */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[var(--color-obsidian)] to-transparent sm:w-24 lg:w-32"
        aria-hidden="true"
      />

      {/* MOVING TRACK */}
      <div className="coursework-marquee-track flex w-max gap-5 py-2">
        {duplicatedCoursework.map((course, index) => (
          <CourseworkCard
            key={`${course.title}-${index}`}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
}