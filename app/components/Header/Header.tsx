"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Who we Are", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our work", href: "#projects" },
  { label: "Career", href: "#career" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-white via-white to-mint-subtle/60 backdrop-blur-sm border-b border-border-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 shrink-0">
            {/* Logo placeholder - replace with actual logo */}
            <div className="flex items-center gap-1">
              <div className="w-10 h-10 img-placeholder rounded-md text-xs">
                Logo
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold leading-tight">
                  <span className="text-text-dark">enter</span>
                  <span className="text-primary">tab</span>
                </span>
                <span className="text-[10px] text-primary tracking-wider -mt-1">
                  Digital Solutions
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-dark text-sm font-medium hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center px-6 py-2.5 bg-btn-dark text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors duration-200"
          >
            Let&apos;s Collaborate
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-text-dark transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-text-dark transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-text-dark transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-sm border-t border-border-light px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-text-dark text-sm font-medium hover:text-primary hover:bg-mint/50 rounded-lg transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block mx-4 mt-3 text-center px-6 py-2.5 bg-btn-dark text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors duration-200"
          >
            Let&apos;s Collaborate
          </a>
        </div>
      </div>
    </header>
  );
}
