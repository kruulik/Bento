import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsIndexContainer from './projects_index_container';

class Discover extends React.Component {

  render () {
    return (
      <div className="discover-container">
        <ProjectsIndexContainer />
      </div>
    );
  }
}

export default Discover;
