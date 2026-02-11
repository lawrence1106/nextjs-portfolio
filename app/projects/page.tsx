"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Student Pulse",
    company: "Dottystyle Creative Co.",
    period: "May 2021 – March 2022",
    description:
      "Web application for administering engagement surveys and generating student success reports.",
    tech: ["JavaScript", "React", "jQuery", "SCSS", "Laravel", "Bootstrap", "WebSockets"],
  },
  {
    title: "Advance Telematics Solutions Technical Operations System",
    company: "Advance Telematics Solutions (UAE)",
    period: "2019 – 2021",
    description:
      "Internal web-based system used to manage GPS device installations, removals, and operational records.",
    tech: ["JavaScript", "HTML", "CSS", "PHP", "MySQL", "Bootstrap"],
  },
  {
    title: "Veda",
    company: "Advance Telematics Solutions (UAE)",
    period: "Sept 2020 – April 2021",
    description:
      "Upgraded technical operations system with improved performance and real-time data presentation.",
    tech: ["JavaScript", "React", "Node.js", "Express", "MySQL", "Material UI", "WebSockets"],
  },
  {
    title: "Aljurf Ticketing System",
    company: "Advance Telematics Solutions (UAE)",
    period: "May 2019 – July 2019",
    description:
      "Web-based ticketing system for managing traffic fines for Aljurf Development Projects LLC.",
    tech: ["JavaScript", "HTML", "CSS", "PHP", "MySQL", "Bootstrap"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

export default function Projects() {
  return (
    <div className="min-h-screen px-6 sm:px-16 py-24 max-w-6xl mx-auto text-gray-300">

      {/* Title */}
      <motion.div {...fadeUp} className="mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Projects
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl text-lg leading-relaxed">
          Production systems and applications I’ve worked on across different companies.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="
              bg-white/5 backdrop-blur-md
              border border-white/10
              rounded-xl p-8
              hover:border-blue-400/40
              hover:bg-white/10
              transition-all duration-300
            "
          >
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400">
                {project.company}
              </p>
              <p className="text-xs text-blue-400 mt-1">
                {project.period}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full
                             bg-blue-500/10 text-blue-400
                             border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
