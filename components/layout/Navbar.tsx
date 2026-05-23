"use client";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const links = [
  { label: "Příchutě", href: "#prichute" },
  { label: "Menu", href: "#menu" },
  { label: "Galerie", href: "#galerie" },
  { label: "O nás", href: "#o-nas" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [sc, setSc] = useState(false);
  const [hid, setHid] = useState(false);
  const [prev, setPrev] = useState(0);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setSc(y > 60);
    setHid(y > prev + 8 && y > 200 && !open);
    setPrev(y);
  });

  return (
    <>
      <motion.header
        animate={{ y: hid ? -100 : 0 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-500"
        style={{
          height: sc ? "62px" : "78px",
          background: sc ? "rgba(7,3,0,0.93)" : "transparent",
          backdropFilter: sc ? "blur(24px)" : "none",
          borderBottom: sc ? "1px solid rgba(212,175,55,0.1)" : "none",
        }}
      >
        <a href="/" style={{ textDecoration: "none" }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
            className="flex items-baseline gap-3">
            <span className="display font-black italic text-cream" style={{ fontSize: "22px" }}>TRIO</span>
            <span className="mono hidden sm:block opacity-40" style={{ letterSpacing: "0.2em" }}>Mladá Boleslav</span>
          </motion.div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <motion.a key={l.label} href={l.href}
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="mono text-cream/55 hover:text-cream transition-colors relative group"
              style={{ letterSpacing: "0.2em", textDecoration: "none" }}>
              {l.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-400 bg-caramel" />
            </motion.a>
          ))}
        </nav>

        <motion.a href="#kontakt"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
          className="hidden md:inline-flex btn-g"
          style={{ textDecoration: "none" }}>
          Objednat dort
        </motion.a>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 relative z-[60]" aria-label="Menu">
          {[0, 1, 2].map(i => (
            <motion.span key={i} className="block h-px w-6 mb-[5px] last:mb-0 origin-center rounded-full"
              style={{ background: "var(--cream)" }}
              animate={open
                ? i === 1 ? { opacity: 0 } : i === 0 ? { rotate: 45, y: 6 } : { rotate: -45, y: -6 }
                : { rotate: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }} />
          ))}
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[55] hero-bg flex flex-col items-center justify-center md:hidden">
            {links.map((l, i) => (
              <motion.a key={l.label} href={l.href} onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ delay: 0.08 + i * 0.09 }}
                className="display font-black italic text-cream mb-5 text-5xl hover:text-caramel transition-colors block"
                style={{ textDecoration: "none" }}>
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
