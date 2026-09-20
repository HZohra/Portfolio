import Link from "next/link";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="page-shell flex h-20 items-center justify-between">
        <Link
          href="/"
          className="display-type text-2xl tracking-[-0.03em] transition-opacity duration-200 hover:opacity-60"
          aria-label="Zohra Haidary — Home"
        >
          ZH
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-[11px] uppercase tracking-[0.18em] text-[var(--color-stone)] transition-colors duration-200 hover:text-[var(--color-ivory)]"
            >
              {item.label}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[var(--color-ivory)] transition-[width] duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-[11px] uppercase tracking-[0.18em] transition-opacity duration-200 hover:opacity-60"
        >
          Resume ↗
        </a>
      </div>
    </header>
  );
}