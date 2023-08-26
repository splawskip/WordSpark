type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;
  type?: 'heading' | 'subheading' | undefined;
  children: React.ReactNode;
};

type GameStatus = {
  status: string,
  timestamp: number,
};

type GameStatusContext = {
  gameStatus: GameStatus,
  setGameStatus: (newState:React.SetStateAction<GameStatus>) => void,
};

type GuessContextType = {
  guesses: string[],
  handleGuessSubmit: (tentativeGuess:string) => void
};

type ChildrenOnly = {
  children: React.ReactNode;
};

type AnswerResponse = {
  data: {
    today: string
  }
};

type GuessProps = {
  guess: string | undefined,
};

type GuessCellProps = {
  letter: string | undefined,
  status: string | undefined,
};

type ValidatedGuess = {
  letter: string;
  status: string;
};

type NotificationProps = {
  children: React.ReactNode,
  gameStatus: string
};

type VisuallyHiddenProps = {
  children: React.ReactNode,
  className?: string,
};
