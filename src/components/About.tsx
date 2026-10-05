"use client";

import { motion } from "framer-motion";
import { User, Target, Lightbulb, TrendingUp } from "lucide-react";
import { siteConfig } from "@/config/site";

const highlights = [
  {
    icon: Target,
    title: "Requirements Engineering",
    description: "Eliciting, documenting, and managing requirements that align business goals with technical delivery.",
  },
  {
    icon: Lightbulb,
    title: "Process Optimization",
    description: "Mapping AS-IS processes and designing TO-BE workflows that reduce friction and drive efficiency.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Insights",
    description: "Leveraging SQL, Power BI, and Excel to uncover trends and support strategic decision-making.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-sm text-primary-400 font-medium mb-4">
            <User className="w-4 h-4" />
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Turning ambiguity into <span className="gradient-text">clarity</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 lg:p-10">
              <p className="text-lg text-dark-200 leading-relaxed">
                {siteConfig.bio}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Business Analysis", "Project Management", "Data Strategy"].map(
                  (item) => (
                    <span
                      key={item}
                      className="px-4 py-2 bg-primary-600/10 border border-primary-600/20 text-primary-400 rounded-lg text-sm font-medium"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-5 hover:border-primary-500/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-dark-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
