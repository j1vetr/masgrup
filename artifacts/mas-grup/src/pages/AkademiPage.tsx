import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Sparkles, ZoomIn, MessageCircle, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

import ana4 from "@assets/ana4_1780314877331.jpeg";

export default function AkademiPage() {
  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="relative h-[60vh] flex items-center pt-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ana4})` }}
        />
        <div className="absolute inset-0 z-0 bg-primary/90" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-accent font-bold tracking-widest uppercase text-sm md:text-base mb-6">
              EĞİTİM | KALİTE | DİSİPLİN
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8">Mas Akademi</h1>
            <p className="text-xl text-white/90 font-light leading-relaxed">
              Her adımda mükemmeli hedefleyen, sektöre yön veren profesyonel temizlik eğitim platformu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Mas Akademi */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={ana4} 
                alt="Mas Akademi Eğitim" 
                className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-primary/80 leading-relaxed"
            >
              <h2 className="text-4xl font-bold text-primary mb-8">Mas Akademi Nedir?</h2>
              <p>
                Mas Grup bünyesinde yer alan Mas Akademi, tüm ekip üyelerinin profesyonel eğitim süreçlerinden geçtiği özel bir sistemdir. Her çalışanımız, sahaya çıkmadan önce Mas Akademi'nin eğitim programından geçer.
              </p>
              <p>
                Bu sistem, hizmet kalitemizin tutarlılığını garanti eder ve her müşterimize aynı standartta hizmet sunulmasını sağlar. Mas Akademi, sadece bir eğitim merkezi değil, kurumsal kültürümüzün temel yapı taşıdır.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eğitim Modülleri */}
      <section className="py-24 bg-[#f0f5fa]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Eğitim Modülleri</h2>
            <p className="text-primary/70 text-lg">Uzman kadromuz tarafından titizlikle hazırlanan kapsamlı eğitim programımız.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Sparkles, title: "Temizlik Teknikleri", desc: "Profesyonel temizlik yöntemleri, ekipman kullanımı ve hijyen protokolleri." },
              { icon: ZoomIn, title: "Detay Odaklı Çalışma", desc: "Her alanda standartsız çalışmayı önleyen detay protokolleri ve kontrol listeleri." },
              { icon: MessageCircle, title: "Müşteri İletişimi", desc: "Saygılı, güven veren ve profesyonel müşteri iletişim becerileri." },
              { icon: Award, title: "Hizmet Standardı", desc: "Mas Grup kalite standartlarının her durumda tutarlı biçimde uygulanması." }
            ].map((module, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-2xl border border-primary/5 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <module.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{module.title}</h3>
                <p className="text-primary/70 leading-relaxed text-lg">{module.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Akademi Değerleri Strip */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 text-center">
            {["Profesyonellik", "Kalite", "Disiplin", "Süreklilik", "Güven"].map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3 w-[120px] md:w-auto"
              >
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-accent">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <span className="font-bold tracking-wide uppercase text-sm">{val}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 italic leading-tight">
              "Güçlü ekip, kaliteli hizmetin temelidir."
            </h2>
            <p className="text-xl text-primary/60 mb-12">Mas Akademi, kaliteli hizmetin temelidir.</p>
            
            <Link href="/hizmetlerimiz">
              <Button size="lg" className="bg-accent text-white hover:bg-accent/90 h-14 px-8 text-lg font-bold">
                Hizmetlerimizi İnceleyin
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}