import Footer from "@/components/layout/footer";

export default function ContactPage() {
  return (
    <main>
      <section className="section-shell pt-32">
        <div className="mb-16 flex items-center gap-4">
          <span className="text-xs tracking-[0.3em] text-[var(--color-stone-dim)]">
            04
          </span>

          <span
            className="h-px w-10 bg-[var(--color-carbon)]"
            aria-hidden="true"
          />

          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-stone)]">
            Contact
          </p>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-stone-dim)]">
              Let&apos;s connect
            </p>

            <h1 className="display-type mt-4 max-w-[42rem] text-[clamp(3.5rem,6vw,6.5rem)] leading-[0.93] tracking-[-0.045em] text-[var(--color-ivory)]">
              Let&apos;s build
              <br />
              something meaningful.
            </h1>

            <p className="mt-7 max-w-[34rem] text-sm leading-7 text-[var(--color-stone)]">
              I&apos;m open to software development opportunities,
              collaborations and projects where technology can solve meaningful
              problems.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/[0.08] px-4 py-2">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
                aria-hidden="true"
              />

              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-stone)]">
                Open to opportunities
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 min-w-0">
            <a
              href="mailto:Haidaryzohra@gmail.com"
              className="group flex min-h-[6rem] min-w-0 break-all items-center justify-between rounded-2xl border border-white/[0.08] px-6 py-5 text-xs uppercase tracking-[0.2em] text-[var(--color-ivory)] transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.02]"
            >
              Haidaryzohra@gmail.com
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/zohra-haidary-318575201/"
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[6rem] items-center justify-between rounded-2xl border border-white/[0.08] px-6 py-5 text-xs uppercase tracking-[0.2em] text-[var(--color-ivory)] transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.02]"
            >
              LinkedIn
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="https://github.com/HZohra"
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[6rem] items-center justify-between rounded-2xl border border-white/[0.08] px-6 py-5 text-xs uppercase tracking-[0.2em] text-[var(--color-ivory)] transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.02]"
            >
              GitHub
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="https://www.instagram.com/astra_spark_/"
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[6rem] items-center justify-between rounded-2xl border border-white/[0.08] px-6 py-5 text-xs uppercase tracking-[0.2em] text-[var(--color-ivory)] transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.02]"
            >
              Instagram
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[6rem] items-center justify-between rounded-2xl border border-white/[0.08] px-6 py-5 text-xs uppercase tracking-[0.2em] text-[var(--color-ivory)] transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.02] sm:col-span-2"
            >
              Resume
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}