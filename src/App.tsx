import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { setLocale } from './features/counter/appSlice';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button
        onClick={() => dispatch(setLocale('en'))}
      >Update locale</button>
    </div>
  );
}

export default App;
