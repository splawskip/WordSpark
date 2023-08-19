import React from 'react';
import styles from './GuessBoard.module.css';
import { range } from '../../utils';
import Guess from '../Guess';
import { GuessContext } from '../GuessProvider/GuessProvider';

const NUM_OF_ALLOWED_GUESSES = 6;

function GuessBoard() {
  // Get guesses.
  const { guesses } = React.useContext(GuessContext);
  // Show it to the world.
  return (
    <div className={styles.board}>
      {range(NUM_OF_ALLOWED_GUESSES).map((guessNumber) => (
        <Guess key={guessNumber} guess={guesses[guessNumber]} />
      ))}
    </div>
  );
}

export default GuessBoard;
