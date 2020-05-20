import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects, fetch } from '../../features/projectsSlice';

interface IGalleryProps {
}

const Gallery: React.FunctionComponent<IGalleryProps> = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const projects = useSelector(getProjects);

  React.useEffect(() => {
    dispatch(fetch())
  }, []);

  return (
    <div>
      <h1>{t('pages.projects.title')}</h1>
    </div>
  );
};

export default Gallery;
