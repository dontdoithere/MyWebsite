
import React, { ReactNode, useEffect, useState } from 'react';

interface BackgroundProps {
    children: ReactNode;
  }

  const Background: React.FC<BackgroundProps> = ({ children }) => {
      const [svgPattern, setSvgPattern] = useState("");

  useEffect(() => {
    setSvgPattern(createRandomPattern());
  }, []);

  const createRandomPattern = () => {
    let pattern = '';
    for(let i = 0; i < 10; i++) {
      let x = Math.floor(Math.random() * 100);
      let y = Math.floor(Math.random() * 100);
      pattern += `<stop offset="${x}%" stop-color="white" />
                  <stop offset="${y}%" stop-color="grey" />`;
    }
    return pattern;
  }

  const svgGradient = `
    <svg width="0" height="0">
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(45)">
          ${svgPattern}
        </linearGradient>
      </defs>
    </svg>`;

  return (
    <div className="App" style={{background: 'url("data:image/svg+xml;utf8,' + encodeURIComponent(svgGradient) + '")'}}>
      {children}
    </div>
  );
}

export default Background;