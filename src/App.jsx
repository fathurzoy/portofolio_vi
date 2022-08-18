import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import AOS from "aos";
import Certificate from "./components/Certificate/Certificate";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <main className="l-main">
        {/* <!--===== HOME =====--> */}
        <div data-aos="fade-up">
          <Home />
        </div>

        {/* <!--===== ABOUT =====--> */}
        <div data-aos="fade-up">
          <About />
        </div>

        {/* <!--===== SKILLS =====--> */}
        <div data-aos="fade-up">
          <Skills />
        </div>

        {/* <!--===== WORK =====--> */}
        <div data-aos="fade-up">
          <Experience />
        </div>

        {/* <!--===== Certificate =====--> */}
        <div data-aos="fade-up">
          <Certificate />
        </div>

        {/* <!--===== CONTACT =====--> */}
        <div data-aos="fade-up">
          <Contact />
        </div>
      </main>

      {/* <!--===== FOOTER =====--> */}
      <Footer />
    </div>
  );
}

export default App;
