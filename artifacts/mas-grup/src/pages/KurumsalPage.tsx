import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImg    from "@assets/kurumsal_hero.webp";
import imgKalite  from "@assets/kurumsal_kalite.webp";
import imgSozlesme from "@assets/kurumsal_sozlesme.webp";
import imgBg      from "@assets/ana6_1780314877332.webp";

const segments = [
  { num: "01", title: "Villa Projeleri",     sub: "Residential Premium", desc: "Özel villalar ve lüks konutlar için özel protokollerle uygulanan premium temizlik hizmeti." },
  { num: "02", title: "Plaza ve AVM",        sub: "Commercial Scale",    desc: "Büyük ölçekli ticari alanlar için kapasite ve esnekliğe sahip kurumsal çözümler." },
  { num: "03", title: "Kurumsal Ofisler",    sub: "Corporate Office",    desc: "İş dünyasının tempouna uyum sağlayan, rutin bozulmayan günlük hizmet düzeni." },
  { num: "04", title: "Sanayi Tesisleri",    sub: "Industrial",         desc: "Endüstriyel hijyen gereksinimlerini karşılayan ağır ekipman ve uzman ekip desteği." },
  { num: "05", title: "Luxury Living",       sub: "Ultra Premium",      desc: "Üst segment yaşam projelerine özel sessiz, gizlilik odaklı ve kusursuz hizmet." },
  { num: "06", title: "Özel Organizasyon",   sub: "Event & One-Time",   desc: "Etkinlik öncesi ve sonrası için planlı, hızlı ve etkin müdahale kapasitesi." },
];

const process = [
  { num: "01", title: "Alan Keşfi",         desc: "Uzmanımız projeyi yerinde inceler, risk ve ihtiyaç haritası çıkarır." },
  { num: "02", title: "Özel Plan",          desc: "Alana özgü SOP (standart operasyon prosedürü) hazırlanır." },
  { num: "03", title: "Ekip Atama",         desc: "Projeye uygun Mas Akademi sertifikalı ekip görevlendirilir." },
  { num: "04", title: "Uygulama",           desc: "47 maddelik protokol eksiksiz uygulanır, fotoğraflı kayıt tutulur." },
  { num: "05", title: "Kalite Onayı",       desc: "Denetçi imzalı rapor müşteriye teslim edilir, geri bildirim alınır." },
];

