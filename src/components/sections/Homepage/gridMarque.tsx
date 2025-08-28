"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/Marque";

import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaLinux } from "react-icons/fa";
import { SiTypescript, SiPostman, SiTailwindcss, SiNextdotjs, SiExpress, SiGithub, SiVercel, SiNpm, SiGit } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import Image from "next/image";
import Zustand from "@/public/z_3479532.png"


const frontendSkills = [
  { name: "React.js", icon: <FaReact className="text-sky-400 w-4 h-4" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 w-4 h-4" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 w-4 h-4" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 w-4 h-4" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 w-4 h-4" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 w-4 h-4" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white w-4 h-4" /> },
  { name: "VS Code", icon: <VscCode className="text-blue-500 w-4 h-4" /> },
  { name: "Zustand", icon: <Image src={Zustand} alt="Zustand Logo" className="w-3 h-3" /> },
];

const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-4 h-4" /> },
  { name: "Express.js", icon: <SiExpress className="text-white w-4 h-4" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-emerald-400 w-4 h-4" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500 w-4 h-4" /> },
];


const hostingSkills = [
  { name: "GitHub", icon: <SiGithub className="text-white w-4 h-4" /> },
  { name: "Netlify", icon: <SiVercel className="text-blue-900 w-4 h-4" /> }, // placeholder
  { name: "VS Code", icon: <VscCode className="text-blue-500 w-4 h-4" /> },
  { name: "Ubuntu", icon: <FaLinux className="text-orange-500 w-4 h-4" /> },
  { name: "Linux", icon: <FaLinux className="text-yellow-500 w-4 h-4" /> },
  { name: "Vercel", icon: <SiVercel className="text-white w-4 h-4" /> },
  { name: "NPM", icon: <SiNpm className="text-red-600 w-4 h-4" /> },
  { name: "Git", icon: <SiGit className="text-orange-600 w-4 h-4" /> },
  { name: "Render", icon: <SiVercel className="text-white w-4 h-4" /> }, // placeholder
];


const SkillCard = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
  <figure
    className={cn(
      "flex items-center justify-center gap-2 top-10 bg-[#171717ad] text-white border border-gray-600 dark:border-gray-700 rounded-lg px-2 py-1 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
    )}
  >
    {icon}
    <figcaption className="text-[10px] font-[var(--font-outfit)] font-[500] dark:text-white">{name}</figcaption>
  </figure>
);

export function SkillsMarquee() {
  return (
    <div className="relative flex top-12  flex-col items-center justify-center w-full h-full overflow-hidden py-2 gap-2">
      {/* Frontend */}
      <Marquee className="[--duration:30s] flex gap-2 items-center justify-center">
        {frontendSkills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>

      {/* Backend */}
      <Marquee reverse className="[--duration:30s] flex gap-4 items-center justify-center">
        {backendSkills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>

      {/* Hosting / Deployment */}
      <Marquee className="[--duration:30s] flex gap-4 items-center justify-center">
        {hostingSkills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>

      {/* Gradient edges */}
     
    </div>
  );
}
