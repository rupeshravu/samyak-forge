import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";

/** Ambient particle field + glow wash rendered behind all page content. */
export function Atmosphere() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const particles = useMemo(
    () =>
      Array.from({ length: 42 }, (_, i) => ({
        id: i,
        left: (i * 37) % 100,
        size: 1 + ((i * 13) % 3),
        delay: (i % 12) * 1.1,
        duration: 14 + ((i * 7) % 16),
        drift: ((i % 5) - 2) * 26,
      })),
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden grain">
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute -top-1/4 left-1/2 h-[70vh] w-[80vw] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: "var(--gradient-ember)" }}
      />
      <div
        className="absolute bottom-[-20%] right-[-10%] h-[50vh] w-[50vw] rounded-full opacity-25 blur-[140px]"
        style={{ background: "var(--crimson)" }}
      />
      {mounted &&
        particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute bottom-[-5vh] rounded-full bg-ember"
            style={{ left: `${p.left}%`, width: p.size, height: p.size }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 0.8, 0], y: "-105vh", x: p.drift }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
    </div>
  );
}
