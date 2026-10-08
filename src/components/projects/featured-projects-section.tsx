import Link from "next/link";
import { projects } from "@/data/projects";

const featuredProjects = projects.slice(0, 3);

export default function FeaturedProjectsSection() {
  return (
    <section
      id="projects"
      className="section-shell border-t border-white/[0.05]"
      aria-labelledby="featured-projects-title"
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
          Featured Projects
        </p>
      </div>

      {/* INTRO */}
      <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-stone-dim)]">
            Selected Work
          </p>

          <h2
            id="featured-projects-title"
            className="display-type mt-4 max-w-[42rem] text-[clamp(3rem,5vw,5.5rem)] leading-[0.95] tracking-[-0.04em] text-[var(--color-ivory)]"
          >
            Building across web,
            <br />
            AI and mobile.
          </h2>
        </div>

        <p className="max-w-[31rem] text-sm leading-7 text-[var(--color-stone)] lg:text-right">
          Selected projects where I apply software engineering to practical
          problems, from academic planning to food management and personalized
          recommendations.
        </p>
      </div>

      {/* PROJECT CARDS */}
      <div className="grid gap-4 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <article
            key={project.slug}
            className="group flex min-h-[26rem] flex-col rounded-[1.5rem] border border-white/[0.06] bg-white/[0.012] p-6 transition-colors duration-300 hover:border-white/[0.12] hover:bg-white/[0.018] md:p-8"
          >
            {/* CATEGORY + NUMBER */}
            <div className="flex items-start justify-between gap-5">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-stone-dim)]">
                {project.category}
              </p>

              <span className="text-[10px] tracking-[0.24em] text-[var(--color-stone-dim)]">
                {project.number}
              </span>
            </div>

            {/* TITLE */}
            <h3 className="display-type mt-8 text-[clamp(2rem,3vw,3rem)] leading-[0.98] tracking-[-0.035em] text-[var(--color-ivory)]">
              {project.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-5 text-sm leading-7 text-[var(--color-stone)]">
              {project.description}
            </p>

            {/* TECHNOLOGIES */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/[0.07] px-3 py-1.5 text-[9px] uppercase tracking-[0.14em] text-[var(--color-stone)]"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* BOTTOM ACTION */}
            <div className="mt-auto pt-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[var(--color-ivory)] transition-opacity duration-200 hover:opacity-60"
              >
                View project
                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* VIEW ALL PROJECTS */}
      <div className="mt-10">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-4 border border-[var(--color-carbon)] px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-[var(--color-ivory)] transition-colors duration-300 hover:border-[var(--color-stone)]"
        >
          View all projects

          <span
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>
    </section>
  );
}