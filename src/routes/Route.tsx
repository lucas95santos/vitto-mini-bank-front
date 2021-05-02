import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface RouteWrapperProps extends RouteProps {
  component: React.FunctionComponent;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({
  component: Component,
  ...rest
}) => {
  return <Route {...rest} component={Component} />;
}

export default RouteWrapper;
