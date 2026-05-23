"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { flavors } from "@/lib/data";

function FlavorCard({ f, i }: { f: typeof flavors[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });
  const [hov, setHov] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 80 }} animate={iv ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}>
      <motion.div
        className="rounded-3xl overflow-hidden cursor-none h-full flex flex-col"
        style={{
          transformStyle: "preserve-3d",
          transform: hov ? `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(1.02)` : "scale(1)",
          transition: "transform 0.5s cubic-bezier(.23,1,.32,1), box-shadow 0.5s",
          boxShadow: hov ? `0 40px 80px ${f.accent}50, 0 0 0 1px ${f.accent}20` : "0 4px 32px rgba(0,0,0,0.4)",
        }}
        onMouseMove={e => {
          const r = e.currentTarget.getBoundingClientRect();
          setTilt({ x: ((e.clientX - r.left) / r.width - 0.5) * 18, y: ((e.clientY - r.top) / r.height - 0.5) * -18 });
        }}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => { setHov(false); setTilt({ x: 0, y: 0 }); }}>

        {/* Top visual */}
        <div className="relative h-60 flex items-center justify-center overflow-hidden flex-shrink-0"
          style={{ background: f.gradient }}>
          <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 400 240">
            {Array.from({ length: 9 }).map((_, i) =>
              Array.from({ length: 5 }).map((_, j) => (
                <circle key={`${i}-${j}`} cx={i * 50} cy={j * 65} r="20" fill="white" />
              ))
            )}
          </svg>

          <div className="absolute top-5 left-6 display font-black italic text-white/[0.07] leading-none" style={{ fontSize: "80px" }}>{f.num}</div>
          <div className="absolute top-5 right-5 glass px-3 py-1.5 rounded-full mono text-cream/45" style={{ fontSize: "9px", letterSpacing: "0.15em" }}>{f.tag}</div>
          <div className="absolute bottom-4 right-5 mono text-white/30" style={{ fontSize: "9px", letterSpacing: "0.2em" }}>{f.sub}</div>

          <div className="w-28 h-28 rounded-full border border-white/10 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full" style={{ background: "rgba(255,255,255,0.06)", boxShadow: "inset 0 0 24px rgba(255,255,255,0.08)" }} />
          </div>

          <motion.div className="absolute inset-0 pointer-events-none"
            animate={{ opacity: hov ? 1 : 0 }}
            style={{ background: "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.1), transparent 65%)" }} />
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-7" style={{ background: "#0D0600", borderTop: `1px solid ${f.accent}18` }}>
          <div className="mono mb-3" style={{ color: f.accent, letterSpacing: "0.2em" }}>{f.sub}</div>
          <h3 className="display font-bold italic text-cream text-2xl mb-4" style={{ lineHeight: 1.15 }}>{f.name}</h3>
          <p className="text-cream/45 text-[13px] leading-relaxed mb-5 flex-1">{f.story}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {f.notes.map(n => (
              <span key={n} className="mono px-3 py-1.5 rounded-full"
                style={{ background: `${f.accent}15`, color: f.accent, fontSize: "9px", letterSpacing: "0.1em" }}>{n}</span>
            ))}
          </div>

          <div className="mono mb-5 opacity-30" style={{ letterSpacing: "0.15em" }}>
            Párování: <span style={{ color: f.accent, opacity: 1 }}>{f.pairing}</span>
          </div>

          <div className="flex items-center justify-between pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div>
              <span className="display font-bold italic text-4xl" style={{ color: f.accent }}>{f.price}</span>
              <span className="text-cream/25 text-xs ml-2 font-mono">Kč / kopeček</span>
            </div>
            <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
              className="btn-g cursor-none" style={{ padding: "10px 22px", fontSize: "10px" }}>
              Přidat
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FlavorSection() {
  const hRef = useRef(null);
  const hIV = useInView(hRef, { once: true });

  return (
    <section id="prichute" className="section" style={{ background: "var(--ink)" }}>
      <div className="wrap">
        <div ref={hRef} className="grid md:grid-cols-2 gap-10 items-end mb-20">
          <div>
            <motion.div initial={{ opacity: 0 }} animate={hIV ? { opacity: 1 } : {}}
              className="mono mb-6" style={{ color: "var(--caramel)", letterSpacing: "0.3em" }}>
              ✦ Signature příchutě
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2 className="display font-black italic text-cream"
                style={{ fontSize: "clamp(44px,6vw,88px)", lineHeight: 0.93 }}
                initial={{ y: "110%" }} animate={hIV ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
                Tři dokonalé<br /><span className="grad">příchutě léta</span>
              </motion.h2>
            </div>
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={hIV ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}
            className="text-cream/45 text-[15px] leading-relaxed md:text-right">
            Každá příchuť — výsledek měsíců pečlivého výběru surovin z nejlepších oblastí světa. Denně čerstvé, bez kompromisu.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flavors.map((f, i) => <FlavorCard key={f.id} f={f} i={i} />)}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center mt-20">
          <p className="mono mb-6 opacity-28" style={{ letterSpacing: "0.25em" }}>+ 30 sezónních příchutí v průběhu roku</p>
          <motion.a href="#menu" whileHover={{ scale: 1.04, borderColor: "rgba(212,175,55,0.4)" }}
            className="glass px-8 py-3 rounded-full mono inline-block transition-all text-cream/45"
            style={{ textDecoration: "none", letterSpacing: "0.2em" }}>
            Celé menu →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
