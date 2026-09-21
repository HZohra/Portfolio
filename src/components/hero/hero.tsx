import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--color-obsidian)]">
      {/* Soft atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-[24%] top-[18%] h-[34rem] w-[34rem] rounded-full bg-[#6b292d]/[0.06] blur-[150px]" />
        <div className="absolute right-[8%] top-[12%] h-[28rem] w-[28rem] rounded-full bg-white/[0.025] blur-[130px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,11,11,0.18)_50%,rgba(11,11,11,0.88)_100%)]" />
      </div>

      <div className="page-shell relative min-h-[100svh] pt-24 md:pt-28">
        {/* LEFT INTRO */}
        <div className="absolute left-[var(--page-padding)] top-[17%] z-30">
          <p className="mb-4 text-[10px] uppercase tracking-[0.42em] text-[var(--color-stone)]">
            Hello, I&apos;m
          </p>
        </div>

        {/* ZOHRA — left side */}
        <div
          className="pointer-events-none absolute left-[var(--page-padding)] top-[21%] z-10"
          aria-hidden="true"
        >
          <p className="display-type text-[clamp(5rem,10vw,11rem)] leading-[0.78] tracking-[-0.055em] text-[var(--color-ivory)]">
            ZOHRA
          </p>
        </div>

        {/* HAIDARY — right side */}
        <div
          className="pointer-events-none absolute right-[var(--page-padding)] top-[24%] z-10"
          aria-hidden="true"
        >
          <p className="display-type text-right text-[clamp(4.8rem,9vw,10.5rem)] leading-[0.78] tracking-[-0.055em] text-[var(--color-ivory)]">
            HAIDARY
          </p>
        </div>

        {/* PORTRAIT */}
        <div className="absolute bottom-0 left-1/2 z-20 h-[82vh] w-[min(38vw,560px)] -translate-x-1/2">
          <Image
            src= "/images/hero/zohra-hero.png"
            alt="Zohra Haidary"
            fill
            priority
            className="object-contain object-bottom"
            sizes="(max-width: 768px) 88vw, 38vw"
          />

          {/* Helps blend the current photo background */}
          <div className="pointer-events-none absolute inset-x-[-8%] bottom-0 top-[8%] bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(11,11,11,0.18)_62%,rgba(11,11,11,0.92)_100%)]" />
        </div>

        {/* ROLE */}
        <div className="absolute left-[var(--page-padding)] top-[45%] z-30">
          <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--color-stone)]">
            Computer Science Student · Software Developer
          </p>
        </div>

        {/* LEFT STATEMENT */}
        <div className="absolute bottom-[13%] left-[var(--page-padding)] z-30 max-w-[29rem]">
          <p className="display-type text-[clamp(2rem,3vw,3.4rem)] leading-[1.01] tracking-[-0.03em]">
            Building thoughtful digital
            <br />
            products with purpose.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <span
              className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
              aria-hidden="true"
            />

            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-stone)]">
              Waterloo, Canada
            </p>
          </div>
        </div>

        {/* RIGHT MICRO COPY */}
        <div className="absolute right-[var(--page-padding)] top-[15%] z-30 hidden lg:block">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-[9px] uppercase leading-[1.7] tracking-[0.35em] text-[var(--color-stone)]">
                Ideas
                <br />
                Code
                <br />
                Impact
              </p>
            </div>

            <span className="h-px w-12 bg-[var(--color-carbon)]" />
          </div>
        </div>

        {/* FEATURED PROJECT */}
        <div className="absolute bottom-[11%] right-[var(--page-padding)] z-30 hidden w-[min(29vw,420px)] lg:block">
          <div className="border-t border-[var(--color-carbon)] pt-4">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-stone)]">
                Featured project
              </p>

              <p className="text-[9px] tracking-[0.2em] text-[var(--color-stone-dim)]">
                01 / 03
              </p>
            </div>

            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="display-type text-3xl tracking-[-0.025em]">
                  Trackr
                </h2>

                <p className="mt-2 max-w-[16rem] text-sm leading-6 text-[var(--color-stone)]">
                  AI-powered academic management built around courses,
                  assignments, grades and intelligent syllabus extraction.
                </p>

                <Link
                  href="/projects/trackr"
                  className="mt-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] transition-opacity duration-200 hover:opacity-60"
                >
                  View project
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div
                className="hidden h-24 w-20 border-l border-[var(--color-carbon)] xl:block"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* SMALL SCROLL LABEL */}
        <div className="absolute bottom-6 left-1/2 z-30 hidden -translate-x-1/2 md:block">
          <p className="text-[8px] uppercase tracking-[0.34em] text-[var(--color-stone-dim)]">
            Scroll to explore
          </p>
        </div>
      </div>
    </section>
  );
}