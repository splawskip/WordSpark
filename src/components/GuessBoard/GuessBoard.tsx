// React.
import React from 'react';
// Context
import { GuessContext } from '../GuessProvider/GuessProvider';
// Components.
import Guess from '../Guess';
// Utilities.
import { range } from '../../utils';
// Constants.
import NUM_OF_GUESSES_ALLOWED from '../../constants';
// Styles.
import styles from './GuessBoard.module.css';

function GuessBoard() {
  // Get guesses.
  const { guesses } = React.useContext(GuessContext);
  // Show it to the world.
  return (
    <div className={styles.board}>
      {range(NUM_OF_GUESSES_ALLOWED).map((guessNumber) => (
        <Guess key={guessNumber} guess={guesses[guessNumber]} />
      ))}
    </div>
  );
}

export default GuessBoard;
