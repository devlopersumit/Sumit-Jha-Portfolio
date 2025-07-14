
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import SJImg from "../assets/updated-SJ.png";

const stack = ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"];

const About = () => {
  return (
    <section id="about" className="flex justify-center items-center py-16 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="max-w-4xl w-full bg-white/60 backdrop-blur-lg rounded-xl shadow-2xl border-l-8 border-blue-200 flex flex-col md:flex-row items-center p-6 md:p-10 gap-8 animate-fade-in-up">
        {/* Image */}
        <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-100 shadow">
          <img src={SJImg} alt="Sumit Jha" className="object-cover w-full h-full" />
        </div>
        {/* Bio and Info */}
        <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-1">About Me</h2>
          <p className="text-slate-600">
            Hi! I'm Sumit Jha, a passionate front-end developer focused on building clean, user-centric, and responsive web apps. I love working with modern JavaScript frameworks and crafting delightful user experiences.
          </p>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-2">
            {stack.map((tech) => (
              <span key={tech} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-2 text-slate-500 text-sm">
            <span className="block">@UseMyCard &mdash; Family-friendly fintech solution</span>
            <span className="block">@CareerTechInsight &mdash; AI-powered career newsletter</span>
          </div>
          <div className="flex gap-4 items-center justify-center md:justify-start mt-4">
            <a href="/assets/SumitJha-Resume.pdf" download className="text-blue-600 font-semibold underline hover:text-blue-800">Download Resume</a>
            <a href="https://github.com/sumitjha7" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900 text-2xl"><FaGithub /></a>
            <a href="https://linkedin.com/in/sumitjha7" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-2xl"><FaLinkedin /></a>
            <a href="https://x.com/_sumitjha_?t=4nSWLPjfWOEhS06PoX9-Lg&s=09" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-2xl"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 