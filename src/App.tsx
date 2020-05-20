import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Router from './app/Router';
import Translator from './Translator';
import { getIsKeepSession, logout } from './features/authSlice';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const isKeepSession = useSelector(getIsKeepSession);

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
        <Router />
      </BrowserRouter>
    </Translator>
  );
}

export default App;
