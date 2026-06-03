import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImg  from "@assets/ana7_1780314877332.webp";
import imgEv    from "@assets/hizmet_ev_temizligi.webp";
import imgOfis  from "@assets/hizmet_ofis_temizligi.webp";
import imgInsaat from "@assets/hizmet_insaat_sonrasi.webp";
import imgDetay from "@assets/hizmet_detay_temizlik.webp";

const services = [
  {
    id: "ev-temizligi",
    num: "01",
    title: "Ev Temizliği",
    sub: "Residential",
    desc: "Yaşam alanlarınızda detaylı, hijyenik ve ferah bir ortam sağlıyoruz. Her köşe, titizlikle ele alınır. Haftalık, aylık ya da tek seferlik paketlerimizle eviniz her zaman pırıl pırıl.",
    features: [
      "Haftalık ve Aylık Periyodik Temizlik",
      "Derin Temizlik Paketi",
      "Taşınma Öncesi ve Sonrası",
      "Hijyen Protokol Paketi",
    ],
    img: imgEv,
  },
  {
    id: "ofis-temizligi",
    num: "02",
    title: "Ofis Temizliği",
    sub: "Corporate",
    desc: "Çalışma alanlarınızda verimliliği artıran düzenli ve profesyonel temizlik. Ekibimiz, ofisinizin her noktasını çalışanlarınız gelmeden önce hazır hale getirir.",
    features: [
      "Günlük ve Haftalık Hizmet",
      "Toplantı Odası Hazırlığı",
      "Ortak Alan ve Mutfak Temizliği",
      "Cam ve Cephe Silme",
    ],
    img: imgOfis,
  },
  {
    id: "insaat-sonrasi",
    num: "03",
    title: "İnşaat Sonrası Temizlik",
    sub: "Post-Construction",
    desc: "İnşaat ve tadilat sonrasında oluşan kir, toz ve artıkları profesyonel ekipmanlarımızla sistematik biçimde temizliyoruz. Teslim öncesi kusursuz bir alan için buradayız.",
    features: [
      "Kaba İnşaat Temizliği",
      "İnce ve Detay Temizliği",
      "Cam ve Çerçeve Bakımı",
      "Zemin Parlatma ve Koruma",
    ],
    img: imgInsaat,
  },
  {
    id: "detay-temizlik",
    num: "04",
    title: "Detay Temizlik",
    sub: "Detail & Deep Clean",
    desc: "Gözden kaçan alanları standart haline getiren özel uygulamalar. Halıdan koltuğa, mutfak aparatlarından banyo yüzeylerine, hiçbir nokta atlanmaz.",
    features: [
      "Halı ve Koltuk Derin Temizliği",
      "Mutfak Aparatı ve Dolap Temizliği",
      "Banyo Derin Hijyen Paketi",
      "Özel Yüzey Bakım ve Koruma",
    ],
    img: imgDetay,
  },
];

