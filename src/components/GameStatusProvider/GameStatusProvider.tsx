// React.
import React from 'react';
// Hooks.
import { useLocalStorage } from '../../hooks';
// Utils.
import { getCurrentDateTimestamp } from '../../utils';
// Expose context.
export const GameStatusContext = React.createContext<GameStatusContext>({} as GameStatusContext);

function GameStatusProvider({ children } : ChildrenOnly) {
  // Get current date timestamp.
  const currentDateTimestamp:number = getCurrentDateTimestamp();
  // Handle game status using localStorage hook.
  const [gameStatus, setGameStatus] = useLocalStorage<GameStatus>('gameStatus', JSON.stringify({
    status: 'running',
    timestamp: currentDateTimestamp,
  }));
  // Resolve if game status should change.
  if (gameStatus.status !== 'running' && gameStatus.timestamp !== currentDateTimestamp) {
    setGameStatus({
      status: 'running',
      timestamp: currentDateTimestamp,
    });
  }
  // Build value carried by Game Status Context.
  const GameStatusContextValue = React.useMemo(
    (): GameStatusContext => ({
      gameStatus,
      setGameStatus,
    }),
    [gameStatus, setGameStatus],
  );
  // Show it to the world.
  return (
    <GameStatusContext.Provider value={GameStatusContextValue}>
      {children}
    </GameStatusContext.Provider>
  );
}

export default GameStatusProvider;
