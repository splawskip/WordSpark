import GuessProvider from '../GuessProvider/GuessProvider';
import Heading from '../Heading/Heading';
import GuessBoard from '../GuessBoard';
import GuessForm from '../GuessForm';

import styles from './Game.module.css';

function Game() {
  // Get current date.
  const date:string = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(new Date());
  // Show it to the world.
  return (
    <GuessProvider>
      <div className={styles.wrapper}>
        <div className={styles.game}>
          <Heading as="h1">WordSpark ⚛️</Heading>
          <Heading as="h2">{date}</Heading>
          <GuessBoard />
          <GuessForm />
        </div>
      </div>
    </GuessProvider>
  );
}

export default Game;
