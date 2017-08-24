import React from 'react';

class ProjectIndexItem extends React.Component {

  render () {
    debugger
    return (
      <div className="project-card">
        <div className="project-thumb"></div>
        <div className="project-details">
          <span>{this.props.project.title}</span>
        </div>
      </div>
    );
  }
}

export default ProjectIndexItem;
