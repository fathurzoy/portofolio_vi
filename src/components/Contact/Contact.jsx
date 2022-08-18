import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [inputForm, setInputForm] = useState({
    nama: "",
    pesan: "",
  });
  const handleFinish = (e) => {
    window.open(
      `https://api.whatsapp.com/send?phone=6288709717898&text=nama%3A%20%20${inputForm.nama}%0Apesan%3A%20${inputForm.pesan}`
    );
  };
  return (
    <div>
      <section className="contact section" id="contact">
        <h2 className="section-title">Contact</h2>

        <div className="contact__container bd-grid">
          <form action={handleFinish} className="contact__form">
            <input
              type="text"
              style={{ border: "1px solid black" }}
              placeholder="Nama"
              className="contact__input"
              onChange={(e) => {
                setInputForm({ ...inputForm, nama: e.target.value });
              }}
            />
            <textarea
              name=""
              id=""
              cols="0"
              rows="10"
              style={{ border: "1px solid black" }}
              className="contact__input"
              placeholder="Pesan"
              onChange={(e) => {
                setInputForm({ ...inputForm, pesan: e.target.value });
              }}
            ></textarea>
            <button
              type="submit"
              className="contact__button button"
              onClick={handleFinish}
            >
              Kirim
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
