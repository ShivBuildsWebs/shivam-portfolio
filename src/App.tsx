import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Interests from "./components/Interests/Interests";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MovesBackground from "./MovesBackground";


function App() {
  return (
    <>
      
      <MovesBackground />
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="interests">
          <Interests />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
