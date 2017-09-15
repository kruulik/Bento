import React from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import HeaderContainer from '../header/header_container';
import DiscoverContainer from '../discover/discover_container';
import CreateProjectContainer from '../project_creation/create_project_container';

class Main extends React.Component {

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }



  render() {
  let topPanel;

  topPanel = ( <HeaderContainer /> );

  return (
    <div>
      <div className="topPanel">{ topPanel }</div>
      <div className="site-content">
        <Switch>
          <Route path="/discover" component={DiscoverContainer} />
          <Route path="/projects" component={CreateProjectContainer} />
          <Route path="/" exact render={() => <Redirect to="/discover" />} />
        </Switch>
      </div>
    </div>
  );

  }

}

export default Main;
