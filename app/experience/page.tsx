"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Fullstack Engineer",
    company: "Procconv",
    location: "Remote",
    period: "2025",
    description:
      "Developed and maintained full-stack features using Next.js (TypeScript), Tailwind CSS, shadcn/ui, and NestJS. Designed optimized PostgreSQL schemas and contributed to code reviews and testing practices.",
  },
  {
    role: "Senior Software Engineer - Frontend",
    company: "Locad",
    location: "Makati City, Philippines",
    period: "2022 – 2025",
    description:
      "Built scalable React applications, collaborated with backend and product teams, integrated APIs, performed code reviews, and mentored junior developers.",
  },
  {
    role: "Front End Developer",
    company: "Dottystyle Creative Co.",
    location: "Makati City, Philippines",
    period: "2021 – 2022",
    description:
      "Converted designs into responsive web applications and maintained existing systems with strong attention to UI consistency and performance.",
  },
  {
    role: "IT Support Specialist / Web Developer",
    company: "Advance Telematics Solutions",
    location: "UAE",
    period: "2019 – 2021",
    description:
      "Developed in-house systems, improved internal workflows, handled client requirements, and maintained backend systems using PHP and MySQL.",
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen px-6 sm:px-16 py-24 max-w-5xl mx-auto text-gray-300">

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Experience
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl text-lg">
          My professional journey building modern web applications
          across frontend and full-stack environments.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative border-l border-white/10 ml-4 space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative pl-10"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[11px] top-2 w-4 h-4 bg-blue-400 rounded-full shadow-lg shadow-blue-400/30"></div>

            {/* Card */}
            <div className="
              bg-white/5 backdrop-blur-md
              border border-white/10
              rounded-xl p-6
              hover:border-blue-400/40
              hover:bg-white/10
              transition-all duration-300
            ">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3">
                <h3 className="text-lg font-semibold text-white">
                  {exp.role}
                </h3>
                <span className="text-sm text-blue-400">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-gray-400 mb-3">
                {exp.company} • {exp.location}
              </p>

              <p className="text-gray-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Closing Statement */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-24"
      >
        <p className="text-gray-400 max-w-2xl mx-auto">
          I’ve grown from building small frontend features to leading
          scalable application development and collaborating across full
          engineering teams.
        </p>
      </motion.div>
    </div>
  );
}
