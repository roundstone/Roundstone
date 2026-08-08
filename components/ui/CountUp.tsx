"use client";

import { useEffect, useState, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface CountUpProps {
  end: number;
  suffix?: React.ReactNode;
  duration?: number;
}

export function CountUp({ end, suffix = "", duration = 2 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, end, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (value) => {
          setCount(Math.round(value));
        }
      });
      return controls.stop;
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <span>{count}</span>
      {suffix}
    </span>
  );
}



