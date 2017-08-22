import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import { Route, Link } from 'react-router-dom';
// import {AuthRoute} from '../util/route_util.jsx';


const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link"><h1>Bentö</h1></Link>
      <Link to="/" component={SessionFormContainer} />
      <GreetingContainer className="profile-actions"/>
    </header>

    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
