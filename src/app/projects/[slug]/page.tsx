import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/footer";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  return { title: project ? `${project.title} | Zohra Haidary` : "Project not found", description: project?.description };
}
export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();
  return <main>
    <article className="section-shell !pt-36">
      <Link href="/projects" className="inline-flex min-h-11 items-center text-sm text-[var(--color-stone)] hover:text-white">← All projects</Link>
      <div className="mt-12 flex flex-wrap items-center gap-4 text-xs uppercase tracking-widest text-[var(--color-stone)]"><span>{project.number} / Selected work</span><span>·</span><span>{project.category}</span><span className="rounded-full border border-white/20 px-3 py-2">{project.status}</span></div>
      <h1 className="display-type mt-7 max-w-5xl text-[clamp(3.6rem,8vw,8rem)] leading-[.95] tracking-tight">{project.title}</h1>
      <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--color-stone)]">{project.description}</p>
      <div className="mt-9 flex flex-wrap gap-3">
        {project.demo && <a className="inline-flex min-h-11 items-center border border-white/40 px-5 text-sm hover:bg-white/10" href={project.demo} target="_blank" rel="noopener noreferrer">Live demo ↗</a>}
        {project.github && <a className="inline-flex min-h-11 items-center border border-white/20 px-5 text-sm hover:bg-white/10" href={project.github} target="_blank" rel="noopener noreferrer">Source code ↗</a>}
      </div>
      <div className="mt-20 grid gap-12 border-t border-white/15 pt-12 lg:grid-cols-2">
        <section><p className="text-xs uppercase tracking-widest text-[var(--color-stone)]">01 / The problem</p><h2 className="display-type mt-4 text-4xl">Why build it?</h2><p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-stone)]">{project.problem}</p></section>
        <section><p className="text-xs uppercase tracking-widest text-[var(--color-stone)]">02 / Approach</p><h2 className="display-type mt-4 text-4xl">How it works</h2><p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-stone)]">{project.approach}</p></section>
      </div>
      <section className="mt-16 border-t border-white/15 pt-10"><h2 className="display-type text-4xl">Technology stack</h2><div className="mt-7 flex flex-wrap gap-3">{project.technologies.map(t=><span key={t} className="rounded-full border border-white/20 px-4 py-2 text-sm text-[var(--color-stone)]">{t}</span>)}</div></section>
      <div className="mt-20 border-t border-white/15 pt-8"><Link href="/contact" className="text-sm underline underline-offset-8">Let&apos;s discuss a project ↗</Link></div>
    </article><Footer/>
  </main>;
}