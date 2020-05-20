import * as React from 'react';
import { useTranslation } from 'react-i18next';

interface IDashboardProps {
}

const Dashboard: React.FunctionComponent<IDashboardProps> = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('app.title')}</h1>
    </div>
  );
};

export default Dashboard;
