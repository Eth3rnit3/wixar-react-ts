import * as React from 'react';
import { AiOutlineDashboard, AiFillProject } from 'react-icons/ai';
import { MdPermMedia } from 'react-icons/md';
import SidebarItem from './SidebarItem';
import { useTranslation } from 'react-i18next';

interface ISidebarProps {
}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
  const { t } = useTranslation();
  return (
    <div className="sidebar d-flex flex-column justify-content-around align-items-center">
      <SidebarItem dataTip={t('sidebar.dashboard')} linkTo="/dashboard" icon={AiOutlineDashboard} />
      <SidebarItem dataTip={t('sidebar.projects')} linkTo="/projects" icon={AiFillProject} />
      <SidebarItem dataTip={t('sidebar.gallery')} linkTo="/gallery" icon={MdPermMedia} />
    </div>
  );
};

export default Sidebar;
