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
        <div className=' bg-footer' >
        <div className="container">
          <h2 className="h2 text-light pt-4">Mes Projets</h2>
          <hr className="mb-4"/>
          <div className="row d-flex justify-content-evenly justify-content-center m-2">
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
                description={
                  "Mon Projet en développement pour ma certification"
                  }
                GitHub={"https://github.com/LeNelSoN/liberty-road"}
              />

              <CardProject
                img={LibertyRoad}
                title={"Equiroad APIRest"}
                titleLink={"Todo"}
                logo={<FaHorse className="display-6"/>}
                description={
                  "Mon API RestFull réalisé en node.js pour ma certification"
                  }
                GitHub={"https://github.com/LeNelSoN/liberty-road"}
              />
          </div>
        </div>
        </div>
  );
};

export default Projects;
