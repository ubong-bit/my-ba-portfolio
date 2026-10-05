import { Briefcase, Heart } from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Case Studies" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-dark-800/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">{siteConfig.name}</p>
              <p className="text-xs text-dark-400">Business Analyst</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-dark-300 hover:text-primary-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-dark-400 flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-primary-500 fill-primary-500" /> · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
