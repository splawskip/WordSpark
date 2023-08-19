import React from 'react';

import { GameStatusContext } from '../GameStatusProvider/GameStatusProvider';
import { AnswerContext } from '../AnswerProvider/AnswerProvider';
import NUM_OF_GUESSES_ALLOWED from '../../constants';

export const GuessContext = React.createContext<GuessContextType>({} as GuessContextType);

function GuessProvider({ children } : ChildrenOnly) {
  const [guesses, setGuesses] = React.useState<string[]>([]);
  const { setGameStatus } = React.useContext(GameStatusContext);
  const answer = React.useContext(AnswerContext);
  const GuessContextValue = React.useMemo(() => ({
    guesses,
    handleGuessSubmit: (tentativeGuess:string) : void => {
      const futureGuesses:string[] = [...guesses, tentativeGuess];
      setGuesses(futureGuesses);
      if (tentativeGuess.toUpperCase() === answer) {
        setGameStatus('won');
      }
      if (futureGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
        setGameStatus('lost');
      }
    },
  }), [guesses, setGameStatus, answer]);

  return <GuessContext.Provider value={GuessContextValue}>{children}</GuessContext.Provider>;
}

export default GuessProvider;
