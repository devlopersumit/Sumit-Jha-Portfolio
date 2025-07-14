import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-slate-50 flex justify-center items-center">
      <div className="max-w-2xl w-full bg-white/60 backdrop-blur-lg rounded-xl shadow-2xl border-l-8 border-blue-200 p-8 flex flex-col items-center text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Contact</h2>
        <p className="text-slate-600 mb-4">Let's connect! Fill out the form or reach out via social links below.</p>
        {submitted ? (
          <div className="text-green-600 font-semibold text-lg mb-6">Thank you for reaching out! I'll get back to you soon.</div>
        ) : (
          <form className="w-full max-w-md flex flex-col gap-4 mb-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="px-4 py-2 rounded border border-slate-200 bg-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded border border-slate-200 bg-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="px-4 py-2 rounded border border-slate-200 bg-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:from-blue-600 hover:to-purple-600 transition-all duration-200 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        )}
        <div className="flex gap-6 justify-center mb-4 text-2xl">
          <a href="https://github.com/sumitjha7" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900 hover:scale-110 transition-transform duration-200"><FaGithub /></a>
          <a href="https://linkedin.com/in/sumitjha7" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 hover:scale-110 transition-transform duration-200"><FaLinkedin /></a>
          <a href="mailto:sumitjha7@gmail.com" className="text-red-600 hover:text-red-800 hover:scale-110 transition-transform duration-200"><FaEnvelope /></a>
          <a href="https://x.com/_sumitjha_?t=4nSWLPjfWOEhS06PoX9-Lg&s=09" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 hover:scale-110 transition-transform duration-200"><FaTwitter /></a>
        </div>
        <div className="text-slate-500 text-sm mt-2">Mumbai, Maharashtra, India</div>
      </div>
    </section>
  );
};

export default Contact; 