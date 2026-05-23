"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const items = [
  { label: "TRIO — Signature", sub: "Belgická čokoláda · Vanilka · Jahoda", bg: "linear-gradient(145deg,#1A0800,#5C2E0A,#8B4513)", span: "md:col-span-2 md:row-span-2" },
  { label: "Pistáciový pohár", sub: "Sicilian Pistachio DOP", bg: "linear-gradient(145deg,#0A1F10,#1E5C28,#4A9E6A)", span: "" },
  { label: "Letní kompozice", sub: "Čerstvé ovoce & sorbet", bg: "linear-gradient(145deg,#1A0008,#6B1028,#C73D57)", span: "" },
  { label: "Detail čokolády", sub: "72% Grand Cru Cacao", bg: "linear-gradient(145deg,#0A0500,#3D1505,#5C2E0A)", span: "" },
  { label: "Zmrzlinový dort", sub: "Ručně vyráběný na objednávku", bg: "linear-gradient(145deg,#1A0010,#5C1A4A,#C77DFF)", span: "md:col-span-2" },
  { label: "Ranní příprava", sub: "Farm-to-scoop filozofie", bg: "linear-gradient(145deg,#001A14,#0A4A38,#1A8B6A)", span: "" },
  { label: "Náměstí Míru", sub: "Mladá Boleslav · est. 2009", bg: "linear-gradient(145deg,#1A1200,#4A3200,#C4901A)", span: "" },
  { label: "Grand Reserve", sub: "Limitovaná kolekce", bg: "linear-gradient(145deg,#0A0800,#2A2000,#D4AF37)", span: "" },
];

export default function GallerySection() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });
  const [sel, setSel] = useState<number | null>(null);

  return (
    <section id="galerie" ref={ref} className="section" style={{ background: "var(--ink)" }}>
      <div className="wrap">
        <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <motion.div initial={{ opacity: 0 }} animate={iv ? { opacity: 1 } : {}}
              className="mono mb-6" style={{ color: "var(--caramel)", letterSpacing: "0.3em" }}>
              ✦ Galerie
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2 className="display font-black italic text-cream"
                style={{ fontSize: "clamp(44px,6vw,88px)", lineHeight: 0.93 }}
                initial={{ y: "110%" }} animate={iv ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
                Každý záběr<br /><span className="grad">říká příběh</span>
              </motion.h2>
            </div>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={iv ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
            className="text-cream/42 text-[15px] leading-relaxed md:text-right">
            Vizuální záznamy naší posedlosti kvalitou. Každá fotografie — pozvánka k ochutnávce.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {items.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.92 }} animate={iv ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              onClick={() => setSel(i)}
              className={`relative rounded-2xl overflow-hidden cursor-none group ${item.span}`}
              style={{ background: item.bg, boxShadow: "0 4px 24px rgba(0,0,0,0.5)" }}>

              <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 400 200">
                {Array.from({ length: 8 }).map((_, j) => <line key={j} x1={j * 57} y1="0" x2={j * 57} y2="200" stroke="white" strokeWidth="0.5" />)}
                {Array.from({ length: 5 }).map((_, j) => <line key={j} x1="0" y1={j * 55} x2="400" y2={j * 55} stroke="white" strokeWidth="0.5" />)}
              </svg>

              <div className="absolute top-3 left-3 glass px-3 py-1 rounded-full mono opacity-50"
                style={{ fontSize: "9px", letterSpacing: "0.2em" }}>{item.sub.split("·")[0].trim()}</div>

              <motion.div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent 55%)" }}>
                <div className="mono mb-1 opacity-50" style={{ letterSpacing: "0.15em" }}>{item.sub}</div>
                <div className="font-semibold text-cream text-[15px]">{item.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {sel !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-16"
            style={{ background: "rgba(0,0,0,0.94)", backdropFilter: "blur(24px)" }}
            onClick={() => setSel(null)}>
            <motion.div initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl rounded-3xl overflow-hidden aspect-video"
              style={{ background: items[sel].bg }} onClick={e => e.stopPropagation()}>
              <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 800 450">
                {Array.from({ length: 14 }).map((_, j) => <line key={j} x1={j * 60} y1="0" x2={j * 60} y2="450" stroke="white" strokeWidth="0.5" />)}
                {Array.from({ length: 8 }).map((_, j) => <line key={j} x1="0" y1={j * 60} x2="800" y2={j * 60} stroke="white" strokeWidth="0.5" />)}
              </svg>
              <div className="absolute bottom-8 left-8">
                <div className="mono mb-2 opacity-40" style={{ letterSpacing: "0.2em" }}>{items[sel].sub}</div>
                <div className="display font-bold italic text-cream text-4xl">{items[sel].label}</div>
              </div>
            </motion.div>
            <button onClick={() => setSel(null)}
              className="absolute top-6 right-6 w-11 h-11 glass rounded-full flex items-center justify-center text-cream cursor-none">
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
