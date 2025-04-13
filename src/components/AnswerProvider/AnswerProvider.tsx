// React.
import React from 'react';
// Hooks.
import useSWR from 'swr';
// Styles.
import styles from './AnswerProvider.module.css';
// Expose context.
export const AnswerContext = React.createContext<string>('');
/**
 * Calls given endpoint and fetches the data.
 *
 * @param url - string - URL that will be called.
 * @returns responseJson - Promise<AnswerResponse>.
 */
const fetcher = async (url: string): Promise<AnswerResponse> => {
  // Call Rapid API.
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_WORDLE_API_KEY,
      'x-rapidapi-host': import.meta.env.VITE_WORDLE_API_HOST,
    },
  });
  // Get as JSON.
  const responseJson = await response.json();
  // Throw JSON if something went wrong.
  if (!response.ok) {
    throw responseJson;
  }
  // Show it to the world.
  return responseJson;
};

function AnswerProvider({ children }: ChildrenOnly) {
  // Get data.
  const { data, error } = useSWR(
    'https://wordle-api3.p.rapidapi.com/getcurrentword',
    fetcher,
  );
  // Bail app if sresponsewrong.
  if (error) {
    return (
      <p className={styles.error}>
        Something&apos;s gone wrong! Please let me know about this 👉
        {' '}
        <a
          title="WordSpark issues"
          className={styles.link}
          href="https://github.com/splawskip/WordSpark/issues"
          rel="noopener noreferrer"
        >
          here
        </a>
      </p>
    );
  }
  // Show it to the world.
  return (
    <AnswerContext.Provider value={data?.word ?? ''}>
      {children}
    </AnswerContext.Provider>
  );
}

export default AnswerProvider;
