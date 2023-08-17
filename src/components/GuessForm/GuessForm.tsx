import React from 'react';

function GuessForm({ handleGuessSubmit }:{ handleGuessSubmit:(tentativeGuess:string) => void }) {
  const [tentativeGuess, setTentativeGuess] = React.useState<string>('');
  const guessInputId:string = React.useId();

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    handleGuessSubmit(tentativeGuess);
    setTentativeGuess('');
  };
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) : void => (
    setTentativeGuess(event.target.value.toUpperCase())
  );
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={guessInputId}>
        Enter you guess:
        <input
          id={guessInputId}
          type="text"
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
