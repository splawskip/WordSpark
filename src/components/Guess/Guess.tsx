import GuessCell from '../GuessCell';
import styles from './Guess.module.css';
import { range, checkGuess } from '../../utils';

type GuessProps = {
  guess: string | undefined,
};

function Guess({ guess } : GuessProps) {
  const result = checkGuess(guess, 'kebab');
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
