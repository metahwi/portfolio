"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterMetricProps {
  label: string;
  value: string;
  duration?: number;
}

export default function CounterMetric({ label, value, duration = 1500 }: CounterMetricProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const prefix = value.startsWith("+") ? "+" : value.startsWith("-") ? "-" : "";
    const suffix = value.endsWith("%") ? "%" : "";
    const numStr = value.replace(/[+\-%]/g, "");
    const target = parseFloat(numStr);
    if (isNaN(target)) {
      setDisplay(value);
      return;
    }

    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="rounded-lg bg-[#171717] p-4 text-center">
      <p className="text-2xl font-bold text-teal-400">{display}</p>
      <p className="text-xs text-white/35 mt-1">{label}</p>
    </div>
  );
}
