"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [pct, setPct] = useState(0);
  const [out, setOut] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let v = 0;
    const iv = setInterval(() => {
      v += Math.random() * 16 + 5;
      if (v >= 100) {
        v = 100; clearInterval(iv);
        setTimeout(() => setOut(true), 500);
        setTimeout(() => setGone(true), 1600);
      }
      setPct(Math.min(Math.round(v), 100));
    }, 80);
    return () => clearInterval(iv);
  }, []);

  if (gone) return null;

  return (
    <AnimatePresence>
      {!out && (
        <motion.div key="loader"
          exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9000] flex flex-col items-center justify-center overflow-hidden hero-bg"
        >
          {[200, 310, 420].map((s, i) => (
            <motion.div key={i} className="absolute rounded-full border"
              style={{ width: s, height: s, borderColor: `rgba(212,175,55,${0.13 - i * 0.04})` }}
              animate={{ rotate: 360 }}
              transition={{ duration: 12 + i * 6, repeat: Infinity, ease: "linear" }} />
          ))}

          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 text-center">
            <p className="mono mb-8" style={{ color: "var(--caramel)", letterSpacing: "0.5em" }}>Točená zmrzlina</p>
            <h1 className="display font-black italic text-cream mb-2" style={{ fontSize: "clamp(56px,12vw,88px)" }}>TRIO</h1>
            <p className="mono mb-14" style={{ color: "rgba(251,245,235,0.3)", letterSpacing: "0.3em" }}>Mladá Boleslav · est. 2009</p>

            <div className="w-44 mx-auto">
              <div className="h-px overflow-hidden mb-3" style={{ background: "rgba(251,245,235,0.08)" }}>
                <motion.div className="h-full origin-left"
                  style={{ background: "linear-gradient(90deg, var(--caramel), var(--gold))" }}
                  animate={{ scaleX: pct / 100 }} transition={{ duration: 0.15 }} />
              </div>
              <div className="flex justify-between items-center">
                <span className="mono opacity-30" style={{ letterSpacing: "0.15em" }}>Načítám</span>
                <span className="font-mono text-[11px]" style={{ color: "var(--caramel)", opacity: 0.7 }}>{pct}%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
