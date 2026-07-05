import { useEffect, useState } from "react";

const items = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Impact" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ["hero", ...items.map((i) => i.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a href="#hero" className="group flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] font-mono text-sm font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            A
          </span>
          <span className="font-mono text-sm tracking-tight text-white/90">akash.dev</span>
        </a>
        <nav className="glass hidden rounded-full px-2 py-1.5 md:flex">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className={`relative rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                active === it.id ? "text-white" : "text-white/55 hover:text-white"
              }`}
            >
              {active === it.id && (
                <span className="absolute inset-0 -z-10 rounded-full bg-white/[0.08]" />
              )}
              {it.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-white/10 px-4 py-1.5 text-xs font-medium text-white/90 transition hover:border-[#3B82F6]/60 hover:bg-[#3B82F6]/10 md:inline-flex"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}
