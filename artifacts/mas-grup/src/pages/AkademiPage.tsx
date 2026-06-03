import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImg     from "@assets/akademi_hero.webp";
import imgEgitim   from "@assets/akademi_egitim.webp";
import imgHijyen   from "@assets/akademi_hijyen.webp";
import imgSertifika from "@assets/akademi_sertifika.webp";

const modules = [
  {
    num: "01",
    title: "Hijyen Bilimi",
    sub: "Hygiene Science",
    desc: "Temizlik maddelerinin kimyasal yapısı, yüzey reaksiyonları ve mikrobiyolojik tehdit haritası. Her personelimiz, pH dengesi ve çapraz kontaminasyondan koruma konusunda teorik eğitim alır.",
    tags: ["pH Analizi", "Mikrobiyoloji Temelleri", "Kimyasal Güvenlik", "Kontaminasyon Kontrolü"],
  },
  {
    num: "02",
    title: "Saha Protokolleri",
    sub: "Field Operations",
    desc: "Her hizmet türü için adım adım operasyon protokolü. Konut, kurumsal ve inşaat sonrası alanlarda farklılaşan standart operasyon prosedürleri.",
    tags: ["SOP Uygulaması", "Ekipman Operasyonu", "Zaman Yönetimi", "Acil Durum Protokolü"],
  },
  {
    num: "03",
    title: "Müşteri Psikolojisi",
    sub: "Client Relations",
    desc: "Müşteri güvenini inşa etmek bir sanat ve bilimdir. Beden dili, iletişim tonu ve sessiz profesyonellik konusunda birebir koçluk seansları.",
    tags: ["Güven İnşası", "Sessiz Profesyonellik", "Şikayet Yönetimi", "Geri Bildirim Döngüsü"],
  },
  {
    num: "04",
    title: "Kalite Denetimi",
    sub: "Quality Control",
    desc: "Her hizmet bitiminde uygulanan 47 maddelik denetim protokolü. Fotoğraflı raporlama, müşteri onay sistemi ve performans skoru ile sürekli iyileştirme döngüsü.",
    tags: ["47 Madde Denetim", "Fotoğraflı Raporlama", "Performans Skoru", "Sürekli İyileştirme"],
  },
];

const stats = [
  { value: "200+", label: "Saat Eğitim", sub: "Her personel, sahaya çıkmadan" },
  { value: "47",   label: "Madde Denetim",  sub: "Her hizmet bitiminde uygulanan" },
  { value: "4",    label: "Aşamalı Müfredat", sub: "Hijyenden sertifikaya" },
  { value: "%98",  label: "Müşteri Memnuniyeti", sub: "Eğitimli ekip garantisi" },
];

