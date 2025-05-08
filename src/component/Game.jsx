import React, { useState } from 'react';

function Game() {
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setScore(score + 1);
  };

  const resetGame = () => {
    setScore(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Click Game</h1>
      <p>Score: {score}</p>
      {score >= 10 && <p style={{ color: 'green' }}>You win!</p>}
      <button onClick={handleClick}>Click me!</button>
      <br /><br />
      <button onClick={resetGame}>Reset</button>
    </div>
  );
}

export default Game;
