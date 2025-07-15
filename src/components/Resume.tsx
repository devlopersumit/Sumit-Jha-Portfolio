

const highlights = [
  {
    title: "Education",
    points: [
      "B.Sc. in Computer Science",
      "Certified Front-End Developer",
    ],
  },
  {
    title: "Experience",
    points: [
      "Co-Founder at Career Tech Insight",
      "Computer Science Teacher at Shri Raghubir Jr. College",
      "Affiliate Marketer at IDigitalPreneur",
      "Business Consultant at Vestige",
    ],
  },
  {
    title: "Skills",
    points: [
      "React, JavaScript, TypeScript, Tailwind CSS, HTML, CSS, Python, Java, C++, SQL, AI Tools",
    ],
  },
];

const Resume = () => {
  return (
    <section id="resume" className="py-16 px-4 bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-white/60 backdrop-blur-lg rounded-xl shadow-2xl border-l-8 border-blue-200 p-8 flex flex-col items-center text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Resume</h2>
        <a
          href="/assets/Updated-Sumit-Jha.pdf"
          download
          className="mb-6 px-6 py-2 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:from-blue-600 hover:to-purple-600 transition-all duration-200 hover:scale-105"
        >
          Download Resume
        </a>
        <div className="grid gap-6 sm:grid-cols-3 w-full mt-4">
          {highlights.map((section) => (
            <div key={section.title} className="text-left">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">{section.title}</h3>
              <ul className="list-disc pl-5 text-slate-700 text-sm space-y-1">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume; 