import { useEffect } from 'react';
import JSConfetti from 'js-confetti';

function useConfetti(gameStatus:string) {
  useEffect(() => {
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
