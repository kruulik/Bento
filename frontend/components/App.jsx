import React from 'react';
// import HeaderContainer from './header_container';
import MainContainer from './main_container';
import SessionFormContainer from './session_form_container';
import { Switch, Route, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
// import Scroll from 'react-scroll';

const App = () => {
  return (

    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route path="/" component={MainContainer} />
    </Switch>

);
};

export default App;
