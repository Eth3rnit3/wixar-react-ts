import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setLocale } from '../../features/appSlice';
import { logout } from '../../features/authSlice';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('app.title')}</h1>
      <button
        type="button"
        onClick={() => dispatch(setLocale('en'))}
      >Update locale to en
      </button>
      <button
        type="button"
        onClick={() => dispatch(setLocale('fr'))}
      >Update locale to fr
      </button>
      <button
        type="button"
        onClick={() => dispatch(logout(null))}
      >Logout
      </button>
    </div>
  );
};

export default Home;
