import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div>
      <section className="work section" id="work">
        <h2 className="section-title">Experience</h2>

        <div className="work__container bd-grid">
          <Card
            hoverable
            className="work__img"
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="assets/projek/ekawira.png"
                style={{
                  width: "300px",
                  objectFit: "contain",
                }}
              />
            }
          >
            <Meta
              title="PT Ekawira Sanjaya"
              description={
                <>
                  <p>
                    Membuat Company Profile PT Ekawira Sanjaya Menggunakan
                    Next.js
                  </p>

                  <a
                    href="https://pancaekawirasanjaya.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lihat lebih lanjut
                  </a>
                </>
              }
            />
          </Card>
          <Card
            hoverable
            className="work__img"
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="assets/projek/idn.png"
                style={{
                  width: "300px",
                  objectFit: "contain",
                }}
              />
            }
          >
            <Meta
              title="IDN Media"
              description={
                <>
                  <p>
                    Membuat Company Profile Dan Blog IDN Media menggunakan react
                    js dan express js
                  </p>

                  <a
                    href="https://www.idn.media/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lihat lebih lanjut
                  </a>
                </>
              }
            />
          </Card>
          <Card
            hoverable
            className="work__img"
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="assets/projek/duta.jpeg"
                style={{
                  width: "300px",
                  objectFit: "contain",
                }}
              />
            }
          >
            <Meta
              title="Dutadropship"
              description={
                <>
                  <p>
                    Dutadropship merupakan Ecommerce Platform untuk kamu yang
                    ingin memulai usaha jualan dengan metode dropship tersebut.
                  </p>

                  <a
                    href="https://dutadropship.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lihat lebih lanjut
                  </a>
                </>
              }
            />
          </Card>
          <Card
            hoverable
            className="work__img"
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="assets/projek/mern2021.png"
                style={{
                  width: "300px",
                  objectFit: "contain",
                }}
              />
            }
          >
            <Meta
              title="Website Top Up Voucher Game"
              description={
                <>
                  <p>
                    Projek ini merupakan projek belajar dari course berbayar
                    buildwith angga MERN2021 dengan menggunakan MERN Mongo,
                    express, react/nextjs (typescript), nodejs dan
                  </p>

                  <a
                    href="https://storegg-mern2021.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lihat lebih lanjut
                  </a>
                </>
              }
            />
          </Card>
          <Card
            hoverable
            className="work__img"
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="assets/projek/mern.png"
                style={{
                  width: "300px",
                  objectFit: "contain",
                }}
              />
            }
          >
            <Meta
              title="Staycation"
              description={
                <>
                  <p>
                    Projek ini merupakan projek belajar dari course berbayar
                    buildwith angga Fullstack Javascript dengan menggunakan MERN
                    Mongo, express, react, nodejs
                  </p>

                  <a
                    href="https://bwamern-fathur.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lihat lebih lanjut
                  </a>
                </>
              }
            />
          </Card>
          <Card
            hoverable
            className="work__img"
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="assets/projek/microservice.png"
                style={{
                  width: "300px",
                  objectFit: "contain",
                }}
              />
            }
          >
            <Meta
              title="Course Online"
              description={
                <>
                  <p>
                    Projek ini merupakan projek belajar dari course berbayar
                    buildwith angga Microservice dengan menggunakan React js,
                    Tailwind CSS, Laravel dan Express JS.
                  </p>

                  <a
                    href="https://micro-fathur.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lihat lebih lanjut
                  </a>
                </>
              }
            />
          </Card>
          <Card
            hoverable
            className="work__img"
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="assets/projek/telkom.png"
                style={{
                  width: "300px",
                  objectFit: "contain",
                }}
              />
            }
          >
            <Meta
              title="Proker Telkom"
              description={
                <>
                  <p>
                    Program magang di Telkom STO Gambir membuat Website
                    Management proker telkom sto gambir arnet menggunakan react
                    js dan express js
                  </p>
                </>
              }
            />
          </Card>
          <Card
            hoverable
            className="work__img"
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="assets/projek/finx.png"
                style={{
                  width: "300px",
                  objectFit: "contain",
                }}
              />
            }
          >
            <Meta
              title="Finx"
              description={
                <>
                  <p>
                    Program magang di Sagara Technology membuat Website FinX
                    menggunakan react js dan next js
                  </p>
                </>
              }
            />
          </Card>
          <Card
            hoverable
            className="work__img"
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="assets/projek/pasarmusi.png"
                style={{
                  width: "300px",
                  objectFit: "contain",
                  height: "150px",
                }}
              />
            }
          >
            <Meta
              title="Pasar Musi"
              description={
                <>
                  <p>
                    Membuat Aplikasi penjualan barang-barang pasar, menggunakan
                    next js dan react native
                  </p>
                  <a
                    href="https://online.pasarmusibaru.co.id/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lihat lebih lanjut
                  </a>
                </>
              }
            />
          </Card>
          <Card
            hoverable
            className="work__img"
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="assets/projek/udanahomepage.png"
                style={{
                  width: "300px",
                  objectFit: "contain",
                }}
              />
            }
          >
            <Meta
              title="Udana.id"
              description={
                <>
                  <p>Halaman Homepage udana.id, menggunakan angular js</p>
                </>
              }
            />
          </Card>
          <Card
            hoverable
            className="work__img"
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="assets/projek/blogudana.png"
                style={{
                  width: "300px",
                  objectFit: "contain",
                }}
              />
            }
          >
            <Meta
              title="Udana Blog"
              description={
                <>
                  <p>Halaman blog udana, menggunakan next js</p>
                </>
              }
            />
          </Card>
          <Card
            hoverable
            className="work__img"
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="assets/projek/rindangpari.png"
                style={{
                  width: "300px",
                  objectFit: "contain",
                  height: "150px",
                }}
              />
            }
          >
            <Meta
              title="PT Rindang Pari Cahaya Buana"
              description={
                <>
                  <p>
                    Membuat Company Profile PT Rindang Pari Cahaya Buana Next.js
                  </p>
                  <a
                    href="https://rindangparicb.co.id/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lihat lebih lanjut
                  </a>
                </>
              }
            />
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Experience;
