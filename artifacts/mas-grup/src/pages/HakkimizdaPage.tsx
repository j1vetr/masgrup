import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, Heart, Star, Award, ChevronRight } from "lucide-react";

import ana5 from "@assets/ana5_1780314877332.jpeg";

export default function HakkimizdaPage() {
  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="relative h-[50vh] flex items-center pt-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ana5})` }}
        />
        <div className="absolute inset-0 z-0 bg-primary/80" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2 text-white/70 text-sm font-medium mb-6 uppercase tracking-wider">
              <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Hakkımızda</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Hakkımızda</h1>
            <p className="text-xl text-white/90 font-light max-w-2xl">
              Güven, özen ve saygıyla hizmet eden bir marka.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hikayemiz */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-8">Hikayemiz</h2>
              <div className="space-y-6 text-lg text-primary/80 leading-relaxed">
                <p>
                  Mas Grup, profesyonel temizlik sektöründe fark yaratmak amacıyla kurulmuştur. Standart hizmetin ötesine geçerek müşterilerimize sistemli, denetimli ve kalite odaklı bir deneyim sunmayı hedefliyoruz.
                </p>
                <p>
                  Her hizmetimiz, aynı titizlik ve özenle yürütülür. Bizim için her alan, sadece temizlenmesi gereken bir mekan değil, insanların yaşamını ve çalışmalarını sürdürdüğü değerli alanlardır. Bu anlayış, bizi sektörde güvenilir ve tercih edilen bir marka haline getirmiştir.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-5 grid gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {[
                { stat: "500+", label: "Mutlu Müşteri" },
                { stat: "10+", label: "Yıl Deneyim" },
                { stat: "4", label: "Şehirde Hizmet" }
              ].map((item, i) => (
                <div key={i} className="bg-primary text-white p-8 rounded-2xl flex items-center gap-6">
                  <span className="text-5xl font-black text-accent">{item.stat}</span>
                  <span className="text-lg font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="py-12 bg-[#f0f5fa]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-white p-12 rounded-3xl"
            >
              <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">GÖREVİMİZ</span>
              <h3 className="text-3xl font-bold mb-6">Misyonumuz</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Yaşam ve çalışma alanlarına sistemli, hijyenik ve kaliteli temizlik çözümleri sunmak; müşterilerimizin güvenini hizmetlerimizle kazanmak.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-accent text-white p-12 rounded-3xl"
            >
              <span className="text-white/80 text-sm font-bold tracking-widest uppercase mb-4 block">HEDEFİMİZ</span>
              <h3 className="text-3xl font-bold mb-6">Vizyonumuz</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Türkiye'nin en güvenilir ve tercih edilen profesyonel temizlik markası olmak; eğitimli ekip ve yenilikçi hizmet anlayışıyla sektörde lider konuma gelmek.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Değerlerimiz</h2>
            <p className="text-primary/70 text-lg">Hizmet anlayışımızın temelini oluşturan kurumsal değerlerimiz.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Shield, title: "Güven", desc: "Her müşterimize güvenilir, şeffaf ve dürüst bir hizmet sunarız." },
              { icon: Heart, title: "Özen", desc: "Müşteri memnuniyetini ön planda tutarak her detayı özenle ele alırız." },
              { icon: Star, title: "Saygı", desc: "Müşterilerimize ve ekibimize eşit saygı ve değer gösteririz." },
              { icon: Award, title: "Disiplin", desc: "Tüm hizmetlerimizi belirlenen standartlar çerçevesinde sistematik olarak sunarız." }
            ].map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-8 border border-primary/10 rounded-2xl bg-white hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#f0f5fa] text-accent flex items-center justify-center shrink-0">
                  <val.icon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-primary mb-3">{val.title}</h4>
                  <p className="text-primary/70 leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* İnsan Odaklılık */}
      <section className="py-24 bg-[#f0f5fa]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">EKİBİMİZ</span>
              <h2 className="text-4xl font-bold text-primary mb-8">İnsan Odaklılık</h2>
              <div className="space-y-6 text-lg text-primary/80 leading-relaxed">
                <p>
                  Bizim için temizlik, yalnızca bir hizmet değil; insanların yaşam kalitesini doğrudan etkileyen bir sorumluluktur. Bu anlayışla her ekip üyemizi titizlikle seçiyor, sürekli eğitimle destekliyoruz.
                </p>
                <p>
                  Mas Grup ekibi; güvenilir, saygılı ve özenli bireylerden oluşur. Her temizlik uzmanımız Mas Akademi süreçlerinden geçmiş, saha deneyimiyle pekişmiş profesyonellerdir.
                </p>
                <p>
                  Çünkü güçlü bir ekip, güçlü bir hizmet demektir. Ve güçlü bir hizmet, mutlu müşteriler demektir.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { stat: "500+", label: "Eğitimli Personel" },
                { stat: "10+", label: "Yıl Deneyim" },
                { stat: "4", label: "Şehirde Hizmet" },
                { stat: "100%", label: "Memnuniyet Hedefi" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-2xl text-center shadow-sm border border-primary/10"
                >
                  <span className="text-4xl font-black text-accent block mb-2">{item.stat}</span>
                  <span className="text-sm font-medium text-primary/70">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${ana5})` }}
        />
        <div className="absolute inset-0 z-0 bg-primary/88" />

        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-accent text-sm font-bold tracking-widest uppercase">MANİFESTOMUZ</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              "Bizim için temizlik bir görev değil,<br />bir yaşam felsefesidir."
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
              Her alanda titizlik, her müşteride güven, her hizmette özen. Mas Grup olarak sunduğumuz yalnızca temiz bir alan değil; huzurlu, sağlıklı ve güvenilir bir yaşam ortamıdır.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}