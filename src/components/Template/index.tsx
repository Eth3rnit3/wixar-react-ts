import * as React from 'react';
import './index.scss';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

interface ITemplateProps {
}

const Template: React.FunctionComponent<ITemplateProps> = ({ children }) => {
  return (
    <div className="wvr-app">
      <Topbar />
      <Sidebar />
      {children}
    </div>
  );
};

export default Template;
