import React from 'react';
import GuessCell from '../GuessCell';
import styles from './Guess.module.css';
import { range, checkGuess } from '../../utils';
import { AnswerContext } from '../AnswerProvider/AnswerProvider';

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
