const snippets = [
  { code: "await dbContext.SaveChangesAsync();", top: "14%", left: "6%", delay: "0s" },
  { code: "app.MapHub<GameHub>(\"/game\");", top: "22%", right: "8%", delay: "1.2s" },
  { code: "builder.Services.AddSignalR();", top: "62%", left: "4%", delay: "2.4s" },
  { code: "[HttpGet(\"api/inventory\")]", top: "70%", right: "6%", delay: "0.6s" },
  { code: "openai.ChatCompletion.Create(...)", top: "40%", left: "10%", delay: "1.8s" },
  { code: "services.AddAuthentication(\"Jwt\");", top: "48%", right: "12%", delay: "3s" },
];

export function FloatingSnippets() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
      {snippets.map((s, i) => (
        <div
          key={i}
          className="absolute glass animate-float rounded-lg px-3 py-2 font-mono text-[11px] text-[#9CC9FF]/80 shadow-lg shadow-blue-500/10"
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            animationDelay: s.delay,
            animationDuration: `${6 + (i % 3)}s`,
          }}
        >
          <span className="mr-2 text-cyan-400/60">{`<${i + 1}/>`}</span>
          {s.code}
        </div>
      ))}
    </div>
  );
}
