import React, { useEffect, useState } from 'react';

interface TypewriterEffectProps {
  text: string;
  interval?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, interval = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prevText) => prevText + text.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [text, interval]);

  return <>{displayedText}</>;
};

export default TypewriterEffect;