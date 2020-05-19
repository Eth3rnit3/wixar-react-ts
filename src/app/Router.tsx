import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PrivateRoute from '../components/PrivateRoute';
import Login from '../pages/Login';

interface IRouterProps {
}

const Router: React.FunctionComponent<IRouterProps> = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/dashboard" component={Home} />
    </Switch>
  );
};

export default Router;
