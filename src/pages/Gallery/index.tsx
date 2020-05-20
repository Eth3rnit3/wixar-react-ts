import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getMedias, fetch } from '../../features/mediasSlice';

interface IProjectsProps {
}

const Projects: React.FunctionComponent<IProjectsProps> = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const projects = useSelector(getMedias);

  React.useEffect(() => {
    dispatch(fetch())
  }, []);

  return (
    <div>
      <h1>{t('pages.gallery.title')}</h1>
    </div>
  );
};

export default Projects;
