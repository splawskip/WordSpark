// React.
import React from 'react';
// Context.
import { GuessContext } from '../GuessProvider/GuessProvider';
import { GameStatusContext } from '../GameStatusProvider/GameStatusProvider';
// Styles.
import styles from './GuessForm.module.css';

function GuessForm() {
  // Create state for tentative guess.
  const [tentativeGuess, setTentativeGuess] = React.useState<string>('');
  // Create ID for guess input.
  const guessInputId:string = React.useId();
  // Get handle submit.
  const { handleGuessSubmit } = React.useContext(GuessContext);
  // Get game status.
  const { gameStatus: { status } } = React.useContext(GameStatusContext);
  /**
  * Handles form submit event.
  *
  * @param event - React.FormEvent
  * @returns - void
  */
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) : void => {
    event.preventDefault();
    const lastActiveElement:HTMLElement = document.activeElement as HTMLElement;
    handleGuessSubmit(tentativeGuess);
    setTentativeGuess('');
    lastActiveElement?.blur();
    lastActiveElement?.focus();
  };
  /**
   * Handles change event on guess input.
   *
   * @param event - React.ChangeEvent
   * @returns - void
   */
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) : void => (
    setTentativeGuess(event.target.value.toUpperCase())
  );
  // Show it to the world.
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor={guessInputId}>
        Enter you guess:
        <input
          id={guessInputId}
          className={styles.input}
          type="text"
          placeholder="kebab"
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          required
          value={tentativeGuess}
          onChange={handleChange}
          disabled={status !== 'running'}
        />
      </label>
    </form>
  );
}

export default GuessForm;
