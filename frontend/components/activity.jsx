import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsIndexContainer from './projects_index_container';

class Activity extends React.Component {

  render () {
    // debugger
    return (
      <div className="activity-container">
        <ProjectsIndexContainer />
      </div>
    );
  }
}

export default Activity;
