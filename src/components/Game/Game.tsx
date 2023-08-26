// React.
import React from 'react';
// Context.
import { GameStatusContext } from '../GameStatusProvider/GameStatusProvider';
// Components.
import Heading from '../Heading/Heading';
import GuessBoard from '../GuessBoard';
import GuessForm from '../GuessForm';
import Footer from '../Footer';
// Styles.
import styles from './Game.module.css';
// Hooks.
import { useConfetti } from '../../hooks';
// Utils.
import { getCurrentDateTimestamp } from '../../utils';

function Game() {
  // Get game status.
  const { gameStatus: { status, timestamp } } = React.useContext(GameStatusContext);
  // Throw confetti if needed.
  useConfetti(status);
  // Get current date.
  const currentDate:string = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(new Date());
  // Get if game should be playable.
  const playable:boolean = status === 'running' || timestamp !== getCurrentDateTimestamp();
  // Show it to the world.
  return (
    <div className={styles.wrapper}>
      <div className={styles.game}>
        <Heading as="h1">WordSpark ⚛️</Heading>
        <Heading as="h2" type="subheading">{currentDate}</Heading>
        <GuessBoard />
        {playable ? <GuessForm /> : ''}
        <Footer />
      </div>
    </div>
  );
}

export default Game;
