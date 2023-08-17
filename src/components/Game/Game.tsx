import React from 'react';

import GuessBoard from '../GuessBoard';
import GuessForm from '../GuessForm';
import styles from './Game.module.css';

function Game() {
  const [guesses, setGuesses] = React.useState<string[]>([]);

  function handleGuessSubmit(tentativeGuess:string):void {
    const futureGuesses:string[] = [...guesses, tentativeGuess];
    setGuesses(futureGuesses);
  }
  return (
    <div className={styles.game}>
      <GuessBoard guesses={guesses} />
      <GuessForm handleGuessSubmit={() => handleGuessSubmit} />
    </div>
  );
}
export default Game;
