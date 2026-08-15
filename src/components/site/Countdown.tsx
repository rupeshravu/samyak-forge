import { useEffect, useState } from "react";
import { FEST_DATE } from "@/data/samyak";

function diff() {
  const ms = Math.max(0, new Date(FEST_DATE).getTime() - Date.now());
  return {
    Days: Math.floor(ms / 86400000),
    Hours: Math.floor(ms / 3600000) % 24,
    Minutes: Math.floor(ms / 60000) % 60,
    Seconds: Math.floor(ms / 1000) % 60,
  };
}

export function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    setTime(diff());
    const id = setInterval(() => setTime(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const entries = Object.entries(time ?? { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 });

  return (
    <div className="flex gap-px overflow-hidden rounded-sm border border-border">
      {entries.map(([label, value]) => (
        <div key={label} className="glass min-w-[74px] px-4 py-3 text-center sm:min-w-[92px]">
          <div className="font-display text-2xl tabular-nums text-foreground sm:text-3xl">
            {time ? String(value).padStart(2, "0") : "--"}
          </div>
          <div className="mt-1 text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
