import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Router from './app/Router';
import Translator from './Translator';
import { getIsKeepSession, logout, getIsConnected } from './features/authSlice';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const isKeepSession = useSelector(getIsKeepSession);
  const isConnected = useSelector(getIsConnected);

  React.useEffect(() => {
    return () => {
      if(!isKeepSession){
        dispatch(logout(null))
      }
    }
  });

  return (
    <Translator>
      <BrowserRouter>
        <Router isConnected={isConnected} />
      </BrowserRouter>
    </Translator>
  );
}

export default App;
