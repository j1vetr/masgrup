import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import hero      from "@assets/ana5_1780320877135.jpeg";
import imgHikaye from "@assets/ana4_1780314877331.jpeg";
import img2      from "@assets/ana3_1780314877331.jpeg";
import img3      from "@assets/ana6_1780314877332.jpeg";
import img4      from "@assets/ana2_1780317265640.jpeg";
import imgEkip   from "@assets/ana5_1780317282679.jpeg";
import imgSaygi  from "@assets/hizmet_saygi.png";

export default function HakkimizdaPage() {
  useEffect(() => { document.title = "Hakkımızda | Mas Grup"; }, []);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const [activeValue, setActiveValue] = useState(0);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveValue(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full overflow-hidden">

      {/* ── 01 HERO ── */}
      <section ref={heroRef} className="relative h-screen flex items-end overflow-hidden bg-[#0D1B3E]">

        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img src={hero} alt="Mas Grup" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E] via-[#0D1B3E]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/80 via-transparent to-[#0D1B3E]/30" />
        </motion.div>

        {/* Ghost label */}
        <div className="absolute top-28 right-8 md:right-16 z-10 text-right">
          <span className="text-white/10 font-black text-[clamp(80px,14vw,180px)] leading-none select-none tracking-tighter">
            MAS
          </span>
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
              <span className="text-accent text-[10px] font-bold tracking-[0.35em] uppercase">Biz Kimiz</span>
            </div>

            <h1
              className="text-white font-black leading-[1.08] tracking-tight mb-8"
              style={{ fontSize: "clamp(48px,7.5vw,108px)" }}
            >
              Temizliği<br />
              <em className="not-italic text-accent">Felsefeye</em><br />
              Dönüştürüyoruz.
            </h1>

            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Mas Grup, standart hizmetin ötesinde, detay odaklı ve sistemli bir temizlik anlayışı sunar.
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

      {/* ── 02 MANİFESTO ── */}
      <section className="bg-white py-24 md:py-36 px-8 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <motion.div
              className="lg:col-span-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                className="font-black text-primary leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(28px,5vw,68px)" }}
              >
                "Her yaşam alanı, bir insanın{" "}
                <em className="not-italic text-accent">hayatına dokunduğumuz</em>{" "}
                yerdir. Bu bilinçle hizmet ediyoruz."
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 pt-16 border-t border-primary/10 grid md:grid-cols-3 gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {[
              { label: "Misyon", text: "Yaşam ve çalışma alanlarına sistemli, hijyenik ve kaliteli temizlik çözümleri sunmak, müşterilerin güvenini hizmetlerimizle kazanmak." },
              { label: "Vizyon", text: "Türkiye'nin en güvenilir ve tercih edilen profesyonel temizlik markası olmak, eğitimli ekip ve yenilikçi hizmet anlayışıyla sektörde lider konuma gelmek." },
              { label: "Felsefe", text: "Temizlik bize göre bir iş değil, bir yaşam felsefesidir. Her detayda titizlik, her müşteride güven, her hizmette sonsuz özen." },
            ].map((item, i) => (
              <div key={i}>
                <span className="text-accent text-[10px] font-black tracking-[0.3em] uppercase block mb-4">{item.label}</span>
                <p className="text-primary/70 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 03 HİKAYEMİZ ── */}
      <section className="grid lg:grid-cols-2 min-h-[90vh]">

        <motion.div
          className="relative overflow-hidden min-h-[50vh] lg:min-h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <img src={imgHikaye} alt="Hikayemiz" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B3E]/40 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <div className="bg-accent px-4 py-2 inline-block">
              <span className="text-white font-black text-xs tracking-[0.25em] uppercase">Hikayemiz</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-[#0D1B3E] flex flex-col justify-center px-10 md:px-16 py-20"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-white/10 font-black text-8xl leading-none select-none mb-4">02</span>

          <h2 className="text-white font-black text-4xl md:text-5xl leading-tight tracking-tight mb-8">
            Standartın<br />
            <span className="text-accent">Ötesinde</span><br />
            Bir Hizmet
          </h2>

          <div className="space-y-5 text-white/60 leading-relaxed text-[15px]">
            <p>
              Mas Grup, profesyonel temizlik sektöründe fark yaratmak amacıyla kurulmuştur. Standart hizmetin ötesine geçerek müşterilerimize sistemli, denetimli ve kalite odaklı bir deneyim sunmayı hedefliyoruz.
            </p>
            <p>
              Her hizmetimiz, aynı titizlik ve özenle yürütülür. Bizim için her alan, sadece temizlenmesi gereken bir mekan değil, insanların yaşamını ve çalışmalarını sürdürdüğü değerli alanlardır.
            </p>
            <p>
              Bu anlayış, bizi sektörde güvenilir ve tercih edilen bir marka haline getirmiştir. Çünkü biz, temizliği bir sorumluluk olarak değil, bir sanat olarak icra ediyoruz.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="w-10 h-px bg-accent mb-3" />
            <p className="text-white/30 text-xs font-bold tracking-widest uppercase">Mas Grup, Profesyonel Temizlik</p>
          </div>
        </motion.div>
      </section>

      {/* ── 04 DEĞERLERİMİZ ── */}
      <section className="bg-white py-24 md:py-36 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase block mb-4">Değerlerimiz</span>
              <h2
                className="text-primary font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(36px,5.5vw,72px)" }}
              >
                Bizi Biz<br />Yapan İlkeler
              </h2>
            </motion.div>
            <motion.p
              className="text-primary/50 text-sm leading-relaxed max-w-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Her hizmetimizin temelinde dört temel değer yatar. Bu değerler bizi yönlendirir, kalitemizi tanımlar.
            </motion.p>
          </div>

          {/* Values grid — diagonal clip-path animation */}
          <div className="grid md:grid-cols-2 gap-px bg-primary/10">
            {[
              {
                num: "01", title: "Güven", sub: "Trust",
                desc: "Her müşterimize güvenilir, şeffaf ve dürüst bir hizmet sunarız. Sözümüzün arkasındayız, her seferinde, her alanda.",
                img: img2,
              },
              {
                num: "02", title: "Özen", sub: "Care",
                desc: "Müşteri memnuniyetini ön planda tutarak her detayı özenle ele alırız. Gözden kaçan hiçbir nokta yoktur.",
                img: img3,
              },
              {
                num: "03", title: "Disiplin", sub: "Discipline",
                desc: "Tüm hizmetlerimizi belirlenen standartlar çerçevesinde sistematik olarak sunarız. Tutarlılık, kalitemizin temelidir.",
                img: img4,
              },
              {
                num: "04", title: "Saygı", sub: "Respect",
                desc: "Müşterilerimizin alanlarına ve ekibimizin emeğine eşit değer ve saygı gösteririz. İnsan odaklı yaklaşım vazgeçilmezimizdir.",
                img: imgSaygi,
              },
            ].map((val, i) => (
              <motion.div
                key={i}
                className="relative bg-white overflow-hidden cursor-default"
                initial="rest"
                animate={hoveredValue === i || (hoveredValue === null && activeValue === i) ? "hover" : "rest"}
                onMouseEnter={() => setHoveredValue(i)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                {/* Diagonal clip-path overlay — sweeps from TL-BR diagonal outward */}
                <motion.div
                  className="absolute inset-0 z-0"
                  variants={{
                    rest: { clipPath: "polygon(0% 0%, 0% 0%, 100% 100%, 100% 100%)" },
                    hover: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
                  }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img src={val.img} alt={val.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#0D1B3E]/92" />
                </motion.div>

                {/* Top-left corner bracket */}
                <div className="absolute top-4 left-4 z-20 w-6 h-6 border-t-2 border-l-2 border-accent" />
                {/* Bottom-right corner bracket */}
                <div className="absolute bottom-4 right-4 z-20 w-6 h-6 border-b-2 border-r-2 border-accent" />

                <div className="relative z-10 p-10 md:p-14 min-h-[320px] flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <motion.span
                      className="font-black text-7xl leading-none select-none"
                      variants={{ rest: { color: "rgba(13,27,62,0.12)" }, hover: { color: "rgba(255,255,255,0.08)" } }}
                      transition={{ duration: 0.5 }}
                    >
                      {val.num}
                    </motion.span>
                    <motion.span
                      className="text-xs font-black tracking-widest uppercase"
                      variants={{ rest: { color: "rgba(13,27,62,0.2)" }, hover: { color: "rgba(255,255,255,0.18)" } }}
                      transition={{ duration: 0.5 }}
                    >
                      {val.sub}
                    </motion.span>
                  </div>

                  <div>
                    <motion.div
                      className="h-px bg-accent mb-5"
                      variants={{ rest: { width: "2rem" }, hover: { width: "4rem" } }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.h3
                      className="text-3xl md:text-4xl font-black tracking-tight mb-4"
                      variants={{ rest: { color: "#0D1B3E" }, hover: { color: "#ffffff" } }}
                      transition={{ duration: 0.45 }}
                    >
                      {val.title}
                    </motion.h3>
                    <motion.p
                      className="text-sm leading-relaxed"
                      variants={{ rest: { color: "rgba(13,27,62,0.55)" }, hover: { color: "rgba(255,255,255,0.65)" } }}
                      transition={{ duration: 0.45 }}
                    >
                      {val.desc}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 EKİP ── */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <img src={imgEkip} alt="Ekibimiz" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030b1a]/97 via-[#0D1B3E]/85 to-[#0D1B3E]/30" />

        <div className="relative z-10 px-8 md:px-16 py-24 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase block mb-6">Ekibimiz</span>
            <h2
              className="text-white font-black leading-tight tracking-tight mb-8"
              style={{ fontSize: "clamp(32px,4.5vw,60px)" }}
            >
              Güçlü Ekip,<br />
              <span className="text-accent">Güçlü Hizmet.</span>
            </h2>
            <p className="text-white/55 leading-relaxed mb-6 text-[15px]">
              Bizim için temizlik, yalnızca bir hizmet değil, insanların yaşam kalitesini doğrudan etkileyen bir sorumluluktur. Her ekip üyemiz Mas Akademi süreçlerinden geçmiş, saha deneyimiyle pekişmiş profesyonellerdir.
            </p>
            <p className="text-white/55 leading-relaxed text-[15px]">
              Güvenilir, saygılı ve özenli bireylerden oluşan ekibimiz, her hizmette aynı standartta performans sergilemek için sürekli gelişmektedir.
            </p>

            <Link href="/iletisim" className="inline-flex items-center gap-3 mt-10 group">
              <span className="text-accent font-black text-sm tracking-widest uppercase">Bizimle Çalış</span>
              <ArrowUpRight className="w-4 h-4 text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          <motion.div
            className="hidden lg:flex flex-col gap-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              { label: "Mas Akademi Eğitimi", desc: "Her personel sertifikalı eğitim sürecinden geçer." },
              { label: "Kalite Kontrol", desc: "Her hizmet sonrası sistemli denetim ve geri bildirim." },
              { label: "Sürekli Gelişim", desc: "Sektör yenilikleri takip edilerek ekip sürekli güncellenir." },
              { label: "Hijyen Protokolleri", desc: "Uluslararası standartlarda hijyen ve güvenlik uygulamaları." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="border border-white/10 bg-white/[0.04] backdrop-blur-sm px-6 py-5 hover:border-accent/40 hover:bg-white/[0.07] transition-all duration-300"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="text-white font-bold text-sm">{item.label}</span>
                </div>
                <p className="text-white/40 text-xs leading-relaxed pl-4">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 06 CTA ── */}
      <section className="bg-[#0D1B3E] py-24 md:py-36 px-8 md:px-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />
        <div
          className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full opacity-5"
          style={{ background: "#00B4D8", filter: "blur(60px)" }}
        />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase block mb-6">Hizmet Almaya Hazır mısınız?</span>
            <h2
              className="text-white font-black leading-tight tracking-tight"
              style={{ fontSize: "clamp(32px,4.5vw,60px)" }}
            >
              Temiz Alanlar,<br />
              <span className="text-accent">Güçlü Yarınlar.</span>
            </h2>
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
                TEKLİF AL
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link href="/hizmetlerimiz">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 font-bold tracking-wide px-8 h-14 text-sm">
                HİZMETLERİ İNCELE
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
