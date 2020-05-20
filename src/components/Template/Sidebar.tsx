import * as React from 'react';
import { AiOutlineDashboard, AiFillProject } from 'react-icons/ai';
import { MdPermMedia } from 'react-icons/md';
import SidebarItem from './SidebarItem';

interface ISidebarProps {
}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
  return (
    <div className="sidebar d-flex flex-column justify-content-around align-items-center">
      <SidebarItem linkTo="/dashboard" icon={AiOutlineDashboard} />
      <SidebarItem linkTo="/projects" icon={AiFillProject} />
      <SidebarItem linkTo="/gallery" icon={MdPermMedia} />
    </div>
  );
};

export default Sidebar;
