import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <p className="footer__title">Silviani Nurlita Putri</p>
        <div className="footer__social">
          <a
            href="https://github.com/Silvianinrltptr"
            className="footer__icon"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.instagram.com/silvianinurlitaptr"
            className="footer__icon"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/silviani-nurlita-putri-357808206/"
            className="footer__icon"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <p>&#169; 2021 copyright all right reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
