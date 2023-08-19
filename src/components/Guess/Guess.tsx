// React.
import React from 'react';
// Context.
import { AnswerContext } from '../AnswerProvider/AnswerProvider';
// Components.
import GuessCell from '../GuessCell';
// Utils.
import { range, checkGuess } from '../../utils';
// Styles.
import styles from './Guess.module.css';

function Guess({ guess } : GuessProps) {
  const answer = React.useContext(AnswerContext);
  // Get guess result.
  const result = checkGuess(guess, answer);
  // Show it to the world.
  return (
    <p className={styles.guess}>
      {range(5).map((cellNumber) => (
        <GuessCell
          key={cellNumber}
          letter={result[cellNumber] ? result[cellNumber].letter : undefined}
          status={result[cellNumber] ? result[cellNumber].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
