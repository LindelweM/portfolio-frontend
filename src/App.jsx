import Ambience from "./components/Ambience";
import NavRail from "./components/NavRail";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="grain font-body">
      <Ambience />
      <div className="intro-curtain" aria-hidden="true" />

      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]
                   focus:rounded-full focus:bg-[var(--accent)] focus:px-4 focus:py-2
                   focus:font-display focus:text-sm focus:text-[var(--bg)]"
      >
        Skip to content
      </a>

      <NavRail />

      <main className="relative z-10 md:ml-60">
        <Hero />
        <Resume />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>

      <BackToTop />
    </div>
  );
}
