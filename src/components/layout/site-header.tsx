"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0b0b]/90 backdrop-blur-xl">
      <div className="page-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" onClick={() => setOpen(false)} className="display-type text-2xl tracking-tight" aria-label="Zohra Haidary home">ZH</Link>
        <nav className="hidden items-center gap-8 xl:flex" aria-label="Main navigation">
          {navigation.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className="py-3 text-sm text-[var(--color-stone)] transition hover:text-[var(--color-ivory)]">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden px-3 py-3 text-xs uppercase tracking-widest text-[var(--color-stone)] hover:text-white sm:block">Resume ↗</a>
          <Link href="/contact" onClick={() => setOpen(false)} className="border border-white/20 px-4 py-3 text-xs uppercase tracking-wider transition hover:border-white/60">Let&apos;s Connect →</Link>
          <button type="button" className="flex h-11 w-11 items-center justify-center border border-white/20 xl:hidden" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(v => !v)}>
            <span className="flex flex-col gap-1.5" aria-hidden="true"><span className="h-px w-5 bg-white"/><span className="h-px w-5 bg-white"/></span>
          </button>
        </div>
      </div>
      {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-white/10 bg-[#0b0b0b] px-5 pb-7 pt-3 xl:hidden">
        <div className="mx-auto flex max-w-[1500px] flex-col">{navigation.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 text-lg">{item.label} <span aria-hidden="true">↗</span></Link>)}</div>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="mt-5 inline-block py-3 text-sm">View resume ↗</a>
      </nav>}
    </header>
  );
}