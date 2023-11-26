import React, { useState } from 'react';
import "../src/app/game.css"



const NumberGuessingGame = () => {
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('Use the Force, guess a number between 1 and 100');
    const randomNumber = Math.floor(Math.random() * 100) + 1;
  
    const handleGuess = () => {
      const numGuess = parseInt(guess);
      if (numGuess === randomNumber) {
        setMessage('Incredible! The Force is strong with you.');
      } else if (numGuess < randomNumber) {
        setMessage('Too low. Trust your feelings.');
      } else {
        setMessage('Too high. Feel the Force flowing through you.');
      }
    };
  
    return (
      <div className="game-container">
        <h2 className="game-title">Jedi Number Guessing</h2>
        <p className="game-message">{message}</p>
        <input
          className="game-input"
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button className="game-button" onClick={handleGuess}>Use the Force</button>
      </div>
    );
  };

export default NumberGuessingGame;
