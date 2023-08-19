import React from 'react';

export const GuessContext = React.createContext<GuessContextType>({} as GuessContextType);

function GuessProvider({ children } : GuessProviderProps) {
  const [guesses, setGuesses] = React.useState<string[]>([]);

  const GuessContextValue = React.useMemo(() => ({
    guesses,
    handleGuessSubmit: (tentativeGuess:string) : void => {
      const futureGuesses:string[] = [...guesses, tentativeGuess];
      setGuesses(futureGuesses);
    },
  }), [guesses]);

  return <GuessContext.Provider value={GuessContextValue}>{children}</GuessContext.Provider>;
}

export default GuessProvider;
