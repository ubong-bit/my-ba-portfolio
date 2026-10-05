"use client";

import { useState, useEffect } from "react";
import { Menu, X, Briefcase } from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Case Studies" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-dark-950/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-white hidden sm:block">
              {siteConfig.name}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-dark-200 hover:text-primary-400 rounded-lg hover:bg-dark-800/50 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg hover:shadow-lg hover:shadow-primary-600/30 transition-all duration-300 hover:scale-105"
            >
              Resume
            </a>
          </div>

          <button
            className="md:hidden p-2 text-dark-100 hover:text-primary-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-dark-700/50 animate-fade-in-down">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-dark-200 hover:text-primary-400 hover:bg-dark-800/50 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg text-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
