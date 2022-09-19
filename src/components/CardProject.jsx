import React from "react";
import { AiFillGithub } from "react-icons/ai";

const CardProject = ({ img, title, titleLink, href, description, GitHub, logo }) => {
  return (
    <div className="card mx-4 w-25 bg-black bg-gradient text-light shadow">
      <div class="card-header d-flex img-card">
        {logo}
        <h5 className="card-title col-8">{title}</h5>
      </div>
      <img src={img} className="mt-2" alt="..." />
      <div className="card-body">
        <p className="card-text fs-6">{description}</p>
        <div className="d-flex justify-content-center">
          <a
            href={GitHub}
            className="transition m-1 display-4"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          {href && (
            <a
              href={href}
              className="btn btn-dark transition m-1 h1"
              target="_blank"
              rel="noreferrer"
            >
              {titleLink ? titleLink : title}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
