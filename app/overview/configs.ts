import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJquery,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiSocketdotio,
} from "react-icons/si";

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Material UI", icon: SiMui },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "CSS / SCSS", icon: SiCss3 },
      { name: "HTML", icon: SiHtml5 },
      { name: "jQuery", icon: SiJquery },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "NestJS", icon: SiNestjs },
      { name: "PHP", icon: SiPhp },
      { name: "WebSockets", icon: SiSocketdotio },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
];
