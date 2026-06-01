import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, Users, Shield, RefreshCw, Home, Building2, HardHat, Sparkles, Eye, ClipboardList, ZoomIn, CheckSquare, Check, ChevronRight, Droplets, Star, Clock, Smile, CalendarDays, Leaf, Settings, Globe, UserCircle2 } from "lucide-react";
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

      {/* HERO SECTION */}
      <section className="relative bg-primary" style={{ paddingTop: 52 }}>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ana1})` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050d1a]/97 via-[#080f20]/82 to-[#0a1428]/28" />

        <div className="container relative z-10 mx-auto px-4 md:px-8 py-14 md:py-20">
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
              <p className="text-white/85 text-sm leading-relaxed mb-7" style={{ maxWidth: 280 }}>
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
      <section className="grid lg:grid-cols-3 min-h-[42vh]">

        {/* Panel 01 */}
        <div className="relative overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${ana3})` }}
          />
          <div className="absolute inset-0 bg-[#050d1a]/91" />
          <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center gap-3 mb-6">
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
          <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center gap-3 mb-6">
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
          <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center gap-3 mb-6">
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

      {/* REFERENCE BRANDS STRIP */}
      <section className="py-8 bg-white border-t border-primary/8">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-center text-xs font-bold tracking-[0.18em] text-primary/50 uppercase mb-6">
            Güvenilir Hizmet Anlayışımızı Tercih Eden Markalar
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { icon: Home, label: "Villa\nProjeleri" },
              { icon: Building2, label: "Plaza\nResidence" },
              { icon: Sparkles, label: "Luxury\nLiving" },
              { icon: HardHat, label: "Corporate\nOffices" },
              { icon: CheckCircle, label: "Premium\nServices" },
            ].map((brand, i) => (
              <div key={i} className="flex flex-col items-center gap-2 text-center opacity-50 hover:opacity-100 transition-opacity cursor-default">
                <brand.icon className="w-7 h-7 text-primary" />
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider whitespace-pre-line leading-tight">{brand.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEDEN MAS GRUP? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* LEFT — tall image card with overlay items */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ minHeight: 540 }}
            >
              <img
                src={nedenBg}
                alt="Mas Grup Bina"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/95 via-[#0D1B3E]/40 to-transparent" />

              <div className="relative z-10 flex flex-col justify-end h-full p-8 pt-[320px]">
                {[
                  { icon: Users, title: "Eğitimli Ekip", desc: "Alanında uzman ve düzenli eğitim alan ekip." },
                  { icon: Shield, title: "Denetimli Hizmet", desc: "Her aşama kontrol edilir, kalite standartları sürekli korunur." },
                  { icon: Settings, title: "Sistemli Yaklaşım", desc: "Planlı süreç, doğru uygulama, garantili sonuç." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 py-4 border-b border-white/10 last:border-0">
                    <div className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{item.title}</p>
                      <p className="text-white/60 text-xs leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — heading, 2×2 cards, quote */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-8"
            >
              <div>
                <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block">Farkımız</span>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  Neden <span className="text-accent">Mas Grup?</span>
                </h2>
                <p className="text-primary/60 text-base leading-relaxed">
                  Mas Grup, standart temizlik anlayışının ötesinde bir hizmet sunar.<br />
                  Her süreç planlı, her detay kontrollüdür.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: CalendarDays, title: "Sistemli Temizlik Yaklaşımı", desc: "Her hizmet belirli bir plan ve sistem dahilinde ilerler." },
                  { icon: Users, title: "Eğitimli ve Denetimli Ekip", desc: "Tüm ekip üyeleri düzenli eğitimlerden geçer ve denetlenir." },
                  { icon: Shield, title: "Kalite Kontrol Süreci", desc: "Hizmet sadece uygulanmaz, sonuçlar da kontrol edilir." },
                  { icon: Leaf, title: "Sürdürülebilir Hizmet Standardı", desc: "Her müşterimizde aynı kaliteyi sunan sürdürülebilir hizmet modeli." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white border border-primary/10 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-3">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <p className="font-bold text-primary text-sm leading-snug mb-2">{item.title}</p>
                    <p className="text-primary/55 text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Quote card */}
              <div className="relative bg-[#f0f7ff] border border-accent/15 rounded-2xl p-6 overflow-hidden">
                <span className="absolute top-3 left-5 text-accent text-5xl font-serif leading-none select-none">"</span>
                <p className="text-primary font-semibold text-base leading-relaxed pl-8 pt-2">
                  'Bizim için temizlik, sadece görüneni değil,{" "}
                  <span className="text-accent">hissedileni değiştirmektir.</span>'
                </p>
                <Leaf className="absolute bottom-3 right-4 w-10 h-10 text-accent/15" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* HİZMETLERİMİZ PREVIEW */}
      <section className="py-24 bg-[#f4f8fc]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block">Çözümlerimiz</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Profesyonel Hizmetler</h2>
            <p className="text-primary/60 text-base leading-relaxed">
              Her alanın ihtiyacına özel, planlı ve sistemli temizlik çözümleriyle<br />
              yaşam ve çalışma alanlarınızı daha sağlıklı ve verimli hale getiriyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Home,      img: svcEv,      title: "Ev Temizliği",    desc: "Yaşam alanlarınızda detaylı, hijyenik ve ferah bir ortam sağlıyoruz." },
              { icon: Building2, img: svcOfis,    title: "Ofis Temizliği",  desc: "Çalışma alanlarınızda verimliliği artıran düzenli ve profesyonel temizlik." },
              { icon: HardHat,   img: svcInsaat,  title: "İnşaat Sonrası",  desc: "Zorlu alanlarda detaylı ve sistemli temizlik çözümleri." },
              { icon: Sparkles,  img: svcDetay,   title: "Detay Temizlik",  desc: "Gözden kaçan alanları standart haline getiren özel uygulamalar." },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col"
              >
                {/* Photo */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Icon badge */}
                  <div className="absolute bottom-0 left-6 translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-accent border border-accent/10">
                    <service.icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-8 px-6 pb-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-primary mb-1">{service.title}</h3>
                  <div className="w-8 h-0.5 bg-accent mb-3" />
                  <p className="text-primary/60 text-sm leading-relaxed flex-1">{service.desc}</p>
                  <Link
                    href="/hizmetlerimiz"
                    className="mt-5 text-accent text-sm font-semibold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                  >
                    Detaylı Bilgi <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/hizmetlerimiz">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-10 gap-2">
                Tüm Hizmetleri Gör <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
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

            {/* Right: İnsan Odaklılık card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:mt-14"
            >
              <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-7 relative overflow-hidden group hover:border-accent/30 transition-colors duration-500">
                <UserCircle2 className="absolute -bottom-4 -right-4 w-28 h-28 text-white/[0.04] pointer-events-none" />
                <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent mb-5">
                  <UserCircle2 className="w-6 h-6" />
                </div>
                <div className="w-6 h-0.5 bg-accent mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">İnsan Odaklılık</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Bizim için en büyük değer insandır. Müşterilerimize olduğu kadar, birlikte çalıştığımız ekibe de aynı saygı ve özeni gösteririz. Çünkü güçlü bir ekip, güçlü bir hizmet demektir.
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>


    </div>
  );
}
