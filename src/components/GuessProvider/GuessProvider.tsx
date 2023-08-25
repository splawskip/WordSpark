// React.
import React from 'react';
// Context.
import { GameStatusContext } from '../GameStatusProvider/GameStatusProvider';
import { AnswerContext } from '../AnswerProvider/AnswerProvider';
// Constants.
import NUM_OF_GUESSES_ALLOWED from '../../constants';
// Utils.
import { getCurrentDateTimestamp } from '../../utils';
// Expose context.
export const GuessContext = React.createContext<GuessContextType>({} as GuessContextType);

function GuessProvider({ children } : ChildrenOnly) {
  const [guesses, setGuesses] = React.useState<string[]>([]);
  const { setGameStatus, setIsGameOver } = React.useContext(GameStatusContext);
  const answer = React.useContext(AnswerContext);
  const GuessContextValue = React.useMemo(() => ({
    guesses,
    handleGuessSubmit: (tentativeGuess:string) : void => {
      const currentDate:number = getCurrentDateTimestamp();
      // Add new guess to current guesses.
      const futureGuesses:string[] = [...guesses, tentativeGuess];
      // Set new guesses.
      setGuesses(futureGuesses);
      // Handle win.
      if (tentativeGuess.toUpperCase() === answer) {
        setGameStatus('won');
        setIsGameOver({
          gameStatus: 'won',
          date: currentDate,
        });
      }
      // Handle game over.
      if (futureGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
        setGameStatus('lost');
        setIsGameOver({
          gameStatus: 'lost',
          date: currentDate,
        });
      }
    },
  }), [guesses, setGameStatus, answer, setIsGameOver]);
  // Build Guess Context Provider.
  return <GuessContext.Provider value={GuessContextValue}>{children}</GuessContext.Provider>;
}

export default GuessProvider;
