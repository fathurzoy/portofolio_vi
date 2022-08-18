import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <section className="about section " id="about">
        <h2 className="section-title">About</h2>

        <div className="about__container bd-grid">
          <div className="about__img">
            <img src="assets/img/foto.jpg" alt="" />
          </div>

          <div>
            <h2 className="about__subtitle" style={{ fontWeight: "bold" }}>
              Saya Silviani Nurlita Putri
            </h2>
            <p className="about__text">
              Saya adalah orang yang memiliki motivasi tinggi dalam bekerja,
              memiliki komunikasi yang baik dan cepat belajar hal-hal baru. Saya
              sangat menyukai tantangan. Saya memiliki ketertarikan dengan dunia
              teknologi. Saya tertarik belajar hal baru. Saya senang mencari
              solusi atau menyelesaikan masalah dalam program, gadget maupun
              kehidupan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
