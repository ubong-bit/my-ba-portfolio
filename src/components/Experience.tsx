"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/config/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-sm text-primary-400 font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My professional <span className="gradient-text">journey</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-600 via-primary-600/50 to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0
                  ? "md:pr-8 md:text-right md:mr-[50%]"
                  : "md:pl-8 md:ml-[50%]"
              } pl-12 md:pl-0`}
            >
              <div
                className={`absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary-600 border-4 border-dark-950 md:-translate-x-1/2 glow-border z-10 ${
                  exp.current ? "animate-glow" : ""
                }`}
              />

              <div className="glass-card p-6 lg:p-8 hover:border-primary-500/30 transition-all duration-300">
                <div
                  className={`flex items-center gap-2 mb-2 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  <Calendar className="w-4 h-4 text-primary-400" />
                  <span className="text-sm text-primary-400 font-medium">
                    {exp.period}
                  </span>
                  {exp.current && (
                    <span className="px-2 py-0.5 bg-success-500/10 border border-success-500/20 text-success-400 rounded text-xs font-medium">
                      Current
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <div
                  className={`flex items-center gap-3 mt-1 mb-4 flex-wrap ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  <span className="text-primary-400 font-semibold">{exp.company}</span>
                  <span className="flex items-center gap-1 text-sm text-dark-400">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                </div>

                <p className="text-sm text-dark-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-2 text-sm text-dark-200 ${
                        index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
