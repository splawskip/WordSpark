// React.
import React from 'react';
import ReactDOM from 'react-dom/client';
// Providers.
import AnswerProvider from './components/AnswerProvider/AnswerProvider';
import GameStatusProvider from './components/GameStatusProvider';
import GuessProvider from './components/GuessProvider';
// Components.
import Game from './components/Game';
// Styles.
import './reset.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AnswerProvider>
      <GameStatusProvider>
        <GuessProvider>
          <Game />
        </GuessProvider>
      </GameStatusProvider>
    </AnswerProvider>
  </React.StrictMode>,
);
