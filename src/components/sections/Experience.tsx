import { Reveal } from "../Reveal";

const highlights = [
  "ERP module development across healthcare workflows",
  "REST API architecture with Dapper and SQL Server",
  "OpenAI API integration for AI-powered features",
  "20% query performance improvement via SP optimization",
  "Role-based security with JWT authentication",
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#3B82F6]">// experience</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-16 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            A track record of <span className="gradient-text">shipping</span>.
          </h2>
        </Reveal>

        <div className="relative pl-10">
          <div className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-[#3B82F6] via-[#06B6D4]/60 to-transparent" />
          <div className="absolute left-[5px] top-2 h-3 w-3 rounded-full bg-[#3B82F6] shadow-[0_0_18px_4px_rgba(59,130,246,0.5)]" />

          <Reveal>
            <div className="glass rounded-2xl p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-white">V3M Technologies</h3>
                <span className="font-mono text-xs text-white/50">Aug 2024 — Present</span>
              </div>
              <p className="mt-1 text-sm text-[#9CC9FF]">
                Software Engineer · .NET Full Stack Developer
              </p>

              <ul className="mt-6 space-y-3">
                {highlights.map((h, i) => (
                  <Reveal key={h} delay={0.1 + i * 0.08}>
                    <li className="flex items-start gap-3 text-sm text-white/75">
                      <span className="mt-[6px] inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#06B6D4] shadow-[0_0_8px_#06B6D4]" />
                      <span>{h}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
