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
      {<section id="introduction">
        <div id="terminal">
          <div id="terminal-up-line">
           <Typography pl="20px" pt="3px" color={"black"}>Profile number: |S1594141|</Typography>
             </div>
       
              <div className="box-prof-card">
            <span className="underline">Professional Card</span>  
          </div>
          <div className="App">
            <InfoMe label="Name" value="Simon Diakonov" />
            <InfoMe label="Gender" value="Male" />
            <InfoMe label="Location" value="Toronto" />
            <InfoMe label="Rank" value="Computer Engineer" />
          </div>
        </div>

    </section>}
    {
     <Projects/>
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
