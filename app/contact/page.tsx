"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Phone,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

export default function Contact() {
  return (
    <div className="min-h-screen px-6 sm:px-16 py-24 max-w-4xl mx-auto text-gray-300">

      {/* Title */}
      <motion.div {...fadeUp} className="mb-20">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-blue-300 mb-5">
          <span className="h-px w-10 bg-blue-400"></span>
          <span>Start a conversation</span>
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-[-0.04em] text-white">
          Contact
        </h1>
        <p className="mt-4 text-gray-400 max-w-xl text-lg leading-relaxed">
          If you’d like to collaborate, discuss opportunities,
          or just connect — feel free to reach out.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <motion.div
        {...fadeUp}
        className="grid sm:grid-cols-2 gap-8"
      >
        {/* Email */}
        <ContactCard
          icon={Mail}
          title="Email"
          value="torres.lawrence.986@gmail.com"
          link="mailto:torres.lawrence.986@gmail.com"
        />

        {/* Phone */}
        <ContactCard
          icon={Phone}
          title="Phone"
          value="0956-815-5727"
          link="tel:09568155727"
        />

        {/* GitHub */}
        <ContactCard
          icon={Github}
          title="GitHub"
          value="github.com/lawrence1106"
          link="https://github.com/lawrence1106"
        />

        {/* LinkedIn */}
        <ContactCard
          icon={Linkedin}
          title="LinkedIn"
          value="linkedin.com/in/lawrence-torres-30a8b1176/"
          link="https://www.linkedin.com/in/lawrence-torres-30a8b1176/"
        />

      </motion.div>

      {/* Footer Statement */}
      <motion.div
        {...fadeUp}
        className="text-center mt-24"
      >
        <p className="text-gray-400 max-w-2xl mx-auto">
          I’m open to frontend-focused roles, full-stack collaboration,
          and interesting product challenges.
        </p>
      </motion.div>
    </div>
  );
}

/* ---------- Reusable Card Component ---------- */

function ContactCard({
  icon: Icon,
  title,
  value,
  link,
}: {
  icon: any;
  title: string;
  value: string;
  link?: string;
}) {
  const content = (
    <div
      className="
        group h-24 flex items-center gap-4
        bg-white/5 backdrop-blur-md
        rounded-xl px-6
        hover:-translate-y-1
        hover:bg-blue-400/[0.08]
        hover:shadow-[0_12px_30px_rgba(59,130,246,0.16)]
        transition-all duration-300
      "
    >
      <Icon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors duration-300" />
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-white font-medium">{value}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      {content}
    </motion.div>
  );
}
