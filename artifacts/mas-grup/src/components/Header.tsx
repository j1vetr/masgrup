import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
    { href: "/akademi", label: "Akademi" },
    { href: "/kurumsal", label: "Kurumsal" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 flex items-center justify-center bg-accent text-white rounded-br-lg rounded-tl-lg">
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <span className={`font-black tracking-tight text-xl ${scrolled ? "text-primary" : "text-white"}`}>
              MAS GRUP
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors border-b-2 py-1 ${
                  location === link.href
                    ? "border-accent text-accent"
                    : `border-transparent hover:text-accent ${scrolled ? "text-primary" : "text-white/90"}`
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <div className={`flex items-center gap-2 font-medium ${scrolled ? "text-primary" : "text-white"}`}>
              <Phone className="w-4 h-4 text-accent" />
              <span>+90 532 123 45 67</span>
            </div>
            <Link href="/iletisim">
              <Button className="bg-accent hover:bg-accent/90 text-white border-0">
                Teklif Al
              </Button>
            </Link>
          </div>

          <button
            className={`lg:hidden p-2 -mr-2 ${scrolled ? "text-primary" : "text-white"}`}
            onClick={() => setMobileMenuOpen(true)}
            data-testid="button-open-menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-primary z-50 flex flex-col p-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center bg-accent text-white rounded-br-lg rounded-tl-lg">
                <ChevronRight className="w-5 h-5" />
              </div>
              <span className="font-black tracking-tight text-xl text-white">MAS GRUP</span>
            </div>
            <button
              className="text-white p-2"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="button-close-menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-xl mb-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold ${
                  location === link.href ? "text-accent" : "text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-6">
            <div className="flex items-center gap-3 text-white/90">
              <Phone className="w-5 h-5 text-accent" />
              <span className="text-lg">+90 532 123 45 67</span>
            </div>
            <Link href="/iletisim" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-lg">
                Teklif Al
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}