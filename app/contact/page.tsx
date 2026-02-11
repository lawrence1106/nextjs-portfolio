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
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
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
        border border-white/10
        rounded-xl px-6
        hover:border-blue-400/40
        hover:bg-white/10
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
