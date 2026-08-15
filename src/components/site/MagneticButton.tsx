import { Link } from "@tanstack/react-router";
import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost";

const base =
  "relative inline-flex items-center justify-center gap-2 px-7 py-3 text-xs font-medium uppercase tracking-[0.22em] transition-colors duration-300 rounded-sm";

const variants: Record<Variant, string> = {
  solid:
    "bg-primary text-primary-foreground glow-ring hover:bg-[color-mix(in_oklab,var(--primary)_85%,white)]",
  outline:
    "border border-primary/70 text-foreground hover:bg-primary hover:text-primary-foreground hover:glow-ring",
  ghost: "border border-border text-muted-foreground hover:text-foreground hover:border-primary/60",
};

function useMagnet() {
  const ref = useRef<HTMLSpanElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setOffset({
      x: (e.clientX - (r.left + r.width / 2)) * 0.25,
      y: (e.clientY - (r.top + r.height / 2)) * 0.35,
    });
  };

  const reset = () => setOffset({ x: 0, y: 0 });
  return { ref, offset, onMove, reset };
}

type Props = {
  children: ReactNode;
  to?: string;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function MagneticButton({
  children,
  to,
  variant = "solid",
  className,
  type = "button",
  onClick,
}: Props) {
  const { ref, offset, onMove, reset } = useMagnet();
  const style = { transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` };
  const cls = cn(base, variants[variant], "will-change-transform duration-200", className);

  if (to) {
    return (
      <span ref={ref} onMouseMove={onMove} onMouseLeave={reset} className="inline-block">
        <Link to={to} className={cls} style={style}>
          {children}
        </Link>
      </span>
    );
  }

  return (
    <span ref={ref} onMouseMove={onMove} onMouseLeave={reset} className="inline-block">
      <button type={type} onClick={onClick} className={cls} style={style}>
        {children}
      </button>
    </span>
  );
}
