"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { menuCats } from "@/lib/data";

export default function MenuSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="menu" ref={ref} className="section relative overflow-hidden" style={{ background: "#0D0600" }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(ellipse at 10% 50%, rgba(196,117,42,0.07) 0%, transparent 55%),
                          radial-gradient(ellipse at 90% 20%, rgba(212,64,106,0.05) 0%, transparent 45%)`,
      }} />

      <div className="wrap relative">
        <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <motion.div initial={{ opacity: 0 }} animate={iv ? { opacity: 1 } : {}}
              className="mono mb-6" style={{ color: "var(--caramel)", letterSpacing: "0.3em" }}>
              ✦ Co nabízíme
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2 className="display font-black italic text-cream"
                style={{ fontSize: "clamp(44px,6vw,88px)", lineHeight: 0.93 }}
                initial={{ y: "110%" }} animate={iv ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
                Naše<br /><span className="grad">menu</span>
              </motion.h2>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 md:justify-end">
            {menuCats.map((cat, i) => (
              <button key={cat.id} onClick={() => setActive(i)}
                className="mono px-6 py-2.5 rounded-full cursor-none transition-all"
                style={{
                  background: active === i ? "var(--caramel)" : "rgba(251,245,235,0.04)",
                  color: active === i ? "var(--ink)" : "rgba(251,245,235,0.4)",
                  border: active === i ? "none" : "1px solid rgba(212,175,55,0.15)",
                  transform: active === i ? "scale(1.05)" : "scale(1)",
                  letterSpacing: "0.18em",
                }}>
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }} className="space-y-2.5">
          {menuCats[active].items.map((item, i) => (
            <motion.div key={`${active}-${i}`}
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }} whileHover={{ x: 5 }}
              className="flex items-center justify-between rounded-2xl px-7 py-5 cursor-none group relative overflow-hidden"
              style={{
                background: item.hot ? "rgba(196,117,42,0.07)" : "rgba(251,245,235,0.025)",
                border: item.hot ? "1px solid rgba(196,117,42,0.2)" : "1px solid rgba(255,255,255,0.04)",
              }}>
              <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                style={{ background: "linear-gradient(90deg, rgba(196,117,42,0.06), transparent)" }} />
              <div className="flex items-center gap-4 relative min-w-0">
                {item.hot && (
                  <span className="mono px-3 py-1.5 rounded-full text-ink flex-shrink-0"
                    style={{ background: "var(--caramel)", fontSize: "8px", letterSpacing: "0.12em" }}>
                    ✦ Doporučujeme
                  </span>
                )}
                <div className="min-w-0">
                  <div className="font-semibold text-[15px] text-cream">{item.name}</div>
                  <div className="text-[12px] mt-0.5 text-cream/35">{item.desc}</div>
                </div>
              </div>
              <div className="display font-bold italic text-caramel text-2xl ml-6 flex-shrink-0">{item.price}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={iv ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}
          className="mt-12 text-center">
          <p className="mono mb-5 opacity-25" style={{ letterSpacing: "0.2em" }}>
            Zmrzlinové dorty min. 72 hodin předem · Alergeny k dispozici u pokladny
          </p>
          <motion.a href="#kontakt" whileHover={{ borderColor: "rgba(212,175,55,0.4)", color: "var(--gold)" }}
            className="glass px-8 py-3 rounded-full mono inline-block transition-all text-cream/38"
            style={{ textDecoration: "none", letterSpacing: "0.2em" }}>
            Objednat dort na míru →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
