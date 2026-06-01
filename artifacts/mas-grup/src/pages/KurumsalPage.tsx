import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Home, Building2, Crown, Briefcase, Star, Factory, Eye, ClipboardList, Sparkles, ZoomIn, CheckSquare } from "lucide-react";

import ana3 from "@assets/ana3_1780314877331.jpeg";
import ana6 from "@assets/ana6_1780314877332.jpeg";

export default function KurumsalPage() {
  useEffect(() => { document.title = "Kurumsal | Mas Grup"; }, []);
  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="relative h-[40vh] bg-primary flex items-center pt-20">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2 text-white/70 text-sm font-medium mb-6 uppercase tracking-wider">
              <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Kurumsal</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Kurumsal Çözümler</h1>
            <p className="text-xl text-white/90 font-light max-w-2xl">
              Kurumsal müşterilerimize özel, sistemli ve kaliteli çözümler.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kurumsal Profil */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-8">Kurumsal Kimliğimiz</h2>
              <p className="text-lg text-primary/80 leading-relaxed mb-6">
                Mas Grup olarak kurumsal müşterilerimize uzun vadeli, sürdürülebilir ve kalite güvenceli temizlik hizmetleri sunuyoruz. Her projemizde aynı sistematik yaklaşım ve özenle çalışıyoruz. Kalite kontrol süreçlerimiz, her hizmetin en yüksek standartta teslim edilmesini sağlar.
              </p>
              <p className="text-lg text-primary/80 leading-relaxed">
                İş dünyasının dinamiklerini anlıyor ve çalışma alanlarının verimliliğini doğrudan etkileyen hijyen faktörünü şansa bırakmıyoruz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img src={ana3} alt="Kurumsal Ofis" className="rounded-2xl shadow-2xl w-full aspect-video object-cover" />
              <div className="absolute -bottom-8 -left-8 bg-accent text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="text-5xl font-black mb-2">100%</div>
                <div className="text-lg font-medium">Müşteri<br/>Memnuniyeti</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kalite Sürecimiz (White bg version of homepage process) */}
      <section className="py-24 bg-[#f0f5fa]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-primary mb-6">Kalite Sürecimiz</h2>
            <p className="text-primary/70 text-lg">Kurumsal projelerde uyguladığımız standart operasyon prosedürü.</p>
          </div>

          <div className="relative">
            <div className="absolute top-12 left-0 right-0 h-0.5 hidden lg:block border-t-2 border-dashed border-primary/20" />
            
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
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-md">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-2">{step.title}</h4>
                  <p className="text-primary/60 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet Verdiğimiz Segmentler */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary">Hizmet Verdiğimiz Segmentler</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Home, title: "Villa Projeleri", desc: "Özel villalar ve lüks konutlar için premium hizmet." },
              { icon: Building2, title: "Plaza ve AVM", desc: "Büyük ölçekli ticari alanlar için kapsamlı çözümler." },
              { icon: Crown, title: "Luxury Living", desc: "Üst segment yaşam projelerine özel hizmet standardı." },
              { icon: Briefcase, title: "Kurumsal Ofisler", desc: "İş dünyasına yönelik sürekli ve güvenilir temizlik." },
              { icon: Star, title: "Premium Services", desc: "Özel taleplere uyarlanmış premium hizmet paketleri." },
              { icon: Factory, title: "Sanayi Tesisleri", desc: "Endüstriyel alanlara yönelik profesyonel temizlik." }
            ].map((segment, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-primary/10 p-8 rounded-2xl hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#f0f5fa] flex items-center justify-center text-primary mb-6">
                  <segment.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{segment.title}</h3>
                <p className="text-primary/70">{segment.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sosyal Sorumluluk */}
      <section className="bg-primary text-white overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-12 md:p-20 lg:p-32 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Sadece Temizlik Değil, Değer Üretiyoruz
              </h2>
              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  Mas Grup olarak yaşadığımız dünyaya karşı sorumluluğumuzun farkındayız. Bu nedenle düzenli olarak doğaya ve canlılara katkı sağlayan projelere destek oluyoruz.
                </p>
                <p>
                  Bunu bir kampanya olarak değil, hayatımızın bir parçası olarak görüyoruz. Çünkü temiz bir gelecek, küçük adımlarla başlar.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="h-[400px] md:h-auto w-full relative">
            <img src={ana6} alt="Sosyal Sorumluluk" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Marka Manifestosu */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-accent text-sm font-bold tracking-widest uppercase">MANİFESTOMUZ</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Temizlik bir detay değil,<br />bir standarttır.
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
              Mas Grup olarak her projeye aynı ciddiyetle yaklaşıyoruz. Büyük ya da küçük, kurumsal ya da bireysel — her müşterimize sunduğumuz hizmet aynı kalite standartlarını taşır. Çünkü bize göre temizlik; güven, saygı ve özenin somut yansımasıdır.
            </p>
            <p className="text-white/70 text-base leading-relaxed max-w-2xl mx-auto italic">
              "Temiz alanlar, güçlü yarınlar." — Mas Grup
            </p>
          </motion.div>
        </div>
      </section>

      {/* Referanslarımız Placeholder */}
      <section className="py-24 bg-[#f0f5fa]">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16">Güvenilir Hizmet Anlayışımızı Tercih Edenler</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {["Villa Projeleri", "Plaza Residence", "Luxury Living", "Corporate Offices", "Premium Services", "Elite Residence"].map((ref, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary/40" />
                </div>
                <span className="font-medium text-primary/60 text-sm">{ref}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}