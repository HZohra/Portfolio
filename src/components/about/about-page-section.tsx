import Image from "next/image";
import Link from "next/link";

export default function AboutPageSection() {
  return (
    <section
      className="section-shell border-t border-white/[0.05] pt-32"
      aria-labelledby="about-page-title"
    >
      {/* =====================================================
          PAGE LABEL
      ====================================================== */}
      <div className="mb-16 flex items-center gap-4">
        <span className="text-[10px] tracking-[0.3em] text-[var(--color-stone-dim)]">
          01
        </span>

        <span
          className="h-px w-10 bg-[var(--color-carbon)]"
          aria-hidden="true"
        />

        <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-stone)]">
          About
        </p>
      </div>

      {/* =====================================================
          HERO / INTRO
      ====================================================== */}
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
        {/* LEFT — PORTRAIT */}
        <div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/[0.06] bg-[var(--color-graphite)]">
            <Image
              src="/images/hero/zohra-hero.png"
              alt="Portrait of Zohra Haidary"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-[center_28%] brightness-[0.82] saturate-[0.8]"
            />

            {/* SUBTLE OVERLAYS */}
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(11,11,11,0.65)_0%,transparent_40%)]"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(11,11,11,0.35)_100%)]"
              aria-hidden="true"
            />

            {/* IMAGE LABEL */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <p className="text-[9px] uppercase tracking-[0.26em] text-[var(--color-stone)]">
                Waterloo, Ontario
              </p>

              <p className="display-type mt-2 text-3xl tracking-[-0.03em] text-[var(--color-ivory)]">
                Zohra Haidary
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — ABOUT CONTENT */}
        <div>
          <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-stone-dim)]">
            Computer Science · Software Development
          </p>

          <h1
            id="about-page-title"
            className="display-type mt-4 max-w-[42rem] text-[clamp(3.5rem,6vw,6.5rem)] leading-[0.93] tracking-[-0.045em] text-[var(--color-ivory)]"
          >
            Building technology
            <br />
            with purpose.
          </h1>

          <div className="mt-10 max-w-[38rem] space-y-5 text-[15px] leading-7 text-[var(--color-stone)]">
            <p>
              I&apos;m a Computer Science student at Wilfrid Laurier
              University and a software developer interested in building
              full-stack, mobile and AI-powered applications that solve
              practical problems.
            </p>

            <p>
              I enjoy turning ideas into useful products by combining software
              engineering, thoughtful design and emerging technologies. My
              projects have given me hands-on experience with frontend
              development, backend APIs, databases, authentication, AI
              integration and mobile development.
            </p>

            <p>
              I&apos;m especially interested in building systems that are
              practical, easy to use and technically well designed, while
              continuing to strengthen my understanding of scalable software
              architecture and cloud technologies.
            </p>
          </div>

          {/* QUICK INFO */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="border-t border-[var(--color-carbon)] pt-5">
              <p className="text-[9px] uppercase tracking-[0.24em] text-[var(--color-stone-dim)]">
                Based In
              </p>

              <p className="mt-2 text-sm text-[var(--color-ivory)]">
                Waterloo Region, Ontario
              </p>
            </div>

            <div className="border-t border-[var(--color-carbon)] pt-5">
              <p className="text-[9px] uppercase tracking-[0.24em] text-[var(--color-stone-dim)]">
                Current Focus
              </p>

              <p className="mt-2 text-sm text-[var(--color-ivory)]">
                Full-Stack · AI · Mobile
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          EDUCATION
      ====================================================== */}
      <div className="mt-28">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-stone-dim)]">
              Education
            </p>

            <h2 className="display-type mt-3 text-[clamp(2.8rem,4.5vw,5rem)] leading-[0.97] tracking-[-0.04em] text-[var(--color-ivory)]">
              Academic foundation.
            </h2>
          </div>

          <p className="max-w-[28rem] text-sm leading-6 text-[var(--color-stone)] lg:text-right">
            Developing a strong foundation across software engineering,
            artificial intelligence, systems and application development.
          </p>
        </div>

        <div className="border-t border-[var(--color-carbon)]">
          <div className="grid gap-8 border-b border-[var(--color-carbon)] py-8 lg:grid-cols-[1fr_auto] lg:items-start">
            <div>
              <p className="text-[10px] uppercase tracking-[0.26em] text-[var(--color-stone-dim)]">
                Wilfrid Laurier University
              </p>

              <h3 className="display-type mt-4 text-3xl tracking-[-0.03em] text-[var(--color-ivory)]">
                Bachelor of Science · Computer Science
              </h3>

              <p className="mt-3 max-w-[36rem] text-sm leading-7 text-[var(--color-stone)]">
                Coursework and projects focused on software engineering,
                machine learning, mobile development, databases, networks and
                full-stack application development.
              </p>
            </div>

            <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-stone-dim)]">
              Waterloo, ON
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          TECHNICAL DIRECTION
      ====================================================== */}
      <div className="mt-28">
        <div className="mb-10">
          <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-stone-dim)]">
            Technical Direction
          </p>

          <h2 className="display-type mt-3 text-[clamp(2.8rem,4.5vw,5rem)] leading-[0.97] tracking-[-0.04em] text-[var(--color-ivory)]">
            What I&apos;m focused on.
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {/* TECHNICAL FOCUS */}
          <article className="rounded-[1.5rem] border border-white/[0.06] bg-white/[0.012] p-6 md:p-8">
            <p className="text-[10px] uppercase tracking-[0.26em] text-[var(--color-stone-dim)]">
              Technical Focus
            </p>

            <div className="mt-6 space-y-4">
              {[
                "Full-Stack Development",
                "Artificial Intelligence & Machine Learning",
                "Android Development",
                "Cloud Technologies",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
                    aria-hidden="true"
                  />

                  <p className="text-sm text-[var(--color-stone)]">{item}</p>
                </div>
              ))}
            </div>
          </article>

          {/* CURRENTLY EXPLORING */}
          <article className="rounded-[1.5rem] border border-white/[0.06] bg-white/[0.012] p-6 md:p-8">
            <p className="text-[10px] uppercase tracking-[0.26em] text-[var(--color-stone-dim)]">
              Currently Exploring
            </p>

            <div className="mt-6 space-y-4">
              {[
                "System Design",
                "Cloud / AWS",
                "Applied Machine Learning",
                "Scalable Applications",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span
                    className="h-1.5 w-1.5 rounded-full border border-[var(--color-stone-dim)]"
                    aria-hidden="true"
                  />

                  <p className="text-sm text-[var(--color-stone)]">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>

      {/* =====================================================
          NEXT STEP
      ====================================================== */}
      <div className="mt-20 border-t border-[var(--color-carbon)] pt-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.28em] text-[var(--color-stone-dim)]">
              More about my work
            </p>

            <h2 className="display-type mt-3 max-w-[34rem] text-[clamp(2.4rem,4vw,4rem)] leading-[0.98] tracking-[-0.04em] text-[var(--color-ivory)]">
              See the skills and experience behind the projects.
            </h2>
          </div>

          <Link
            href="/experience"
            className="group inline-flex w-fit items-center gap-4 border border-[var(--color-carbon)] px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-[var(--color-ivory)] transition-colors duration-300 hover:border-[var(--color-stone)]"
          >
            View skills &amp; experience

            <span
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}