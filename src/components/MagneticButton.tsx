import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  onClick?: () => void;
  download?: boolean | string;
  ariaLabel?: string;
  target?: string;
  rel?: string;
};

export function MagneticButton({ children, variant = "primary", href, onClick, download, ariaLabel, target, rel }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    x.set(dx * 0.25);
    y.set(dy * 0.35);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "relative inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-colors";
  const styles =
    variant === "primary"
      ? "text-white shadow-[0_10px_40px_-10px_rgba(59,130,246,0.6)] [background:linear-gradient(135deg,#3B82F6_0%,#06B6D4_100%)] hover:brightness-110"
      : "text-white border border-white/15 hover:border-[#3B82F6]/60 hover:bg-[#3B82F6]/10 backdrop-blur";

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      download={download as never}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={`${base} ${styles}`}
    >
      {children}
    </motion.a>
  );
}
