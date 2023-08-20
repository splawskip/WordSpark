// React.
import React from 'react';
// Vendors.
import JSConfetti from 'js-confetti';

/**
 * Custom hook responsible for throwing a confetti.
 *
 * @param gameStatus - string - Game status.
 * @returns void
 */
function useConfetti(gameStatus:string) : void {
  React.useEffect(() => {
    // Grab confetti.
    const jsConfetti = new JSConfetti();
    // Throw confetti on win.
    if (gameStatus === 'won') {
      jsConfetti.addConfetti();
    }
    // Clear canvas.
    return () => {
      jsConfetti.clearCanvas();
      document.querySelector('canvas')?.remove();
    };
  }, [gameStatus]);
}

export default useConfetti;
