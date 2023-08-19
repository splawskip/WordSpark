// React.
import React from 'react';

export const GameStatusContext = React.createContext<GameStatusContext>({} as GameStatusContext);

function GameStatusProvider({ children } : ChildrenOnly) {
  const [gameStatus, setGameStatus] = React.useState<string>('running');

  const GameStatusContextValue = React.useMemo(
    () => ({
      gameStatus,
      setGameStatus,
    }),
    [gameStatus, setGameStatus],
  );

  return (
    <GameStatusContext.Provider value={GameStatusContextValue}>
      {children}
    </GameStatusContext.Provider>
  );
}

export default GameStatusProvider;
