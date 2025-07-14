
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 w-full bg-gradient-to-br from-blue-100/80 via-white/70 to-purple-100/80 backdrop-blur-lg border-t border-blue-100 py-6 px-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-inner">
      <div className="flex items-center gap-2 text-slate-600 text-sm">
        <span>© 2025 Sumit Jha. Built with <span className="text-pink-500">❤️</span> using React & Tailwind.</span>
      </div>
      <div className="flex items-center gap-4 text-2xl">
        <a href="https://github.com/sumitjha7" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900 hover:scale-110 transition-transform duration-200"><FaGithub /></a>
        <a href="https://linkedin.com/in/sumitjha7" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 hover:scale-110 transition-transform duration-200"><FaLinkedin /></a>
        <a href="https://x.com/_sumitjha_?t=4nSWLPjfWOEhS06PoX9-Lg&s=09" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 hover:scale-110 transition-transform duration-200"><FaTwitter /></a>
        <button
          onClick={handleScrollTop}
          aria-label="Scroll to top"
          className="ml-2 p-2 rounded-full bg-white/70 shadow hover:bg-blue-100 transition-all duration-200 border border-blue-200 text-blue-600 hover:text-blue-800 hover:scale-110"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer; 