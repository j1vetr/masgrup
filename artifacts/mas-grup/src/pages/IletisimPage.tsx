import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import heroImg from "@assets/iletisim_hero.webp";

const formSchema = z.object({
  adSoyad:    z.string().min(2, "Ad Soyad en az 2 karakter olmalıdır"),
  telefon:    z.string().min(10, "Geçerli bir telefon numarası giriniz"),
  email:      z.string().email("Geçerli bir e-posta adresi giriniz"),
  hizmetTuru: z.string({ required_error: "Lütfen bir hizmet türü seçiniz" }),
  mesaj:      z.string().optional(),
});

const contactItems = [
  {
    icon: Phone,
    label: "Telefon",
    value: "0533 601 76 22",
    href: "tel:+905336017622",
  },
  {
    icon: Mail,
    label: "E-posta",
    value: "info@masgrupcleaning.com.tr",
    href: "mailto:info@masgrupcleaning.com.tr",
  },
  {
    icon: MapPin,
    label: "Adres",
    value: "Yeşilyurt Mah. Yeni Havalimanı Cad. No:2/41\nBakırköy / İSTANBUL",
    href: null,
  },
  {
    icon: Clock,
    label: "Çalışma Saatleri",
    value: "Pazartesi – Cumartesi\n08:00 – 18:00",
    href: null,
  },
];

