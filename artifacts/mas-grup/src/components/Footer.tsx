import { Link } from "wouter";
import { ChevronRight, Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D1B3E] text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group inline-flex">
              <div className="w-8 h-8 flex items-center justify-center bg-accent text-white rounded-br-lg rounded-tl-lg">
                <ChevronRight className="w-5 h-5" />
              </div>
              <span className="font-black tracking-tight text-xl">
                MAS GRUP
              </span>
            </Link>
            <p className="text-white/70 italic text-sm mb-6">
              "Temiz alanlar, güçlü yarınlar."
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Mas Grup, yaşam ve çalışma alanlarınız için detay odaklı, sistemli ve güvenilir temizlik çözümleri sunar.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide">Navigasyon</h4>
            <ul className="space-y-3">
              {[
                { label: "Hakkımızda", href: "/hakkimizda" },
                { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
                { label: "Mas Akademi", href: "/akademi" },
                { label: "Kurumsal Çözümler", href: "/kurumsal" },
                { label: "İletişim", href: "/iletisim" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+90 532 123 45 67</span>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>info@masgrup.com.tr</span>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>Atatürk Mah. 123. Sok. No:45<br/>Kadıköy / İstanbul</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide">Sosyal Medya</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/50 text-xs">
          <p>© 2025 Mas Grup. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}