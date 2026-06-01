import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, Users, Shield, RefreshCw, Home, Building2, HardHat, Sparkles, Eye, ClipboardList, ZoomIn, CheckSquare, Check, ChevronRight, Droplets, Star, Clock, Smile, CalendarDays, Leaf, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

import ana1 from "@assets/ana5_1780317282679.jpeg";
import ana3 from "@assets/ana3_1780314877331.jpeg";
import ana4 from "@assets/ana4_1780314877331.jpeg";
import ana5 from "@assets/ana5_1780314877332.jpeg";
import ana6 from "@assets/ana6_1780314877332.jpeg";
import nedenBg from "@assets/ana3_1780318262914.jpeg";

export default function HomePage() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative bg-primary" style={{ paddingTop: 52 }}>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ana1})` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/93 via-primary/68 to-primary/12" />

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
                <span className="text-accent block">Kurumsal Güven.</span>
              </h1>
              <p className="text-white/85 text-sm leading-relaxed mb-7" style={{ maxWidth: 280 }}>
                Mas Grup, yaşam alanlarınızı ve iş yerlerinizi en yüksek hijyen standartlarında buluşturur.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/hizmetlerimiz">
                  <Button className="bg-accent hover:bg-accent/90 text-white font-bold tracking-wide text-sm px-5 h-10">
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
          <div className="absolute inset-0 bg-primary/85" />
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
          <div className="absolute inset-0 bg-primary/80" />
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
          <div className="absolute inset-0 bg-primary/82" />
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block">Çözümlerimiz</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Profesyonel Hizmetler</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: Home, title: "Ev Temizliği", desc: "Yaşam alanlarınızda detaylı, hijyenik ve ferah bir ortam sağlıyoruz." },
              { icon: Building2, title: "Ofis Temizliği", desc: "Çalışma alanlarınızda verimliliği artıran düzenli ve profesyonel temizlik." },
              { icon: HardHat, title: "İnşaat Sonrası", desc: "Zorlu alanlarda detaylı ve sistemli temizlik çözümleri." },
              { icon: Sparkles, title: "Detay Temizlik", desc: "Gözden kaçan alanları standart haline getiren özel uygulamalar." }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-primary/10 p-8 hover:-translate-y-2 hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-primary/70 mb-6 leading-relaxed">{service.desc}</p>
                <Link href="/hizmetlerimiz" className="text-accent font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Detaylı Bilgi <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/hizmetlerimiz">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                Tüm Hizmetleri Gör
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SİSTEMLİ TEMİZLİK YAKLAŞIMI */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block">Nasıl Çalışıyoruz?</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Sistemli Temizlik Yaklaşımı</h2>
            <p className="text-white/70 text-lg">Mas Grup'ta her hizmet belirli bir sistemle ilerler.</p>
          </div>

          <div className="relative">
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-white/10 hidden lg:block border-t-2 border-dashed border-accent/50" />
            <div className="grid lg:grid-cols-5 gap-12 relative z-10">
              {[
                { icon: Eye, title: "Gözlem", desc: "Alan değerlendirmesi yapılır" },
                { icon: ClipboardList, title: "Hazırlık", desc: "Ekipman ve plan hazırlanır" },
                { icon: Sparkles, title: "Temizlik", desc: "Profesyonel uygulama başlar" },
                { icon: ZoomIn, title: "Detay", desc: "Her köşe kontrol edilir" },
                { icon: CheckSquare, title: "Kontrol", desc: "Kalite onayı alınır" }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold mb-4">
                    {idx + 1}
                  </div>
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-white/60 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAS AKADEMİ TEASER */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block">EĞİTİM · KALİTE · DİSİPLİN</span>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Mas Akademi</h2>
                <p className="text-primary/70 text-lg leading-relaxed">
                  Mas Grup bünyesinde yer alan Mas Akademi, tüm ekip üyelerinin profesyonel eğitim süreçlerinden geçtiği özel bir sistemdir.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {["Temizlik teknikleri", "Detay odaklı çalışma", "Müşteri iletişimi", "Hizmet standardı"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-primary">{item}</span>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-4 border-accent pl-6 text-xl text-primary italic font-medium">
                "Güçlü ekip, kaliteli hizmetin temelidir."
              </blockquote>

              <Link href="/akademi">
                <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white">
                  Akademi Hakkında Bilgi Al
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={ana4}
                alt="Mas Akademi"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOSYAL SORUMLULUK */}
      <section className="bg-[#f0f5fa] overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="h-[400px] md:h-auto w-full relative">
            <img src={ana6} alt="Sosyal Sorumluluk" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="p-12 md:p-20 lg:p-32 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 leading-tight">
                Sadece Temizlik Değil, Değer Üretiyoruz
              </h2>
              <div className="space-y-6 text-lg text-primary/70 leading-relaxed">
                <p>
                  Mas Grup olarak yaşadığımız dünyaya karşı sorumluluğumuzun farkındayız. Bu nedenle düzenli olarak doğaya ve canlılara katkı sağlayan projelere destek oluyoruz.
                </p>
                <p>
                  Bunu bir kampanya olarak değil, hayatımızın bir parçası olarak görüyoruz. Çünkü temiz bir gelecek, küçük adımlarla başlar.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MANİFESTO */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[20rem] text-accent/10 font-serif leading-none select-none">"</div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
              Nasıl çalıştığımız değil, neden çalıştığımız önemlidir.
            </h2>
            <div className="space-y-8 text-xl text-white/80 leading-relaxed mb-16">
              <p>
                Mas Grup olarak biz, temizlik hizmetini yalnızca bir iş olarak görmüyoruz. Bizim için her yaşam alanı, bir insanın hayatına dokunduğumuz yerdir.
              </p>
              <p>
                Yaptığımız işin temelinde; güven, özen ve saygı vardır. Her detayı önemseriz. Çünkü biliriz ki fark, gözden kaçan yerlerde gizlidir.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto text-left">
              <h3 className="text-2xl font-bold text-white mb-4">İnsan Odaklılık</h3>
              <p className="text-white/70">
                Bizim için en büyük değer insandır. Müşterilerimize olduğu kadar, birlikte çalıştığımız ekibe de aynı saygı ve özeni gösteririz.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-primary to-[#00B4D8]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Profesyonel temizlik hizmeti için bizimle iletişime geçin.
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Mas Grup, yaşam ve çalışma alanlarınız için sistemli, güvenilir ve kaliteli çözümler sunar.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/iletisim">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-14 px-8 text-lg font-bold">
                  Teklif Al
                </Button>
              </Link>
              <Link href="/iletisim">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8 text-lg">
                  İletişime Geç
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
