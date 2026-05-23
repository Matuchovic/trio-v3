"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), { ssr: false });

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const op = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden hero-bg">
      <HeroScene />

      {/* Ambient orbs */}
      {[
        { w: 600, x: "26%", y: "44%", c: "rgba(196,117,42,0.12)" },
        { w: 450, x: "76%", y: "23%", c: "rgba(212,64,106,0.07)" },
        { w: 350, x: "54%", y: "76%", c: "rgba(74,158,106,0.06)" },
      ].map((b, i) => (
        <motion.div key={i} className="absolute rounded-full pointer-events-none"
          style={{ width: b.w, height: b.w, left: b.x, top: b.y, transform: "translate(-50%,-50%)", background: `radial-gradient(circle,${b.c},transparent 70%)` }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 7 + i * 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }} />
      ))}

      {/* Sun */}
      <div className="absolute top-14 right-14 md:top-20 md:right-20 opacity-[0.14] pointer-events-none spin-s">
        <svg width="180" height="180" viewBox="0 0 180 180">
          <g transform="translate(90,90)">
            <circle r="22" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
            {Array.from({ length: 20 }).map((_, i) => (
              <line key={i} x1="0" y1="-32" x2="0" y2="-76" stroke="#D4AF37"
                strokeWidth={i % 2 ? 1 : 1.5} strokeLinecap="round" opacity={i % 2 ? 0.35 : 1}
                transform={`rotate(${i * 18})`} />
            ))}
          </g>
        </svg>
      </div>

      {/* Main content */}
      <motion.div style={{ y, opacity: op }} className="relative z-10 text-center px-6 w-full max-w-6xl mx-auto">

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
          className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 mb-16">
          <motion.span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--pista)" }}
            animate={{ scale: [1, 1.8, 1], opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          <span className="mono opacity-60" style={{ letterSpacing: "0.25em" }}>Mladá Boleslav · Otevřeno 10–20</span>
        </motion.div>

        {/* TRIO */}
        <div className="overflow-hidden mb-4">
          <motion.h1 className="display font-black italic text-cream"
            style={{ fontSize: "clamp(80px,20vw,240px)", lineHeight: 0.9 }}
            initial={{ y: "105%" }} animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}>
            TRIO
          </motion.h1>
        </div>

        {/* Subheading */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-6">
          {["Tři příchutě,", "jeden"].map((w, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span className="inline-block display font-light italic text-cream/55"
                style={{ fontSize: "clamp(20px,3.8vw,50px)" }}
                initial={{ y: "100%" }} animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}>
                {w}
              </motion.span>
            </div>
          ))}
          <div className="overflow-hidden">
            <motion.span className="inline-block display font-bold italic grad"
              style={{ fontSize: "clamp(20px,3.8vw,50px)" }}
              initial={{ y: "100%" }} animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}>
              nezapomenutelný zážitek.
            </motion.span>
          </div>
        </div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="text-cream/38 text-base md:text-xl max-w-lg mx-auto leading-relaxed mb-16">
          Belgická čokoláda · Madagaskarská vanilka · Čerstvá jahoda.<br />
          Denně čerstvé. Ze surovin nejvyšší kvality.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-5 mb-24">
          <motion.a href="#prichute" whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(196,117,42,0.4)" }}
            whileTap={{ scale: 0.97 }} className="btn-g" style={{ textDecoration: "none", boxShadow: "0 8px 32px rgba(196,117,42,0.25)" }}>
            Prozkoumat příchutě
          </motion.a>
          <motion.a href="#menu" whileHover={{ scale: 1.05, borderColor: "rgba(212,175,55,0.4)", color: "var(--gold)" }}
            whileTap={{ scale: 0.97 }}
            className="glass px-10 py-4 rounded-full mono text-cream/55 hover:text-gold transition-all inline-block"
            style={{ textDecoration: "none", letterSpacing: "0.1em" }}>
            Naše menu
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10"
          style={{ borderTop: "1px solid rgba(212,175,55,0.1)" }}>
          {[{ n: "15+", l: "let tradice" }, { n: "4.9", l: "průměrné skóre" }, { n: "30+", l: "sezónních příchutí" }, { n: "∞", l: "spokojených zákazníků" }].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + i * 0.08 }} className="text-center">
              <div className="display font-bold italic text-caramel" style={{ fontSize: "clamp(24px,3vw,34px)" }}>{s.n}</div>
              <div className="mono mt-1.5 opacity-30" style={{ letterSpacing: "0.18em" }}>{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="mono opacity-20" style={{ letterSpacing: "0.3em" }}>Scroll</span>
        <motion.div className="w-px h-12 origin-top rounded-full"
          style={{ background: "linear-gradient(to bottom, var(--caramel), transparent)" }}
          animate={{ scaleY: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
      </motion.div>
    </section>
  );
}
