import React, { useEffect, useState } from 'react';
import Result from './Result';
import Sequence from './Sequence';
import Timer from './Timer';

const generateSequence = (length) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array.from(
    { length },
    () => letters[Math.floor(Math.random() * letters.length)]
  );
};

const Game = () => {
  const [sequence, setSequence] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState('');

  useEffect(() => {
    setSequence(generateSequence(5));
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
      setResult('Time is up!');
    }
  }, [timeLeft, gameOver]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyPress = (e) => {
    if (gameOver) return;

    if (e.key.toUpperCase() === sequence[currentIndex]) {
      if (currentIndex === sequence.length - 1) {
        setGameOver(true);
        setResult('You Win!');
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    } else {
      setGameOver(true);
      setResult('Wrong key pressed!');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentIndex, gameOver, handleKeyPress]);

  const handleRestart = () => {
    setSequence(generateSequence(5));
    setCurrentIndex(0);
    setTimeLeft(30);
    setGameOver(false);
    setResult('');
  };

  return (
    <div>
      <Sequence sequence={sequence} currentIndex={currentIndex} />
      <Timer timeLeft={timeLeft} />
      {gameOver && <Result result={result} onRestart={handleRestart} />}
    </div>
  );
};

export default Game;
