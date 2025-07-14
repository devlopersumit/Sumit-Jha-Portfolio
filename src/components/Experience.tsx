
import { FaBriefcase, FaChalkboardTeacher, FaChartLine, FaUserTie } from "react-icons/fa";

const experiences = [
  {
    title: "Co-Founder",
    company: "Career Tech Insight",
    duration: "2024 – Present",
    icon: <FaBriefcase color="#2563eb" size={28} />,
    points: [
      "Content research, audience mapping, and strategy.",
      "Launched an AI-powered career newsletter.",
    ],
  },
  {
    title: "Computer Science Teacher",
    company: "Shri Raghubir Jr. College",
    duration: "2023 – Present",
    icon: <FaChalkboardTeacher color="#22c55e" size={28} />,
    points: [
      "Taught computer science to junior college students.",
      "Developed engaging lesson plans and projects.",
    ],
  },
  {
    title: "Affiliate Marketer",
    company: "IDigitalPreneur",
    duration: "Jan 2023 – June 2023",
    icon: <FaChartLine color="#a78bfa" size={28} />,
    points: [
      "Promoted digital products and achieved sales targets.",
      "Built a network of affiliate partners.",
    ],
  },
  {
    title: "Business Consultant",
    company: "Vestige",
    duration: "2020 – 2023",
    icon: <FaUserTie color="#fde047" size={28} />,
    points: [
      "Consulted clients on business growth strategies.",
      "Conducted training sessions and workshops.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Experience</h2>
        <div className="flex flex-col gap-8 relative border-l-2 border-blue-100 pl-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex gap-6 items-start group animate-fade-in-up">
              <div className="absolute -left-7 top-2 bg-white/80 rounded-full shadow p-2 border border-blue-100 group-hover:scale-110 transition-transform duration-200 backdrop-blur-lg">
                {exp.icon}
              </div>
              <div className="bg-white/60 backdrop-blur-lg rounded-xl shadow-2xl border-l-8 border-blue-200 p-6 w-full group-hover:shadow-2xl transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <span className="text-lg font-semibold text-slate-800">{exp.title}</span>
                  <span className="text-sm text-slate-500">{exp.duration}</span>
                </div>
                <span className="text-blue-600 font-medium text-sm mb-2 block">{exp.company}</span>
                <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 