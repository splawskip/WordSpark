// React.
import React from 'react';
// Hooks.
import { useLocalStorage } from '../../hooks';
// Utils.
import { getCurrentDateTimestamp } from '../../utils';
// Expose context.
export const GameStatusContext = React.createContext<GameStatusContext>({} as GameStatusContext);

function GameStatusProvider({ children } : ChildrenOnly) {
  const [isGameOver, setIsGameOver] = useLocalStorage('isGameOver', JSON.stringify({
    gameStatus: 'running',
    date: getCurrentDateTimestamp(),
  }));
  const [gameStatus, setGameStatus] = React.useState<string>(() => {
    if (isGameOver.date === getCurrentDateTimestamp()) {
      return isGameOver.gameStatus;
    }
    return 'running';
  });
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
