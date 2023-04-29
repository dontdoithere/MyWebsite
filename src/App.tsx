import React from 'react';
import NameEffect from './components/NameEffect'
import './index.css' 




const App: React.FC = () => {
  const styleButn = {
    marginBottom: '2em',
  };

  
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
        <h2 style={styleButn}>Small Introduction</h2>
        <p style={styleButn}>My name is Simon Diakonov, and I am a highly skilled software and hardware engineer with a strong background in computer engineering. I graduated from Humber College's Computer Engineering Technology program in May 2023, where I gained expertise in various programming languages, tools, and operating systems!</p>
        <p style={styleButn}>I have experience in Android development and am comfortable working on web development projects. I am proficient in C/C++, Java, and have advanced knowledge of Linux administration and networking. I have also worked with various tools such as MS Visual Studio Code, Oracle SQL Developer, Eclipse, Vivado/Logisim, and Cisco Security.</p>
        <p style={styleButn}>Throughout my education and work experience, I have acquired skills in numerous programming languages, including JavaScript (ES5, ES6), HTML/CSS, Assembly/VHDL, and Python. I have worked with databases like MySQL, Firebase, and Oracle, and have experience in mobile development using Android Studio and JavaFX.</p>
    </section>}
    {
      <section id="projects">
      <h2 id="h-projects">My Projects</h2>
      <div className="projects-container">
        <article className="project-box">
          <h3 id="proj-1">Art object #1-?-</h3>
          <img src="./pictures/first.png" alt="Project 1 Image" />
          <hr className="separator-line" />
          <p>Description of Project #1 goes here. You can mention the details, technologies used, and any other relevant information.</p>
        </article>
          <article className="project-box">
            <h3 id="proj-2">Project #2</h3>
            <img src="./pictures/second-picture.png" alt="Project 2 Image" />
            <hr className="separator-line" />
            <p>Description of Project #2 goes here. You can mention the details, technologies used, and any other relevant information.</p>
          </article>
      </div>
    </section>
    }
    </>
  );
};

export default App
