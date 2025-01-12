import * as React from 'react';
import { IconType } from 'react-icons/lib/cjs';
import { Link } from 'react-router-dom';

//@ts-ignore
import colors from '../../assets/styles/colors.scss';
import './SidebarItem.scss';

interface ISidebarItemProps {
  linkTo: string;
  iconSize?: number | string;
  icon: IconType;
  dataTip?: string
}

const SidebarItem: React.FunctionComponent<ISidebarItemProps> = ({
  linkTo,
  iconSize = '40px',
  icon: Icon,
  dataTip
}) => {
  const isActive = window.location.href.includes(linkTo);
  return (
    <Link data-tip={dataTip} className={`animated-action sidebar-item ${isActive ? 'active' : ''}`} to={linkTo}>
      <Icon size={iconSize} color={colors.green} />
    </Link>
  );
};

export default SidebarItem;
