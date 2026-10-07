import Link from "next/link";

type ProjectCardProps = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  href: string;
};

export default function ProjectCard({
  number,
  title,
  category,
  description,
  technologies,
  href,
}: ProjectCardProps) {
  return (
    <article className="group border-t border-[var(--color-carbon)] py-8 md:py-10">
      <Link href={href} className="block">
        {/* TOP ROW */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-[9px] uppercase tracking-[0.28em] text-[var(--color-stone-dim)]">
              {category}
            </p>

            <h3 className="display-type mt-3 text-[clamp(2.6rem,4vw,4.5rem)] leading-[0.95] tracking-[-0.04em] text-[var(--color-ivory)] transition-opacity duration-300 group-hover:opacity-65">
              {title}
            </h3>
          </div>

          <p className="shrink-0 text-[10px] tracking-[0.28em] text-[var(--color-stone-dim)]">
            {number}
          </p>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-5 max-w-[38rem] text-sm leading-7 text-[var(--color-stone)]">
          {description}
        </p>

        {/* TECH */}
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/[0.07] px-3 py-1.5 text-[8px] uppercase tracking-[0.18em] text-[var(--color-stone)]"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-[9px] uppercase tracking-[0.22em] text-[var(--color-stone-dim)]">
            Case Study
          </p>

          <span className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[var(--color-ivory)]">
            View project

            <span
              className="transition-transform duration-300 group-hover:translate-x-2"
              aria-hidden="true"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}