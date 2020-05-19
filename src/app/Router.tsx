import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';

interface IRouterProps {
}

const Router: React.FunctionComponent<IRouterProps> = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Router;
