"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { timeline } from "@/lib/data";

export default function AboutSection() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="o-nas" ref={ref} className="section" style={{ background: "#0D0600" }}>
      <div className="wrap">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <motion.div initial={{ opacity: 0 }} animate={iv ? { opacity: 1 } : {}}
              className="mono mb-6" style={{ color: "var(--caramel)", letterSpacing: "0.3em" }}>
              ✦ Náš příběh
            </motion.div>
            <div className="overflow-hidden mb-8">
              <motion.h2 className="display font-black italic text-cream"
                style={{ fontSize: "clamp(44px,5.5vw,80px)", lineHeight: 0.93 }}
                initial={{ y: "110%" }} animate={iv ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
                15 let<br />čisté<br /><span className="grad">vášně</span>
              </motion.h2>
            </div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}
              className="text-cream/45 text-[15px] leading-relaxed">
              Začínali jsme s jedním stánkem, třemi příchutěmi a jedním pravidlem: žádné kompromisy. Dnes jsme stejní — jen o 15 let zkušeností bohatší.
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={iv ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }} className="flex items-center justify-end">
            <div className="display font-black italic text-right leading-none select-none"
              style={{ fontSize: "clamp(80px,14vw,180px)", color: "rgba(196,117,42,0.06)" }}>
              2009
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-2xl mb-24">
          <div className="absolute left-0 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(212,175,55,0.25) 10%, rgba(212,175,55,0.25) 90%, transparent)" }} />

          {timeline.map((item, i) => {
            const itemRef = useRef(null);
            const itemIV = useInView(itemRef, { once: true, margin: "-60px" });
            return (
              <motion.div key={item.year} ref={itemRef}
                initial={{ opacity: 0, x: -40 }} animate={itemIV ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="pl-12 pb-12 last:pb-0 relative">
                <motion.div animate={itemIV ? { scale: [0.5, 1.3, 1] } : {}} transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute left-0 top-1 w-3 h-3 rounded-full border-2 z-10 -translate-x-1/2"
                  style={{ borderColor: "var(--caramel)", background: "#0D0600" }} />
                <motion.div className="absolute left-0 top-1 w-3 h-3 rounded-full -translate-x-1/2"
                  style={{ background: "rgba(196,117,42,0.3)" }}
                  animate={itemIV ? { scale: [1, 2.5], opacity: [0.6, 0] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }} />

                <div className="mono mb-2" style={{ color: "var(--caramel)", letterSpacing: "0.22em" }}>{item.year}</div>
                <div className="display font-bold italic text-cream text-xl mb-2">{item.title}</div>
                <div className="text-cream/42 text-[14px] leading-relaxed">{item.desc}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-16" style={{ borderTop: "1px solid rgba(212,175,55,0.1)" }}>
          {[
            { icon: "🌱", t: "Lokální suroviny", d: "Jahody od sousedů. Mléko od sousedů." },
            { icon: "🚫", t: "Bez éček", d: "Žádná umělá barviva ani konzervanty." },
            { icon: "⏰", t: "Denně čerstvé", d: "Vyrábíme každé ráno, nikdy den starší." },
            { icon: "🏆", t: "Grand Cru", d: "Suroviny z prestižních světových oblastí." },
          ].map((v, i) => (
            <motion.div key={v.t}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }} whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 cursor-none">
              <div className="text-2xl mb-4">{v.icon}</div>
              <div className="font-semibold text-cream text-[14px] mb-2">{v.t}</div>
              <div className="text-cream/38 text-[12px] leading-relaxed">{v.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
