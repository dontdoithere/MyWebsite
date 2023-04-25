import React from 'react';
import NameEffect from './components/NameEffect'
import './App.css' 


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
      {/* other elements */}
    </>
  );
};

export default App
