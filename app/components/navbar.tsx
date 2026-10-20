"use client";

import React from "react";
import { usePathname } from "next/navigation";

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <a
      href={href}
      aria-current={active ? "page" : undefined}
      className="
        rounded-full px-4 py-2 text-gray-400
        transition-all duration-300
        hover:-translate-y-0.5 hover:bg-blue-400/10 hover:text-blue-100
        hover:shadow-[0_6px_20px_rgba(59,130,246,0.16)]
        data-[active=true]:bg-blue-400/10 data-[active=true]:text-blue-100
        data-[active=true]:shadow-[0_6px_20px_rgba(59,130,246,0.16)]
      "
      data-active={active}
    >
      {children}
    </a>
  );
}

const Navbar = () => {
  const pathname = usePathname();
  const basePath =
    process.env.NODE_ENV === "development" ? "" : "/nextjs-portfolio";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B1220]/75 backdrop-blur-xl shadow-lg shadow-black/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4 px-6 py-3">
        {/* Logo / Home */}
        <a
          href={
            process.env.NODE_ENV === "development" ? "/" : "/nextjs-portfolio"
          }
          aria-label="Go to Lawrence's homepage"
          className="group shrink-0 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-[0_8px_20px_rgba(59,130,246,0.35)]"
        >
          <img
            src={
              process.env.NODE_ENV === "development"
                ? "/images/lawrence-mark.svg?v=2"
                : "/nextjs-portfolio/images/lawrence-mark.svg?v=2"
            }
            alt="Lawrence monogram"
            width={46}
            height={46}
            className="drop-shadow-lg"
          />
        </a>

        <div className="hidden md:flex items-center gap-1 text-sm font-medium">
          <NavLink
            href={`${basePath}/overview`}
            active={pathname.endsWith("/overview")}
          >
            Overview
          </NavLink>
          <NavLink
            href={`${basePath}/experience`}
            active={pathname.endsWith("/experience")}
          >
            Experience
          </NavLink>
          <NavLink
            href={`${basePath}/projects`}
            active={pathname.endsWith("/projects")}
          >
            Projects
          </NavLink>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={
              process.env.NODE_ENV === "development"
                ? "/contact"
                : "/nextjs-portfolio/contact"
            }
            className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-[0_8px_20px_rgba(59,130,246,0.3)]"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
