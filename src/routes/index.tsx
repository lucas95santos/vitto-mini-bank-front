import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
// screens
import { SignIn, SignUp, Dashboard } from '../screens';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/criar-conta" component={SignUp} />
      {/* rota privada */}
      <Route path="/inicio" component={Dashboard} />
    </Switch>
  );
}

export default Routes;
