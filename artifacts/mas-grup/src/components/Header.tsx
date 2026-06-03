import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logoLight from "@assets/logo_light_1780317107003.webp";
import logoDark from "@assets/logo_dark_1780317107003.webp";

const navLinks = [
  { href: "/",             label: "Ana Sayfa" },
  { href: "/hakkimizda",   label: "Hakkımızda" },
  { href: "/hizmetlerimiz",label: "Hizmetlerimiz" },
  { href: "/akademi",      label: "Akademi" },
  { href: "/kurumsal",     label: "Kurumsal" },
  { href: "/iletisim",     label: "İletişim" },
];

export default function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-3">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            <Link href="/">
              <img src={logoLight} alt="Mas Grup" className="h-9 w-auto" />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors border-b-2 py-1 ${
                    location === link.href
                      ? "border-accent text-accent"
                      : "border-transparent text-primary hover:text-accent"
                  }`}
                >
                  {link.label.toUpperCase()}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-2 font-medium text-primary">
                <Phone className="w-4 h-4 text-accent" />
                <span>0533 601 76 22</span>
              </div>
              <Link href="/iletisim">
                <div className="bg-accent hover:bg-accent/85 text-white font-black text-sm tracking-widest uppercase px-6 h-10 flex items-center gap-2 cursor-pointer transition-colors duration-300">
                  TEKLİF AL
                </div>
              </Link>
            </div>

            <button
              className="lg:hidden p-2 -mr-2 text-primary"
              onClick={() => setOpen(true)}
              data-testid="button-open-menu"
              aria-label="Menüyü aç"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              className="fixed inset-0 z-[70] flex flex-col overflow-hidden"
              style={{ background: "linear-gradient(160deg, #060d1f 0%, #0a1628 60%, #0d1b3e 100%)" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

              {/* Ambient glow */}
              <div
                className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0,180,216,0.06) 0%, transparent 70%)" }}
              />

              {/* ── Header row ── */}
              <div className="flex items-center justify-between px-7 pt-7 pb-6">
                <Link href="/" onClick={() => setOpen(false)}>
                  <img src={logoDark} alt="Mas Grup" className="h-11 w-auto" />
                </Link>
                <button
                  className="w-11 h-11 border border-white/12 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all duration-250"
                  onClick={() => setOpen(false)}
                  data-testid="button-close-menu"
                  aria-label="Menüyü kapat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* ── Label ── */}
              <div className="px-7 mb-8">
                <span className="text-white/18 text-[9px] font-black tracking-[0.42em] uppercase">Navigasyon</span>
                <div className="mt-2 h-px bg-white/6" />
              </div>

              {/* ── Nav links ── */}
              <nav className="flex-1 px-7 flex flex-col justify-center gap-1">
                {navLinks.map((link, i) => {
                  const active = location === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 28 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`group flex items-center justify-between py-4 border-b transition-all duration-250 ${
                          active
                            ? "border-accent/30"
                            : "border-white/5 hover:border-white/12"
                        }`}
                      >
                        <div className="flex items-center gap-5">
                          <span className="text-white/15 text-[10px] font-black tabular-nums w-5 text-right">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={`font-black tracking-tight transition-colors duration-250 ${
                              active ? "text-accent" : "text-white/75 group-hover:text-white"
                            }`}
                            style={{ fontSize: "clamp(20px, 6vw, 26px)" }}
                          >
                            {link.label}
                          </span>
                        </div>
                        <ArrowRight
                          className={`w-4 h-4 transition-all duration-250 ${
                            active
                              ? "text-accent opacity-100"
                              : "text-white/20 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* ── Bottom ── */}
              <motion.div
                className="px-7 pb-10 pt-8 space-y-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Phone row */}
                <a
                  href="tel:+905336017622"
                  className="flex items-center gap-3 text-white/45 hover:text-white/75 transition-colors duration-250"
                >
                  <div className="w-9 h-9 border border-white/10 flex items-center justify-center">
                    <Phone className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-[15px] font-medium">0533 601 76 22</span>
                </a>

                {/* CTA button */}
                <Link href="/iletisim" onClick={() => setOpen(false)}>
                  <div className="group w-full bg-accent hover:bg-accent/85 text-white font-black text-sm tracking-widest uppercase h-14 flex items-center justify-center gap-3 cursor-pointer transition-colors duration-300 mt-2">
                    TEKLİF AL
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
