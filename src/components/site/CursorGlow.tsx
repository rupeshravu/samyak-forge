import { useEffect, useState } from "react";

/** Soft red glow that trails the pointer. Disabled on touch devices. */
export function CursorGlow() {
  const [pos, setPos] = useState({ x: -300, y: -300 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-50 h-[420px] w-[420px] rounded-full opacity-50 blur-[90px] transition-transform duration-200 ease-out"
      style={{
        transform: `translate3d(${pos.x - 210}px, ${pos.y - 210}px, 0)`,
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--primary) 45%, transparent), transparent 65%)",
      }}
    />
  );
}
