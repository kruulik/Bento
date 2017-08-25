import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import HeaderContainer from './header_container';
import DiscoverContainer from './discover_container';

class Main extends React.Component {

  render() {
  let topPanel;

  topPanel = ( <HeaderContainer /> );
  
  return (
    <div>
      <div className="topPanel">{ topPanel }</div>
      <div className="site-content">
        <Switch>
          <Route path="/" exact component={DiscoverContainer} />
        </Switch>
      </div>
    </div>
  );

  }

}

export default Main;
