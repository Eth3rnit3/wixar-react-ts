import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setLocale } from '../../features/appSlice';
import { signIn, getIsConnected } from '../../features/authSlice';
import { Redirect } from 'react-router-dom';

interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps> = () => {
  const isConnected = useSelector(getIsConnected);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  if(isConnected){
    return <Redirect to="/dashboard" />
  }

  const runSignIn = (event: React.FormEvent) => {
    event.preventDefault()
    //@ts-ignore
    const formdata = new FormData(event.target);
    const identifier = formdata.get('identifier');
    const password = formdata.get('password');
    const keepSession = Boolean(formdata.get('keepSession'));
    dispatch(signIn(identifier, password, keepSession));
  }
  return (
    <div>
      <h1>{t('pages.login.title')}</h1>
      <form onSubmit={runSignIn}>
        <label htmlFor="identifier">
          {t('pages.login.username')}
          <input id="identifier" name="identifier" type="text"/>
        </label>
        <label htmlFor="password">
          {t('pages.login.password')}
          <input id="password" name="password" type="text"/>
        </label>
        <label htmlFor="keepSession">
          {t('pages.login.keepSession')}
          <input defaultChecked id="keepSession" name="keepSession" type="checkbox" />
        </label>
        <button type="submit">{t('pages.login.login')}</button>
      </form>
    </div>
  );
};

export default Login;
