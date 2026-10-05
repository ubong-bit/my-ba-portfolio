"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText, Send, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Contact() {
  const socials = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: siteConfig.social.linkedin,
      color: "hover:text-secondary-400",
    },
    {
      icon: Github,
      label: "GitHub",
      href: siteConfig.social.github,
      color: "hover:text-white",
    },
    {
      icon: Mail,
      label: "Email",
      href: siteConfig.social.email,
      color: "hover:text-primary-400",
    },
    {
      icon: FileText,
      label: "Resume",
      href: siteConfig.social.resume,
      color: "hover:text-accent-400",
    },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 lg:p-14 text-center max-w-3xl mx-auto glow-border"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-600/10 border border-primary-600/20 rounded-full text-sm text-primary-400 font-medium mb-6">
            <Mail className="w-4 h-4" />
            Get In Touch
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s build something <span className="gradient-text">together</span>
          </h2>
          <p className="text-dark-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Open to opportunities in Business Analysis, Project Management, and
            Data Strategy. Feel free to reach out through any of the channels below.
          </p>

          <div className="flex items-center justify-center gap-2 text-dark-300 mb-8">
            <MapPin className="w-4 h-4 text-primary-400" />
            <span className="text-sm">{siteConfig.location}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-4 glass rounded-xl hover:border-primary-500/30 transition-all duration-300 hover:scale-105 min-w-[100px]"
              >
                <social.icon
                  className={`w-6 h-6 text-dark-200 ${social.color} transition-colors`}
                />
                <span className="text-xs text-dark-300 group-hover:text-white transition-colors">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          <a
            href={siteConfig.social.email}
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-primary-600/30 transition-all duration-300 hover:scale-105"
          >
            <Send className="w-5 h-5" />
            Send a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}
