import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';
import { setLocale } from '../../features/appSlice';
import { signIn, getIsConnected } from '../../features/authSlice';
import Input from '../../components/Form/Input';

import './index.scss';
import Button from '../../components/Form/Button';

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
    <div className="login-page d-flex flex-column justify-content-center align-items-center">
      <div>
        <h1>{t('pages.login.title')}</h1>
        <form className="d-flex flex-column" onSubmit={runSignIn}>
          <Input
            className="lg"
            id="identifier"
            name="identifier"
            label={t('pages.login.username')}
          />
          <Input
            className="lg"
            id="password"
            name="password"
            label={t('pages.login.password')}
          />
          <Input
            className="lg"
            defaultChecked
            id="keepSession"
            name="keepSession"
            label={t('pages.login.keepSession')}
            type="checkbox"
          />
          <Button type="submit">
            {t('pages.login.login')}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
