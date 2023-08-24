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
export function useConfetti(gameStatus:string) : void {
  React.useEffect(() => {
    // Check if user prefers reduced motion.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches === true;
    // Grab confetti.
    const jsConfetti = new JSConfetti();
    // Throw confetti on win.
    if (gameStatus === 'won' && !prefersReducedMotion) {
      jsConfetti.addConfetti();
    }
    // Clear canvas.
    return () => {
      jsConfetti.clearCanvas();
      document.querySelector('canvas')?.remove();
    };
  }, [gameStatus]);
}

/**
 * Custom hook for getting and setting localStorage value.
 *
 * @param key - string - Key of localStorage item.
 * @param initialValue - string - Initial value for the localStorage item.
 * @returns - Array that holds localStorage value and set function.
 */
export const useLocalStorage = (key:string, initialValue:string) => {
  // Get the initial value from localStorage or use the provided initialValue.
  const storedValue:string | null = localStorage.getItem(key);
  const initial = storedValue || initialValue;
  // Create a state for localStorage item.
  const [value, setValue] = React.useState(JSON.parse(initial));
  // Update localStorage when the value changes.
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  // Show it to the world.
  return [value, setValue];
};
