import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, Users, Shield, RefreshCw, Home, Building2, HardHat, Sparkles, Eye, ClipboardList, ZoomIn, CheckSquare, Check, ChevronRight, ArrowRight, Droplets, Star, Clock, Smile, CalendarDays, Leaf, Settings, Globe, UserCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import ana1 from "@assets/ana5_1780320877135.jpeg";
import ana3 from "@assets/ana3_1780314877331.jpeg";
import ana4 from "@assets/ana4_1780314877331.jpeg";
import ana5 from "@assets/ana5_1780314877332.jpeg";
import ana6 from "@assets/ana6_1780314877332.jpeg";
import nedenBg from "@assets/ana3_1780318262914.jpeg";
import akademiImg from "@assets/ana4_1780320177397.jpeg";
import logoDark from "@assets/logo_dark_1780317107003.png";
import logoLight from "@assets/logo_light_1780317107003.png";
import svcEv from "@assets/ChatGPT_Image_1_Haz_2026_15_58_40_(1)_1780318762434.png";
import svcOfis from "@assets/ChatGPT_Image_1_Haz_2026_15_58_40_(2)_1780318762434.png";
import svcInsaat from "@assets/ChatGPT_Image_1_Haz_2026_15_58_41_(3)_1780318762434.png";
import svcDetay from "@assets/ChatGPT_Image_1_Haz_2026_15_58_41_(4)_1780318762433.png";

