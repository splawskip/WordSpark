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
const fetcher = async (url:string): Promise<AnswerResponse> => {
  // Call Rapid API.
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a6b0ba1d41msh7ff2c26cbe46ac6p18e0adjsn9e0c74468c46',
      'X-RapidAPI-Host': 'wordle-answers-solutions.p.rapidapi.com',
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

function AnswerProvider({ children } : ChildrenOnly) {
  // Get data.
  const { data, error } = useSWR('https://wordle-answers-solutions.p.rapidapi.com/today', fetcher);
  // Bail app if sresponsewrong.
  if (error) {
    return (
      <p className={styles.error}>
        Something&apos;s gone wrong!
        Please let me know about this 👉
        {' '}
        <a title="WordSpark issues" className={styles.link} href="https://github.com/splawskip/WordSpark/issues" rel="noopener noreferrer">here</a>
      </p>
    );
  }
  // Show it to the world.
  return <AnswerContext.Provider value={data?.today ?? ''}>{children}</AnswerContext.Provider>;
}

export default AnswerProvider;
