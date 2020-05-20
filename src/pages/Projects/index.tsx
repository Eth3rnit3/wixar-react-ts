import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects, fetch } from '../../features/projectsSlice';
import { AiFillAppstore } from "react-icons/ai";
import './index.scss';

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
    <div className="wixar-projects d-flex flex-column">
      <h1>{t('pages.projects.title')}</h1>
      <div className="projects-container d-flex w-100 flex-wrap">
        {
          projects.map(project => (
            <div style={{width: '100px'}} className="project-item pointed animated-action d-flex flex-column align-items-center ml-2 mr-2" key={project.id}>
              <AiFillAppstore size="50px" />
              <p className="text-center">{project.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Gallery;
