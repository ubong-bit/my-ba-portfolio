"use client";

import { motion } from "framer-motion";
import { Download, FileText, ArrowDown, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="container-custom w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success-500"></span>
            </span>
            <span className="text-sm text-dark-200 font-medium">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance"
          >
            {siteConfig.heroHeadline.split("business needs into clear requirements").map((part, i) => (
              <span key={i}>
                {i === 0 ? (
                  <>
                    {part}
                    <span className="gradient-text">business needs into clear requirements</span>
                  </>
                ) : (
                  part
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-dark-300 max-w-2xl leading-relaxed"
          >
            {siteConfig.heroSubheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 flex items-center gap-2 text-dark-300"
          >
            <MapPin className="w-4 h-4 text-primary-400" />
            <span className="text-sm">{siteConfig.location}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href={siteConfig.social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-primary-600/30 transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce-slow" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 glass text-white font-semibold rounded-xl hover:border-primary-500/50 transition-all duration-300 hover:scale-105"
            >
              <FileText className="w-5 h-5 text-primary-400" />
              View Case Studies
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 flex items-center gap-8 text-dark-300"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4+</div>
              <div className="text-xs uppercase tracking-wider mt-1">BA Projects</div>
            </div>
            <div className="w-px h-10 bg-dark-700" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-xs uppercase tracking-wider mt-1">Techniques</div>
            </div>
            <div className="w-px h-10 bg-dark-700" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5</div>
              <div className="text-xs uppercase tracking-wider mt-1">Methodologies</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-dark-400">
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
