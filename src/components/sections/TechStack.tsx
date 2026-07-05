import { lazy, Suspense } from "react";
import { Reveal } from "../Reveal";

const TechOrb = lazy(() => import("../TechOrb").then((m) => ({ default: m.TechOrb })));

const stack = [
  { name: "ASP.NET Core", icon: "◆" },
  { name: "C#", icon: "C#" },
  { name: "Blazor", icon: "⬢" },
  { name: "SignalR", icon: "⚡" },
  { name: "SQL Server", icon: "🗄" },
  { name: "REST APIs", icon: "{}" },
  { name: "OpenAI API", icon: "✦" },
  { name: "GitHub", icon: "⌥" },
  { name: "Azure", icon: "▲" },
  { name: "Docker", icon: "🐳" },
];

export function TechStack() {
  return (
    <section id="stack" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <Suspense fallback={null}>
          <TechOrb />
        </Suspense>
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#3B82F6]">// tech stack</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-14 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Tools I use to ship <span className="gradient-text">production-grade</span> software.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {stack.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <TechCard name={t.name} icon={t.icon} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div
      className="group glass relative flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#3B82F6]/40 hover:shadow-[0_20px_60px_-20px_rgba(59,130,246,0.45)]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3B82F6]/0 to-[#06B6D4]/0 opacity-0 transition-opacity group-hover:opacity-100" />
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#06B6D4]/10 font-mono text-xl text-[#9CC9FF] transition-transform group-hover:scale-110">
        {icon}
      </span>
      <span className="text-center text-sm font-medium text-white/85">{name}</span>
    </div>
  );
}
