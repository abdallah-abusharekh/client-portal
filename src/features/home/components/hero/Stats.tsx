"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "K+", prefix: "", label: "Active Users" },
  { value: 5, suffix: "M+", prefix: "$", label: "Projects Completed" },
  { value: 98, suffix: "%", prefix: "", label: "Satisfaction Rate" },
  { value: 150, suffix: "+", prefix: "", label: "Countries" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatItem({ value, suffix, prefix, label }: (typeof stats)[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, 2000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <p className="font-bold text-text text-2xl">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="text-text/60 text-sm">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="hidden gap-12 md:grid grid-cols-2 md:grid-cols-4 mt-16 text-center">
      {stats.map((stat) => (
        <StatItem key={stat.label} {...stat} />
      ))}
    </div>
  );
}
