import React from "react";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="entry-banner text-center">
            <h1 id="hello">Hello, I'm</h1>
            <h1 id="name">XXXX</h1>
            <h1 id="person-description">
              UI Developer. UX Desinger. Problem Solver.
            </h1>
          </div>
        </div>

        <div className="row text-center">
          <div className="banner-buttons main__buttons">
            <div className="col-sm-2">
              <a className="btn btn-default btn-border" href="#about">
                Info
              </a>
            </div>
			<div className="col-sm-2">
              <a className="btn btn-default btn-border" href="#projects">
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
