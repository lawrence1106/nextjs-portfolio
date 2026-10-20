"use client";

import { motion } from "framer-motion";

const projects: {
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  github?: string;
}[] = [
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
      "Migrated a legacy application into a modern web application with improved performance and real-time data presentation.",
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
  {
    title: "Chess Grandmasters Wiki",
    company: "Personal Project",
    period: "2025",
    description:
      "React and TypeScript application for browsing Chess.com grandmaster profiles through an external API.",
    tech: ["React", "TypeScript", "Material UI", "REST API"],
    github: "https://github.com/lawrence1106/fe-technical-challenge",
  },
  {
    title: "AniListdesu",
    company: "Personal Project",
    period: "2020",
    description:
      "Anime tracking dashboard for managing watch lists, dropped titles, and personal anime data.",
    tech: ["React", "JavaScript", "Node.js", "REST API", "MySQL"],
    github: "https://github.com/lawrence1106/anilistdesu",
  },
  {
    title: "Amana Maintenance App",
    company: "Personal Project",
    period: "2020",
    description:
      "Maintenance management application with a React interface, data tables, charts, and an Express server.",
    tech: ["React", "JavaScript", "Express", "Material UI", "Axios"],
    github: "https://github.com/lawrence1106/amana_maintenance_app",
  },
  {
    title: "Game 168",
    company: "Personal Project",
    period: "Completed",
    description:
      "Completed web application project built as part of the Game 168 platform.",
    tech: ["React", "JavaScript"],
    github: "https://github.com/lawrence1106/Game-168",
  },
  {
    title: "Game 168 Admin Panel",
    company: "Personal Project",
    period: "Completed",
    description:
      "Completed administration interface for managing the Game 168 platform.",
    tech: ["React", "JavaScript"],
    github: "https://github.com/lawrence1106/game-168-admin-panel",
  },
  {
    title: "Game 168 Express Server",
    company: "Personal Project",
    period: "Completed",
    description:
      "Completed Express backend server supporting the Game 168 application and administration panel.",
    tech: ["Node.js", "Express", "REST API"],
    github: "https://github.com/lawrence1106/game-168-express-server",
  },
];

const personalProjectTitles = [
  "Chess Grandmasters Wiki",
  "AniListdesu",
  "Game 168",
  "Game 168 Admin Panel",
  "Game 168 Express Server",
];

const personalProjects = projects.filter((project) =>
  personalProjectTitles.includes(project.title),
);

const liveProjects: {
  title: string;
  type: string;
  description: string;
  tech: string[];
  github?: string;
  liveUrl?: string;
  liveLabel?: string;
}[] = [
  {
    title: "Aphex Planner",
    type: "Current Work",
    description:
      "Construction delivery platform that connects lookahead planning, daily operations, resource planning, production tracking, and site diaries in one live system.",
    tech: ["React", "TypeScript", "Redux Toolkit", "Firebase", "Hono"],
    liveUrl: "https://www.aphex.co/",
    liveLabel: "Visit Aphex Website",
  },
  {
    title: "Ezy",
    type: "Customer Web Application",
    description:
      "Personal live project frontend built with React for the Ezy platform.",
    tech: ["React", "JavaScript"],
    github: "https://github.com/lawrence1106/ezy-ver2-react",
    liveUrl: "https://ezycsgo.com/",
  },
  {
    title: "Ezy Admin",
    type: "Administration Dashboard",
    description:
      "React-based administration interface for managing the Ezy platform.",
    tech: ["React", "JavaScript"],
    github: "https://github.com/lawrence1106/ezy-ver2-admin-react",
  },
  {
    title: "Ezy API",
    type: "Backend Service",
    description:
      "Express backend service supporting the Ezy customer application and admin dashboard.",
    tech: ["Node.js", "Express", "REST API"],
    github: "https://github.com/lawrence1106/ezy-ver2-express",
  },
  {
    title: "Ezy TF2 Service",
    type: "Supporting Service",
    description:
      "Supporting service for the Ezy platform, included as part of its personal full-stack project suite.",
    tech: ["Node.js", "Service"],
    github: "https://github.com/lawrence1106/ezy-tf2-service",
  },
];

