import { useEffect, useState } from 'react';

const useTypingEffect = (text, typingSpeed = 50) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setTypedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text, typingSpeed]);

  return typedText;
};

export default useTypingEffect;
