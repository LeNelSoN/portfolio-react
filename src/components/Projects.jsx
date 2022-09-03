import React from "react";
import Todo from "../assets/ToDoJs.png";
import CardProject from "./CardProject";
import Pokedex from "../assets/Pokedex.png";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="text-center d-flex flex-column align-items-center justify-content-center container"
    >
      <h2>Mes oeuvres</h2>
      <hr />
      <div className="container d-flex justify-content-center">
        <div id="galerie" className="row">
          <CardProject
            img={Pokedex}
            title={"Pokédex"}
            description={
              "Un de mes premiers projets pour appendre à utiliser fetch()"
            }
            GitHub={"https://github.com/LeNelSoN/Pokedex"}
          />
          <CardProject
            img={Todo}
            title={"ToDo List"}
            titleLink={"Todo"}
            description={
              "Une simple ToDo liste pour découvrir le langage JavaScript"
            }
            GitHub={"https://github.com/LeNelSoN/ToDoList-Vanilla-js"}
          />
          <CardProject
            img={Todo}
            title={"ToDo List"}
            titleLink={"Todo"}
            description={
              "Le meilleur moyen d'apprendre est de faire et pour React c'est pareil."
            }
            GitHub={"https://github.com/LeNelSoN/pas-netflix"}
          />
          <CardProject
            img={Todo}
            title={"ToDo List"}
            titleLink={"Todo"}
            description={
              "Mon Projet en cours de Devellopement pour valider ma certification"
            }
            GitHub={"https://github.com/LeNelSoN/ekiroad-fil-rouge"}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
