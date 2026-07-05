import { ParticleField } from "../ParticleField";
import { FloatingSnippets } from "../FloatingSnippets";
import { MagneticButton } from "../MagneticButton";
import { motion } from "framer-motion";

const name = "Akash Kumar Singh";

export function Hero() {
  return (
    <section id="hero" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      {/* canvas */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-[0.35]" />
        <ParticleField />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(59,130,246,0.18),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#050816]" />
      </div>

      <FloatingSnippets />

      <div className="relative mx-auto w-full max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/80 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for opportunities
        </motion.div>

        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl md:text-[88px]">
          {name.split("").map((c, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.025 }}
              className="inline-block"
            >
              {c === " " ? "\u00A0" : c}
            </motion.span>
          ))}
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-5 text-2xl font-medium tracking-tight sm:text-3xl"
        >
          <span className="gradient-text">.NET Full Stack Developer</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-[18px]"
        >
          Building scalable APIs, real-time systems, and AI-powered applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#projects" variant="primary">
            View Projects →
          </MagneticButton>
          <MagneticButton
            href="/AkashSingh_DotNet_2Year.pdf"
            variant="ghost"
            download="AkashSingh_DotNet_2Year.pdf"
            ariaLabel="Download Akash Kumar Singh resume (PDF)"
          >
            ↓ Download Resume
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Contact Me
          </MagneticButton>
        </motion.div>

        <div className="absolute inset-x-0 -bottom-[10vh] flex justify-center">
          <div className="animate-bounce-down text-white/40">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
