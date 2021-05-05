import React from "react";
import "./ProjectCard.css";

function ProjectCard({ name, title, content }) {
  return (
    <div className="text-center project__card">
      <div title="name" className={name}>
        <h3 title="title" >{title}</h3>
        <p title="content">{content}</p>
        <div className="row">
          <div className="col text-center button">
            <a className="btn btn-default btn-border" href="#">
              More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
