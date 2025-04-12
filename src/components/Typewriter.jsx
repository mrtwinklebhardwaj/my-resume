import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, delay = 2000, typingSpeed = 100, deletingSpeed = 50 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout;

    if (isDeleting) {
      // Deleting text
      timeout = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }, deletingSpeed);
    } else {
      // Typing text
      timeout = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }, typingSpeed);
    }

    // Check if we've finished typing or deleting
    if (!isDeleting && currentText === currentWord) {
      // Finished typing, wait before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting && currentText === '') {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, delay, typingSpeed, deletingSpeed]);

  return (
    <span className="typewriter-text">
      {currentText}
      <span className="animate-blink"></span>
    </span>
  );
};

export default Typewriter; 