
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {

  return (
    <div className="font-sans bg-gradient-to-br from-slate-50 to-slate-200 min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