export default function AkademiPage() {
  useEffect(() => { document.title = "Mas Akademi | Mas Grup"; }, []);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);

  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => {
    const id = setInterval(() => setActive(p => (p + 1) % modules.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full overflow-hidden">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen flex items-end overflow-hidden bg-[#030b1a]">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img fetchPriority="high" decoding="async" src={heroImg} alt="Mas Akademi" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030b1a] via-[#030b1a]/60 to-[#030b1a]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030b1a]/80 via-transparent to-transparent" />
        </motion.div>

        {/* Ghost label */}
        <div className="absolute top-20 right-6 md:right-14 z-10 pointer-events-none select-none text-right">
          <span className="text-white/[0.05] font-black leading-none tracking-tighter"
            style={{ fontSize: "clamp(60px,12vw,150px)" }}>AKADEMİ</span>
        </div>

        {/* Top-right stamp */}
        <div className="absolute top-28 right-8 md:right-16 z-10 hidden md:block text-right">
          <div className="border border-accent/30 px-4 py-3 inline-block text-right">
            <span className="text-accent text-[9px] font-black tracking-[0.35em] uppercase block">Mas Akademi</span>
            <span className="text-white/25 text-[9px] font-bold tracking-[0.2em] uppercase block mt-0.5">Sertifikasyon Programı</span>
          </div>
        </div>

        <div className="relative z-10 pb-20 px-8 md:px-16 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-accent" />
              <span className="text-accent text-[10px] font-bold tracking-[0.35em] uppercase">Eğitim Sistemi</span>
            </div>

            <h1 className="text-white font-black leading-[1.02] tracking-tight mb-8"
              style={{ fontSize: "clamp(48px,8vw,116px)" }}>
              Temizliği<br />
              <em className="not-italic text-accent">Öğretmiyoruz.</em><br />
              Bir Zihniyet<br />İnşa Ediyoruz.
            </h1>

            <p className="text-white/55 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Türkiye'de hiçbir temizlik şirketinin uygulamadığı derinlikte bir eğitim sistemi. Mas Akademi, ekibimizi sektörün en donanımlı profesyonelleri yapar.
            </p>
          </motion.div>
        </div>

        <motion.div className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          <span className="text-white/30 text-[9px] tracking-[0.3em] uppercase font-bold rotate-90 origin-center mb-6">Keşfet</span>
          <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </section>

      {/* ── MANİFESTO PULL-QUOTE ── */}
      <section className="bg-white py-24 md:py-32 px-8 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-12 gap-6 items-end mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="lg:col-span-12">
              <p className="font-black text-primary leading-[1.04] tracking-tight"
                style={{ fontSize: "clamp(26px,4.5vw,62px)" }}>
                "Bir personelimiz sahaya çıktığında, arkasında{" "}
                <em className="not-italic text-accent">200 saatten fazla eğitim</em>,
                {" "}47 maddelik denetim protokolü ve Mas Akademi sertifikası vardır."
              </p>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-primary/8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            {stats.map((s, i) => (
              <div key={i} className="bg-white px-8 py-10">
                <span className="text-accent font-black block leading-none mb-3"
                  style={{ fontSize: "clamp(36px,4.5vw,64px)" }}>{s.value}</span>
                <span className="text-primary font-black text-sm tracking-wide block mb-1">{s.label}</span>
                <span className="text-primary/40 text-xs leading-snug">{s.sub}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── EĞİTİM SİSTEMİ — magazine split ── */}
      <section className="grid lg:grid-cols-2 min-h-[90vh]">
        <motion.div
          className="relative overflow-hidden min-h-[50vh] lg:min-h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <img loading="lazy" decoding="async" src={imgEgitim} alt="Eğitim Sistemi" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#030b1a]/30 to-transparent" />
          <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-accent opacity-70" />
          <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-accent opacity-70" />
          <div className="absolute bottom-8 left-8">
            <div className="bg-accent px-5 py-2.5 inline-block">
              <span className="text-white font-black text-[10px] tracking-[0.25em] uppercase">Uygulamalı Eğitim</span>
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
          <span className="text-white/8 font-black text-8xl leading-none select-none mb-4">MAS</span>
          <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase block mb-5">Akademi Sistemi</span>

          <h2 className="text-white font-black leading-tight tracking-tight mb-8"
            style={{ fontSize: "clamp(28px,3.8vw,50px)" }}>
            Sektörde Bir İlk:<br />
            <span className="text-accent">Temizlik Bilimi</span><br />
            Müfredatı
          </h2>

          <div className="space-y-5 text-white/60 leading-relaxed text-[15px]">
            <p>
              Mas Akademi, temizliği bir iş sürecinin ötesinde ele alır. Her modül, bilimsel hijyen ilkelerine, psikolojiye ve operasyonel mükemmeliyete dayanır.
            </p>
            <p>
              Personelimiz sahaya çıkmadan önce teorik sınavlardan, uygulamalı simülasyonlardan ve son olarak gözetimli saha testinden geçer. Başarısız olan personel tekrar eğitime alınır. Kısayol yoktur.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4">
            {["Teorik Eğitim", "Simülasyon", "Gözetimli Saha", "Sertifikasyon"].map((step, i) => (
              <div key={i} className="border border-white/10 px-5 py-4">
                <span className="text-accent text-[9px] font-black tracking-[0.25em] uppercase block mb-1">Aşama {String(i + 1).padStart(2, "0")}</span>
                <span className="text-white font-bold text-sm">{step}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── MODÜLLER — loop cards ── */}
      <section className="bg-white py-24 md:py-36 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase block mb-4">Müfredat</span>
              <h2 className="text-primary font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(34px,5vw,68px)" }}>
                4 Modül,<br />Sonsuz Standart
              </h2>
            </motion.div>
            <motion.p className="text-primary/50 text-sm leading-relaxed max-w-xs"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              Her modül bağımsız bir disiplin. Dördü birlikte tamamlandığında tam bir Mas Akademi profesyoneli doğar.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-primary/10">
            {modules.map((mod, i) => (
              <motion.div
                key={i}
                className="relative bg-white overflow-hidden cursor-default"
                initial="rest"
                animate={hovered === i || (hovered === null && active === i) ? "hover" : "rest"}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Diagonal sweep overlay */}
                <motion.div
                  className="absolute inset-0 z-0"
                  variants={{
                    rest: { clipPath: "polygon(0% 0%, 0% 0%, 100% 100%, 100% 100%)" },
                    hover: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
                  }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="absolute inset-0 bg-[#0D1B3E]" />
                </motion.div>

                <div className="absolute top-4 left-4 z-20 w-6 h-6 border-t-2 border-l-2 border-accent" />
                <div className="absolute bottom-4 right-4 z-20 w-6 h-6 border-b-2 border-r-2 border-accent" />

                <div className="relative z-10 p-10 md:p-14 min-h-[340px] flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <motion.span className="font-black text-7xl leading-none select-none"
                      variants={{ rest: { color: "rgba(13,27,62,0.1)" }, hover: { color: "rgba(255,255,255,0.07)" } }}
                      transition={{ duration: 0.5 }}>
                      {mod.num}
                    </motion.span>
                    <motion.span className="text-xs font-black tracking-widest uppercase"
                      variants={{ rest: { color: "rgba(13,27,62,0.18)" }, hover: { color: "rgba(255,255,255,0.16)" } }}
                      transition={{ duration: 0.5 }}>
                      {mod.sub}
                    </motion.span>
                  </div>

                  <div>
                    <motion.div className="h-px bg-accent mb-5"
                      variants={{ rest: { width: "2rem" }, hover: { width: "4.5rem" } }}
                      transition={{ duration: 0.5 }} />
                    <motion.h3 className="text-3xl font-black tracking-tight mb-4"
                      variants={{ rest: { color: "#0D1B3E" }, hover: { color: "#ffffff" } }}
                      transition={{ duration: 0.45 }}>
                      {mod.title}
                    </motion.h3>
                    <motion.p className="text-sm leading-relaxed mb-6"
                      variants={{ rest: { color: "rgba(13,27,62,0.55)" }, hover: { color: "rgba(255,255,255,0.62)" } }}
                      transition={{ duration: 0.45 }}>
                      {mod.desc}
                    </motion.p>

                    <div className="flex flex-wrap gap-2">
                      {mod.tags.map((tag, ti) => (
                        <motion.span key={ti}
                          className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 border"
                          variants={{
                            rest: { borderColor: "rgba(0,180,216,0.3)", color: "#00B4D8", backgroundColor: "transparent" },
                            hover: { borderColor: "rgba(0,180,216,0.4)", color: "#00B4D8", backgroundColor: "rgba(0,180,216,0.08)" },
                          }}
                          transition={{ duration: 0.4 }}>
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HİJYEN BİLİMİ — dark split ── */}
      <section className="grid lg:grid-cols-2 min-h-[75vh]">
        <motion.div
          className="bg-[#07101f] flex flex-col justify-center px-10 md:px-16 py-20 order-2 lg:order-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase block mb-5">Hijyen Bilimi</span>
          <h2 className="text-white font-black leading-tight tracking-tight mb-8"
            style={{ fontSize: "clamp(28px,3.8vw,50px)" }}>
            Temizlik Değil,<br />
            <span className="text-accent">Mikrobiyolojik</span><br />
            Mükemmellik
          </h2>
          <div className="space-y-5 text-white/58 leading-relaxed text-[15px] mb-10">
            <p>
              Personelimiz, hangi kimyasalın hangi yüzeyde hangi konsantrasyonda kullanılacağını ezberlemez. Bunun arkasındaki kimyayı öğrenir.
            </p>
            <p>
              pH skalasından çapraz kontaminasyon risk haritasına, her detay bilimsel temele oturur. Sezgiyle değil, protokolle çalışırız.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
            {[["12", "Kimyasal Sınıf"], ["6", "Yüzey Kategorisi"], ["3", "Risk Seviyesi"]].map(([val, lbl], i) => (
              <div key={i}>
                <span className="text-accent font-black text-3xl block leading-none mb-1">{val}</span>
                <span className="text-white/35 text-[10px] font-bold tracking-wide uppercase">{lbl}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden min-h-[50vh] lg:min-h-full order-1 lg:order-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <img loading="lazy" decoding="async" src={imgHijyen} alt="Hijyen Bilimi" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-bl from-[#07101f]/25 to-transparent" />
          <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-accent opacity-70" />
          <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-accent opacity-70" />
        </motion.div>
      </section>

      {/* ── SERTİFİKASYON ── */}
      <section className="grid lg:grid-cols-2 min-h-[75vh]">
        <motion.div
          className="relative overflow-hidden min-h-[50vh] lg:min-h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <img loading="lazy" decoding="async" src={imgSertifika} alt="Sertifikasyon" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
          <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-accent opacity-70" />
          <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-accent opacity-70" />
          <div className="absolute bottom-8 left-8">
            <div className="bg-accent px-5 py-2.5 inline-block">
              <span className="text-white font-black text-[10px] tracking-[0.25em] uppercase">Mas Akademi Sertifikası</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white flex flex-col justify-center px-10 md:px-16 py-20"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-primary/8 font-black text-8xl leading-none select-none mb-4">04</span>
          <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase block mb-5">Sertifikasyon</span>
          <h2 className="text-primary font-black leading-tight tracking-tight mb-8"
            style={{ fontSize: "clamp(28px,3.8vw,50px)" }}>
            Sahaya Çıkmak<br />
            <span className="text-accent">Ayrıcalık</span> Gerektirir
          </h2>
          <div className="space-y-5 text-primary/65 leading-relaxed text-[15px] mb-10">
            <p>
              Mas Akademi sertifikası, kolay kazanılmaz. Dört modülü tamamlayan, sınavlardan geçen ve gözetimli saha testini başarıyla bitiren her personel bu sertifika ile sahaya çıkar.
            </p>
            <p>
              Sertifika, müşterilerimize karşı bir garanti belgesidir. Kapınıza gelen her Mas Grup personeli, bu süreçten geçmiştir.
            </p>
          </div>
          <ul className="space-y-3">
            {["Teorik sınav ve uygulamalı değerlendirme", "Gözetimli saha testi", "Müşteri iletişim simülasyonu", "Yıllık yenileme protokolü"].map((item, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className="w-5 h-px bg-accent shrink-0" />
                <span className="text-sm font-medium text-primary/80">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0D1B3E] py-24 md:py-36 px-8 md:px-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />
        <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full opacity-[0.05]"
          style={{ background: "#00B4D8", filter: "blur(80px)" }} />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase block mb-6">
              Akademi Güvencesiyle Hizmet
            </span>
            <h2 className="text-white font-black leading-tight tracking-tight"
              style={{ fontSize: "clamp(30px,4.5vw,58px)" }}>
              Eğitimli Ekip,<br />
              <span className="text-accent">Kalıcı Fark.</span>
            </h2>
            <p className="text-white/40 text-sm mt-6 max-w-md leading-relaxed">
              Mas Akademi'den geçen her personelimiz sizin için çalışır. Standartı biz koyduk, tutarlılığı biz garanti ediyoruz.
            </p>
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}>
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
