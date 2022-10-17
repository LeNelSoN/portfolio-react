import React from "react";
import { AiFillGithub } from "react-icons/ai";

const CardProject = ({ img, title, titleLink, href, description, GitHub, logo }) => {
  const style = {width: '25rem'}
  return (

    <div class="card text-white bg-dark mb-3" style={style}>
      <div class="card-header">
      {logo} {title}</div>
      <img src={img}  alt={`${img}`} />
        <div class="card-body text-center">
          <p class="card-text">{description}</p>
          <a
            href={GitHub}
            className="display-4"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
        </div>
    </div>
  );
};

export default CardProject;
