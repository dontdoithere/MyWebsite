import React, { useEffect, useRef, useState } from 'react';

interface TypewriterEffectProps {
  text: string;
  interval?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, interval = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const indexRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayedText((prevText) => prevText + text.charAt(indexRef.current));
        indexRef.current++;
      } else {
        clearInterval(timer);
      }
    }, interval);

    // Cleanup function
    return () => {
      clearInterval(timer);
      setDisplayedText(' ');
      indexRef.current = 0;
    };
  }, [text, interval]);

  return <>{displayedText}</>;
};

export default TypewriterEffect;