import React from "react";
import "./Main.css";

function Main() {
  return (
    <div class="main">
      <div class="container-fluid">
        <div class="row">
          <div class="entry-banner text-center">
            <h1 id="hello">Hello, I'm</h1>
            <h1 id="name">XXXX</h1>
            <h1 id="person-description">
              UI Developer. UX Desinger. Problem Solver.
            </h1>
          </div>
        </div>

        <div class="row text-center">
          <div class="banner-buttons main__buttons">
            <div class="col-sm-2">
              <a class="btn btn-default btn-border" href="#about">
                Info
              </a>
            </div>
			<div class="col-sm-2">
              <a class="btn btn-default btn-border" href="#projects">
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
