// import components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";
// Animation Package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(()=> {
    Aos.init({
      duration: 1800,
      offset: 100,
    });
  }, [])
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
