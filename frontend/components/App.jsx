import React from 'react';
import HeaderContainer from './header_container';
import SessionFormContainer from './session_form_container';
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <Route path="/" exact component={HeaderContainer} className="primary-nav"/>
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
