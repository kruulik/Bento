import React from 'react';
import {Route, Link} from 'react-router-dom';
import HeaderContainer from './header_container';
import ActivityContainer from './activity_container';

class Main extends React.Component {


  render() {
    let topPanel;

    topPanel = ( <HeaderContainer /> );
    // debugger
    return (
      <div className="main-container">
        <div className="topPanel">{ topPanel }</div>
        <Route path="/activity" exact component={ActivityContainer} />
      </div>
    );

  }

}

export default Main;
