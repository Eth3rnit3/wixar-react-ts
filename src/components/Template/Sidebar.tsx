import * as React from 'react';
import { AiOutlineDashboard, AiFillProject } from 'react-icons/ai';
import { GrGallery } from 'react-icons/gr';
import { Link } from 'react-router-dom';

interface ISidebarProps {
}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
  const iconSize = '40px'
  return (
    <div className="sidebar">
      <Link to="/dashboard">
        <AiOutlineDashboard size={iconSize} color="gray" />
      </Link>
      <Link to="/projects">
        <AiFillProject size={iconSize} color="gray" />
      </Link>
      <Link to="/gallery">
        <GrGallery size={iconSize} color="gray" />
      </Link>
    </div>
  );
};

export default Sidebar;
