import React from 'react';
import { Typography, Box } from '@mui/material'
//import { MenuIcon } from '@mui/icons-material';
//import Button from '@material-ui/core/Button';
import NameEffect from './components/NameEffect';
import Projects from './components/projects/Projects'
//import Background from './components/background/Background';
//  import NavBar from './components/Nav/NavBar';
import InfoMe from './components/infome/InfoMe';
import './index.css';
import { Padding } from '@mui/icons-material';





const App: React.FC = () => {
  const styleButn = {
    marginBottom: '2em',
  };

  const styleButnHead: React.CSSProperties = {
    marginBottom: '2em',
    marginTop: '1em',
    textAlign: 'center',
};

const scrollToDiv = (divId: string): void => {
  const divElement = document.getElementById(divId);
  if (divElement) {
    divElement.scrollIntoView({behavior: "smooth"});
  }
}
  
  return (
    <>  
  
    {/* <NavBar /> */}  
    <div id="header-container">
        <h1 id="header-name">
            <NameEffect text=" .>>--Simon Diakonov--<<." />
        </h1>
    </div>
    <div className="scroll-button" onClick={() => scrollToDiv('body-div')}>
        <i className="arrow down"></i>
    </div>
      
    <div id="body-div">
      <h1 className='welcome-h1'>Welcome[¡]</h1>
      {<section id="introduction">
        <div id="terminal">
          <div id="terminal-up-line">
           <Typography pl="20px" pt="3px" color={"black"}>Profile number: |S1594141|</Typography>
             </div>
       
              <div className="box-prof-card">
            <span className="underline">Professional Card</span>  
          </div>
          <div id="info-pic-container" style={{ display: 'flex' }}>  
           <div className="info">
            <InfoMe label="Name" value="Simon Diakonov" />
            <InfoMe label="Gender" value="Male" />
            <InfoMe label="Location" value="Toronto" />
            <InfoMe label="Rank" value="Computer Engineer" />
            </div>
            <div className="pic-terminal">
            <img src="./pictures/Manager.png" alt="Image description" />
            </div>
          </div>
          <div style={{paddingTop: '10px', paddingBlockStart: '3%'}}/> 
            <InfoMe label="Biography" value="Simon Diakonov,  displayed a fascination with technology from a young age. Excelling in math and coding throughout high school and college, he pursued a degree in Computer Engineering. At college, Simon actively engaged in research and collaborations, honing his skills in software development. Joining a tech team and sucefully presented hardware and software project. He became known for his problem-solving prowess and innovative solutions. During studying was hired to work for “Web Technology” company on “Traffic Arbitrage and Software Developer” positions, where he got his first real-life experience." />
        </div>

    </section>}
    {
     <Projects/>
    }

    <section id="resume">
    <div className="resume-container">2
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