export default function HizmetlerimizPage() {
  useEffect(() => { document.title = "Hizmetlerimiz | Mas Grup"; }, []);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);

  const [activeService, setActiveService] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => setActiveService(p => (p + 1) % services.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full overflow-hidden">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen flex items-end overflow-hidden bg-[#0D1B3E]">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img fetchPriority="high" decoding="async" src={heroImg} alt="Hizmetlerimiz" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E] via-[#0D1B3E]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/90 via-transparent to-[#0D1B3E]/40" />
        </motion.div>

        {/* Ghost label */}
        <div className="absolute top-20 right-6 md:right-14 z-10 text-right pointer-events-none">
          <span className="text-white/[0.06] font-black leading-none select-none tracking-tighter"
            style={{ fontSize: "clamp(70px,13vw,160px)" }}>
            HİZMET
          </span>
        </div>

        {/* Service nav pills — top left */}
        <div className="absolute top-28 left-8 md:left-16 z-10 hidden md:flex flex-col gap-2">
          {services.map((s, i) => (
            <a
              key={i}
              href={`#${s.id}`}
              onClick={() => setActiveService(i)}
              className="flex items-center gap-3 group"
            >
              <span className={`w-6 h-px transition-all duration-500 ${activeService === i ? "bg-accent w-10" : "bg-white/25"}`} />
              <span className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${activeService === i ? "text-accent" : "text-white/35 group-hover:text-white/60"}`}>
                {s.num} {s.title}
              </span>
            </a>
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 pb-20 px-8 md:px-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-accent" />
              <span className="text-accent text-[10px] font-bold tracking-[0.35em] uppercase">Neler Yapıyoruz</span>
            </div>

            <h1 className="text-white font-black leading-[1.05] tracking-tight mb-8"
              style={{ fontSize: "clamp(48px,7.5vw,108px)" }}>
              Profesyonel<br />
              <em className="not-italic text-accent">Temizlik</em><br />
              Çözümleri.
            </h1>

            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Dört ana kategoride, eğitimli ekip ve uluslararası standartlarda hizmet sunuyoruz.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-white/30 text-[9px] tracking-[0.3em] uppercase font-bold rotate-90 origin-center mb-6">Keşfet</span>
          <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </section>

      {/* ── HİZMET KARTLARI — index strip ── */}
      <section className="bg-white border-b border-primary/8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {services.map((s, i) => (
            <motion.a
              key={i}
              href={`#${s.id}`}
              className="relative group px-8 py-8 border-r border-primary/8 last:border-r-0 overflow-hidden block"
              initial="rest"
              animate={hoveredService === i || (hoveredService === null && activeService === i) ? "active" : "rest"}
              onMouseEnter={() => setHoveredService(i)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <motion.div
                className="absolute inset-0 bg-[#0D1B3E] z-0"
                variants={{ rest: { scaleY: 0, originY: 1 }, active: { scaleY: 1, originY: 1 } }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="relative z-10">
                <motion.span
                  className="block font-black text-5xl leading-none mb-3 select-none"
                  variants={{ rest: { color: "rgba(13,27,62,0.1)" }, active: { color: "rgba(255,255,255,0.1)" } }}
                  transition={{ duration: 0.4 }}
                >
                  {s.num}
                </motion.span>
                <motion.span
                  className="block text-[9px] font-black tracking-[0.3em] uppercase mb-2"
                  variants={{ rest: { color: "#00B4D8" }, active: { color: "#00B4D8" } }}
                >
                  {s.sub}
                </motion.span>
                <motion.h3
                  className="font-black text-base leading-snug tracking-tight"
                  variants={{ rest: { color: "#0D1B3E" }, active: { color: "#ffffff" } }}
                  transition={{ duration: 0.35 }}
                >
                  {s.title}
                </motion.h3>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── HİZMET DETAYLARI ── */}
      {services.map((s, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={s.id}
            id={s.id}
            className={`grid lg:grid-cols-2 min-h-[85vh] ${isEven ? "bg-white" : "bg-[#07101f]"}`}
          >
            {/* Photo side */}
            <motion.div
              className={`relative overflow-hidden min-h-[55vw] lg:min-h-full ${isEven ? "order-1 lg:order-1" : "order-1 lg:order-2"}`}
              initial={{ opacity: 0, x: isEven ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={s.img}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${isEven
                ? "bg-gradient-to-br from-[#0D1B3E]/25 to-transparent"
                : "bg-gradient-to-br from-[#07101f]/30 to-transparent"}`}
              />

              {/* Corner brackets */}
              <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-accent opacity-70" />
              <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-accent opacity-70" />

              {/* Floating badge */}
              <div className="absolute bottom-8 left-8">
                <div className="bg-accent px-5 py-2.5 inline-flex items-center gap-2">
                  <span className="text-white font-black text-[10px] tracking-[0.25em] uppercase">{s.num}</span>
                  <span className="w-px h-3 bg-white/40" />
                  <span className="text-white font-black text-[10px] tracking-[0.2em] uppercase">{s.sub}</span>
                </div>
              </div>
            </motion.div>

            {/* Text side */}
            <motion.div
              className={`flex flex-col justify-center px-10 md:px-16 py-20 ${isEven ? "order-2 lg:order-2" : "order-2 lg:order-1"}`}
              initial={{ opacity: 0, x: isEven ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className={`font-black text-8xl leading-none select-none mb-4 ${isEven ? "text-primary/8" : "text-white/8"}`}
              >
                {s.num}
              </span>

              <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase block mb-4">{s.sub}</span>

              <h2
                className={`font-black leading-tight tracking-tight mb-6 ${isEven ? "text-primary" : "text-white"}`}
                style={{ fontSize: "clamp(30px,4vw,52px)" }}
              >
                {s.title}
              </h2>

              <p className={`leading-relaxed text-[15px] mb-10 ${isEven ? "text-primary/65" : "text-white/60"}`}>
                {s.desc}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-12">
                {s.features.map((f, fi) => (
                  <motion.li
                    key={fi}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: fi * 0.08, duration: 0.5 }}
                  >
                    <span className="w-5 h-px bg-accent shrink-0" />
                    <span className={`text-sm font-medium ${isEven ? "text-primary/80" : "text-white/75"}`}>{f}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex items-center gap-6">
                <Link href="/iletisim">
                  <Button
                    className={`font-black tracking-wide px-7 h-12 text-sm gap-2 group ${isEven
                      ? "bg-[#0D1B3E] hover:bg-[#0D1B3E]/85 text-white"
                      : "bg-accent hover:bg-accent/90 text-white"}`}
                  >
                    Teklif Al
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <a
                  href="tel:+905336017622"
                  className={`inline-flex items-center gap-2 text-sm font-bold group ${isEven ? "text-primary/50 hover:text-primary" : "text-white/40 hover:text-white"} transition-colors duration-300`}
                >
                  Bizi Arayın
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          </section>
        );
      })}

      {/* ── CTA ── */}
      <section className="bg-[#0D1B3E] py-24 md:py-36 px-8 md:px-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />
        <div className="absolute -left-40 -bottom-40 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "#00B4D8", filter: "blur(80px)" }} />
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-[0.03]"
          style={{ background: "linear-gradient(to left, #00B4D8, transparent)" }} />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase block mb-6">
              Hizmet Almaya Hazır mısınız?
            </span>
            <h2 className="text-white font-black leading-tight tracking-tight"
              style={{ fontSize: "clamp(32px,4.5vw,60px)" }}>
              Temiz Alan,<br />
              <span className="text-accent">Güçlü İzlenim.</span>
            </h2>
            <p className="text-white/40 text-sm mt-6 max-w-sm leading-relaxed">
              Tüm hizmetlerimiz için ücretsiz keşif ve teklif alma fırsatından yararlanın.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/iletisim">
              <Button className="bg-accent hover:bg-accent/90 text-white font-black tracking-wide px-8 h-14 text-sm gap-2 group">
                ÜCRETSİZ TEKLİF AL
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <a href="tel:+905336017622">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 font-bold tracking-wide px-8 h-14 text-sm">
                0533 601 76 22
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