export default function KurumsalPage() {
  useEffect(() => { document.title = "Kurumsal | Mas Grup"; }, []);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);

  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => {
    const id = setInterval(() => setActive(p => (p + 1) % segments.length), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full overflow-hidden">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden bg-[#030b1a]">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img fetchPriority="high" decoding="async" src={heroImg} alt="Kurumsal" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030b1a] via-[#030b1a]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030b1a]/90 via-transparent to-[#030b1a]/35" />
        </motion.div>

        {/* Ghost label */}
        <div className="absolute top-20 right-6 md:right-14 z-10 pointer-events-none select-none">
          <span className="text-white/[0.05] font-black leading-none tracking-tighter"
            style={{ fontSize: "clamp(60px,11vw,140px)" }}>KURUMSAL</span>
        </div>

        {/* Top-right badge */}
        <div className="absolute top-28 right-8 md:right-16 z-10 hidden md:block text-right">
          <div className="border border-accent/30 px-4 py-3 inline-block">
            <span className="text-accent text-[9px] font-black tracking-[0.35em] uppercase block">Kurumsal Çözümler</span>
            <span className="text-white/25 text-[9px] font-bold tracking-[0.2em] uppercase block mt-0.5">Mas Grup</span>
          </div>
        </div>

        <div className="relative z-10 px-8 md:px-16 max-w-5xl w-full" style={{ paddingTop: 72 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-accent" />
              <span className="text-accent text-[10px] font-bold tracking-[0.35em] uppercase">Kurumsal Kimlik</span>
            </div>
            <h1 className="text-white font-black leading-[1.04] tracking-tight mb-8"
              style={{ fontSize: "clamp(32px,7.5vw,108px)" }}>
              Büyük Alanlar,<br />
              <em className="not-italic text-accent">Büyük</em><br />
              Sorumluluk.
            </h1>
            <p className="text-white/55 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Kurumsal müşterilerimize özel uzun vadeli sözleşmeler, özel protokoller ve garantili kalite. Bir temizlik firması değil, bir hizmet ortağı.
            </p>
          </motion.div>
        </div>

        <motion.div className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          <span className="text-white/30 text-[9px] tracking-[0.3em] uppercase font-bold rotate-90 origin-center mb-6">Keşfet</span>
          <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </section>

      {/* ── MANİFESTO + STATS ── */}
      <section className="bg-white py-24 md:py-32 px-8 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <p className="font-black text-primary leading-[1.04] tracking-tight"
              style={{ fontSize: "clamp(26px,4.5vw,62px)" }}>
              "Kurumsal müşterilerimize sunduğumuz her hizmet,{" "}
              <em className="not-italic text-accent">imzalı bir sorumluluktur.</em>{" "}
              Kısayol yoktur, standart bozulmaz."
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-primary/8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            {[
              { value: "6",    label: "Segment",           sub: "Hizmet verdiğimiz alan kategorisi" },
              { value: "5",    label: "Aşamalı Süreç",     sub: "Her projede uygulanan protokol" },
              { value: "%100", label: "Raporlama",          sub: "Fotoğraflı denetim ve imzalı teslimat" },
              { value: "24/7", label: "Müşteri Desteği",   sub: "Acil müdahale ve iletişim garantisi" },
            ].map((s, i) => (
              <div key={i} className="bg-white px-4 py-6 md:px-8 md:py-10">
                <span className="text-accent font-black block leading-none mb-3"
                  style={{ fontSize: "clamp(34px,4vw,58px)" }}>{s.value}</span>
                <span className="text-primary font-black text-sm tracking-wide block mb-1">{s.label}</span>
                <span className="text-primary/40 text-xs leading-snug">{s.sub}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── KİMLİĞİMİZ — magazine split ── */}
      <section className="grid lg:grid-cols-2 min-h-[88vh]">
        <motion.div
          className="relative overflow-hidden min-h-[50vh] lg:min-h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <img loading="lazy" decoding="async" src={imgKalite} alt="Kalite Denetimi" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B3E]/25 to-transparent" />
          <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-accent opacity-70" />
          <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-accent opacity-70" />
          <div className="absolute bottom-8 left-8">
            <div className="bg-accent px-5 py-2.5 inline-block">
              <span className="text-white font-black text-[10px] tracking-[0.25em] uppercase">Kalite Denetimi</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-[#0D1B3E] flex flex-col justify-center px-6 md:px-16 py-12 md:py-20"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-white/8 font-black text-8xl leading-none select-none mb-4">KK</span>
          <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase block mb-5">Kurumsal Kimliğimiz</span>
          <h2 className="text-white font-black leading-tight tracking-tight mb-8"
            style={{ fontSize: "clamp(28px,3.8vw,50px)" }}>
            Bir Temizlik Firması<br />
            <span className="text-accent">Değil,</span><br />
            Bir Hizmet Ortağı
          </h2>
          <div className="space-y-5 text-white/60 leading-relaxed text-[15px] mb-12">
            <p>
              Mas Grup olarak kurumsal müşterilerimize standart hizmet değil, uzun vadeli ortaklık sunuyoruz. Her proje, keşif ziyareti ile başlar, imzalı denetim raporu ile kapanır.
            </p>
            <p>
              İş dünyasının dinamiklerini anlıyor ve çalışma alanlarının verimliliğini doğrudan etkileyen hijyen faktörünü şansa bırakmıyoruz. Siz işinize odaklanın, alan temizliği bizde.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Özel Protokol", "Garantili Kalite", "Fotoğraflı Rapor", "Esnek Program"].map((item, i) => (
              <div key={i} className="border border-white/10 px-5 py-4">
                <span className="text-accent text-[9px] font-black tracking-[0.25em] uppercase block mb-1">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-white font-bold text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── SEGMENTLER ── */}
      <section className="bg-white py-24 md:py-36 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase block mb-4">Segmentler</span>
              <h2 className="text-primary font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(34px,5vw,68px)" }}>
                Hizmet<br />Verdiğimiz Alanlar
              </h2>
            </motion.div>
            <motion.p className="text-primary/50 text-sm leading-relaxed max-w-xs"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              Küçük ofisten büyük sanayi tesisine, her ölçekte kurumsal çözüm üretiriz.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary/10">
            {segments.map((seg, i) => (
              <motion.div
                key={i}
                className="relative bg-white overflow-hidden cursor-default"
                initial="rest"
                animate={hovered === i || (hovered === null && active === i) ? "hover" : "rest"}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <motion.div
                  className="absolute inset-0 z-0 bg-[#0D1B3E]"
                  variants={{
                    rest: { clipPath: "polygon(0% 0%, 0% 0%, 100% 100%, 100% 100%)" },
                    hover: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute top-4 left-4 z-20 w-5 h-5 border-t-2 border-l-2 border-accent" />
                <div className="absolute bottom-4 right-4 z-20 w-5 h-5 border-b-2 border-r-2 border-accent" />

                <div className="relative z-10 p-6 md:p-10 min-h-[240px] flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <motion.span className="font-black text-6xl leading-none select-none"
                      variants={{ rest: { color: "rgba(13,27,62,0.09)" }, hover: { color: "rgba(255,255,255,0.07)" } }}
                      transition={{ duration: 0.45 }}>
                      {seg.num}
                    </motion.span>
                    <motion.span className="text-[9px] font-black tracking-widest uppercase"
                      variants={{ rest: { color: "rgba(13,27,62,0.18)" }, hover: { color: "rgba(255,255,255,0.16)" } }}
                      transition={{ duration: 0.45 }}>
                      {seg.sub}
                    </motion.span>
                  </div>
                  <div>
                    <motion.div className="h-px bg-accent mb-4"
                      variants={{ rest: { width: "2rem" }, hover: { width: "4rem" } }}
                      transition={{ duration: 0.5 }} />
                    <motion.h3 className="text-xl font-black tracking-tight mb-3"
                      variants={{ rest: { color: "#0D1B3E" }, hover: { color: "#ffffff" } }}
                      transition={{ duration: 0.4 }}>
                      {seg.title}
                    </motion.h3>
                    <motion.p className="text-sm leading-relaxed"
                      variants={{ rest: { color: "rgba(13,27,62,0.55)" }, hover: { color: "rgba(255,255,255,0.62)" } }}
                      transition={{ duration: 0.4 }}>
                      {seg.desc}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5 ADIMLI SÜREÇ — dark full-bleed ── */}
      <section className="relative overflow-hidden py-24 md:py-36 px-8 md:px-16">
        <img loading="lazy" decoding="async" src={imgBg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-[#030b1a]/94" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase block mb-4">Sürecimiz</span>
              <h2 className="text-white font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(32px,5vw,64px)" }}>
                5 Adımda<br />Kusursuz Teslim
              </h2>
            </motion.div>
            <motion.p className="text-white/40 text-sm leading-relaxed max-w-xs"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              Her projede aynı prosedür. Sırayı atlayan ya da adım atlayan yoktur.
            </motion.p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-7 left-7 right-7 h-px bg-white/8 hidden lg:block" />

            <div className="grid lg:grid-cols-5 gap-6">
              {process.map((step, i) => (
                <motion.div
                  key={i}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="border border-white/10 bg-white/[0.04] backdrop-blur-sm p-7 hover:border-accent/40 hover:bg-white/[0.08] transition-all duration-400">
                    <div className="w-7 h-7 bg-accent flex items-center justify-center mb-6">
                      <span className="text-white font-black text-[10px]">{step.num}</span>
                    </div>
                    <h4 className="text-white font-black text-base tracking-tight mb-3">{step.title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SÖZLEŞME GÜVENCESİ — split ── */}
      <section className="grid lg:grid-cols-2 min-h-[75vh]">
        <motion.div
          className="bg-[#07101f] flex flex-col justify-center px-6 md:px-16 py-12 md:py-20 order-2 lg:order-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase block mb-5">Sözleşme Güvencesi</span>
          <h2 className="text-white font-black leading-tight tracking-tight mb-8"
            style={{ fontSize: "clamp(28px,3.8vw,50px)" }}>
            İmzaladığımız<br />
            <span className="text-accent">Her Sözleşme</span><br />
            Bir Taahhüttür
          </h2>
          <div className="space-y-5 text-white/58 leading-relaxed text-[15px] mb-10">
            <p>
              Kurumsal müşterilerimizle uzun vadeli çerçeve sözleşmeler imzılıyoruz. Bu sözleşmeler fiyat garantisi, hizmet standardı ve müdahale süre taahhüdünü kapsar.
            </p>
            <p>
              Olağanüstü bir durum olduğunda 24 saat içinde sahada olmayı garanti eder, imzalamadığımız bir taahhüt vermeyiz.
            </p>
          </div>
          <ul className="space-y-3 mb-10">
            {["Fiyat garanti sözleşmesi", "Hizmet standardı taahhüdü", "24 saat müdahale garantisi", "Fotoğraflı teslimat raporu"].map((item, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className="w-5 h-px bg-accent shrink-0" />
                <span className="text-sm font-medium text-white/75">{item}</span>
              </li>
            ))}
          </ul>
          <Link href="/iletisim" className="inline-flex items-center gap-2 group">
            <span className="text-accent font-black text-sm tracking-widest uppercase">Teklif Görüşmesi Başlat</span>
            <ArrowUpRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </motion.div>

        <motion.div
          className="relative overflow-hidden min-h-[50vh] lg:min-h-full order-1 lg:order-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <img loading="lazy" decoding="async" src={imgSozlesme} alt="Sözleşme Güvencesi" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-bl from-[#07101f]/15 to-transparent" />
          <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-accent opacity-70" />
          <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-accent opacity-70" />
        </motion.div>
      </section>

      {/* ── MANİFESTO ── */}
      <section className="bg-white py-24 md:py-32 px-8 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
          <motion.div
            className="lg:col-span-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase block mb-8">Manifestomuz</span>
            <h2 className="font-black text-primary leading-[1.04] tracking-tight mb-10"
              style={{ fontSize: "clamp(26px,4.2vw,60px)" }}>
              "Temizlik bir detay değil, bir standarttır. Büyük ya da küçük, kurumsal ya da bireysel;{" "}
              <em className="not-italic text-accent">her müşterimize sunduğumuz hizmet aynı kalite standartlarını</em>{" "}
              taşır."
            </h2>
            <div className="flex items-center gap-4 pt-8 border-t border-primary/10">
              <span className="w-10 h-px bg-accent" />
              <span className="text-primary/35 text-xs font-bold tracking-widest uppercase">Mas Grup, Profesyonel Temizlik</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0D1B3E] py-24 md:py-36 px-8 md:px-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />
        <div className="absolute -left-40 -bottom-40 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "#00B4D8", filter: "blur(80px)" }} />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase block mb-6">
              Kurumsal Çözüm için Hazır mısınız?
            </span>
            <h2 className="text-white font-black leading-tight tracking-tight"
              style={{ fontSize: "clamp(30px,4.5vw,58px)" }}>
              Hizmet Ortağınız<br />
              <span className="text-accent">Mas Grup.</span>
            </h2>
            <p className="text-white/40 text-sm mt-6 max-w-md leading-relaxed">
              Ücretsiz keşif ziyareti ve özel teklif için hemen iletişime geçin.
            </p>
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link href="/iletisim">
              <Button className="bg-accent hover:bg-accent/90 text-white font-black tracking-wide px-8 h-14 text-sm gap-2 group">
                KURUMSAL TEKLİF AL
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
