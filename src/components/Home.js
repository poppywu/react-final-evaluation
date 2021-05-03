import React from 'react';
import Main from './main/Main';
import About from './about/About';
import Project from './project/Project';
import Contact from './contact/Contact';
import Summary from './summary/Summary';


function Home() {
    return (
        <div className="home">
            <Main/>
            <About/>
            <Summary/>
            <Project/>
            <Contact/>
        </div>
    )
}

export default Home;
