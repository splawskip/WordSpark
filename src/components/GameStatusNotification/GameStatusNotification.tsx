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
  // Get game status.
  const { gameStatus } = React.useContext(GameStatusContext);
  // Get answer.
  const answer = React.useContext(AnswerContext);
  // Get guesses.
  const { guesses } = React.useContext(GuessContext);
  // Get button ref.
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  // Check if guesses are empty.
  const areGuessesEmpty:boolean = guesses.length <= 0;
  // Get current date.
  const date:string = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(new Date());
  /**
  * Generates results blocks and copies them into the clipboard.
  *
  * @returns void
  */
  const handleCopyResults = (event:React.MouseEvent) : void => {
    // Get button.
    const button:HTMLButtonElement | null = event.target as HTMLButtonElement;
    // Get player results.
    const results = generateResultsBlocks(guesses, answer);
    // Create sharable text.
    const shareableText = `WordSpark - ${date}:\n${results}\n${document.URL}`;
    // Copy it to player clipboard.
    navigator.clipboard.writeText(shareableText);
    // Change copy on button.
    button.textContent = 'Copied to clipboard!';
  };
  // Show it to the world.
  return (
    <Notification gameStatus={gameStatus}>
      {gameStatus === 'won' ? (
        <p>
          <strong>🎉 Congratulations!</strong>
          {!areGuessesEmpty ? (
            <>
              {' '}
              Got it in
              {' '}
              <strong>
                {guesses.length}
                {' '}
                {guesses.length > 1 ? 'guesses' : 'guess'}
              </strong>
              .
            </>
          ) : ''}
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
      {!areGuessesEmpty ? <button ref={buttonRef} className={styles.button} type="button" onClick={handleCopyResults}>Copy results to clipboard</button> : ''}
    </Notification>
  );
}

export default GameStatusNotification;
