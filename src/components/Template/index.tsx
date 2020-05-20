import * as React from 'react';
import './index.scss';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import { getIsConnected } from '../../features/authSlice';

interface ITemplateProps {
}

const Template: React.FunctionComponent<ITemplateProps> = ({ children }) => {
  const isConnected = useSelector(getIsConnected);
  if(!isConnected)  return <div>{children}</div>;

  return (
    <div className="wvr-app">
      <Topbar />
      <Sidebar />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Template;
