import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const handleContact = (e) => {
    window.open(
      `https://api.whatsapp.com/send?phone=62895368567925&text=haloo`
    );
  };
  return (
    <div>
      <section className="home bd-grid " id="home">
        <div className="left">
          <div className="home__data">
            <h1 className="home__title">
              Halo,
              <br />
              Saya <span className="home__title-color">Silviani</span>
              <br /> QA Engineer
            </h1>

            <a
              href="https://api.whatsapp.com/send?phone=62895368567925&text=haloo"
              target="_blank"
              className="button"
              style={{ marginRight: "5px" }}
              // onClick={handleContact}
            >
              Contact
            </a>
            <a
              href="https://drive.google.com/file/d/1UGNCtftMHWP6KnpE24XzTf77CWcbEdWS/view?usp=sharing"
              target="_blank"
              className="button"
            >
              CV
            </a>
          </div>

          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/silviani-nurlita-putri-357808206/"
              className="home__social-icon"
              target="_blank"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/silvianinurlitaptr/"
              className="home__social-icon"
              target="_blank"
            >
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a
              href="https://github.com/Silvianinrltptr"
              className="home__social-icon"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>

        <div className="right">
          <div className="home__img">
            <img
              src="https://avatars.githubusercontent.com/u/71995710?v=4"
              width={350}
              alt=""
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
