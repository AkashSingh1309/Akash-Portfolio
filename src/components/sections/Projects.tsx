import { Reveal } from "../Reveal";

type Project = {
  number: string;
  title: string;
  client: string;
  period: string;
  tech: string[];
  description: string;
  features: string[];
  accent: string;
  preview: string[];
};

const projects: Project[] = [
  {
    number: "01",
    title: "Optical Inventory Management System",
    client: "Shroff Eye Center",
    period: "Mar 2026 — May 2026",
    description:
      "Centralized inventory platform for managing optical products, stock movements, suppliers, purchases, and sales operations.",
    tech: ["ASP.NET Core", "REST API", "SQL Server"],
    features: [
      "Scalable REST APIs for inventory and order management",
      "Real-time stock tracking with automated updates",
      "Supplier and purchase management workflows",
      "Inventory analytics and business reporting",
    ],
    accent: "#3B82F6",
    preview: [
      "GET /api/inventory/stock",
      "POST /api/purchase-order",
      "200 OK · 412 items synced",
    ],
  },
  {
    number: "02",
    title: "Invision Eye Care",
    client: "Helen Keller International — Bangladesh",
    period: "Dec 2025 — Present",
    description:
      "Healthcare management platform for eye care clinics to streamline patient care and operational workflows.",
    tech: ["ASP.NET Core", "REST API", "SQL Server"],
    features: [
      "Patient registration & electronic medical records",
      "Appointment scheduling and doctor management",
      "Prescription and treatment history tracking",
      "Role-based access control with secure auth",
      "Automated billing and clinic workflows",
    ],
    accent: "#06B6D4",
    preview: [
      "POST /api/patients/register",
      "GET  /api/appointments/today",
      "auth: JWT · role: clinician",
    ],
  },
  {
    number: "03",
    title: "TicTacToe & Tambola — Real-Time Multiplayer",
    client: "Kitty Party App (In-House Product)",
    period: "May 2025 — Jul 2025",
    description:
      "Multiplayer games with real-time synchronization across multiple connected users.",
    tech: ["Blazor", "SignalR", "ASP.NET Core", "SQL Server"],
    features: [
      "Low-latency multiplayer architecture using SignalR",
      "Server-side game logic in C#",
      "Synchronized game state across all active players",
      "Responsive, interactive Blazor interfaces",
    ],
    accent: "#8B5CF6",
    preview: [
      'hub.Clients.All.SendAsync("NumberDrawn", 42);',
      "players: 128 connected",
      "latency: 38ms",
    ],
  },
  {
    number: "04",
    title: "National Eye Survey — Saudi Arabia",
    client: "King Khaled Eye Specialist Hospital",
    period: "Aug 2024 — Aug 2025",
    description:
      "Nationwide survey management platform for collecting and analyzing eye health screening data across Saudi Arabia.",
    tech: ["ASP.NET Core", "REST API", "SQL Server"],
    features: [
      "Centralized survey and patient data management",
      "APIs for survey forms, records, and reporting",
      "Role-based access: Admin, Surveyor, Medical Staff",
      "Optimized SQL Server schema for large datasets",
      "Dashboards for disease and screening analytics",
      "Excel / CSV import-export integration",
    ],
    accent: "#F59E0B",
    preview: [
      "GET /api/survey/responses?region=RUH",
      "EXPORT → screening_results.xlsx",
      "rows: 184,302 · status: ok",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#3B82F6]">// featured projects</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-16 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Shipped systems with <span className="gradient-text">measurable impact</span>.
          </h2>
        </Reveal>

        <div className="space-y-10">
          {projects.map((p, i) => (
            <Reveal key={p.number} delay={0.05}>
              <ProjectCard project={p} flipped={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, flipped }: { project: Project; flipped: boolean }) {
  const { accent } = project;
  return (
    <article
      className="group relative overflow-hidden rounded-3xl p-[1px] transition-transform duration-500 hover:-translate-y-1"
      style={{
        background: `linear-gradient(135deg, ${accent}40, transparent 40%, ${accent}30)`,
      }}
    >
      <div className="glass relative grid gap-8 rounded-3xl p-8 md:grid-cols-2 md:p-12">
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ boxShadow: `0 0 80px -10px ${accent}66 inset` }}
        />
        <div className={flipped ? "md:order-2" : ""}>
          <span className="font-mono text-sm text-white/30">{project.number}</span>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-[#9CC9FF]">{project.client}</p>
          <p className="font-mono text-xs text-white/40">{project.period}</p>
          <p className="mt-4 text-white/60">{project.description}</p>

          <ul className="mt-6 space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-white/75">
                <span
                  className="mt-[7px] inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ background: accent, boxShadow: `0 0 10px ${accent}` }}
                />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className={flipped ? "md:order-1" : ""}>
          <PreviewMock lines={project.preview} accent={accent} />
        </div>
      </div>
    </article>
  );
}

function PreviewMock({ lines, accent }: { lines: string[]; accent: string }) {
  return (
    <div
      className="relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-white/10 p-5 font-mono text-xs"
      style={{
        background: `radial-gradient(120% 80% at 0% 0%, ${accent}25, transparent 60%), #07091a`,
      }}
    >
      <div className="mb-4 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 text-[10px] uppercase tracking-widest text-white/30">~/preview</span>
      </div>
      {lines.map((l, i) => (
        <div key={i} className="leading-relaxed text-white/70">
          <span style={{ color: accent }}>{`> `}</span>
          {l}
        </div>
      ))}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />
    </div>
  );
}
