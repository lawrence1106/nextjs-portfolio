"use client";

import { motion } from "framer-motion";
import { skillGroups } from "./configs";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

export default function Overview() {
  return (
    <div className="min-h-screen px-6 sm:px-16 py-24 max-w-6xl mx-auto text-gray-300">

      {/* Page Title */}
      <motion.div {...fadeUp} className="mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Overview
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl text-lg leading-relaxed">
          Frontend Engineer specializing in modern React applications,
          with solid full-stack and backend experience.
        </p>
      </motion.div>

      {/* About Section */}
      <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-12 mb-28">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            What I Focus On
          </h2>
          <p className="text-gray-400 leading-relaxed">
            I build responsive, scalable frontend applications using React,
            Next.js, and TypeScript. I care about performance, clean UI
            architecture, and writing code that remains maintainable as
            projects grow.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Beyond the Frontend
          </h2>
          <p className="text-gray-400 leading-relaxed">
            While frontend is my core strength, I also work comfortably with
            Node.js, REST APIs, databases, and backend integrations. This helps
            me understand the full system and collaborate effectively across teams.
          </p>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div {...fadeUp} className="mb-28">
        <h2 className="text-2xl font-semibold text-white mb-12">
          Technical Skills
        </h2>

        <div className="space-y-20">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Section Header */}
              <h3 className="text-xl font-semibold text-white mb-6 tracking-tight relative inline-block">
                {group.title}
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-blue-400"></span>
              </h3>

              {/* Skill Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.skills.map((skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="
                        group h-20 flex items-center gap-4
                        bg-white/5 backdrop-blur-md
                        border border-white/10
                        rounded-xl px-6
                        hover:border-blue-400/40
                        hover:bg-white/10
                        transition-all duration-300
                      "
                    >
                      <Icon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors duration-300" />
                      <p className="font-medium text-white">
                        {skill.name}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Closing Section */}
      <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">
          What You Can Expect
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Clean frontend architecture, strong collaboration with backend teams,
          and a practical approach to building features that deliver real value.
        </p>
      </motion.div>
    </div>
  );
}
