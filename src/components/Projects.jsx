import React from "react";
import Todo from "../assets/ToDoJs.png";
import CardProject from "./CardProject";
import Pokedex from "../assets/Pokedex.png";
import LibertyRoad from "../assets/Liberty-road.png";
import { CgPokemon } from "react-icons/cg";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaHorse } from "react-icons/fa";


const Projects = () => {
  return (
    <section id="Projects" className="bg-footer vh-100">
      <div className="text-center d-flex flex-column align-items-center container">
        <h2 className="text-light mt-5">Mes oeuvres</h2>
        <hr />
        <div>
          <div
            id="galerie"
            className="row d-flex m-5 m-lg-0 justify-content-center align-items-center"
          >
            <CardProject
              img={Pokedex}
              title={"Pokédex"}
              logo={<CgPokemon className="display-6"/>}
              description={
                "Un de mes premiers projets pour appendre à utiliser fetch()"
              }
              GitHub={"https://github.com/LeNelSoN/Pokedex"}
            />

            <CardProject
              img={Todo}
              title={"ToDo List"}
              titleLink={"Todo"}
              logo={<BsFillCheckCircleFill className="display-6"/>}
              description={
                "Une simple ToDo liste pour découvrir le langage JavaScript"
              }
              GitHub={"https://github.com/LeNelSoN/ToDoList-Vanilla-js"}
            />

            <CardProject
              img={LibertyRoad}
              title={"Equiroad"}
              titleLink={"Todo"}
              logo={<FaHorse className="display-6"/>}
              description={"Mon Projet en développement pour ma certification"}
              GitHub={"https://github.com/LeNelSoN/liberty-road"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
