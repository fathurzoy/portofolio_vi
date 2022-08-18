import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navActive, setNavActive] = useState({
    home: true,
    about: false,
    skill: false,
    work: false,
    certificate: false,
    contact: false,
  });

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      {/* <!--===== HEADER =====--> */}
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="#" className="nav__logo">
              Silviani Nurlita Putri
            </a>
          </div>

          <div
            className={showMenu ? "nav__menu show" : "nav__menu"}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="#home"
                  className={
                    navActive.home === true ? "nav__link active" : "nav__link"
                  }
                  onClick={() => {
                    setNavActive({ home: true });
                    setShowMenu(false);
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#about"
                  className={
                    navActive.about === true ? "nav__link active" : "nav__link"
                  }
                  onClick={() => {
                    setNavActive({ about: true });
                    setShowMenu(false);
                  }}
                >
                  About
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#skills"
                  className={
                    navActive.skill === true ? "nav__link active" : "nav__link"
                  }
                  onClick={() => {
                    setNavActive({ skill: true });
                    setShowMenu(false);
                  }}
                >
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#work"
                  className={
                    navActive.work === true ? "nav__link active" : "nav__link"
                  }
                  onClick={() => {
                    setNavActive({ work: true });
                    setShowMenu(false);
                  }}
                >
                  Experience
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#certificate"
                  className={
                    navActive.certificate === true
                      ? "nav__link active"
                      : "nav__link"
                  }
                  onClick={() => {
                    setNavActive({ certificate: true });
                    setShowMenu(false);
                  }}
                >
                  Certificate
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#contact"
                  className={
                    navActive.contact === true
                      ? "nav__link active"
                      : "nav__link"
                  }
                  onClick={() => {
                    setNavActive({ contact: true });
                    setShowMenu(false);
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => setShowMenu(!showMenu)}
          >
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
