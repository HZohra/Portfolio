import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/project-card";
import Footer from "@/components/layout/footer";

export default function ProjectsPage() {
  return (
    <main>
      <section className="section-shell !pt-32">
        {/* PAGE LABEL */}
        <div className="mb-16 flex items-center gap-4">
          <span className="text-[10px] tracking-[0.3em] text-[var(--color-stone-dim)]">
            03
          </span>

          <span
            className="h-px w-10 bg-[var(--color-carbon)]"
            aria-hidden="true"
          />

          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-stone)]">
            Projects
          </p>
        </div>

        {/* INTRO */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-stone-dim)]">
              Selected Work
            </p>

            <h1 className="display-type mt-4 max-w-[48rem] text-[clamp(3.5rem,6vw,6.5rem)] leading-[0.93] tracking-[-0.045em] text-[var(--color-ivory)]">
              Projects that
              <br />
              solve real problems.
            </h1>
          </div>

          <p className="max-w-[30rem] text-sm leading-7 text-[var(--color-stone)] lg:text-right">
            A collection of full-stack, AI, mobile, networking and web projects
            I&apos;ve designed and developed.
          </p>
        </div>

        {/* PROJECT LIST */}
        <div className="border-t border-[var(--color-carbon)]">
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
      </section>

      <Footer />
    </main>
  );
}