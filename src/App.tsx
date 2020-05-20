import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReactTooltip from "react-tooltip";
import Router from './app/Router';
import Translator from './Translator';
import { getIsKeepSession, logout } from './features/authSlice';
import './App.scss';
import { setAuthHeader } from './utils/auth';

function App() {
  const dispatch = useDispatch()
  const isKeepSession = useSelector(getIsKeepSession);
  setAuthHeader();

  React.useEffect(() => {
    return () => {
      if(!isKeepSession){
        dispatch(logout(null))
      }
    }
  });

  return (
    <Translator>
      <ReactTooltip />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Translator>
  );
}

export default App;
