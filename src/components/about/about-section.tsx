import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-shell border-t border-white/[0.05]"
      aria-labelledby="about-title"
    >
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        {/* LEFT — ABOUT */}
        <div>
          <div className="mb-8 flex items-center gap-4">
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

          <h2
            id="about-title"
            className="display-type max-w-[34rem] text-[clamp(2.8rem,5vw,5.5rem)] leading-[0.95] tracking-[-0.04em] text-[var(--color-ivory)]"
          >
            Building useful
            <br />
            technology with
            <br />
            intention.
          </h2>

          <div className="mt-10 max-w-[36rem] space-y-5 text-[15px] leading-7 text-[var(--color-stone)]">
            <p>
              I&apos;m a Computer Science student at Wilfrid Laurier
              University and a software developer interested in building
              full-stack, mobile and AI-powered applications that solve
              practical problems.
            </p>

            <p>
              I enjoy working across software engineering, product design and
              emerging technologies to turn ideas into useful applications. My
              projects have given me hands-on experience with frontend
              development, backend APIs, databases, authentication, AI
              integration and mobile development.
            </p>

            <p>
              I&apos;m currently focused on strengthening my software
              engineering skills through Android development, machine
              learning, cloud technologies and larger full-stack projects.
            </p>
          </div>
        </div>

        {/* RIGHT — EDUCATION + TECHNICAL FOCUS */}
        <div className="lg:pt-24">
          <div className="border-t border-[var(--color-carbon)]">
            {/* EDUCATION */}
            <div className="grid gap-6 border-b border-[var(--color-carbon)] py-8 sm:grid-cols-[1fr_auto]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-stone-dim)]">
                  Education
                </p>

                <h3 className="display-type mt-4 text-3xl tracking-[-0.03em] text-[var(--color-ivory)]">
                  Wilfrid Laurier University
                </h3>

                <p className="mt-2 text-sm text-[var(--color-stone)]">
                  Bachelor of Science · Computer Science
                </p>
              </div>

              <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-stone-dim)]">
                Waterloo, ON
              </p>
            </div>

            {/* TECHNICAL FOCUS + CURRENTLY EXPLORING */}
            <div className="grid gap-10 border-b border-[var(--color-carbon)] py-8 sm:grid-cols-2">
              {/* TECHNICAL FOCUS */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.26em] text-[var(--color-stone-dim)]">
                  Technical Focus
                </p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
                      aria-hidden="true"
                    />

                    <p className="text-sm text-[var(--color-stone)]">
                      Full-Stack Development
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
                      aria-hidden="true"
                    />

                    <p className="text-sm text-[var(--color-stone)]">
                      AI &amp; Machine Learning
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
                      aria-hidden="true"
                    />

                    <p className="text-sm text-[var(--color-stone)]">
                      Android Development
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
                      aria-hidden="true"
                    />

                    <p className="text-sm text-[var(--color-stone)]">
                      Cloud Technologies
                    </p>
                  </div>
                </div>
              </div>

              {/* CURRENTLY EXPLORING */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.26em] text-[var(--color-stone-dim)]">
                  Currently Exploring
                </p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="h-1.5 w-1.5 rounded-full border border-[var(--color-stone-dim)]"
                      aria-hidden="true"
                    />

                    <p className="text-sm text-[var(--color-stone)]">
                      System Design
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className="h-1.5 w-1.5 rounded-full border border-[var(--color-stone-dim)]"
                      aria-hidden="true"
                    />

                    <p className="text-sm text-[var(--color-stone)]">
                      Cloud / AWS
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className="h-1.5 w-1.5 rounded-full border border-[var(--color-stone-dim)]"
                      aria-hidden="true"
                    />

                    <p className="text-sm text-[var(--color-stone)]">
                      Applied Machine Learning
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className="h-1.5 w-1.5 rounded-full border border-[var(--color-stone-dim)]"
                      aria-hidden="true"
                    />

                    <p className="text-sm text-[var(--color-stone)]">
                      Scalable Applications
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* EXPERIENCE LINK */}
            <div className="pt-8">
              <p className="max-w-[30rem] text-sm leading-7 text-[var(--color-stone)]">
                See the technologies I work with, what I&apos;m currently
                learning and the professional and leadership experience behind
                my work.
              </p>

              <Link
                href="/experience"
                className="group mt-6 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[var(--color-ivory)] transition-opacity duration-200 hover:opacity-60"
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
        </div>
      </div>
    </section>
  );
}