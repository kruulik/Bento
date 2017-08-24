import React from 'react';
// import {Route, Link} from 'react-router-dom';
import HeaderContainer from './header_container';

class Main extends React.Component {


  render() {
    let topPanel;

    topPanel = ( <HeaderContainer /> );

    return (
      <div className="topPanel">{ topPanel }</div>

    );

  }

}

export default Main;
