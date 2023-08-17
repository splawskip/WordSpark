import styles from './GuessBoard.module.css';
import { range } from '../../utils';
import Guess from '../Guess';

const NUM_OF_ALLOWED_GUESSES = 6;
type GuessBoardProps = {
  guesses: string[],
};
function GuessBoard({ guesses }:GuessBoardProps) {
  return (
    <div className={styles['guess-board']}>
      {range(NUM_OF_ALLOWED_GUESSES).map((guessNumber) => (
        <Guess key={guessNumber} guess={guesses[guessNumber]} />
      ))}
    </div>
  );
}

export default GuessBoard;
