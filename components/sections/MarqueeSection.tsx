"use client";
const items = ["Belgická čokoláda", "Madagascar Vanilla", "Čerstvá jahoda", "Sicilská pistácie", "Slaný karamel", "Mango & Maracuja", "Citronový sorbet", "Malina & bílá čokoláda", "Grand Cru Reserve"];
export default function MarqueeSection() {
  const d = [...items, ...items];
  return (
    <div className="py-4 overflow-hidden" style={{ background: "#0A0400", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
      <div className="flex whitespace-nowrap" style={{ animation: "marquee 24s linear infinite", width: "max-content" }}>
        {d.map((item, i) => (
          <span key={i} className="inline-flex items-center mx-10 mono"
            style={{ color: i % 3 === 0 ? "var(--caramel)" : i % 3 === 1 ? "rgba(251,245,235,0.28)" : "rgba(212,175,55,0.48)", letterSpacing: "0.28em" }}>
            {item}
            <span className="ml-10" style={{ color: "var(--gold)", opacity: 0.2 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