export default function HomePage() {
  return (
    <div className="w-full">

      {/* ABOVE-FOLD: hero + 3-panel + marquee — exactly 100vh */}
      <div className="h-screen flex flex-col">

      {/* HERO SECTION */}
      <section className="relative bg-primary flex-1 flex flex-col" style={{ paddingTop: 52 }}>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ana1})` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050d1a]/97 via-[#080f20]/82 to-[#0a1428]/28" />

        <div className="container relative z-10 mx-auto px-4 md:px-8 py-8 md:py-10 flex-1 flex items-center">
          <div className="max-w-[420px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-black leading-[1.18] mb-4" style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>
                <span className="text-white block">Eğitimli Ekip.</span>
                <span className="text-white block">Premium Hizmet.</span>
                <span className="block" style={{ color: "#0077B6" }}>Kurumsal Güven.</span>
              </h1>
              <p className="text-white/85 text-sm leading-relaxed mb-7" style={{ maxWidth: 380 }}>
                Mas Grup, yaşam alanlarınızı ve iş yerlerinizi en yüksek hijyen standartlarında buluşturur.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/hizmetlerimiz">
                  <Button className="text-white font-bold tracking-wide text-sm px-5 h-10" style={{ backgroundColor: "#0077B6" }}>
                    HİZMETLERİMİZ <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </Link>
                <Link href="/hakkimizda">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 font-bold tracking-wide text-sm px-5 h-10">
                    BİZİ TANIYIN <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3-PANEL SECTION */}
      <section className="grid lg:grid-cols-3">

        {/* Panel 01 */}
        <div className="relative overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${ana3})` }}
          />
          <div className="absolute inset-0 bg-[#050d1a]/91" />
          <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent text-sm font-bold tracking-widest">01</span>
                <div className="flex-1 h-px bg-accent/40" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
                <span className="text-white">Profesyonel Çözümler,</span>
                <br />
                <span className="text-accent">Güçlü Sonuçlar.</span>
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                İleri teknoloji ekipmanlarımız ve uzman kadromuzla, beklentilerin üzerinde hizmet sunuyoruz.
              </p>
            </div>
            <div className="flex gap-6 mt-8">
              {[
                { icon: Users, label: "Profesyonel Ekip" },
                { icon: Star, label: "Kalite Standardı" },
                { icon: Clock, label: "Zamanında Hizmet" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-white/60 text-[10px] font-medium leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Panel 02 */}
        <div className="relative overflow-hidden group border-l border-r border-white/10">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${ana4})` }}
          />
          <div className="absolute inset-0 bg-[#050d1a]/80" />
          <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent text-sm font-bold tracking-widest">02</span>
                <div className="flex-1 h-px bg-accent/40" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
                <span className="text-white">Mas Akademi ile</span>
                <br />
                <span className="text-accent">Fark Yaratıyoruz.</span>
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Eğitimli, bilinçli ve donanımlı ekipler yetiştiriyor; sektöre değer katıyoruz.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/akademi">
                <Button className="bg-accent hover:bg-accent/90 text-white font-bold tracking-wide text-sm">
                  AKADEMİMİZ <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Panel 03 */}
        <div className="relative overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${ana5})` }}
          />
          <div className="absolute inset-0 bg-[#050d1a]/82" />
          <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent text-sm font-bold tracking-widest">03</span>
                <div className="flex-1 h-px bg-accent/40" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
                <span className="text-white">Yaşam Alanlarınıza</span>
                <br />
                <span className="text-accent">Değer Katıyoruz.</span>
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Hijyenik, sağlıklı ve konforlu alanlar için en doğru adres.
              </p>
            </div>
            <div className="flex gap-6 mt-8">
              {[
                { icon: Droplets, label: "Hijyen" },
                { icon: Shield, label: "Güven" },
                { icon: Smile, label: "Memnuniyet" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-white/60 text-[10px] font-medium leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* TRUSTED BY — dark marquee strip */}
      <section className="relative overflow-hidden border-y border-white/[0.06]" style={{ background: "#07101f" }}>
        {/* Left label pin */}
        <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center px-5 md:px-8"
          style={{ background: "linear-gradient(to right, #07101f 82%, transparent)" }}>
          <span className="text-white/60 text-[10px] font-black tracking-[0.28em] uppercase whitespace-nowrap">
            Hizmet Alanlarımız
          </span>
          <div className="w-px h-6 bg-white/15 ml-5" />
        </div>

        {/* Marquee track — starts right after the | separator */}
        <div className="flex overflow-hidden py-5 pl-52 md:pl-60">
          <div
            className="flex items-center gap-0 shrink-0"
            style={{ animation: "marquee 28s linear infinite" }}
          >
            {[
              "Konut Projeleri", "Kurumsal Ofisler", "Lüks Rezidanslar",
              "Alışveriş Merkezleri", "Otel & Hospitality", "Sağlık Kuruluşları",
              "Eğitim Kurumları", "Endüstriyel Tesisler",
            ].map((brand, i) => (
              <div key={i} className="flex items-center gap-0 shrink-0">
                <span className="text-white/30 text-xs font-bold tracking-[0.18em] uppercase hover:text-accent transition-colors duration-300 cursor-default px-8 whitespace-nowrap">
                  {brand}
                </span>
                <span className="text-accent/30 text-lg font-thin select-none">·</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              "Konut Projeleri", "Kurumsal Ofisler", "Lüks Rezidanslar",
              "Alışveriş Merkezleri", "Otel & Hospitality", "Sağlık Kuruluşları",
              "Eğitim Kurumları", "Endüstriyel Tesisler",
            ].map((brand, i) => (
              <div key={`b${i}`} className="flex items-center gap-0 shrink-0">
                <span className="text-white/30 text-xs font-bold tracking-[0.18em] uppercase hover:text-accent transition-colors duration-300 cursor-default px-8 whitespace-nowrap">
                  {brand}
                </span>
                <span className="text-accent/30 text-lg font-thin select-none">·</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none"
          style={{ background: "linear-gradient(to left, #07101f, transparent)" }} />
      </section>

      </div>{/* end above-fold wrapper */}

      {/* NEDEN MAS GRUP — editorial dark section */}
      <section className="relative overflow-hidden" style={{ background: "#07101f" }}>

        {/* Ghost watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="font-black uppercase text-white/[0.025] leading-none tracking-tighter whitespace-nowrap"
            style={{ fontSize: "clamp(80px, 16vw, 220px)" }}
          >
            MAS GRUP
          </span>
        </div>

        {/* Accent top line */}
        <div className="h-px w-full" style={{ background: "linear-gradient(to right, transparent, #00B4D8 40%, transparent)" }} />

        <div className="relative z-10 container mx-auto px-6 md:px-12 py-24">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.4em] uppercase text-accent">
              <span className="w-8 h-px bg-accent" />
              Farkımız
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-16 xl:gap-24 items-start">

            {/* LEFT — editorial heading + numbered feature list + stats */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-black leading-none tracking-tighter mb-14"
                style={{ fontSize: "clamp(48px, 7vw, 88px)" }}
              >
                <span className="text-white">Neden</span><br />
                <span style={{ color: "#00B4D8" }}>Mas Grup?</span>
              </motion.h2>

              {/* Numbered feature rows */}
              <div className="space-y-0">
                {[
                  { num: "01", title: "Sistemli Temizlik", desc: "Her hizmet adım adım planlanır; hiçbir detay rastlantıya bırakılmaz." },
                  { num: "02", title: "Eğitimli & Denetimli Ekip", desc: "Tüm personelimiz düzenli eğitime tabi tutulur ve her sahada denetlenir." },
                  { num: "03", title: "Kalite Kontrol Süreci", desc: "Hizmet bitmez, kontrol başlar — her sonuç ölçülür ve belgelenir." },
                  { num: "04", title: "Sürdürülebilir Standart", desc: "İlk gün kalitemizi son güne taşıyan tutarlı hizmet modeli." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="group flex items-start gap-6 py-6 border-b border-white/[0.07] last:border-0 cursor-default hover:bg-white/[0.025] transition-colors -mx-4 px-4 rounded-lg"
                  >
                    <span
                      className="font-black tabular-nums leading-none shrink-0 transition-colors group-hover:text-accent/60"
                      style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "rgba(255,255,255,0.08)" }}
                    >
                      {item.num}
                    </span>
                    <div className="flex-1 pt-1">
                      <p className="text-white font-black text-base mb-1 tracking-tight">{item.title}</p>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-accent shrink-0 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-10 mt-10 pt-10 border-t border-white/[0.07]"
              >
                {[
                  ["2.500+", "Tamamlanan Proje"],
                  ["12+", "Yıl Deneyim"],
                  ["%98", "Memnuniyet Oranı"],
                ].map(([num, label]) => (
                  <div key={label}>
                    <div className="font-black text-3xl leading-none" style={{ color: "#00B4D8" }}>{num}</div>
                    <div className="text-white/35 text-[10px] font-bold tracking-[0.2em] uppercase mt-2">{label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — tall image with overlays */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img src={nedenBg} alt="Mas Grup" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #07101f 0%, rgba(7,16,31,0.3) 50%, transparent 100%)" }} />
              </div>

              {/* Floating badge — top right */}
              <div
                className="absolute -top-4 -right-4 rounded-2xl px-5 py-4 text-center shadow-2xl"
                style={{ background: "#00B4D8" }}
              >
                <div className="text-white font-black text-2xl leading-none">%100</div>
                <div className="text-white/80 text-[9px] font-bold tracking-widest uppercase mt-1">Kalite Garantisi</div>
              </div>

              {/* Bottom quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-6 h-px bg-accent mb-3" />
                <p className="text-white font-semibold text-sm leading-relaxed">
                  "Temizlik, sadece görüneni değil{" "}
                  <span style={{ color: "#00B4D8" }}>hissedileni değiştirir."</span>
                </p>
              </div>

              {/* Decorative corner accent */}
              <div
                className="absolute -bottom-3 -left-3 w-16 h-16 rounded-xl opacity-60"
                style={{ background: "linear-gradient(135deg, #00B4D8, transparent)" }}
              />
            </motion.div>

          </div>
        </div>

        {/* Bottom accent line */}
        <div className="h-px w-full" style={{ background: "linear-gradient(to right, transparent, #00B4D8 40%, transparent)" }} />
      </section>

      {/* HİZMETLERİMİZ PREVIEW — full-width horizontal strip */}
      <section className="relative overflow-hidden" style={{ background: "#07101f" }}>

        {/* Header row */}
        <div className="px-6 md:px-12 pt-16 pb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent text-[10px] font-bold tracking-[0.32em] uppercase block mb-2">Çözümlerimiz</span>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
              Profesyonel <span className="text-accent">Hizmetler</span>
            </h2>
          </motion.div>
        </div>

        {/* 4-card horizontal grid — no gaps, edge-to-edge */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {[
            {
              num: "01", img: svcEv,      title: "Ev Temizliği",   tag: "Konut",
              desc: "Yaşam alanlarınızda detaylı, hijyenik ve ferah bir ortam sağlıyoruz.",
              accent: "#00B4D8",
            },
            {
              num: "02", img: svcOfis,    title: "Ofis Temizliği", tag: "Kurumsal",
              desc: "Çalışma veriminizi artıran düzenli ve sistematik temizlik hizmeti.",
              accent: "#00B4D8",
            },
            {
              num: "03", img: svcInsaat,  title: "İnşaat Sonrası", tag: "Endüstriyel",
              desc: "Yapı artıklarından arındırılmış, teslime hazır mekanlar.",
              accent: "#00B4D8",
            },
            {
              num: "04", img: svcDetay,   title: "Detay Temizlik", tag: "Premium",
              desc: "Gözden kaçan her noktada mükemmeliyetin standardı.",
              accent: "#00B4D8",
            },
          ].map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08 }}
              className="relative overflow-hidden group cursor-pointer h-[420px] md:h-[500px]"
              style={{ borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.06)" : undefined }}
            >
              <Link href="/hizmetlerimiz" className="block w-full h-full">
                {/* Photo */}
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  style={{ transitionTimingFunction: "cubic-bezier(0.25,0.46,0.45,0.94)" }}
                />

                {/* Base overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07101f]/96 via-[#07101f]/45 to-[#07101f]/15 transition-opacity duration-500 group-hover:opacity-80" />

                {/* Hover accent sweep from bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                {/* Top: number + pill */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className="text-white/20 text-xs font-black tracking-widest">{svc.num}</span>
                  <span className="text-[9px] font-bold tracking-widest uppercase text-accent border border-accent/25 bg-[#07101f]/60 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                    {svc.tag}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Accent line */}
                  <div className="w-5 h-px bg-accent mb-4 group-hover:w-10 transition-all duration-400" />

                  <h3 className="text-xl font-black text-white leading-tight mb-3 group-hover:text-accent transition-colors duration-300">
                    {svc.title}
                  </h3>

                  {/* Description — hidden by default, slides up on hover */}
                  <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500">
                    <p className="text-white/55 text-xs leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {svc.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-white/30 text-[11px] font-bold tracking-wide group-hover:text-accent transition-colors duration-300">
                    Detaylı Bilgi
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom padding */}
        <div className="h-12" />
      </section>

      {/* SİSTEMLİ TEMİZLİK YAKLAŞIMI */}
      <section
        className="relative py-32 overflow-hidden text-white"
        style={{ background: "linear-gradient(140deg,#030b1a 0%,#0d1b3e 55%,#071626 100%)" }}
      >
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(0,180,216,0.07) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        {/* Decorative circles */}
        <div className="absolute -top-48 -right-48 w-[560px] h-[560px] rounded-full border border-white/[0.04] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full border border-accent/[0.06] pointer-events-none" />
        {/* Top accent glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">

          {/* Centered header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 mb-6"
            >
              <div className="w-8 h-0.5 bg-accent mx-auto" />
              <span className="text-accent/70 text-xs font-bold tracking-[0.3em] uppercase">
                Nasıl Çalışıyoruz?
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black leading-[1.0] tracking-tight"
            >
              Sistemli <span className="text-accent">Temizlik</span> Yaklaşımı
            </motion.h2>
          </div>

          {/* Steps panel */}
          <div className="rounded-3xl border border-white/10 overflow-hidden divide-y md:divide-y-0 md:grid md:grid-cols-5 md:divide-x divide-white/10">
            {[
              {
                icon: Eye,
                title: "Keşif & Gözlem",
                desc: "Alan yerinde incelenir, özel ihtiyaçlar ve kritik noktalar belirlenir. Müşteri beklentisi dinlenir.",
              },
              {
                icon: ClipboardList,
                title: "Plan & Hazırlık",
                desc: "Ekipman, kimyasal ve personel seçimi yapılır. Zaman ve kaynak planı oluşturulur.",
              },
              {
                icon: Sparkles,
                title: "Uygulama",
                desc: "Plana bağlı kalınarak profesyonel temizlik uygulaması gerçekleştirilir. Her alan sistematik işlenir.",
              },
              {
                icon: ZoomIn,
                title: "Detay Tarama",
                desc: "Standart gözden kaçabilecek köşeler, yüzeyler ve detaylar özel tekniklerle taranır.",
              },
              {
                icon: CheckSquare,
                title: "Kalite Onayı",
                desc: "Hizmet tamamlandıktan sonra denetim yapılır. Onay alınmadan teslim gerçekleşmez.",
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-8 group hover:bg-white/[0.04] transition-colors duration-400 overflow-hidden"
              >
                {/* Ghost number art */}
                <span className="absolute bottom-0 right-2 text-[110px] font-black leading-none select-none pointer-events-none text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                {/* Step label + accent bar */}
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-0.5 h-7 bg-accent rounded-full" />
                  <span className="text-accent/50 text-[11px] font-bold tracking-[0.25em] uppercase">
                    {String(idx + 1).padStart(2, "0")} / 05
                  </span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-6 group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-300">
                  <step.icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h4 className="text-base font-bold mb-3 leading-snug">{step.title}</h4>

                {/* Description */}
                <p className="text-white/35 text-xs leading-relaxed">{step.desc}</p>

                {/* Bottom hover sweep */}
                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MAS AKADEMİ TEASER */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">EĞİTİM · KALİTE · DİSİPLİN</span>
                <h2 className="text-4xl md:text-5xl font-black text-primary mb-5 leading-tight">Mas Akademi</h2>
                <p className="text-primary/60 text-base leading-relaxed">
                  Mas Grup bünyesinde yer alan Mas Akademi, tüm ekip üyelerinin profesyonel eğitim süreçlerinden geçtiği özel bir sistemdir.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {["Temizlik teknikleri", "Detay odaklı çalışma", "Müşteri iletişimi", "Hizmet standardı"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="font-semibold text-primary text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-[3px] border-accent pl-5 text-lg text-primary/80 italic font-medium leading-relaxed">
                "Güçlü ekip, kaliteli hizmetin temelidir."
              </blockquote>

              <Link href="/akademi">
                <Button variant="outline" size="lg" className="border-accent/50 text-accent hover:bg-accent hover:text-white hover:border-accent gap-2 transition-all">
                  Akademi Hakkında Bilgi Al <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Right: new training photo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={akademiImg}
                alt="Mas Akademi Eğitimi"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              {/* Accent badge */}
              <div className="absolute -bottom-4 -left-4 bg-accent text-white rounded-2xl px-5 py-3 shadow-lg text-sm font-bold">
                Mas Akademi Sertifikası
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SOSYAL SORUMLULUK */}
      <section className="overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[480px]">

          {/* Left: full dark image */}
          <div className="relative h-72 lg:h-auto">
            <img src={ana6} alt="Sürdürülebilir Bakış" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/30 to-transparent" />
          </div>

          {/* Right: text + 3 value cards */}
          <div className="bg-white flex items-center py-16 px-10 lg:px-16">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-[1fr,auto] gap-10 w-full items-start"
            >
              {/* Text */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <Leaf className="w-4 h-4 text-accent" />
                  <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs">Sürdürülebilir Bakış</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-primary mb-6 leading-tight">
                  Sadece Temizlik Değil,<br />Değer Üretiyoruz
                </h2>
                <div className="space-y-4 text-primary/60 text-sm leading-relaxed">
                  <p>
                    Mas Grup olarak yaşadığımız dünyaya karşı sorumluluğumuzun farkındayız. Bu nedenle düzenli olarak doğaya ve canlılara katkı sağlayan projelere destek oluyoruz.
                  </p>
                  <p>
                    Bunu bir kampanya olarak değil, hayatımızın bir parçası olarak görüyoruz. Çünkü temiz bir gelecek, küçük adımlarla başlar.
                  </p>
                </div>
              </div>

              {/* 3 value cards */}
              <div className="space-y-3 min-w-[190px]">
                {[
                  { icon: Leaf,   text: "Doğaya saygı, yaşama değer." },
                  { icon: Users,  text: "Topluma katkı, ortak geleceğimiz." },
                  { icon: Globe,  text: "Küçük adımlar, büyük değişimler." },
                ].map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[#f4f8fc] border border-primary/8 rounded-2xl p-4 flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <v.icon className="w-4 h-4" />
                    </div>
                    <p className="text-primary/70 text-xs font-semibold leading-snug pt-1">{v.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* MANİFESTO */}
      <section className="py-20 bg-[#0D1B3E] relative overflow-hidden text-white">
        {/* Dot texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        {/* Decorative circle top-right */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full border border-white/[0.06] pointer-events-none" />
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-accent/[0.08] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-[3fr,2fr] gap-14 items-start">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              {/* Quote + label */}
              <div>
                <span className="text-accent text-5xl font-serif leading-none block mb-3 select-none">"</span>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-accent text-xs font-bold tracking-[0.28em] uppercase">DEĞERLERİMİZ</span>
                  <div className="flex-1 h-px bg-accent/40 max-w-[48px]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-snug">
                  Nasıl çalıştığımız değil,{" "}
                  <span className="text-accent">neden</span>{" "}
                  çalıştığımız önemlidir.
                </h2>
              </div>

              {/* Paragraphs */}
              <div className="space-y-4 text-white/50 text-sm leading-relaxed">
                <p>
                  Mas Grup olarak biz, temizlik hizmetini yalnızca bir iş olarak görmüyoruz. Bizim için her yaşam alanı, bir insanın hayatına dokunduğumuz yerdir.
                </p>
                <p>
                  Yaptığımız işin temelinde; güven, özen ve saygı vardır. Her detayı önemseriz. Çünkü biliriz ki fark, gözden kaçan yerlerde gizlidir.
                </p>
              </div>

              {/* Values row */}
              <div className="flex items-center gap-6 pt-2">
                {[
                  { icon: Shield, label: "Güven" },
                  { icon: Globe, label: "Özen" },
                  { icon: UserCircle2, label: "Saygı" },
                ].map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/60 text-sm font-medium">
                    <Icon className="w-4 h-4 text-accent" />
                    {label}
                    {i < 2 && <span className="ml-4 w-px h-4 bg-white/20 block" />}
                  </div>
                ))}
              </div>

              {/* Logo */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <img src={logoDark} alt="Mas Grup" className="h-8 w-auto opacity-90" />
                <span className="text-white/30 text-xs italic">Her detayda, <span className="text-accent not-italic">insan</span> için.</span>
              </div>
            </motion.div>


          </div>
        </div>
      </section>


    </div>
  );
}
