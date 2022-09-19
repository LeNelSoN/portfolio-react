import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section id="Home" className="bg-home">
      <div className="container">
        <div className="vh-100 text-center d-flex flex-column align-items-center justify-content-center  text-light p-5">
          <h1 className="text-light">Hello world !</h1>

          <p className="m-5">
            Je suis Valentin Nelis et           
          
            <Typewriter
            options={{
              strings: ('bienvenue sur mon portfolio'),
              deleteSpeed : 30,
              autoStart: true,
              loop: true,
            }}
          />
          </p>
          <Link className="btn btn-dark btn-lg transition" to="/About">
            On continue ?
          </Link>
          <div className="m-5"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
