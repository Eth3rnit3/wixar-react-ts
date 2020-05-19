import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsConnected } from '../features/authSlice';

interface IPrivateRouteProps extends RouteProps {
  component: any;
}

const PrivateRoute: React.FunctionComponent<IPrivateRouteProps> = ({ component: Component, ...rest }) => {
  const isConnected = useSelector(getIsConnected);
  return (
    <Route {...rest} render={(props) => (
      isConnected
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  );
};

export default PrivateRoute;