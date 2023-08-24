// React.
import React from 'react';
// Hooks.
import { useLocalStorage } from '../../hooks';
// Expose context.
export const GameStatusContext = React.createContext<GameStatusContext>({} as GameStatusContext);

function GameStatusProvider({ children } : ChildrenOnly) {
  const [isGameOver, setIsGameOver] = useLocalStorage('isGameOver', JSON.stringify({
    gameStatus: 'running',
    date: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(new Date()),
  }));
  const [gameStatus, setGameStatus] = React.useState<string>(isGameOver.gameStatus);
  // Create context value.
  const GameStatusContextValue = React.useMemo(
    () => ({
      gameStatus,
      setGameStatus,
      isGameOver,
      setIsGameOver,
    }),
    [gameStatus, setGameStatus, isGameOver, setIsGameOver],
  );

  return (
    <GameStatusContext.Provider value={GameStatusContextValue}>
      {children}
    </GameStatusContext.Provider>
  );
}

export default GameStatusProvider;
