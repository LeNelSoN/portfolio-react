import React, { useEffect } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  FaCss3Alt,
  FaReact,
  FaNpm,
  FaSass,
  FaUbuntu,
  FaDiscord,
} from "react-icons/fa";
import { SiJavascript, SiBootstrap, SiCanva, SiVisualstudiocode, SiInsomnia } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Skills = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section
        id="Skills"
        className="vh-100 text-center d-flex flex-column align-items-center justify-content-center bg-skills text-light"
      >
        <div className="container-fluid">
        <div className="mt-5">
          <h2>Mes compétences</h2>
          <hr />
          <p>Voici ce que j'utilise techniquement</p>
        </div>

            <a
              href="https://www.w3schools.com/html/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillHtml5
                data-aos="zoom-in"
                data-aos-delay="200"
                className="transition logo m-lg-5 m-2 orange-text"
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noreferrer"
            >
              <FaCss3Alt
                data-aos="zoom-in"
                data-aos-delay="400"
                className="transition logo m-lg-5 m-2 text-primary"
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <SiJavascript
                data-aos="zoom-in"
                data-aos-delay="600"
                className="transition fa-brands fa-js logo m-lg-5 m-2 text-warning"
              />
            </a>
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noreferrer"
            >
              <SiBootstrap
                data-aos="zoom-in"
                data-aos-delay="800"
                className="transition fa-brands fa-js logo m-lg-5 m-2 indigo-text"
              />
            </a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <FaReact
                data-aos="zoom-in"
                data-aos-delay="1000"
                className="transition rotate fa-brands fa-react logo m-lg-5 m-2 text-info"
              />
            </a>
            <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
              <FaSass
                data-aos="zoom-in"
                data-aos-delay="1200"
                className="transition fa-brands fa-sass logo m-lg-5 m-2 pink-text"
              />
            </a>
            <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">
              <FaNpm
                data-aos="zoom-in"
                data-aos-delay="1400"
                className="transition fa-brands fa-npm logo m-lg-5 m-2 text-danger"
              />
            </a>
            <a href="https://ubuntu.com/" target="_blank" rel="noreferrer">
              <FaUbuntu
                data-aos="zoom-in"
                data-aos-delay="1600"
                className="transition rotate fa-brands fa-ubuntu logo m-lg-5 m-2 orange-text"
              />
            </a>
            <a href="https://discord.com/" target="_blank" rel="noreferrer">
              <FaDiscord
                data-aos="zoom-in"
                data-aos-delay="1800"
                className="transition fa-brands fa-discord logo m-lg-5 m-2 discord-text"
              />
            </a>
            <a href="https://canva.com/" target="_blank" rel="noreferrer">
              <SiCanva
                data-aos="zoom-in"
                data-aos-delay="2000"
                className="transition logo m-lg-5 m-2 text-primary"
              />
            </a>
            <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
              <SiVisualstudiocode
                data-aos="zoom-in"
                data-aos-delay="2000"
                className="transition logo m-lg-5 m-2 text-info"
              />
            </a>
            <a href="https://canva.com/" target="_blank" rel="noreferrer">
              <SiInsomnia
                data-aos="zoom-in"
                data-aos-delay="2000"
                className="transition logo m-lg-5 m-2 indigo-text"
              />
            </a>
        <div>
          <Link className="btn btn-dark btn-lg transition mb-5" to="/Projects">
            En savoir plus ?
          </Link>
        </div>
          </div>
      </section>
    </>
  );
};

export default Skills;
