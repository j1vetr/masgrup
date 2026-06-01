import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, Users, Shield, RefreshCw, Home, Building2, HardHat, Sparkles, Eye, ClipboardList, ZoomIn, CheckSquare, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import ana2 from "@assets/ana2_1780314877331.jpeg";
import ana3 from "@assets/ana3_1780314877331.jpeg";
import ana4 from "@assets/ana4_1780314877331.jpeg";
import ana6 from "@assets/ana6_1780314877332.jpeg";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] flex items-center pt-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ana2})` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/95 via-primary/65 to-primary/15" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-accent text-sm md:text-base font-bold tracking-[0.2em] mb-6">
                PROFESYONELLİK · GÜVENİLİRLİK · KALİTE
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6">
                Profesyonel Temizlik Hizmetleri
              </h1>
              <p className="text-xl md:text-2xl text-white/90 italic font-light mb-8">
                "Temiz alanlar, güçlü yarınlar."
              </p>
              <p className="text-lg text-white/85 mb-10 max-w-2xl leading-relaxed">
                Mas Grup, yaşam ve çalışma alanlarınızda yalnızca temizlik değil, detay odaklı, sistemli ve güvenilir çözümler sunar.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-16">
                <Link href="/hizmetlerimiz">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-8 text-base">
                    Hizmetlerimiz
                  </Button>
                </Link>
                <Link href="/hakkimizda">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8 text-base">
                    Bizi Tanıyın
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-white/90 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>500+ Mutlu Müşteri</span>
                </div>
                <div className="w-px h-4 bg-white/20 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent" />
                  <span>10+ Yıl Deneyim</span>
                </div>
                <div className="w-px h-4 bg-white/20 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-accent" />
                  <span>ISO Sertifikalı</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEDEN MAS GRUP? */}
      <section className="py-24 bg-[#f0f5fa]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img 
                src={ana3} 
                alt="Mas Grup Kurumsal Çözümler" 
                className="rounded-2xl shadow-xl w-full aspect-[4/5] object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-8"
            >
              <div>
                <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block">Farkımız</span>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Neden Mas Grup?</h2>
                <p className="text-primary/70 text-lg leading-relaxed">
                  Mas Grup, standart temizlik anlayışının ötesinde bir hizmet sunar. Her süreç planlı, her detay kontrollüdür.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: CheckCircle, text: "Sistemli Temizlik Yaklaşımı" },
                  { icon: Users, text: "Eğitimli ve Denetimli Ekip" },
                  { icon: Shield, text: "Kalite Kontrol Süreci" },
                  { icon: RefreshCw, text: "Sürdürülebilir Hizmet Standardı" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="font-semibold text-primary text-lg">{item.text}</span>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-4 border-accent pl-6 text-xl text-primary italic font-medium">
                "Bizim için temizlik, sadece görüneni değil, hissedileni değiştirmektir."
              </blockquote>
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

          <div className="mt-20 text-center">
            <p className="italic text-white/70 text-lg">"Bu sistem sayesinde her müşterimize aynı kaliteyi sunarız."</p>
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
                Yaptığımız işin temelinde; güven, özen ve saygı vardır. Her detayı önemseriz. Çünkü biliriz ki fark, gözden kaçan yerlerde gizlidir. Bizim için temizlik, sadece görüneni düzeltmek değil, yaşam alanlarına huzur ve ferahlık katmaktır.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto text-left">
              <h3 className="text-2xl font-bold text-white mb-4">İnsan Odaklılık</h3>
              <p className="text-white/70">
                Bizim için en büyük değer insandır. Müşterilerimize olduğu kadar, birlikte çalıştığımız ekibe de aynı saygı ve özeni gösteririz. Çünkü güçlü bir ekip, güçlü bir hizmet demektir.
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