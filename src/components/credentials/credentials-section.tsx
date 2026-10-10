import { certificates } from "@/data/certificates";

export default function CredentialsSection() {
  return (
    <section
      id="credentials"
      className="section-shell border-t border-white/[0.05]"
    >
      {/* =====================================================
          SECTION LABEL
      ====================================================== */}
      <div className="mb-16 flex items-center gap-4">
        <span className="text-[10px] tracking-[0.3em] text-[var(--color-stone-dim)]">
          04
        </span>

        <span
          className="h-px w-10 bg-[var(--color-carbon)]"
          aria-hidden="true"
        />

        <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-stone)]">
          Certifications + Coursework
        </p>
      </div>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <div className="mb-20 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div>
          <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-stone-dim)]">
            Learning beyond the classroom
          </p>

          <h2 className="display-type mt-4 max-w-[34rem] text-[clamp(3rem,5vw,5.5rem)] leading-[0.95] tracking-[-0.04em] text-[var(--color-ivory)]">
            Expanding my
            <br />
            technical foundation.
          </h2>
        </div>

        <p className="max-w-[34rem] self-end text-sm leading-7 text-[var(--color-stone)]">
          Alongside my Computer Science degree, I continue developing my
          technical knowledge through specialized coursework, hands-on
          projects and industry certifications.
        </p>
      </div>

      {/* =====================================================
          CERTIFICATIONS
      ====================================================== */}
      <div>
        <div className="mb-8 flex flex-col gap-3 border-b border-[var(--color-carbon)] pb-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-ivory)]">
            Certifications
          </p>

          <p className="text-[9px] uppercase tracking-[0.24em] text-[var(--color-stone-dim)]">
            Current + Planned
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {certificates.map((certificate, index) => (
            <article
              key={certificate.title}
              className="rounded-[1.5rem] border border-white/[0.06] bg-white/[0.012] p-6 transition-colors duration-300 hover:border-white/[0.12] md:p-8"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[9px] tracking-[0.24em] text-[var(--color-stone-dim)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-5 text-lg font-medium leading-7 text-[var(--color-ivory)]">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[var(--color-stone-dim)]">
                    {certificate.organization}
                  </p>
                </div>

                <span
                  className={`shrink-0 rounded-full border px-3 py-1.5 text-[8px] uppercase tracking-[0.18em] ${
                    certificate.status === "Completed"
                      ? "border-white/[0.12] text-[var(--color-ivory)]"
                      : certificate.status === "In Progress"
                        ? "border-[var(--color-accent)] text-[var(--color-ivory)]"
                        : "border-white/[0.07] text-[var(--color-stone)]"
                  }`}
                >
                  {certificate.status}
                </span>
              </div>

              {certificate.year && (
                <p className="mt-5 text-[9px] uppercase tracking-[0.2em] text-[var(--color-stone-dim)]">
                  {certificate.year}
                </p>
              )}

              {certificate.credentialUrl && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] text-[var(--color-stone)] transition-colors duration-200 hover:text-[var(--color-ivory)]"
                >
                  View credential
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </article>
          ))}

          {/* FUTURE CERTIFICATION PLACEHOLDER */}
          <article className="rounded-[1.5rem] border border-dashed border-white/[0.06] p-6 md:p-8">
            <p className="text-[9px] tracking-[0.24em] text-[var(--color-stone-dim)]">
              {String(certificates.length + 1).padStart(2, "0")}
            </p>

            <h3 className="mt-5 text-base text-[var(--color-stone)]">
              More certifications coming soon.
            </h3>

            <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[var(--color-stone-dim)]">
              Continuing professional development
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}