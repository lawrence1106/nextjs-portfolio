import Link from "next/link";
import React from "react";
import { HomeIcon } from "@heroicons/react/16/solid";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="
        relative text-gray-400 hover:text-white
        transition-all duration-300
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0
        after:bg-blue-400
        after:transition-all after:duration-300
        hover:after:w-full
      "
    >
      {children}
    </a>
  );
}

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F172A]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo / Home */}
        <a
          href={process.env.NODE_ENV === 'development' ? '/' : '/nextjs-portfolio'}
          className="text-gray-300 hover:text-white transition-colors duration-300"
        >
          🏠
        </a>

        {/* Links */}
        <div className="flex gap-8 text-sm font-medium">
          <NavLink href={process.env.NODE_ENV === 'development' ? '/overview' : '/nextjs-portfolio/overview'}>Overview</NavLink>
          <NavLink href={process.env.NODE_ENV === 'development' ? '/experience' : '/nextjs-portfolio/experience'}>Experience</NavLink>
          <NavLink href={process.env.NODE_ENV === 'development' ? '/projects' : '/nextjs-portfolio/projects'}>Projects</NavLink>
          <NavLink href={process.env.NODE_ENV === 'development' ? '/contact' : '/nextjs-portfolio/contact'}>Contact</NavLink>
        </div>

      </div>
    </nav>

  );
};

export default Navbar;
