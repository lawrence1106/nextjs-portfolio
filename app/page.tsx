"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-6 sm:px-16">

      {/* HERO SECTION */}
      <section className="min-h-[85vh] flex items-center">
        <div className="grid lg:grid-cols-2 items-center w-full gap-16">

          {/* LEFT */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-4"
            >
              <h1 className="text-5xl sm:text-6xl font-normal tracking-tight">
                Hey, I’m Lawrence 👋
              </h1>

              <h2 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight">
                I build scalable web apps
              </h2>

              <p className="text-5xl sm:text-6xl font-normal text-gray-400 tracking-tight">
                with React & Node.js.
              </p>

              <p className="text-lg text-gray-400 mt-6 max-w-xl leading-relaxed">
                I’m a frontend engineer who enjoys building clean, scalable
                interfaces and working closely with backend teams to ship
                features that actually matter.
              </p>

              <div className="flex gap-6 mt-6 text-sm text-gray-400">
                <span>Frontend Engineer</span>
                <a
                  href="mailto:torres.lawrence.986@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  torres.lawrence.986@gmail.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT HERO IMAGE */}
          <div className="hidden lg:flex justify-center relative">
            <div className="absolute w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
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
            </motion.div>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-24" />

      {/* ABOUT SECTION */}
      <section className="pb-32">
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
              A bit about me
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              I’ve worked across startups and enterprise environments,
              building production systems used by real customers. My focus
              is frontend engineering — designing scalable UI architecture,
              improving performance, and keeping codebases maintainable
              as products grow.
            </p>

            <p className="text-gray-400 leading-relaxed">
              While frontend is my core strength, I’m comfortable working
              across the stack — collaborating with backend teams,
              reviewing APIs, and contributing to system design when needed.
              I enjoy solving practical product problems and shipping
              features that make sense.
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
