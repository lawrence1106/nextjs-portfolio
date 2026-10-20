"use client";

import { motion } from "framer-motion";
import { skillGroups } from "../overview/configs";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

export default function Skills() {
  const skillCount = skillGroups.reduce(
    (total, group) => total + group.skills.length,
    0,
  );

  return (
    <div className="min-h-screen px-6 sm:px-16 py-24 max-w-6xl mx-auto text-gray-300">
      <motion.div {...fadeUp} className="mb-20">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-blue-300 mb-5">
          <span className="h-px w-10 bg-blue-400"></span>
          <span>Tools of the trade</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-[-0.04em] text-white">
              Skills
            </h1>
            <p className="mt-4 text-gray-400 max-w-2xl text-lg leading-relaxed">
              A practical toolkit for turning product ideas into reliable,
              polished web experiences.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 px-5 py-4 text-left lg:text-right">
            <p className="text-3xl font-semibold text-white">{skillCount}+</p>
            <p className="text-xs uppercase tracking-[0.18em] text-blue-300">
              technologies
            </p>
          </div>
        </div>
      </motion.div>

      <div className="space-y-16">
        {skillGroups.map((group, groupIndex) => (
          <motion.section
            key={group.title}
            {...fadeUp}
            transition={{ duration: 0.6, delay: groupIndex * 0.08 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white">
                {group.title}
              </h2>
              <span className="text-xs text-gray-500">
                {String(group.skills.length).padStart(2, "0")} items
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {group.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 220 }}
                    className="group flex items-center gap-4 rounded-2xl bg-white/[0.04] px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400/[0.08] hover:shadow-[0_12px_30px_rgba(59,130,246,0.16)]"
                  >
                    <Icon className="h-5 w-5 text-blue-400 transition-colors group-hover:text-blue-200" />
                    <span className="font-medium text-white">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
