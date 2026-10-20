"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const scrollToAbout = () => {
    const section = document.getElementById("about");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="px-6 sm:px-16">

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center py-16 lg:py-24">

        <div className="grid lg:grid-cols-2 items-center w-full gap-16">

          {/* LEFT */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-blue-300">
                <span className="h-px w-10 bg-blue-400"></span>
                <span>Full-stack developer · Philippines</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-normal tracking-tight">
                Hey, I’m Lawrence 👋
              </h1>

              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold uppercase leading-[0.92] tracking-[-0.06em]">
                I build modern
              </h2>

              <p className="text-6xl sm:text-7xl lg:text-8xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-indigo-400 leading-[0.92] tracking-[-0.06em]">
                scalable full-stack apps.
              </p>

              <p className="text-lg text-gray-400 mt-6 max-w-xl leading-relaxed">
                I’m a full-stack engineer who enjoys turning messy workflows
                into clear, dependable products. I care about clean code,
                thoughtful UI, scalable systems, and useful outcomes.
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-6 text-sm text-gray-400">
                <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-blue-200">
                  Senior Full Stack Developer
                </span>
                <a
                  href="mailto:torres.lawrence.986@gmail.com"
                  className="rounded-full border border-white/10 px-4 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-blue-400/[0.08] hover:text-blue-200 hover:shadow-[0_6px_20px_rgba(59,130,246,0.16)]"
                >
                  torres.lawrence.986@gmail.com
                </a>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href={process.env.NODE_ENV === 'development' ? '/projects' : '/nextjs-portfolio/projects'}
                  className="rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-[0_8px_20px_rgba(59,130,246,0.3)]"
                >
                  Explore my work →
                </a>
                <button
                  onClick={scrollToAbout}
                  className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-blue-400/[0.08] hover:text-white hover:shadow-[0_6px_20px_rgba(59,130,246,0.16)]"
                >
                  More about me
                </button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT HERO IMAGE */}
          <div className="hidden lg:flex justify-center relative">
            <div className="absolute w-[30rem] h-[30rem] bg-blue-500/10 blur-3xl rounded-full"></div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <Image
                src={process.env.NODE_ENV === 'development' ? '/images/lawrence-avatar-transparent.png' : '/nextjs-portfolio/images/lawrence-avatar-transparent.png'}
                alt="Lawrence Illustration"
                width={450}
                height={450}
                priority
                className="drop-shadow-2xl"
              />
              <div className="absolute -right-3 bottom-10 rounded-2xl border border-white/10 bg-[#111C32]/80 px-4 py-3 backdrop-blur-md shadow-xl">
                <p className="text-[10px] uppercase tracking-[0.2em] text-blue-300">
                  Currently building
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Useful things for the web
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-gray-400 transition-all duration-300 hover:-translate-x-1/2 hover:-translate-y-1 hover:text-blue-200 hover:drop-shadow-[0_4px_12px_rgba(59,130,246,0.35)]"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown size={30} />
          </motion.div>
        </motion.button>

      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-24" />

      {/* ABOUT SECTION */}
      <section id="about" className="pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >

          {/* TEXT */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              A Bit About Me
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              I’ve worked across startups and enterprise environments,
              building production systems used by real customers. My focus
              is full-stack engineering — designing scalable UI architecture,
              building reliable backend services, and keeping codebases
              maintainable as products grow.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I work across the stack, from polished interfaces and API
              integrations to backend services and data-driven systems. I
              enjoy solving practical product problems and shipping features
              that make sense.
            </p>
          </div>

          {/* DESK ILLUSTRATION */}
          <div className="hidden lg:flex justify-center relative">
            <div className="absolute w-96 h-96 bg-blue-500/5 blur-3xl rounded-full"></div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src={process.env.NODE_ENV === 'development' ? '/images/about-illustration.png' : '/nextjs-portfolio/images/about-illustration.png'}
                alt="Lawrence working at desk"
                width={520}
                height={520}
                className="drop-shadow-2xl rounded-xl"
              />
            </motion.div>
          </div>

        </motion.div>
      </section>

    </div>
  );
}
