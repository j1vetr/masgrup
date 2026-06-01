import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

import ana7 from "@assets/ana7_1780314877332.jpeg";
import ana2 from "@assets/ana2_1780314877331.jpeg";
import ana3 from "@assets/ana3_1780314877331.jpeg";
import ana5 from "@assets/ana5_1780314877332.jpeg";

export default function HizmetlerimizPage() {
  const services = [
    {
      id: "ev-temizligi",
      title: "Ev Temizliği",
      desc: "Yaşam alanlarınızda detaylı, hijyenik ve ferah bir ortam sağlıyoruz. Mutfak, banyo, salon ve yatak odalarında kapsamlı temizlik hizmetleri sunuyoruz. Hijyen protokollerimizle sağlıklı ve ferah bir yaşam ortamı oluşturuyoruz.",
      image: ana7,
      features: ["Haftalık/Aylık Periyodik Temizlik", "Derin Temizlik", "Taşınma Öncesi/Sonrası", "Hijyen Paketi"],
      bg: "bg-white",
      reverse: false
    },
    {
      id: "ofis-temizligi",
      title: "Ofis Temizliği",
      desc: "Çalışma alanlarınızda verimliliği artıran düzenli ve profesyonel temizlik. Ofis ortamınızın her köşesi, üretkenliğinizi desteklemek için profesyonel ekibimizce hazırlanır.",
      image: ana2,
      features: ["Günlük/Haftalık Hizmet", "Toplantı Odası Hazırlığı", "Ortak Alan Temizliği", "Cam ve Cephe Silme"],
      bg: "bg-[#f0f5fa]",
      reverse: true
    },
    {
      id: "insaat-sonrasi",
      title: "İnşaat Sonrası Temizlik",
      desc: "İnşaat ve tadilat sonrasında oluşan kir, toz ve artıkları profesyonel ekipmanlarımızla sistematik biçimde temizliyoruz. Her aşamada kalite kontrolü yapıyoruz.",
      image: ana3,
      features: ["Kaba İnşaat Temizliği", "İnce Temizlik", "Cam ve Çerçeve Temizliği", "Zemin Parlatma ve Bakımı"],
      bg: "bg-white",
      reverse: false
    },
    {
      id: "detay-temizlik",
      title: "Detay Temizlik",
      desc: "Gözden kaçan alanları standart haline getiren özel uygulamalar. Her köşe, her yüzey, her detay — gözden kaçan hiçbir şey kalmaz.",
      image: ana5,
      features: ["Halı ve Koltuk Temizliği", "Mutfak Aparatları Temizliği", "Banyo Derin Temizliği", "Özel Yüzey Bakımı"],
      bg: "bg-[#f0f5fa]",
      reverse: true
    }
  ];

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
              <span className="text-white">Hizmetlerimiz</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Hizmetlerimiz</h1>
            <p className="text-xl text-white/90 font-light max-w-2xl">
              Dört ana kategoride profesyonel temizlik çözümleri.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <div>
        {services.map((service, index) => (
          <section key={service.id} id={service.id} className={`py-24 ${service.bg} overflow-hidden`}>
            <div className="container mx-auto px-4 md:px-8">
              <div className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
                
                <motion.div 
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: service.reverse ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/10 translate-x-4 translate-y-4 rounded-2xl -z-10"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div 
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: service.reverse ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h2 className="text-4xl font-bold text-primary mb-6">{service.title}</h2>
                  <p className="text-lg text-primary/80 leading-relaxed mb-10">
                    {service.desc}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                        <span className="font-medium text-primary">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-12">
                    <Link href="/iletisim">
                      <Button className="bg-primary hover:bg-primary/90 text-white">
                        Bu Hizmet İçin Teklif Al
                      </Button>
                    </Link>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Strip */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Hizmet almak için hemen iletişime geçin.
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/iletisim">
                <Button size="lg" className="bg-accent text-white hover:bg-accent/90 h-14 px-8 text-lg font-bold">
                  Teklif Al
                </Button>
              </Link>
              <a href="tel:+905321234567">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8 text-lg">
                  Bizi Arayın
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}