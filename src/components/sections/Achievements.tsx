import { Counter } from "../Counter";
import { Reveal } from "../Reveal";

const stats = [
  { value: 2, suffix: "+", label: "Years Experience", icon: "◴" },
  { value: 20, suffix: "%", label: "Performance Improvement", icon: "↑" },
  { value: 85, suffix: "%", label: "Image Size Optimization", icon: "◐" },
  { value: 50, suffix: "%", label: "Code Complexity Reduction", icon: "≡" },
  { value: 70, suffix: "+", label: "AI Questions Generated", icon: "✦" },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-center font-mono text-xs uppercase tracking-[0.2em] text-[#3B82F6]">
            // by the numbers
          </p>
        </Reveal>

        <div className="glass mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/[0.06] sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="flex h-full flex-col items-center justify-center gap-3 bg-[#070a1a] p-8 text-center">
                <span className="text-xl text-[#06B6D4]/80">{s.icon}</span>
                <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </span>
                <span className="text-xs uppercase tracking-wider text-white/50">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
