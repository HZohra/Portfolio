import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/[0.05] bg-[var(--color-obsidian)]"
    >
      <div className="page-shell flex min-h-[calc(100svh-5rem)] flex-col justify-between py-16 md:py-20 lg:py-24">
        {/* =====================================================
            MAIN FOOTER GRID
        ====================================================== */}
        <div className="grid gap-16 lg:grid-cols-[1.55fr_0.45fr] lg:gap-28">
          {/* ===================================================
              LEFT / INTRO
          ==================================================== */}
          <div>
            {/* <div className="flex items-center gap-5">
              <Link
                href="#home"
                className="display-type text-4xl leading-none text-[var(--color-ivory)]"
              >
                ZH
              </Link>

              <span
                className="h-7 w-px bg-[var(--color-carbon)]"
                aria-hidden="true"
              />

              <p className="text-[8px] uppercase tracking-[0.32em] text-[var(--color-stone-dim)]">
                Build · Learn · Create · Repeat
              </p>
            </div> */}

            <h2 className="display-type mt-10 max-w-[31rem] text-[clamp(2.3rem,3.4vw,4rem)] leading-[0.98] tracking-[-0.035em] text-[var(--color-ivory)]">
              Building thoughtful
              <br />
              digital products.
            </h2>

            <p className="mt-6 max-w-[30rem] text-sm leading-7 text-[var(--color-stone)]">
              Computer Science student and software developer interested in
              full-stack development, AI-powered applications and meaningful
              digital experiences.
            </p>

            {/* STATUS */}
            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/[0.08] px-4 py-2">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
                aria-hidden="true"
              />

              <p className="text-[8px] uppercase tracking-[0.22em] text-[var(--color-stone)]">
                Open to opportunities
              </p>
            </div>

            {/* =================================================
                CONTACT BUTTONS
            ================================================== */}
            <div className="mt-10 grid w-full max-w-[58rem] gap-4 sm:grid-cols-2">
              {/* EMAIL */}
              <a
                href="mailto:Haidaryzohra@gmail.com"
                className="group inline-flex items-center justify-between rounded-2xl border border-white/[0.08] px-6 py-5 text-[10px] uppercase tracking-[0.2em] text-[var(--color-ivory)] transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.02]"
              >
                Email Me

                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/zohra-haidary-318575201/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between rounded-2xl border border-white/[0.08] px-5 py-4 text-[10px] uppercase tracking-[0.2em] text-[var(--color-ivory)] transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.02]"
              >
                LinkedIn

                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/HZohra"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between rounded-2xl border border-white/[0.08] px-5 py-4 text-[10px] uppercase tracking-[0.2em] text-[var(--color-ivory)] transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.02]"
              >
                GitHub

                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/astra_spark_/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between rounded-2xl border border-white/[0.08] px-5 py-4 text-[10px] uppercase tracking-[0.2em] text-[var(--color-ivory)] transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.02]"
              >
                Instagram

                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>

              {/* RESUME */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between rounded-2xl border border-white/[0.08] px-5 py-4 text-[10px] uppercase tracking-[0.2em] text-[var(--color-ivory)] transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.02] sm:col-span-2"
              >
                Resume

                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* ===================================================
              NAVIGATION
          ==================================================== */}
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-[var(--color-stone-dim)]">
              Navigation
            </p>

            <nav className="mt-8 flex flex-col gap-5">
              <Link
                href="#home"
                className="text-sm text-[var(--color-ivory)] transition-opacity duration-200 hover:opacity-55"
              >
                Home
              </Link>

              <Link
                href="#about"
                className="text-sm text-[var(--color-ivory)] transition-opacity duration-200 hover:opacity-55"
              >
                About
              </Link>

              <Link
                href="#experience"
                className="text-sm text-[var(--color-ivory)] transition-opacity duration-200 hover:opacity-55"
              >
                Experience
              </Link>

              <Link
                href="#projects"
                className="text-sm text-[var(--color-ivory)] transition-opacity duration-200 hover:opacity-55"
              >
                Projects
              </Link>

              <Link
                href="#skills"
                className="text-sm text-[var(--color-ivory)] transition-opacity duration-200 hover:opacity-55"
              >
                Skills
              </Link>

              <Link
                href="#credentials"
                className="text-sm text-[var(--color-ivory)] transition-opacity duration-200 hover:opacity-55"
              >
                Credentials
              </Link>
            </nav>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <div className="mt-20 flex flex-col gap-5 border-t border-[var(--color-carbon)] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[8px] uppercase tracking-[0.22em] text-[var(--color-stone-dim)]">
            © {new Date().getFullYear()} Zohra Haidary · All Rights Reserved
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <p className="text-[8px] uppercase tracking-[0.22em] text-[var(--color-stone-dim)]">
              Waterloo, Canada
            </p>

            <Link
              href="#home"
              className="text-[8px] uppercase tracking-[0.22em] text-[var(--color-stone)] transition-colors duration-200 hover:text-[var(--color-ivory)]"
            >
              Back to top ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}