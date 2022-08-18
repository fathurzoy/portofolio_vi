import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>

        <div className="skills__container bd-grid">
          <div>
            {/* <h2 className="skills__subtitle">Profesional Skills</h2> */}
            {/* <p className="skills__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              optio id vero amet, alias architecto consectetur error eum eaque
              sit.
            </p> */}
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-html5 skills__icon"></i>
                <span className="skills__name">HTML5</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-css3 skills__icon"></i>
                <span className="skills__name">CSS3</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-javascript skills__icon"></i>
                <span className="skills__name">JAVASCRIPT</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-nodejs skills__icon"></i>
                <span className="skills__name">Express js</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-react skills__icon"></i>
                <span className="skills__name">React Js</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-react skills__icon"></i>
                <span className="skills__name">React Native</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-react skills__icon"></i>
                <span className="skills__name">Next Js</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-angular skills__icon"></i>
                <span className="skills__name">Angular Js</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i class="bx bxl-vuejs skills__icon"></i>
                <span className="skills__name">Vue Js</span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxs-paint skills__icon"></i>
                <span className="skills__name">UX/UI</span>
              </div>
            </div>
          </div>

          <div>
            <img src="assets/img/work3.jpg" alt="" className="skills__img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
