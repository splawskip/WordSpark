type HeadingProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;
  children: React.ReactNode;
};

type GuessContextType = {
  guesses:string[],
  handleGuessSubmit: (tentativeGuess:string) => void
};

type GuessProviderProps = {
  children: React.ReactNode;
};

type GuessProps = {
  guess: string | undefined,
};

type GuessCellProps = {
  letter:string | undefined,
  status:string | undefined,
};
