"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Wrench,
  Compass,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/config/skills";

const iconMap: Record<string, LucideIcon> = {
  ClipboardList,
  Wrench,
  Compass,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-sm text-primary-400 font-medium mb-4">
            <Wrench className="w-4 h-4" />
            Skills & Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            A versatile <span className="gradient-text">toolkit</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            Techniques, platforms, and methodologies I use to deliver results from
            discovery to implementation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => {
            const Icon = iconMap[group.icon] || ClipboardList;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 lg:p-8 hover:border-primary-500/30 transition-all duration-300 group h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-700/20 flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-primary-700/30 transition-all">
                    <Icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{group.title}</h3>
                </div>
                <div className="space-y-3">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      <span className="text-sm text-dark-200">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