const professionalProjects = liveProjects.filter(
  (project) => project.title === "Aphex Planner",
);

const personalLiveProjects = liveProjects.filter(
  (project) => project.title !== "Aphex Planner",
);

const projectVisualStyles: Record<string, string> = {
  "Aphex Planner":
    "bg-[radial-gradient(circle_at_75%_20%,rgba(96,165,250,0.65),transparent_30%),linear-gradient(135deg,#172554,#0f172a)]",
  Ezy: "bg-[radial-gradient(circle_at_25%_20%,rgba(129,140,248,0.6),transparent_32%),linear-gradient(135deg,#172554,#111827)]",
  "Ezy Admin":
    "bg-[radial-gradient(circle_at_80%_25%,rgba(56,189,248,0.55),transparent_30%),linear-gradient(135deg,#164e63,#0f172a)]",
  "Ezy API":
    "bg-[radial-gradient(circle_at_30%_75%,rgba(59,130,246,0.55),transparent_28%),linear-gradient(135deg,#1e3a8a,#111827)]",
  "Ezy TF2 Service":
    "bg-[radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.55),transparent_30%),linear-gradient(135deg,#312e81,#0f172a)]",
};

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
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-blue-300 mb-5">
          <span className="h-px w-10 bg-blue-400"></span>
          <span>Selected builds</span>
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-[-0.04em] text-white">
          Projects
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl text-lg leading-relaxed">
          Production systems and applications I’ve worked on across different
          companies.
        </p>
      </motion.div>

      {/* Professional Work */}
      <motion.section {...fadeUp} className="mb-20">
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl font-semibold text-white">
              Professional Work
            </h2>
            <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Current
            </span>
          </div>
          <p className="mt-3 text-gray-400 max-w-2xl">
            Professional products and platforms I’m currently building,
            supporting, and maintaining.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {professionalProjects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8 }}
              className="
                bg-white/5 backdrop-blur-md
                rounded-2xl p-6
                h-full flex flex-col
                hover:-translate-y-1
                hover:bg-blue-400/[0.08]
                hover:shadow-[0_12px_30px_rgba(59,130,246,0.16)]
                transition-all duration-300
              "
            >
              <div
                className={"relative mb-6 h-36 overflow-hidden rounded-2xl " + projectVisualStyles[project.title]}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-blue-500/[0.16]"></div>
                <div className="absolute inset-0 flex items-end justify-between p-5">
                  <span className="text-3xl font-semibold tracking-[-0.06em] text-white/90">
                    {project.title === "Aphex Planner" ? "APHEX" : "EZY"}
                  </span>
                  <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-blue-100 backdrop-blur-sm">
                    {project.title === "Aphex Planner" ? "Product" : "Platform"}
                  </span>
                </div>
              </div>
              <p className="text-xs uppercase tracking-wider text-blue-400 mb-2">
                {project.type}
              </p>
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 leading-relaxed my-4 min-h-[5.25rem]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full
                               bg-blue-500/10 text-blue-400
                               border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6 flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-blue-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-200 hover:drop-shadow-[0_4px_12px_rgba(59,130,246,0.35)]"
                  >
                    {project.liveLabel ?? "Visit Live Project"} →
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-blue-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-200 hover:drop-shadow-[0_4px_12px_rgba(59,130,246,0.35)]"
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Personal Live Projects */}
      <motion.section {...fadeUp} className="mb-20">
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl font-semibold text-white">
              Personal Live Projects
            </h2>
            <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Live
            </span>
          </div>
          <p className="mt-3 text-gray-400 max-w-2xl">
            Personal products and services I’m currently building and
            maintaining outside of my professional work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {personalLiveProjects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8 }}
              className="
                bg-white/5 backdrop-blur-md
                rounded-xl p-6
                h-full flex flex-col
                hover:-translate-y-1
                hover:bg-blue-400/[0.08]
                hover:shadow-[0_12px_30px_rgba(59,130,246,0.16)]
                transition-all duration-300
              "
            >
              <div
                className={"relative mb-6 h-36 overflow-hidden rounded-2xl " + projectVisualStyles[project.title]}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-blue-500/[0.16]"></div>
                <div className="absolute inset-0 flex items-end justify-between p-5">
                  <span className="text-3xl font-semibold tracking-[-0.06em] text-white/90">
                    EZY
                  </span>
                  <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-blue-100 backdrop-blur-sm">
                    Platform
                  </span>
                </div>
              </div>
              <p className="text-xs uppercase tracking-wider text-blue-400 mb-2">
                {project.type}
              </p>
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 leading-relaxed my-4 min-h-[5.25rem]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full
                               bg-blue-500/10 text-blue-400
                               border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6 flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-blue-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-200 hover:drop-shadow-[0_4px_12px_rgba(59,130,246,0.35)]"
                  >
                    {project.liveLabel ?? "Visit Live Project"} →
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-blue-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-200 hover:drop-shadow-[0_4px_12px_rgba(59,130,246,0.35)]"
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Personal Projects */}
      <motion.section {...fadeUp} className="mb-20">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-white">
            Personal Projects
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl">
            Selected projects built independently outside of my professional
            experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {personalProjects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8 }}
              className="
                bg-white/5 backdrop-blur-md
                rounded-xl p-8
                hover:-translate-y-1
                hover:bg-blue-400/[0.08]
                hover:shadow-[0_12px_30px_rgba(59,130,246,0.16)]
                transition-all duration-300
              "
            >
              <div
                className={"relative mb-6 h-36 overflow-hidden rounded-2xl " + (projectVisualStyles[project.title] ?? "bg-[radial-gradient(circle_at_75%_20%,rgba(96,165,250,0.45),transparent_30%),linear-gradient(135deg,#172554,#0f172a)]")}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-blue-500/[0.16]"></div>
                <div className="absolute inset-0 flex items-end justify-between p-5">
                  <span className="max-w-[70%] text-2xl font-semibold uppercase tracking-[-0.05em] text-white/90">
                    {project.title}
                  </span>
                  <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-blue-100 backdrop-blur-sm">
                    Build
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400">{project.company}</p>
                <p className="text-xs text-blue-400 mt-1">{project.period}</p>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full
                               bg-blue-500/10 text-blue-400
                               border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex mt-6 text-sm text-blue-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-200 hover:drop-shadow-[0_4px_12px_rgba(59,130,246,0.35)]"
                >
                  View on GitHub →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Professional and Completed Projects */}
      <motion.div {...fadeUp} className="mb-10">
        <h2 className="text-2xl font-semibold text-white">
          Professional & Completed Work
        </h2>
        <p className="mt-3 text-gray-400 max-w-2xl">
          Selected systems and applications delivered across professional and
          completed personal projects.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.filter((project) => !personalProjects.includes(project)).map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="
              bg-white/5 backdrop-blur-md
                rounded-2xl p-6
              hover:-translate-y-1
              hover:bg-blue-400/[0.08]
              hover:shadow-[0_12px_30px_rgba(59,130,246,0.16)]
              transition-all duration-300
            "
          >
            <div
              className={"relative mb-6 h-36 overflow-hidden rounded-2xl " + (projectVisualStyles[project.title] ?? "bg-[radial-gradient(circle_at_75%_20%,rgba(96,165,250,0.45),transparent_30%),linear-gradient(135deg,#172554,#0f172a)]")}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-blue-500/[0.16]"></div>
              <div className="absolute inset-0 flex items-end justify-between p-5">
                <span className="max-w-[70%] text-2xl font-semibold uppercase tracking-[-0.05em] text-white/90">
                  {project.title}
                </span>
                <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-blue-100 backdrop-blur-sm">
                  Build
                </span>
              </div>
            </div>

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

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex mt-6 text-sm text-blue-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-200 hover:drop-shadow-[0_4px_12px_rgba(59,130,246,0.35)]"
              >
                View on GitHub →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
