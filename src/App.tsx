import React from 'react';
import NameEffect from './components/NameEffect'
import './index.css' 


const App: React.FC = () => {
  return (
    <>
      {<header>
        { <nav>
          <ul id="menu-bar">
              <li><a href="#introduction">Introduction</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
      </nav>}
      </header>}
      <h1 id="header-name">
        <NameEffect text="Simon Diakonov" />
      </h1>
      {<section id="introduction">
        <h2>Small Introduction</h2>
        <p>Hello, I am Simon a passionate developer with experience in various programming languages and frameworks. I am always eager to learn new technologies and take on new challenges. Welcome to my portfolio website!</p>
    </section>}
    {
      <section id="projects">/
      <h2>My Projects</h2>
      <div>
          <article>
              <h3>Project #1</h3>
              <p>Description of Project #1 goes here. You can mention the details, technologies used, and any other relevant information.</p>
          </article>
          <article >
              <h3>Project #2</h3>
              <p>Description of Project #2 goes here. You can mention the details, technologies used, and any other relevant information.</p>
          </article>
      </div>
  </section>
    }
    </>
  );
};

export default App
