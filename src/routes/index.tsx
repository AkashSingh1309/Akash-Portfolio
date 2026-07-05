import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CustomCursor } from "@/components/CustomCursor";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akash Kumar Singh — .NET Full Stack Developer" },
      {
        name: "description",
        content:
          "Akash Kumar Singh — .NET Full Stack Developer building scalable APIs, real-time systems, and AI-powered applications with ASP.NET Core, SignalR, and SQL Server.",
      },
      { property: "og:title", content: "Akash Kumar Singh — .NET Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Building scalable APIs, real-time systems, and AI-powered applications.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Akash Kumar Singh",
          jobTitle: ".NET Full Stack Developer",
          email: "mailto:singh.ak20185@gmail.com",
          telephone: "+91-8081979898",
          url: "https://github.com/AkashSingh1309",
          sameAs: [
            "https://linkedin.com/in/akashsingh-dev",
            "https://github.com/AkashSingh1309",
          ],
          worksFor: { "@type": "Organization", name: "V3M Technologies" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-[#050816] text-white antialiased">
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Achievements />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
