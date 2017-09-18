import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsIndexContainer from '../project/projects_index_container';

class Discover extends React.Component {

  render () {
    return (
      <div className="site-content">
        <div className="discover-container">
          <ProjectsIndexContainer />
        </div>
      </div>
    );
  }
}

export default Discover;
