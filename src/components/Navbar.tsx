"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "功能", href: "#功能" },
  { label: "案例", href: "#案例" },
  { label: "定价", href: "#定价" },
  { label: "FAQ", href: "#FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="max-w-content mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="#" className="font-heading font-bold text-primary text-lg md:text-xl">
          灵保 AI
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-muted hover:text-primary transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="#"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-accent text-primary font-semibold text-sm hover:scale-[1.02] transition-transform shadow-card"
          >
            免费体验 →
          </Link>
          <button
            type="button"
            aria-label="菜单"
            className="md:hidden p-2 text-primary"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <div className="max-w-content mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-text-muted hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#"
              className="sm:hidden mt-2 inline-flex justify-center px-4 py-2 rounded-lg bg-accent text-primary font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              免费体验 →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
