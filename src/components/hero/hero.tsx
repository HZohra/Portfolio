import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--color-obsidian)]">
      {/* Background atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/3 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/10 blur-[160px]" />
      </div>

      <div className="page-shell relative min-h-[100svh] pt-24">
        {/* Small intro text */}
        <p className="absolute left-[var(--page-padding)] top-32 z-30 text-[10px] uppercase tracking-[0.32em] text-[var(--color-stone)] md:top-36">
          Computer Science Student · Software Developer
        </p>

        {/* First name behind portrait */}
        <div
          className="pointer-events-none absolute inset-x-0 top-[22%] z-10"
          aria-hidden="true"
        >
          <p className="display-type whitespace-nowrap text-center text-[clamp(6rem,16vw,15rem)] leading-[0.72] tracking-[-0.055em] text-[var(--color-ivory)]">
            ZOHRA
          </p>
        </div>

        {/* Portrait */}
        <div className="absolute bottom-0 left-1/2 z-20 h-[82vh] w-[min(58vw,760px)] -translate-x-1/2">
          <Image
            src="/images/hero/zohra-hero.png"
            alt="Zohra Haidary"
            fill
            priority
            className="object-contain object-bottom"
            sizes="(max-width: 768px) 90vw, 58vw"
          />
        </div>

        {/* Surname in front */}
        <div
          className="pointer-events-none absolute inset-x-0 top-[49%] z-30"
          aria-hidden="true"
        >
          <p className="display-type whitespace-nowrap text-center text-[clamp(5.5rem,14vw,13rem)] leading-[0.72] tracking-[-0.055em] text-[var(--color-ivory)]">
            HAIDARY
          </p>
        </div>

        {/* Statement */}
        <div className="absolute bottom-14 left-[var(--page-padding)] z-40 max-w-[27rem] md:bottom-16">
          <p className="display-type text-[clamp(1.8rem,3vw,3.1rem)] leading-[1.02] tracking-[-0.025em]">
            Building thoughtful digital products with purpose.
          </p>

          <p className="mt-5 text-xs uppercase tracking-[0.22em] text-[var(--color-stone)]">
            Waterloo, Canada
          </p>
        </div>

        {/* Current status */}
        <div className="absolute bottom-14 right-[var(--page-padding)] z-40 hidden text-right md:block">
          <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-[var(--color-stone-dim)]">
            Currently
          </p>

          <p className="text-sm text-[var(--color-ivory)]">
            Building Trackr
          </p>
        </div>
      </div>
    </section>
  );
}