import React from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard";


function Project() {
  const projectData = [
    {
      name: "luvtalk-project",
      title: "LUV TALK Website",
      content:
        "Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript, and Wordpress.",
    },
    {
      name: "personal-website-project",
      title: "Personal Website",
      content:
        "Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests.",
    },
    {
      name: "strike-zone-project",
      title: "Strike Zone Analysis",
      content:
        "Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game.",
    },
  ];
  return (
    <div class="projects" id="projects">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 col-md-12 text-center">
            <div class="projects-header">
              <h1>Projects and Portfolio</h1>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 col-md-12 text-center">
            <div class="projects-header-quote">
              <h3>Sharing my endeavors and passions...</h3>
            </div>
          </div>
        </div>

        <div class="project__card__row">
        {projectData.map(data=>(
          <div key={data.name}>
          <ProjectCard name={data.name} title={data.title} content={data.content}/>
          </div>)
        )}
        </div>
        
            

        <div class="row seemore__row">
          <div class="col-sm-2 col">
            <div class="see-more-button">
              <a class="btn btn-default btn-border" href="#">
                More Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
