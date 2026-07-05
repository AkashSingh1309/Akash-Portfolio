import { Reveal } from "../Reveal";
import { MagneticButton } from "../MagneticButton";

const items = [
  { icon: "✉", label: "singh.ak20185@gmail.com", href: "mailto:singh.ak20185@gmail.com" },
  { icon: "☎", label: "+91 8081979898", href: "tel:+918081979898" },
  { icon: "in", label: "linkedin.com/in/akashsingh-dev", href: "https://linkedin.com/in/akashsingh-dev" },
  { icon: "{ }", label: "github.com/AkashSingh1309", href: "https://github.com/AkashSingh1309" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-xl px-6">
        <Reveal>
          <p className="mb-3 text-center font-mono text-xs uppercase tracking-[0.2em] text-[#3B82F6]">
            // contact
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="glass relative overflow-hidden rounded-3xl p-10 text-center">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.18),transparent_70%)]" />
            <h2 className="relative text-4xl font-semibold tracking-tight sm:text-5xl">
              <span className="gradient-text">Let's Build Something.</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-sm text-white/60">
              Open to full-time roles, freelance projects, and technical collaborations.
            </p>

            <ul className="relative mt-8 space-y-2 text-left">
              {items.map((it) => (
                <li key={it.label}>
                  <a
                    href={it.href}
                    target={it.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-transparent px-4 py-3 transition hover:border-white/10 hover:bg-white/[0.04]"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[#3B82F6]/25 to-[#06B6D4]/15 font-mono text-sm text-[#9CC9FF] transition group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                      {it.icon}
                    </span>
                    <span className="text-sm text-white/85 group-hover:text-white">{it.label}</span>
                    <span className="ml-auto text-white/30 transition group-hover:translate-x-1 group-hover:text-white/70">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <MagneticButton href="mailto:singh.ak20185@gmail.com" variant="primary">
                Start a conversation
              </MagneticButton>
              <MagneticButton
                href="/AkashSingh_DotNet_2Year.pdf"
                variant="ghost"
                download="AkashSingh_DotNet_2Year.pdf"
                ariaLabel="Download Akash Kumar Singh resume (PDF)"
              >
                ↓ Download Resume
              </MagneticButton>
            </div>
          </div>
        </Reveal>

        <p className="mt-10 text-center font-mono text-xs text-white/35">
          Designed & built by Akash Kumar Singh · 2025
        </p>
      </div>
    </section>
  );
}
