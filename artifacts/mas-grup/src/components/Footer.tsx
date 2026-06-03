import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, Phone, Mail, MapPin, Clock, Instagram, Linkedin, Facebook } from "lucide-react";
import logoDark from "@assets/logo_dark_1780317107003.webp";

const navLinks = [
  { label: "Ana Sayfa",          href: "/" },
  { label: "Hakkımızda",         href: "/hakkimizda" },
  { label: "Hizmetlerimiz",      href: "/hizmetlerimiz" },
  { label: "Mas Akademi",        href: "/akademi" },
  { label: "Kurumsal Çözümler",  href: "/kurumsal" },
  { label: "İletişim",           href: "/iletisim" },
];

const serviceLinks = [
  { label: "Ev Temizliği",             href: "/hizmetlerimiz#ev-temizligi" },
  { label: "Ofis Temizliği",           href: "/hizmetlerimiz#ofis-temizligi" },
  { label: "İnşaat Sonrası Temizlik",  href: "/hizmetlerimiz#insaat-sonrasi" },
  { label: "Detay Temizlik",           href: "/hizmetlerimiz#detay-temizlik" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1B3E] overflow-hidden">

      {/* ─────────────────────────────────────────
          01  PRE-FOOTER CTA
      ───────────────────────────────────────── */}
      <div className="relative border-t border-white/8 px-8 md:px-16 py-20 md:py-28 overflow-hidden">

        {/* Ambient glow */}
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(0,180,216,0.07) 0%, transparent 70%)" }}
        />

        {/* Ghost watermark */}
        <div className="absolute inset-0 flex items-center justify-end pr-8 md:pr-16 pointer-events-none select-none overflow-hidden">
          <span
            className="text-white/[0.035] font-black leading-none tracking-tighter"
            style={{ fontSize: "clamp(64px,14vw,180px)" }}
          >
            MAS
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase block mb-6">
              Hizmet Almaya Hazır mısınız?
            </span>
            <h2
              className="text-white font-black leading-[1.04] tracking-tight"
              style={{ fontSize: "clamp(32px,5.5vw,80px)" }}
            >
              Temiz Alanlar,<br />
              <em className="not-italic text-accent">Güçlü Yarınlar.</em>
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 lg:mb-1"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/iletisim">
              <div className="group bg-accent hover:bg-accent/85 text-white font-black text-sm tracking-widest uppercase px-8 h-14 flex items-center gap-3 cursor-pointer transition-colors duration-300">
                Teklif Al
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
            <a href="tel:+905336017622">
              <div className="border border-white/15 hover:border-white/35 text-white/65 hover:text-white font-bold text-sm tracking-wide px-8 h-14 flex items-center gap-2 transition-all duration-300">
                0533 601 76 22
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ─────────────────────────────────────────
          02  MAIN GRID
      ───────────────────────────────────────── */}
      <div className="border-t border-white/8 px-8 md:px-16 pt-16 pb-10">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-6 mb-16">

            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-4 space-y-7">
              <Link href="/">
                <img src={logoDark} alt="Mas Grup" className="h-8 w-auto" />
              </Link>

              <p className="text-white/38 text-[13px] leading-relaxed max-w-xs">
                Yaşam ve çalışma alanlarınız için detay odaklı, sistemli ve güvenilir temizlik çözümleri.
              </p>

              <div className="flex items-center gap-2.5">
                <a
                  href="https://wa.me/905336017622"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 border border-[#25D366]/25 bg-[#25D366]/5 px-3 py-2.5 hover:border-[#25D366]/55 hover:bg-[#25D366]/10 transition-all duration-300"
                >
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.522 5.855L.057 23.521a.75.75 0 00.921.921l5.666-1.465A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.705 9.705 0 01-4.964-1.363l-.356-.213-3.693.955.975-3.564-.232-.367A9.705 9.705 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                  </svg>
                  <span className="text-[#25D366] font-black text-[10px] tracking-widest">WA</span>
                </a>
                {[
                  { href: "https://www.instagram.com/masgrupcleaning", icon: <Instagram className="w-3.5 h-3.5" /> },
                  { href: "#", icon: <Linkedin  className="w-3.5 h-3.5" /> },
                  { href: "#", icon: <Facebook  className="w-3.5 h-3.5" /> },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/35 hover:text-white hover:border-accent/50 hover:bg-accent/8 transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-2">
              <span className="text-white/22 text-[9px] font-black tracking-[0.38em] uppercase block mb-7">Sayfalar</span>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-white/45 hover:text-white text-[13px] font-medium transition-colors duration-250"
                    >
                      <span className="w-0 h-px bg-accent group-hover:w-4 transition-all duration-300 shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <span className="text-white/22 text-[9px] font-black tracking-[0.38em] uppercase block mb-7">Hizmetler</span>
              <ul className="space-y-4">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-white/45 hover:text-white text-[13px] font-medium transition-colors duration-250"
                    >
                      <span className="w-0 h-px bg-accent group-hover:w-4 transition-all duration-300 shrink-0" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="sm:col-span-2 lg:col-span-4">
              <span className="text-white/22 text-[9px] font-black tracking-[0.38em] uppercase block mb-7">İletişim</span>
              <div className="space-y-5">
                {[
                  {
                    icon: <Phone className="w-3.5 h-3.5 text-accent" />,
                    label: "Telefon",
                    value: "0533 601 76 22",
                    href: "tel:+905336017622",
                  },
                  {
                    icon: <Mail className="w-3.5 h-3.5 text-accent" />,
                    label: "E-posta",
                    value: "info@masgrupcleaning.com.tr",
                    href: "mailto:info@masgrupcleaning.com.tr",
                  },
                  {
                    icon: <MapPin className="w-3.5 h-3.5 text-accent" />,
                    label: "Adres",
                    value: "Yeşilyurt Mah. Yeni Havalimanı Cad. No:2/41\nBakırköy / İSTANBUL",
                    href: null,
                  },
                  {
                    icon: <Clock className="w-3.5 h-3.5 text-accent" />,
                    label: "Çalışma Saatleri",
                    value: "Pazartesi – Cumartesi  08:00 – 18:00",
                    href: null,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent/40 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-white/25 text-[9px] font-black tracking-[0.28em] uppercase block mb-1">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="text-white/55 hover:text-white text-[13px] font-medium leading-snug transition-colors duration-250 whitespace-pre-line">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-white/55 text-[13px] font-medium leading-snug whitespace-pre-line">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ─── BOTTOM BAR ─── */}
          <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-accent/50 shrink-0" />
              <span className="text-white/22 text-[11px] font-bold tracking-widest uppercase">
                © 2026 Mas Grup. Tüm Hakları Saklıdır.
              </span>
            </div>

            <div className="flex items-center gap-2 text-white/22 text-[11px]">
              <span className="font-medium">Tasarım</span>
              <span className="w-px h-3 bg-white/15" />
              <a
                href="https://toov.com.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 font-black tracking-widest text-white/35 hover:text-accent transition-colors duration-250"
              >
                TOOV
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
              </a>
            </div>

          </div>

        </div>
      </div>

    </footer>
  );
}
