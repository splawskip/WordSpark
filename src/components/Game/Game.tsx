// React.
import React from 'react';
// Context.
import { GameStatusContext } from '../GameStatusProvider/GameStatusProvider';
// Components.
import Heading from '../Heading/Heading';
import GuessBoard from '../GuessBoard';
import GuessForm from '../GuessForm';
import Notification from '../Notification';
// Styles.
import styles from './Game.module.css';
// Hooks.
import useConfetti from '../../hooks';

function Game() {
  const { gameStatus } = React.useContext(GameStatusContext);
  useConfetti(gameStatus);
  // Get current date.
  const date:string = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(new Date());
  // Show it to the world.
  return (
    <div className={styles.wrapper}>
      <div className={styles.game}>
        {gameStatus !== 'running' && <Notification />}
        <Heading as="h1">WordSpark ⚛️</Heading>
        <Heading as="h2">{date}</Heading>
        <GuessBoard />
        <GuessForm />
      </div>
    </div>
  );
}

export default Game;
