import { Reveal } from "../Reveal";

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#3B82F6]">// about</p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="glass relative rounded-2xl p-8 sm:p-10">
            <span className="absolute inset-y-6 left-0 w-[2px] bg-gradient-to-b from-[#3B82F6] via-[#06B6D4] to-transparent" />
            <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
              Software Engineer specializing in the{" "}
              <span className="text-white">Microsoft .NET ecosystem</span> with expertise in
              ASP.NET Core, REST APIs, SignalR, SQL Server, and AI integrations. Passionate
              about building <span className="gradient-text font-medium">scalable, high-performance</span>{" "}
              enterprise applications.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
