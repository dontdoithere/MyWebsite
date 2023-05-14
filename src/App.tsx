import React from 'react';
import { } from '@mui/material'
//import { MenuIcon } from '@mui/icons-material';
//import Button from '@material-ui/core/Button';
import NameEffect from './components/NameEffect';
import NavBar from './components/Nav/NavBar';
import './index.css';





const App: React.FC = () => {
  const styleButn = {
    marginBottom: '2em',
  };

  const styleButnHead ={
    marginBottom: '2em',
    marginTop: '1em',
    textAlign: 'center',
  }

  
  return (
    <>
    {/* <NavBar /> */}  
    <div id="header-container">
        <h1 id="header-name">
            <NameEffect text=" Simon Diakonov" />
        </h1>
    </div>
    <div id="body-div">
      {<section id="introduction">
      <div className="inner-content">
        <h2 style={styleButnHead}>Small Introduction</h2>
        <p style={styleButn}>Hello everyone and welcome to my portfolio website! I'm skilled software and hardware engineer with a strong background in computer engineering. I graduated from Humber College's Computer Engineering Technology program in May 2023, where I gained expertise in various programming languages, tools, and operating systems!</p>
        <p style={styleButn}>MI have created and published successful project on the Google Play Store which is template for Smart Lock Bike System. I also have experience with 3D modeling, which allows me to create realistic designs for multi sensors smart application. I have also worked with Raspberry Pi to create a smart system based on sensors, which has been a great way to integrate my programming skills with my interest in electronics.</p>
        <p style={styleButn}>Throughout my education and work experience, I have acquired skills in numerous programming languages, including JavaScript (ES5, ES6), HTML/CSS, Assembly/VHDL, and Python. I have worked with databases like MySQL, Firebase, and Oracle, and have experience in mobile development using Android Studio and JavaFX.</p>
   </div>
    </section>}
    {
      <section id="projects">
      <h2 id="h-projects">My Projects</h2>
        <article id="project-box-1">
          <h3 className="project-names">Android Application</h3>
          <img src="./pictures/homeScreen.png" className="project-pics" alt="Project 1 Image" />
          <hr className="separator-line" />
          <button className="button">Full Story</button>
          </article>
          <article id="project-box-2">
            <h3 className="project-names">Arduino/Pi system</h3>
            <img src="./pictures/second-picture.png" className="project-pics" alt="Project 2 Image" />
            <hr className="separator-line" />
            <button className="button">Full Story</button>
            </article>

    </section>
    }

    <section id="resume">
    <div className="resume-container">
      <h2 id="resume-h2">MyResume</h2>
        <p id="resume-text">Here i highlighet all my skills and important knowledge about Software i know</p>
        <iframe id="resume-pdf" src='./pictures/Diakonov_Resume-1.pdf' width="600px" height="750px"></iframe>
      </div>
    </section>
    </div>
    </>
  );
};

export default App
