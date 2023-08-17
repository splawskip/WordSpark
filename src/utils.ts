export const range = (start:number, end?:number, step:number = 1) : number[] => {
  // Initialize array for our range.
  const output:number[] = [];
  // Store input into vars.
  let rangeStart:number = start;
  let rangeEnd:number | undefined = end;
  // Fallback for undefined end.
  if (typeof rangeEnd === 'undefined') {
    rangeEnd = rangeStart;
    rangeStart = 0;
  }
  // Loop from start to end and push values into an array.
  for (let i = rangeStart; i < rangeEnd; i += step) {
    output.push(i);
  }
  // Return array representing range.
  return output;
};

interface ValidatedGuess {
  letter: string;
  status: string;
}

export function checkGuess(guess:string | undefined, answer:string) : ValidatedGuess[] {
  // Indicator that marks we've successfully dealt with this character (it's correct, or misplaced).
  const SOLVED_CHAR = '✓';
  // Check if we got a guess.
  if (!guess) {
    return [];
  }
  // Arrayify guess and answer.
  const guessChars = guess.toUpperCase().split('');
  const answerChars = answer.toUpperCase().split('');
  // Prepare container for our result.
  const result = [];
  // Step 1: Look for correct letters.
  for (let i = 0; i < guessChars.length; i += 1) {
    // We got this.
    if (guessChars[i] === answerChars[i]) {
      // Build letter data.
      result[i] = {
        letter: guessChars[i],
        status: 'correct',
      };
      // Mark as solved.
      answerChars[i] = SOLVED_CHAR;
      guessChars[i] = SOLVED_CHAR;
    }
  }
  // Step 2: Look for misplaced letters. If it's not misplaced, it must be incorrect.
  for (let i = 0; i < guessChars.length; i += 1) {
    // Check only not yet solved letters.
    if (guessChars[i] !== SOLVED_CHAR) {
      // Default status.
      let status = 'incorrect';
      // Get if letter exists in both entries.
      const misplacedIndex = answerChars.findIndex(
        (char) => char === guessChars[i],
      );
      // If letter exists mark as solved.
      if (misplacedIndex >= 0) {
        status = 'misplaced';
        answerChars[misplacedIndex] = SOLVED_CHAR;
      }
      // Build letter data.
      result[i] = {
        letter: guessChars[i],
        status,
      };
    }
  }
  // Spit it out.
  return result;
}
