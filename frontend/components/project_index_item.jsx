import React from 'react';
import { Link } from 'react-router-dom';

class ProjectIndexItem extends React.Component {

  render () {
    debugger

    

    return (
      <div className="project-card">
        <div className="thumb"></div>
        <div className="details">
          <Link to="#" className="title"> {this.props.project.title} </Link>
          <div className="owners">
            <span className="owners-list"> {this.props.project.owner_ids}</span>
          </div>

        </div>
      </div>
    );
  }
}

export default ProjectIndexItem;
