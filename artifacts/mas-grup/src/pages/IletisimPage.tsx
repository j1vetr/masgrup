import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Phone, Mail, MapPin, Clock, Linkedin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  adSoyad: z.string().min(2, "Ad Soyad en az 2 karakter olmalıdır"),
  telefon: z.string().min(10, "Geçerli bir telefon numarası giriniz"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  hizmetTuru: z.string({ required_error: "Lütfen bir hizmet türü seçiniz" }),
  mesaj: z.string().optional(),
});

export default function IletisimPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      adSoyad: "",
      telefon: "",
      email: "",
      mesaj: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Talebiniz alındı!",
      description: "En kısa sürede sizinle iletişime geçeceğiz.",
      variant: "default",
    });
    form.reset();
  }

  return (
    <div className="w-full bg-[#f0f5fa]">
      {/* Page Hero */}
      <section className="relative h-[35vh] bg-primary flex items-center pt-20">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2 text-white/70 text-sm font-medium mb-4 uppercase tracking-wider">
              <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">İletişim</span>
            </div>
            <h1 className="text-5xl font-black text-white mb-4">İletişim</h1>
            <p className="text-xl text-white/90 font-light max-w-2xl">
              Teklif almak veya bilgi edinmek için bizimle iletişime geçin.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Contact Info */}
            <motion.div 
              className="lg:col-span-5 space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-primary/5 space-y-8">
                <h2 className="text-2xl font-bold text-primary">İletişim Bilgilerimiz</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Telefon</h4>
                      <p className="text-primary/70">+90 532 123 45 67</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">E-posta</h4>
                      <p className="text-primary/70">info@masgrup.com.tr</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Adres</h4>
                      <p className="text-primary/70 leading-relaxed">Atatürk Mah. 123. Sok. No:45<br/>Kadıköy / İstanbul</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Çalışma Saatleri</h4>
                      <p className="text-primary/70">Pazartesi – Cumartesi<br/>08:00 – 18:00</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-primary/10">
                  <h4 className="font-semibold text-primary mb-4">Sosyal Medya</h4>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-primary/5">
                <h2 className="text-3xl font-bold text-primary mb-8">Teklif Alın</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="adSoyad"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-semibold">Ad Soyad</FormLabel>
                            <FormControl>
                              <Input placeholder="Adınız Soyadınız" {...field} className="h-12 bg-[#f0f5fa] border-transparent focus-visible:ring-accent" data-testid="input-ad-soyad" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="telefon"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-semibold">Telefon</FormLabel>
                            <FormControl>
                              <Input placeholder="05XX XXX XX XX" {...field} className="h-12 bg-[#f0f5fa] border-transparent focus-visible:ring-accent" data-testid="input-telefon" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-semibold">E-posta</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="ornek@sirket.com" {...field} className="h-12 bg-[#f0f5fa] border-transparent focus-visible:ring-accent" data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="hizmetTuru"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-semibold">Hizmet Türü</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 bg-[#f0f5fa] border-transparent focus:ring-accent" data-testid="select-hizmet">
                                <SelectValue placeholder="İlgilendiğiniz hizmeti seçiniz" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Ev Temizliği">Ev Temizliği</SelectItem>
                              <SelectItem value="Ofis Temizliği">Ofis Temizliği</SelectItem>
                              <SelectItem value="İnşaat Sonrası Temizlik">İnşaat Sonrası Temizlik</SelectItem>
                              <SelectItem value="Detay Temizlik">Detay Temizlik</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="mesaj"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-semibold">Mesajınız (İsteğe Bağlı)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Mekan detayları veya özel istekleriniz..." 
                              className="min-h-[120px] resize-none bg-[#f0f5fa] border-transparent focus-visible:ring-accent" 
                              {...field} 
                              data-testid="textarea-mesaj"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full h-14 text-lg font-bold bg-accent hover:bg-accent/90 text-white" data-testid="button-submit-form">
                      Teklif Al
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <div className="w-full h-[300px] bg-gradient-to-r from-primary to-primary/80 flex flex-col items-center justify-center text-white/50">
        <MapPin className="w-12 h-12 mb-4 text-accent/50" />
        <p className="text-lg font-medium tracking-wide">Harita Yakında Aktif Olacak</p>
      </div>

    </div>
  );
}