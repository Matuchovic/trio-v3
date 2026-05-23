"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { hours } from "@/lib/data";

export default function ContactSection() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);

  const inp = "w-full rounded-xl px-5 py-4 text-[14px] outline-none transition-all font-sans text-cream"
    + " placeholder-cream/25"
    + " focus:border-caramel/50";

  return (
    <section id="kontakt" ref={ref} className="section" style={{ background: "var(--ink)" }}>
      <div className="wrap">
        <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <motion.div initial={{ opacity: 0 }} animate={iv ? { opacity: 1 } : {}}
              className="mono mb-6" style={{ color: "var(--caramel)", letterSpacing: "0.3em" }}>
              ✦ Kontakt
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2 className="display font-black italic text-cream"
                style={{ fontSize: "clamp(44px,6vw,88px)", lineHeight: 0.93 }}
                initial={{ y: "110%" }} animate={iv ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
                Přijďte<br /><span className="grad">ochutnat</span>
              </motion.h2>
            </div>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={iv ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
            className="text-cream/42 text-[15px] leading-relaxed md:text-right">
            Čekáme na vás každý den na Náměstí Míru v Mladé Boleslavi.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left */}
          <div className="flex flex-col gap-5">
            {/* Hours */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 }}
              className="glass rounded-2xl overflow-hidden">
              <div className="px-7 py-5" style={{ borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
                <span className="mono" style={{ color: "var(--caramel)", letterSpacing: "0.25em" }}>Otevírací doba</span>
              </div>
              {hours.map((h, i) => (
                <motion.div key={h.day} initial={{ opacity: 0, x: -12 }} animate={iv ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.07 }}
                  className="flex items-center justify-between px-7 py-4"
                  style={{ borderBottom: i < hours.length - 1 ? "1px solid rgba(255,255,255,0.03)" : "none" }}>
                  <span className="text-cream/48 text-[14px]">{h.day}</span>
                  <div className="flex items-center gap-3">
                    {h.note && (
                      <span className="mono px-2.5 py-1 rounded-full"
                        style={{
                          background: h.note === "Prodlouženo" ? "rgba(74,158,106,0.15)" : "rgba(196,117,42,0.12)",
                          color: h.note === "Prodlouženo" ? "var(--pista)" : "var(--caramel)",
                          fontSize: "8px", letterSpacing: "0.12em",
                        }}>{h.note}</span>
                    )}
                    <span className="font-semibold text-cream text-[15px]">{h.time}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Address */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}
              className="glass rounded-2xl p-7">
              <div className="mono mb-4" style={{ color: "rgba(212,175,55,0.45)", letterSpacing: "0.25em" }}>Adresa</div>
              <div className="display font-bold italic text-cream text-2xl mb-4" style={{ lineHeight: 1.3 }}>
                Náměstí Míru 12<br />293 01 Mladá Boleslav
              </div>
              <div className="flex items-center gap-2">
                <motion.span className="w-2 h-2 rounded-full" style={{ background: "var(--pista)" }}
                  animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                <span className="text-[13px] font-semibold" style={{ color: "var(--pista)" }}>Právě otevřeno</span>
                <span className="text-cream/30 text-[13px]">· zavíráme v 20:00</span>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={iv ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden" style={{ height: 220, background: "linear-gradient(145deg,#0A1F10,#1A3A20,#2A5C30)" }}>
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 500 220">
                <defs><pattern id="gp" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M 36 0 L 0 0 0 36" fill="none" stroke="#4a7a3a" strokeWidth=".5" /></pattern></defs>
                <rect width="100%" height="100%" fill="url(#gp)" />
                <rect x="155" y="0" width="55" height="220" fill="white" opacity=".5" rx="2" />
                <rect x="0" y="95" width="500" height="45" fill="white" opacity=".5" rx="2" />
              </svg>
              <div className="absolute" style={{ left: "40%", top: "35%", transform: "translate(-50%,-100%)" }}>
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} className="relative">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                    style={{ background: "var(--choco)", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}>🍦</div>
                  <motion.div className="absolute inset-0 rounded-full border border-caramel"
                    animate={{ scale: [1, 2.5], opacity: [0.6, 0] }} transition={{ duration: 2, repeat: Infinity }} />
                </motion.div>
                <div className="w-4 h-1.5 rounded-full mx-auto mt-1" style={{ background: "rgba(61,31,13,0.3)" }} />
              </div>
              <div className="absolute bottom-4 inset-x-4">
                <div className="glass rounded-xl p-3">
                  <div className="display italic font-bold text-lg text-cream">Zmrzlina TRIO</div>
                  <div className="mono mt-1 opacity-40" style={{ letterSpacing: "0.1em" }}>Náměstí Míru 12, Mladá Boleslav</div>
                </div>
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div initial={{ opacity: 0 }} animate={iv ? { opacity: 1 } : {}} transition={{ delay: 0.45 }}
              className="grid grid-cols-3 gap-3">
              {[{ l: "Instagram", e: "📸" }, { l: "Facebook", e: "💬" }, { l: "+420 326 123 456", e: "📞" }].map(s => (
                <motion.a key={s.l} href="#" whileHover={{ scale: 1.04, y: -3 }}
                  className="glass flex flex-col items-center gap-2 rounded-xl py-4 cursor-none"
                  style={{ textDecoration: "none" }}>
                  <span className="text-xl">{s.e}</span>
                  <span className="mono text-cream/38" style={{ fontSize: "9px", letterSpacing: "0.15em" }}>{s.l}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-8">
            <div className="mono mb-8" style={{ color: "var(--caramel)", letterSpacing: "0.3em" }}>Napište nám</div>
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                <div className="text-5xl mb-4 float">🎉</div>
                <div className="display font-bold italic text-cream text-3xl mb-2">Odesláno!</div>
                <div className="mono opacity-35" style={{ letterSpacing: "0.2em" }}>Ozveme se brzy</div>
              </motion.div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setTimeout(() => setSent(true), 400); }} className="space-y-4">
                {[{ ph: "Vaše jméno", key: "name", type: "text" }, { ph: "E-mailová adresa", key: "email", type: "email" }].map(f => (
                  <input key={f.key} type={f.type} placeholder={f.ph} required
                    className={inp}
                    value={form[f.key as keyof typeof form]}
                    onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                    style={{ background: "rgba(251,245,235,0.04)", border: "1px solid rgba(212,175,55,0.15)" }} />
                ))}
                <textarea placeholder="Zpráva nebo objednávka dortu…" required rows={5}
                  className={`${inp} resize-none`}
                  value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })}
                  style={{ background: "rgba(251,245,235,0.04)", border: "1px solid rgba(212,175,55,0.15)" }} />
                <motion.button type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 12px 40px rgba(196,117,42,0.35)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-g py-4 rounded-xl cursor-none" style={{ fontSize: "11px" }}>
                  Odeslat zprávu
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
