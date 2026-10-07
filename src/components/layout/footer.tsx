import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-[var(--color-obsidian)]">
      <div className="page-shell py-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="text-[8px] uppercase tracking-[0.22em] text-[var(--color-stone-dim)]">
            © {new Date().getFullYear()} Zohra Haidary · All Rights Reserved
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <p className="text-[8px] uppercase tracking-[0.22em] text-[var(--color-stone-dim)]">
              Waterloo, Canada
            </p>

            <Link
              href="/contact"
              className="text-[8px] uppercase tracking-[0.22em] text-[var(--color-stone)] transition-colors duration-200 hover:text-[var(--color-ivory)]"
            >
              Contact ↗
            </Link>

            <Link
              href="#top"
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