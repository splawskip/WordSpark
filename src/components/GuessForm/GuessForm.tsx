import React from 'react';

import styles from './GuessForm.module.css';
import { GuessContext } from '../GuessProvider/GuessProvider';

function GuessForm() {
  const [tentativeGuess, setTentativeGuess] = React.useState<string>('');
  const guessInputId:string = React.useId();
  const { handleGuessSubmit } = React.useContext(GuessContext);

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    handleGuessSubmit(tentativeGuess);
    setTentativeGuess('');
  };

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) : void => (
    setTentativeGuess(event.target.value.toUpperCase())
  );

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
        />
      </label>
    </form>
  );
}

export default GuessForm;
