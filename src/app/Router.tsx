import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from '../components/PrivateRoute';
import Login from '../pages/Login';
import Template from '../components/Template';

interface IRouterProps {
  isConnected: boolean;
}

const Router: React.FunctionComponent<IRouterProps> = ({ isConnected }) => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Template>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Template>
    </Switch>
  );
};

export default Router;
