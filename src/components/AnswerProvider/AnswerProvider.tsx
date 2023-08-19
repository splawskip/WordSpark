import React from 'react';
import useSWR from 'swr';

export const AnswerContext = React.createContext<string>('');

const fetcher = async (url:string) => {
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
  // Show it to the world.
  return responseJson;
};

function AnswerProvider({ children } : ChildrenOnly) {
  // Get data.
  const { data } : AnswerResponse = useSWR('https://wordle-answers-solutions.p.rapidapi.com/today', fetcher);
  // Show it to the world.
  return <AnswerContext.Provider value={data?.today ?? ''}>{children}</AnswerContext.Provider>;
}

export default AnswerProvider;
