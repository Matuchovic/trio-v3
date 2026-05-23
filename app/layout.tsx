import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TRIO — Točená zmrzlina · Mladá Boleslav",
  description: "Prémiová točená zmrzlina — belgická čokoláda, madagaskarská vanilka, čerstvá jahoda. Mladá Boleslav, od roku 2009.",
  openGraph: { title:"TRIO Zmrzlina", description:"Prémiová točená zmrzlina — tři dokonalé příchutě.", locale:"cs_CZ" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
