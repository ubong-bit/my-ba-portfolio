"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderKanban, TriangleAlert as AlertTriangle, User, FileStack, TrendingUp, Wrench, ArrowUpRight, Github, ExternalLink, Calendar } from "lucide-react";
import { projects } from "@/config/projects";

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selected = projects.find((p) => p.id === selectedId);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-sm text-primary-400 font-medium mb-4">
            <FolderKanban className="w-4 h-4" />
            Case Studies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Real-world <span className="gradient-text">business analysis</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            A selection of projects showing how I approach problems, document
            requirements, and deliver measurable impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 lg:p-8 hover:border-primary-500/40 transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedId(project.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-primary-600/10 border border-primary-600/20 text-primary-400 rounded-lg text-xs font-medium">
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-dark-400">
                    <Calendar className="w-3 h-3" />
                    {project.date}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-dark-400 group-hover:text-primary-400 group-hover:rotate-45 transition-all duration-300" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-dark-300 leading-relaxed mb-5 line-clamp-3">
                {project.problem}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-dark-800/60 border border-dark-700/50 text-dark-300 rounded-md text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-dark-700/50">
                <span className="flex items-center gap-1.5 text-xs text-dark-400">
                  <User className="w-3.5 h-3.5 text-primary-500" />
                  {project.role}
                </span>
                <div className="flex items-center gap-2 ml-auto">
                  <a
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    className="text-dark-400 hover:text-primary-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demo}
                    onClick={(e) => e.stopPropagation()}
                    className="text-dark-400 hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 lg:p-10"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="px-3 py-1 bg-primary-600/10 border border-primary-600/20 text-primary-400 rounded-lg text-xs font-medium">
                    {selected.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-3">
                    {selected.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedId(null)}
                  className="text-dark-400 hover:text-white transition-colors p-1"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-primary-400 mb-2 uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4" />
                    Problem
                  </h4>
                  <p className="text-dark-200 leading-relaxed">{selected.problem}</p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-primary-400 mb-2 uppercase tracking-wider">
                    <User className="w-4 h-4" />
                    My Role
                  </h4>
                  <p className="text-dark-200 leading-relaxed">{selected.role}</p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-primary-400 mb-3 uppercase tracking-wider">
                    <FileStack className="w-4 h-4" />
                    Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {selected.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-dark-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                        <span className="text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-primary-400 mb-2 uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4" />
                    Impact
                  </h4>
                  <p className="text-dark-200 leading-relaxed">{selected.impact}</p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-primary-400 mb-3 uppercase tracking-wider">
                    <Wrench className="w-4 h-4" />
                    Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 bg-dark-800/60 border border-dark-700/50 text-dark-200 rounded-lg text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
