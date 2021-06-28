import React from 'react';
import ReactDOM from 'react-dom';

import { PokedexProvider } from './hooks/pokedex';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <PokedexProvider>
      <App />
    </PokedexProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
