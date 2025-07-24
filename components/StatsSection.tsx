"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 50,
    prefix: "+",
    label: "Website Profesional telah dibangun",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Kami siap melayani anda kapan saja.",
  },
  {
    value: 97,
    suffix: "%",
    label: "Klien puas dengan hasil dan layanan kami",
  },
];

const AnimatedNumber = ({ target, prefix = "", suffix = "", duration = 2 }: { target: number; prefix?: string; suffix?: string; duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const stepTime = Math.max(10, Math.floor((duration * 1000) / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="text-5xl font-bold">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto py-12 text-center">
        <motion.p className="mt-6 text-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          Ringkasan NetBel.id
        </motion.p>

        <div className="mt-16 sm:mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 justify-center">
          {stats.map((stat, index) => (
            <motion.div key={index} className="max-w-[18ch]" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.3 }} viewport={{ once: true }}>
              <AnimatedNumber target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <p className="mt-6 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
