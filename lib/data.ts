export const flavors = [
  {
    id:"choco", num:"01", name:"Belgická čokoláda", sub:"Belgian Dark Chocolate",
    story:"72% kakao z Bruselu. Šest měsíců fermentace, 72 hodin conching. Hluboká, intenzivní, hedvábná dohořka.",
    notes:["Kakao 72% Grand Cru","Vanilka Bourbon","Himalájská sůl"],
    pairing:"Double espresso · Brunello di Montalcino",
    price:35, accent:"#C4752A", tag:"Bestseller",
    gradient:"linear-gradient(145deg,#1A0800 0%,#3D1505 40%,#5C2E0A 70%,#8B4513 100%)",
  },
  {
    id:"vanilla", num:"02", name:"Madagaskarská vanilka", sub:"Madagascar Bourbon Vanilla",
    story:"Pravé lusky Bourbon vanilky z plantáží na Madagaskaru — ručně sbírané, šest měsíců zrající. Krémová, komplexní.",
    notes:["Vanilka Bourbon Grand Cru","Smetana 36% bio","Alpské mléko"],
    pairing:"Champagne · Čerstvé fíky · Manuka med",
    price:35, accent:"#D4AF37", tag:"Classic",
    gradient:"linear-gradient(145deg,#3D2800 0%,#6B4A10 40%,#8B6914 70%,#C4901A 100%)",
  },
  {
    id:"jahoda", num:"03", name:"Čerstvá jahoda", sub:"Local Heritage Strawberry",
    story:"Jahody od tří rodin pěstitelů z okolí Mladé Boleslavi. Každé ráno sklizené, do 4 hodin zpracované. Žádné kompromisy.",
    notes:["Jahody Heritage odrůda","Citronová kůra bio","Muscovado cukr"],
    pairing:"Crémant d'Alsace · Čerstvá bazalka · 72% čokoláda",
    price:35, accent:"#D4406A", tag:"Sezónní",
    gradient:"linear-gradient(145deg,#2A0010 0%,#6B1028 40%,#8B1A35 70%,#C73D57 100%)",
  },
];

export const menuCats = [
  { id:"kornouty", label:"Kornouty", items:[
    { name:"Jednoduchý kornout", desc:"1 kopeček dle výběru, waflový nebo čokoládový kornout", price:"35 Kč", hot:false },
    { name:"Dvojitý kornout", desc:"2 kopečky, libovolná kombinace příchutí", price:"65 Kč", hot:false },
    { name:"TRIO kornout", desc:"Všechny tři signature příchutě — naše nejprodávanější", price:"95 Kč", hot:true },
    { name:"Dětský kornout", desc:"Malá porce pro malé gurmány", price:"25 Kč", hot:false },
  ]},
  { id:"pohary", label:"Poháry", items:[
    { name:"Klasický pohár", desc:"2 kopečky, čerstvá šlehačka, pralinky", price:"79 Kč", hot:false },
    { name:"Pohár Grand TRIO", desc:"3 kopečky, šlehačka, karamelová omáčka, pralinky, posyp", price:"115 Kč", hot:true },
    { name:"Letní pohár", desc:"Sezónní kompozice s čerstvým ovocem a mátovým sorbetem", price:"99 Kč", hot:false },
    { name:"Dětský pohár", desc:"1 kopeček, šlehačka, duhový posyp", price:"45 Kč", hot:false },
  ]},
  { id:"speciality", label:"Speciality", items:[
    { name:"Zmrzlinový dort", desc:"Ručně vyráběný na objednávku, min. 72 hodin předem, od 1 kg", price:"od 580 Kč", hot:true },
    { name:"Affogato TRIO", desc:"Vanilková zmrzlina + double espresso ze specializované pražírny", price:"65 Kč", hot:false },
    { name:"Zmrzlinový sendvič", desc:"Domácí máslové oplatky, 2 kopečky dle výběru", price:"55 Kč", hot:false },
    { name:"Sezónní speciál", desc:"Limitovaná příchuť — každý den jiná, dle dostupnosti surovin", price:"od 38 Kč", hot:false },
  ]},
];

export const hours = [
  { day:"Pondělí – Pátek", time:"10:00 – 20:00", note:null },
  { day:"Sobota", time:"09:00 – 21:00", note:"Prodlouženo" },
  { day:"Neděle", time:"09:00 – 21:00", note:"Prodlouženo" },
  { day:"Státní svátky", time:"10:00 – 18:00", note:"Zkráceno" },
];

export const timeline = [
  { year:"2009", title:"Začátek příběhu", desc:"Otevřeli jsme první stánek na Náměstí Míru. Tři příchutě a jedno pravidlo: žádné kompromisy." },
  { year:"2012", title:"Vlastní receptury", desc:"Po třech letech vývoje — naše signature příchutě. Belgická čokoláda se stala legendou." },
  { year:"2016", title:"Farm-to-scoop", desc:"Partnerství s místními pěstiteli. Každé ráno čerstvé suroviny, nulový kompromis na kvalitě." },
  { year:"2020", title:"Přes krizi vpřed", desc:"I v pandemii jsme nezastavili. Rozvoz, prémiové balení, online objednávky." },
  { year:"2025", title:"TRIO Reserve", desc:"Kolekce limitovaných Grand Cru příchutí z výjimečných surovin světa." },
];
