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
export const GuessContext = React.createContext<GuessContextType>(
  {} as GuessContextType,
);

function GuessProvider({ children }: ChildrenOnly) {
  // Create state for guesses.
  const [guesses, setGuesses] = React.useState<string[]>([]);
  const { setGameStatus } = React.useContext<GameStatusContext>(GameStatusContext);
  // Get answer.
  const answer = React.useContext(AnswerContext);
  // Build value carried by Guess Context.
  const GuessContextValue = React.useMemo(
    () => ({
      guesses,
      /**
       * Handles a new guess submit.
       *
       * @param tentativeGuess - string - A tentative guess.
       * @returns - void.
       */
      handleGuessSubmit: (tentativeGuess: string): void => {
        // Get current date as timestamp.
        const currentDate: number = getCurrentDateTimestamp();
        // Add new guess to current guesses.
        const futureGuesses: string[] = [...guesses, tentativeGuess];
        // Set new guesses.
        setGuesses(futureGuesses);
        // Handle win.
        if (tentativeGuess.toUpperCase() === answer.toUpperCase()) {
          setGameStatus({
            status: 'won',
            timestamp: currentDate,
          });
        }
        // Handle game over.
        if (futureGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
          setGameStatus({
            status: 'lost',
            timestamp: currentDate,
          });
        }
      },
    }),
    [guesses, setGameStatus, answer],
  );
  // Show it to the world.
  return (
    <GuessContext.Provider value={GuessContextValue}>
      {children}
    </GuessContext.Provider>
  );
}

export default GuessProvider;
