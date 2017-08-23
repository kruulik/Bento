import React from 'react';
import HeaderContainer from './header_container';
import SessionFormContainer from './session_form_container';
import { Route, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <Route path="/" exact component={HeaderContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
