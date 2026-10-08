import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--color-obsidian)]"
    >
      {/* Accessible heading */}
      <h1 id="hero-title" className="sr-only">
        Zohra Haidary — Computer Science Student and Software Developer
      </h1>

      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-[18%] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#6b292d]/[0.04] blur-[160px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,11,11,0.10)_48%,rgba(11,11,11,0.9)_100%)]" />
      </div>

      <div className="page-shell relative min-h-[100svh]">
        {/* =====================================================
            MOBILE + TABLET
            Below xl
        ====================================================== */}
        <div className="relative flex min-h-[100svh] flex-col pt-28 xl:hidden">
          {/* INTRO */}
          <div className="relative z-30">
            <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--color-stone)] sm:text-[10px]">
              Hello, I&apos;m
            </p>

            <p className="mt-7 text-[9px] uppercase leading-5 tracking-[0.28em] text-[var(--color-stone)] sm:text-[10px]">
              Computer Science Student
              <br />
              Software Developer
            </p>

            {/* MOBILE NAME */}
            <div
              className="display-type mt-3 uppercase leading-[0.8] tracking-[-0.055em] text-[var(--color-ivory)]"
              aria-hidden="true"
            >
              <p className="text-[clamp(4.2rem,14vw,7rem)]">Zohra</p>

              <p className="mt-2 text-[clamp(4.2rem,14vw,7rem)]">
                Haidary
              </p>
            </div>
          </div>

          {/* MOBILE / TABLET PORTRAIT */}
          <div className="absolute inset-x-0 bottom-0 top-[30%] z-10">
            <Image
              src="/images/hero/zohra-hero.png"
              alt="Portrait of Zohra Haidary"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_28%] brightness-[0.74] saturate-[0.76]"
            />

            {/* TOP FADE */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-[#0b0b0b] via-[#0b0b0b]/85 to-transparent"
              aria-hidden="true"
            />

            {/* BOTTOM FADE */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/90 to-transparent"
              aria-hidden="true"
            />

            {/* SIDE VIGNETTE */}
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(11,11,11,0.12)_55%,#0b0b0b_100%)]"
              aria-hidden="true"
            />
          </div>

          {/* MOBILE CONTENT */}
          <div className="relative z-30 mt-auto max-w-[27rem] pb-12 sm:max-w-[31rem]">
            <p className="display-type text-[clamp(2rem,6vw,2.8rem)] leading-[1.02] tracking-[-0.03em] text-[var(--color-ivory)]">
              Building practical software
              <br />
              with purpose.
            </p>

            <p className="mt-5 max-w-[26rem] text-sm leading-6 text-[var(--color-stone)]">
              Full-stack, mobile and AI-powered applications built to solve
              real problems.
            </p>

            {/* LOCATION */}
            <div className="mt-7 flex items-center gap-3">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                aria-hidden="true"
              />

              <p className="text-[10px] uppercase tracking-[0.23em] text-[var(--color-stone)]">
                Waterloo, Canada
              </p>
            </div>

            {/* ACTIONS */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 border border-[var(--color-carbon)] px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-[var(--color-ivory)] transition-colors duration-300 hover:border-[var(--color-stone)]"
              >
                View projects

                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[var(--color-stone)] transition-colors duration-200 hover:text-[var(--color-ivory)]"
              >
                Resume
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            DESKTOP / LARGE LAPTOP
            xl and above
        ====================================================== */}
        <div className="relative hidden min-h-[100svh] xl:block">
          {/* HELLO */}
          <div className="absolute left-0 top-[16%] z-30">
            <p className="text-[10px] uppercase tracking-[0.42em] text-[var(--color-stone)]">
              Hello, I&apos;m
            </p>
          </div>

          {/* =================================================
              DESKTOP NAME
          ================================================== */}
          <div
            className="pointer-events-none absolute inset-x-0 top-[21%] z-10 grid grid-cols-[1fr_44vw_1fr] items-start"
            aria-hidden="true"
          >
            <p className="display-type whitespace-nowrap text-[clamp(5.5rem,8.4vw,10rem)] uppercase leading-[0.76] tracking-[-0.06em] text-[var(--color-ivory)]">
              Zohra
            </p>

            <div />

            <p className="display-type whitespace-nowrap text-right text-[clamp(5.5rem,8.4vw,10rem)] uppercase leading-[0.76] tracking-[-0.06em] text-[var(--color-ivory)]">
              Haidary
            </p>
          </div>

          {/* =================================================
              DESKTOP PORTRAIT
          ================================================== */}
          <div className="absolute bottom-0 left-1/2 z-20 h-[88svh] w-[min(44vw,680px)] -translate-x-1/2">
            <Image
              src="/images/hero/zohra-hero.png"
              alt="Portrait of Zohra Haidary"
              fill
              priority
              sizes="44vw"
              className="object-cover object-[center_28%] brightness-[0.76] saturate-[0.78]"
            />

            {/* SIDE BLEND */}
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0b0b0b_0%,rgba(11,11,11,0.82)_8%,transparent_28%,transparent_72%,rgba(11,11,11,0.82)_92%,#0b0b0b_100%)]"
              aria-hidden="true"
            />

            {/* TOP BLEND */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-[22%] bg-gradient-to-b from-[#0b0b0b] via-[#0b0b0b]/50 to-transparent"
              aria-hidden="true"
            />

            {/* BOTTOM BLEND */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/90 to-transparent"
              aria-hidden="true"
            />

            {/* FINAL VIGNETTE */}
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(11,11,11,0.08)_60%,rgba(11,11,11,0.5)_82%,#0b0b0b_100%)]"
              aria-hidden="true"
            />
          </div>

          {/* ROLE */}
          <div className="absolute left-0 top-[39%] z-30">
            <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--color-stone)]">
              Computer Science Student · Software Developer
            </p>
          </div>

          {/* MAIN STATEMENT */}
          <div className="absolute left-0 top-[50%] z-30 max-w-[33rem]">
            <p className="display-type text-[clamp(2rem,2.6vw,3rem)] leading-[1.02] tracking-[-0.03em] text-[var(--color-ivory)]">
              Building practical software
              <br />
              with purpose.
            </p>

            <p className="mt-5 max-w-[29rem] text-sm leading-6 text-[var(--color-stone)]">
              Full-stack, mobile and AI-powered applications built to solve
              real problems.
            </p>

            {/* LOCATION */}
            <div className="mt-8 flex items-center gap-3">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                aria-hidden="true"
              />

              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-stone)]">
                Waterloo, Canada
              </p>
            </div>

            {/* ACTIONS */}
            <div className="mt-10 flex items-center gap-8">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-4 border border-[var(--color-carbon)] px-6 py-4 text-[10px] uppercase tracking-[0.24em] text-[var(--color-ivory)] transition-colors duration-300 hover:border-[var(--color-stone)]"
              >
                View projects

                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-[var(--color-ivory)] transition-opacity duration-200 hover:opacity-60"
              >
                Resume
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* SCROLL INDICATOR */}
          <div className="absolute bottom-7 left-1/2 z-30 -translate-x-1/2">
            <div className="flex flex-col items-center gap-3">
              <p className="text-[9px] uppercase tracking-[0.32em] text-[var(--color-stone-dim)]">
                Scroll to explore
              </p>

              <span
                className="h-8 w-px bg-[var(--color-carbon)]"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}