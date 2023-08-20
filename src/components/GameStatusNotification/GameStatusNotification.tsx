// React.
import React from 'react';
// Context.
import { GameStatusContext } from '../GameStatusProvider/GameStatusProvider';
import { GuessContext } from '../GuessProvider/GuessProvider';
import { AnswerContext } from '../AnswerProvider/AnswerProvider';
// Components.
import Notification from '../Notification';
// Utils.
import { generateResultsBlocks } from '../../utils';
// Styles.
import styles from '../Notification/Notification.module.css';

function GameStatusNotification() {
  // Pull some data from the context.
  const { gameStatus } = React.useContext(GameStatusContext);
  const answer = React.useContext(AnswerContext);
  const { guesses } = React.useContext(GuessContext);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  // Get current date.
  const date:string = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(new Date());
  /**
  * Generates results blocks and copies them into the clipboard.
  *
  * @returns void
  */
  const handleCopyResults = () : void => {
    // Get player results.
    const results = generateResultsBlocks(guesses, answer);
    // Create sharable text.
    const shareableText = `WordSpark - ${date}:\n${results}\n${document.URL}`;
    // Copy it to player clipboard.
    navigator.clipboard.writeText(shareableText);
  };
  // Show it to the world.
  return (
    <Notification gameStatus={gameStatus}>
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
          {' '}
          Comeback tomorrow!
        </p>
      )
        : (
          <p>
            😭 Sorry, the correct answer is
            {' '}
            <strong>{answer}</strong>
            .
            {' '}
            Comeback tomorrow!
          </p>
        )}
      <button ref={buttonRef} className={styles.button} type="button" onClick={handleCopyResults}>Copy results to clipboard</button>
    </Notification>
  );
}

export default GameStatusNotification;
