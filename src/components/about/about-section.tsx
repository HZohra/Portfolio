export default function AboutSection() {
  return (
    <section id="about" className="section-shell border-t border-white/[0.05]">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        {/* LEFT — ABOUT */}
        <div>
          <div className="mb-8 flex items-center gap-4">
            <span className="text-[10px] tracking-[0.3em] text-[var(--color-stone-dim)]">
              01
            </span>

            <span className="h-px w-10 bg-[var(--color-carbon)]" />

            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-stone)]">
              About
            </p>
          </div>

          <h2 className="display-type max-w-[34rem] text-[clamp(2.8rem,5vw,5.5rem)] leading-[0.95] tracking-[-0.04em] text-[var(--color-ivory)]">
            Building useful
            <br />
            technology with
            <br />
            intention.
          </h2>

          <div className="mt-10 max-w-[34rem] space-y-5 text-[15px] leading-7 text-[var(--color-stone)]">
            <p>
              I&apos;m a Computer Science student and software developer
              interested in building full-stack, mobile and AI-powered
              applications that solve real problems.
            </p>

            <p>
              I enjoy combining software engineering, thoughtful product
              design and emerging technologies to create experiences that are
              practical, clear and useful.
            </p>
          </div>
        </div>

        {/* RIGHT — EDUCATION */}
        <div className="lg:pt-24">
          <div className="border-t border-[var(--color-carbon)]">
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

            <div className="grid gap-8 py-8 sm:grid-cols-2">
              <div>
                <p className="text-[10px] uppercase tracking-[0.26em] text-[var(--color-stone-dim)]">
                  Focus
                </p>

                <div className="mt-4 space-y-2 text-sm leading-6 text-[var(--color-stone)]">
                  <p>Software Engineering</p>
                  <p>Artificial Intelligence</p>
                  <p>Machine Learning</p>
                  <p>Mobile Development</p>
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.26em] text-[var(--color-stone-dim)]">
                  Currently learning
                </p>

                <div className="mt-4 space-y-2 text-sm leading-6 text-[var(--color-stone)]">
                  <p>Android Development</p>
                  <p>Machine Learning</p>
                  <p>Cloud / AWS</p>
                  <p>System Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}