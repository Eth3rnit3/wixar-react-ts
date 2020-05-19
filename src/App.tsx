import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './app/Router';
import './App.css';
import Translator from './Translator';

function App() {
  return (
    <Translator>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Translator>
  );
}

export default App;