export default function IletisimPage() {
  useEffect(() => { document.title = "İletişim | Mas Grup"; }, []);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);

  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { adSoyad: "", telefon: "", email: "", mesaj: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Talebiniz alındı.",
      description: "En kısa sürede sizinle iletişime geçeceğiz.",
    });
    form.reset();
  }

  return (
    <div className="w-full overflow-hidden">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-[70vh] flex items-center overflow-hidden bg-[#030b1a]">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img fetchPriority="high" decoding="async" src={heroImg} alt="İletişim" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030b1a] via-[#030b1a]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030b1a]/95 via-[#030b1a]/30 to-transparent" />
        </motion.div>

        {/* Ghost label */}
        <div className="absolute top-20 right-6 md:right-14 z-10 pointer-events-none select-none">
          <span className="text-white/[0.05] font-black leading-none tracking-tighter"
            style={{ fontSize: "clamp(50px,10vw,130px)" }}>İLETİŞİM</span>
        </div>

        <div className="relative z-10 px-8 md:px-16 max-w-5xl w-full" style={{ paddingTop: 60 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-accent" />
              <span className="text-accent text-[10px] font-bold tracking-[0.35em] uppercase">Bize Ulaşın</span>
            </div>
            <h1 className="text-white font-black leading-[1.04] tracking-tight mb-6"
              style={{ fontSize: "clamp(40px,6.5vw,90px)" }}>
              Birlikte<br />
              <em className="not-italic text-accent">Çalışalım.</em>
            </h1>
            <p className="text-white/55 text-base md:text-lg font-light leading-relaxed max-w-lg">
              Ücretsiz keşif ve teklif için formu doldurun ya da doğrudan iletişime geçin. 24 saat içinde dönüş garantisi.
            </p>
          </motion.div>
        </div>

        {/* Hızlı iletişim şeridi — hero alt */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/8 hidden lg:block">
          <div className="grid grid-cols-3 divide-x divide-white/8">
            {[
              { label: "Telefon", value: "0533 601 76 22", href: "tel:+905336017622" },
              { label: "WhatsApp", value: "wa.me/905336017622", href: "https://wa.me/905336017622" },
              { label: "E-posta", value: "info@masgrupcleaning.com.tr", href: "mailto:info@masgrupcleaning.com.tr" },
            ].map((item, i) => (
              <a key={i} href={item.href} target={i === 1 ? "_blank" : undefined} rel="noreferrer"
                className="flex items-center justify-between px-8 py-4 bg-[#030b1a]/80 backdrop-blur-sm hover:bg-white/5 transition-colors group">
                <div>
                  <span className="text-accent text-[9px] font-black tracking-[0.3em] uppercase block mb-0.5">{item.label}</span>
                  <span className="text-white/70 text-xs font-medium group-hover:text-white transition-colors">{item.value}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-accent transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANA İÇERİK: form + bilgiler ── */}
      <section className="grid lg:grid-cols-12 min-h-screen">

        {/* Sol — İletişim bilgileri (navy) */}
        <motion.div
          className="lg:col-span-4 bg-[#0D1B3E] flex flex-col justify-between px-6 md:px-14 py-12 md:py-20"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="text-white/8 font-black text-8xl leading-none select-none block mb-4">MG</span>
            <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase block mb-6">İletişim Bilgileri</span>
            <h2 className="text-white font-black leading-tight tracking-tight mb-12"
              style={{ fontSize: "clamp(24px,3vw,38px)" }}>
              Size En Hızlı<br />
              <span className="text-accent">Şekilde</span><br />
              Ulaşalım
            </h2>

            {/* İletişim kartları */}
            <div className="space-y-0 divide-y divide-white/8">
              {contactItems.map((item, i) => (
                <motion.div key={i}
                  className="py-6 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 border border-white/12 flex items-center justify-center shrink-0 group-hover:border-accent/50 transition-colors duration-300">
                      <item.icon className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-white/35 text-[10px] font-black tracking-[0.25em] uppercase block mb-1.5">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="text-white/75 text-sm font-medium hover:text-white transition-colors leading-snug whitespace-pre-line block">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-white/75 text-sm font-medium leading-snug whitespace-pre-line block">{item.value}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sosyal medya + WhatsApp */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <span className="text-white/30 text-[10px] font-black tracking-[0.3em] uppercase block mb-6">Sosyal Medya</span>
            <div className="flex gap-3 mb-8">
              <a href="https://wa.me/905336017622" target="_blank" rel="noreferrer"
                className="flex items-center gap-2.5 border border-[#25D366]/30 bg-[#25D366]/8 px-4 py-3 hover:border-[#25D366]/60 hover:bg-[#25D366]/15 transition-all duration-300 group">
                <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.522 5.855L.057 23.521a.75.75 0 00.921.921l5.666-1.465A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.705 9.705 0 01-4.964-1.363l-.356-.213-3.693.955.975-3.564-.232-.367A9.705 9.705 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                </svg>
                <span className="text-[#25D366] font-bold text-xs tracking-wide">WhatsApp</span>
              </a>
              <a href="#" className="w-11 h-11 border border-white/12 flex items-center justify-center hover:border-accent/50 hover:bg-white/5 transition-all duration-300">
                <Instagram className="w-4 h-4 text-white/50" />
              </a>
            </div>
            <div className="w-10 h-px bg-accent mb-3" />
            <p className="text-white/25 text-xs font-bold tracking-widest uppercase">Mas Grup, Profesyonel Temizlik</p>
          </div>
        </motion.div>

        {/* Sağ — Form (beyaz) */}
        <motion.div
          className="lg:col-span-8 bg-white flex flex-col justify-center px-6 md:px-16 lg:px-20 py-12 md:py-20"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase block mb-4">Teklif Formu</span>
          <h2 className="text-primary font-black leading-tight tracking-tight mb-2"
            style={{ fontSize: "clamp(28px,3.5vw,48px)" }}>
            Ücretsiz Teklif Alın
          </h2>
          <p className="text-primary/45 text-sm leading-relaxed mb-12 max-w-md">
            Formu doldurun, 24 saat içinde sizinle iletişime geçelim. Keşif ziyareti ve teklif tamamen ücretsizdir.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl">

              <div className="grid md:grid-cols-2 gap-8">
                <FormField control={form.control} name="adSoyad"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-primary/50 text-[10px] font-black tracking-[0.25em] uppercase">Ad Soyad</FormLabel>
                      <FormControl>
                        <Input placeholder="Adınız Soyadınız" {...field}
                          className="h-12 rounded-none border-0 border-b-2 border-primary/15 bg-transparent px-0 text-primary placeholder:text-primary/30 focus-visible:ring-0 focus-visible:border-accent transition-colors duration-300"
                          data-testid="input-ad-soyad" />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField control={form.control} name="telefon"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-primary/50 text-[10px] font-black tracking-[0.25em] uppercase">Telefon</FormLabel>
                      <FormControl>
                        <Input placeholder="05XX XXX XX XX" {...field}
                          className="h-12 rounded-none border-0 border-b-2 border-primary/15 bg-transparent px-0 text-primary placeholder:text-primary/30 focus-visible:ring-0 focus-visible:border-accent transition-colors duration-300"
                          data-testid="input-telefon" />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField control={form.control} name="email"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-primary/50 text-[10px] font-black tracking-[0.25em] uppercase">E-posta</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="ornek@sirket.com" {...field}
                        className="h-12 rounded-none border-0 border-b-2 border-primary/15 bg-transparent px-0 text-primary placeholder:text-primary/30 focus-visible:ring-0 focus-visible:border-accent transition-colors duration-300"
                        data-testid="input-email" />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField control={form.control} name="hizmetTuru"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-primary/50 text-[10px] font-black tracking-[0.25em] uppercase">Hizmet Türü</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger
                          className="h-12 rounded-none border-0 border-b-2 border-primary/15 bg-transparent px-0 text-primary focus:ring-0 focus:border-accent transition-colors duration-300 [&>span]:text-primary/30"
                          data-testid="select-hizmet">
                          <SelectValue placeholder="İlgilendiğiniz hizmeti seçiniz" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Ev Temizliği">Ev Temizliği</SelectItem>
                        <SelectItem value="Ofis Temizliği">Ofis Temizliği</SelectItem>
                        <SelectItem value="İnşaat Sonrası Temizlik">İnşaat Sonrası Temizlik</SelectItem>
                        <SelectItem value="Detay Temizlik">Detay Temizlik</SelectItem>
                        <SelectItem value="Kurumsal Çözüm">Kurumsal Çözüm</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField control={form.control} name="mesaj"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-primary/50 text-[10px] font-black tracking-[0.25em] uppercase">Mesajınız (İsteğe Bağlı)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Mekan detayları veya özel istekleriniz..."
                        className="min-h-[100px] resize-none rounded-none border-0 border-b-2 border-primary/15 bg-transparent px-0 text-primary placeholder:text-primary/30 focus-visible:ring-0 focus-visible:border-accent transition-colors duration-300"
                        {...field}
                        data-testid="textarea-mesaj" />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button type="submit"
                  className="bg-[#0D1B3E] hover:bg-accent text-white font-black tracking-wide px-10 h-14 text-sm gap-2 group transition-colors duration-500 rounded-none"
                  data-testid="button-submit-form">
                  TEKLİF AL
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <a href="tel:+905336017622">
                  <Button type="button" variant="ghost"
                    className="text-primary/50 hover:text-primary font-bold tracking-wide px-6 h-14 text-sm gap-2 group rounded-none">
                    veya hemen arayın
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </Button>
                </a>
              </div>

            </form>
          </Form>
        </motion.div>
      </section>

      {/* ── HIZLI ERİŞİM — mobil için ── */}
      <section className="lg:hidden bg-[#0D1B3E] py-12 px-8">
        <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase block mb-8">Hızlı Erişim</span>
        <div className="space-y-0 divide-y divide-white/8">
          {[
            { label: "Telefon", value: "0533 601 76 22", href: "tel:+905336017622" },
            { label: "WhatsApp", value: "Mesaj Gönder", href: "https://wa.me/905336017622" },
            { label: "E-posta", value: "info@masgrupcleaning.com.tr", href: "mailto:info@masgrupcleaning.com.tr" },
          ].map((item, i) => (
            <a key={i} href={item.href} target={i === 1 ? "_blank" : undefined} rel="noreferrer"
              className="flex items-center justify-between py-5 group">
              <div>
                <span className="text-white/35 text-[9px] font-black tracking-[0.25em] uppercase block mb-1">{item.label}</span>
                <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">{item.value}</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-accent transition-colors" />
            </a>
          ))}
        </div>
      </section>

      {/* ── KAPANIŞ — güvence strip ── */}
      <section className="bg-white py-16 px-8 md:px-16 border-t border-primary/8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-px bg-primary/8">
            {[
              { num: "01", title: "24 Saat İçinde Dönüş", desc: "Formu doldurun, bir gün içinde sizi arayalım." },
              { num: "02", title: "Ücretsiz Keşif",        desc: "Uzmanımız alana gelerek yerinde inceleme yapar." },
              { num: "03", title: "Taahhütlü Teklif",      desc: "Sunduğumuz fiyat teklifi yazılı güvence altındadır." },
            ].map((item, i) => (
              <motion.div key={i}
                className="bg-white px-6 py-8 md:px-8 md:py-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}>
                <span className="text-accent/30 font-black text-5xl leading-none block mb-4 select-none">{item.num}</span>
                <h4 className="text-primary font-black text-base tracking-tight mb-2">{item.title}</h4>
                <p className="text-primary/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
