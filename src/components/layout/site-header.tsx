import Link from "next/link";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* subtle readable background */}
      <div className="absolute inset-0 -z-10 border-b border-white/[0.04] bg-[#0b0b0b]/70 backdrop-blur-xl" />

      <div className="page-shell flex h-20 items-center justify-between">
        {/* =====================================================
            LEFT BRAND
        ====================================================== */}
        <div className="flex items-center gap-5">
          <Link
            href="/"
            className="display-type text-2xl tracking-[-0.04em] transition-opacity duration-200 hover:opacity-60"
            aria-label="Zohra Haidary — Home"
          >
            ZH
          </Link>

          <span
            className="hidden h-4 w-px bg-[var(--color-carbon)] sm:block"
            aria-hidden="true"
          />

          <p className="hidden text-[8px] uppercase tracking-[0.38em] text-[var(--color-stone)] lg:block">
            Build · Learn · Create · Repeat
          </p>
        </div>

        {/* =====================================================
            CENTER NAVIGATION
        ====================================================== */}
        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 xl:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-[11px] text-[var(--color-stone)] transition-colors duration-200 hover:text-[var(--color-ivory)]"
            >
              {item.label}

              <span
                className="absolute -bottom-2 left-0 h-px w-0 bg-[var(--color-ivory)] transition-[width] duration-300 group-hover:w-full"
                aria-hidden="true"
              />
            </Link>
          ))}
        </nav>

        {/* =====================================================
            RIGHT ACTIONS
        ====================================================== */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden text-[9px] uppercase tracking-[0.24em] text-[var(--color-stone)] transition-colors duration-200 hover:text-[var(--color-ivory)] lg:block"
          >
            Resume ↗
          </a>

          <Link
            href="/contact"
            className="group flex items-center gap-3 border border-[var(--color-carbon)] px-4 py-3 text-[10px] tracking-[0.05em] text-[var(--color-ivory)] transition-colors duration-300 hover:border-[var(--color-stone)] sm:gap-4 sm:px-5"
          >
            Let&apos;s Connect

            <span
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-[var(--color-carbon)] xl:hidden"
            aria-label="Open navigation menu"
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-px w-4 bg-[var(--color-ivory)]" />
              <span className="h-px w-4 bg-[var(--color-ivory)]" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}