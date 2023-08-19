// React.
import React from 'react';
// Context.
import { GameStatusContext } from '../GameStatusProvider/GameStatusProvider';
import { AnswerContext } from '../AnswerProvider/AnswerProvider';
import { GuessContext } from '../GuessProvider/GuessProvider';
// Styles.
import styles from './Notification.module.css';

function Notification() {
  const { gameStatus } = React.useContext(GameStatusContext);
  const answer = React.useContext(AnswerContext);
  const { guesses } = React.useContext(GuessContext);
  // Show it to the world.
  return (
    <aside className={`${styles.notification} ${styles[gameStatus]}`}>
      {gameStatus === 'won' ? (
        <p>
          <strong>🎉 Congratulations!</strong>
          {' '}
          Got it in
          {' '}
          <strong>
            {guesses.length}
            {' '}
            {guesses.length > 1 ? 'guesses' : 'guess'}
          </strong>
          .
        </p>
      )
        : (
          <p>
            😭 Sorry, the correct answer is
            {' '}
            <strong>{answer}</strong>
            .
          </p>
        )}
    </aside>
  );
}

export default Notification;
