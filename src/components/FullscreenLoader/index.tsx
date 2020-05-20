import * as React from 'react';
import './index.scss';
import { Spinner } from 'reactstrap';
import { useTranslation } from 'react-i18next';

interface IFullscreenLoaderProps {
}

const FullscreenLoader: React.FunctionComponent<IFullscreenLoaderProps> = (props) => {
  const { t } = useTranslation()
  return (
    <div className="fullscreen-loader d-flex flex-column justify-content-center align-items-center">
      <Spinner type="grow" color="primary" />
      <p className="mt-3">{t('shared.loading')}</p>
    </div>
  );
};

export default FullscreenLoader;
