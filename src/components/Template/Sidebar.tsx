import * as React from 'react';
import { AiOutlineDashboard, AiFillProject } from 'react-icons/ai';
import { Link } from 'react-router-dom';

interface ISidebarProps {
}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
  return (
    <div className="sidebar">
      <Link to="/dashboard">
        <AiOutlineDashboard size="60px" color="gray" />
      </Link>
      <Link to="/test">
        <AiFillProject size="60px" color="gray" />
      </Link>
    </div>
  );
};

export default Sidebar;
