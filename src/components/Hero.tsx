
import SJImg from "../assets/updated-SJ.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-4 bg-gradient-to-br from-blue-100 via-slate-100 to-purple-100 overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16 py-12 md:py-20 px-4 md:px-10">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center z-10 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-800 mb-4 drop-shadow-lg transition-all duration-500">
            Sumit Jha
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600 mb-2 transition-colors duration-500">
            Front-End Developer | React & JavaScript Enthusiast
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 max-w-xl transition-all duration-500">
            Crafting clean, user-focused, and responsive web experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors duration-200 hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="/assets/Updated-Sumit-Jha-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded border border-blue-600 text-blue-600 font-semibold shadow hover:bg-blue-50 transition-colors duration-200 hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end items-center mb-8 md:mb-0 z-10 animate-fade-in">
          <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg bg-white/70 backdrop-blur-lg transition-all duration-700 hover:scale-105">
            <img
              src={SJImg}
              alt="Sumit Jha"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* Decorative Gradient Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-200 rounded-full opacity-40 blur-3xl animate-blob1" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-200 rounded-full opacity-30 blur-3xl animate-blob2" />
    </section>
  );
};

export default Hero; 