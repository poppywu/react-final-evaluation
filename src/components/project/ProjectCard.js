import React from 'react';
import './ProjectCard.css';

function ProjectCard({name,title,content}) {
    return (
        <div class="text-center project__card">
            <div class={name}>
              <h3>{title}</h3>
              <p>
                {content}
              </p>
              <div class="row">
                <div class="col text-center button">
                  
                    <a class="btn btn-default btn-border" href="#">
                      More
                    </a>
                  
                </div>
              </div>
            </div>
          </div>
    )
}

export default ProjectCard
