import { Switch, Route } from 'react-router-dom';
import RouteWrapper from './Route';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Essence from '../pages/Essence';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <RouteWrapper
        path="/home"
        component={Home}
        title="Página inicial"
        isPrivate
      />
      <RouteWrapper
        path="/essence"
        component={Essence}
        title="Essências"
        isPrivate
      />
    </Switch>
  );
}

export default Routes;
