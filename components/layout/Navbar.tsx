"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { NAV_LINKS as navLinks } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-mystic shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-2"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between transition-all duration-500">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50 group">
            <Image
              src="/image/logo.png"
              alt="Roundstone Logo"
              width={220}
              height={48}
              priority
              className="h-9 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-out ${
                    isActive
                      ? "bg-mystic/50 text-biscay"
                      : "text-palesky hover:bg-mystic/30 hover:text-biscay"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-burntsienna text-white text-sm font-medium rounded-full shadow-[0_4px_14px_0_rgba(228,142,74,0.39)] hover:shadow-[0_6px_20px_rgba(228,142,74,0.23)] hover:bg-[#e6843c] transform hover:-translate-y-[1px] transition-all duration-300"
            >
              Discuss a Project
            </Link>

            <button
              className="md:hidden p-2 text-biscay rounded-full hover:bg-mystic/50 transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between items-center">
                <span
                  className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ease-out ${
                    mobileMenuOpen ? "rotate-45 translate-y-[9px]" : ""
                  }`}
                />
                <span
                  className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ease-out ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ease-out ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-white/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full px-6">
          <nav className="flex flex-col items-center gap-6 mb-12">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-3xl font-serif font-medium tracking-tight text-biscay transition-all duration-500 hover:text-burntsienna ${
                  mobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 75 + 100}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div
            className={`w-full max-w-sm transition-all duration-500 ${
              mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${navLinks.length * 75 + 150}ms` }}
          >
            <Link
              href="/contact"
              className="flex items-center justify-center w-full py-4 bg-burntsienna text-white text-lg font-medium rounded-full shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Discuss a Project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

