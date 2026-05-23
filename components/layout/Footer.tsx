"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20 pb-10" style={{ background: "#040100" }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="display font-black italic text-white/[0.02] whitespace-nowrap leading-none" style={{ fontSize: "28vw" }}>TRIO</span>
      </div>
      <div className="wrap relative">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="display font-black italic text-cream text-3xl mb-4">TRIO</div>
            <p className="text-cream/25 text-[13px] leading-relaxed max-w-xs">
              Točená zmrzlina s tradicí od roku 2009. Belgická čokoláda, madagaskarská vanilka, čerstvá jahoda. Mladá Boleslav.
            </p>
            <div className="flex gap-3 mt-6">
              {["📸", "💬", "✉️"].map((icon, i) => (
                <motion.a key={i} href="#" whileHover={{ scale: 1.12, y: -3 }}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center cursor-none"
                  style={{ textDecoration: "none", fontSize: "16px" }}>{icon}</motion.a>
              ))}
            </div>
          </div>
          <div>
            <div className="mono mb-6" style={{ color: "rgba(212,175,55,0.4)", letterSpacing: "0.25em" }}>Navigace</div>
            {["Příchutě", "Menu", "Galerie", "O nás", "Kontakt"].map(l => (
              <motion.a key={l} href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(" ", "-")}`}
                whileHover={{ x: 4, color: "var(--caramel)" }}
                className="block text-[14px] text-cream/22 hover:text-caramel transition-colors mb-3"
                style={{ textDecoration: "none" }}>{l}</motion.a>
            ))}
          </div>
          <div>
            <div className="mono mb-6" style={{ color: "rgba(212,175,55,0.4)", letterSpacing: "0.25em" }}>Kontakt</div>
            <div className="space-y-2.5 text-[14px] text-cream/25">
              <div>Náměstí Míru 12</div>
              <div>293 01 Mladá Boleslav</div>
              <div className="pt-2">+420 326 123 456</div>
              <div>trio@zmrzlina.cz</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="mono opacity-20" style={{ letterSpacing: "0.15em" }}>© 2025 Zmrzlina TRIO · Všechna práva vyhrazena</div>
          <div className="flex gap-6">
            {["GDPR", "Podmínky", "Cookies"].map(l => (
              <a key={l} href="#" className="mono opacity-18 hover:opacity-50 transition-opacity" style={{ textDecoration: "none", letterSpacing: "0.12em" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
