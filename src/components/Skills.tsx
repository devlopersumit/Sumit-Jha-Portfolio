import React from "react";
import { FaJs, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaFigma, FaGitAlt, FaRegLightbulb, FaJava, FaPython, FaWind, FaDatabase } from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiCanva, SiSupabase, SiNotion, SiTypescript, SiGithubcopilot } from "react-icons/si";
import { BsChatDots } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";
import { TbBrandVercel } from "react-icons/tb";
import { PiLightningFill } from "react-icons/pi";
import { MdFavorite } from "react-icons/md";
import { RiRobot2Fill } from "react-icons/ri";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: <FaJs color="#f7df1e" size={28} /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178c6" size={28} /> },
      { name: "C++", icon: <SiCplusplus color="#00599c" size={28} /> },
      { name: "Java", icon: <FaJava color="#b07219" size={28} /> },
      { name: "Python", icon: <FaPython color="#3776ab" size={28} /> },
      { name: "SQL", icon: <FaDatabase color="#15803d" size={28} /> },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: <FaReact color="#61dafb" size={28} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#06b6d4" size={28} /> },
      { name: "Bootstrap", icon: <FaBootstrap color="#7952b3" size={28} /> },
      { name: "HTML", icon: <FaHtml5 color="#e34c26" size={28} /> },
      { name: "CSS", icon: <FaCss3Alt color="#2563eb" size={28} /> },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Figma", icon: <FaFigma color="#f24e1e" size={28} /> },
      { name: "Canva", icon: <SiCanva color="#00c4cc" size={28} /> },
    ],
  },
  {
    category: "Tools & AI",
    items: [
      { name: "Supabase", icon: <SiSupabase color="#3ecf8e" size={28} /> },
      { name: "Git", icon: <FaGitAlt color="#f34f29" size={28} /> },
      { name: "Notion", icon: <SiNotion color="#000" size={28} /> },
      { name: "Cursor", icon: <FaRegLightbulb color="#fde047" size={28} /> },
      { name: "Windsurf", icon: <FaWind color="#38bdf8" size={28} /> },
      { name: "ChatGPT", icon: <BsChatDots color="#22c55e" size={28} /> },
      { name: "Claude", icon: <GiArtificialIntelligence color="#a78bfa" size={28} /> },
      { name: "Grok", icon: <GiArtificialIntelligence color="#000" size={28} /> },
      { name: "GitHub Copilot", icon: <SiGithubcopilot color="#22c55e" size={28} /> },
      { name: "Gemini", icon: <GiArtificialIntelligence color="#38bdf8" size={28} /> },
      { name: "v0", icon: <TbBrandVercel color="#000" size={28} /> },
      { name: "Lovable", icon: <MdFavorite color="#f472b6" size={28} /> },
      { name: "Bolt.new", icon: <PiLightningFill color="#fde047" size={28} /> },
      { name: "Perplexity", icon: <RiRobot2Fill color="#38bdf8" size={28} /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-2 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-2 text-center">Skills</h2>
        <p className="text-slate-500 text-center mb-8 max-w-2xl mx-auto">A quick look at my favorite languages, frameworks, design tools, and AI assistants. Hover or tap for names!</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {skills.map((group) => (
            <div key={group.category} className="bg-white/80 rounded-xl shadow border border-slate-100 p-4 flex flex-col items-center group hover:shadow-lg transition-all duration-200">
              <h3 className="text-base font-semibold text-blue-600 mb-3 tracking-wide uppercase">{group.category}</h3>
              <ul className="flex flex-wrap justify-center gap-3 md:gap-4">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col items-center group-hover:scale-105 transition-transform duration-200"
                  >
                    <span className="text-2xl md:text-3xl mb-1" title={item.name}>{item.icon}</span>
                    <span className="hidden md:block text-slate-700 text-xs font-medium text-center">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 