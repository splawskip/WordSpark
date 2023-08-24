// React.
import React from 'react';
// Context
import { GuessContext } from '../GuessProvider/GuessProvider';
import { GameStatusContext } from '../GameStatusProvider/GameStatusProvider';
// Components.
import Guess from '../Guess';
import GameStatusNotification from '../GameStatusNotification';
// Utilities.
import { range } from '../../utils';
// Constants.
import NUM_OF_GUESSES_ALLOWED from '../../constants';
// Styles.
import styles from './GuessBoard.module.css';

function GuessBoard() {
  // Get guesses.
  const { guesses } = React.useContext(GuessContext);
  const { gameStatus } = React.useContext(GameStatusContext);
  // Show it to the world.
  return (
    <div className={styles.board}>
      {gameStatus !== 'running' && <GameStatusNotification />}
      {range(NUM_OF_GUESSES_ALLOWED).map((guessNumber) => (
        <Guess key={guessNumber} guess={guesses[guessNumber]} />
      ))}
    </div>
  );
}

export default GuessBoard;
