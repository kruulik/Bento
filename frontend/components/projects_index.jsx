import React from 'react';
import { Link } from 'react-router-dom';
// import ProjectIndexItem from './project_index_item';
import ProjectIndexItemContainer from './project_index_item_container';

class ProjectsIndex extends React.Component {

  componentDidMount() {
    this.props.requestProjects();
  }

  render () {
    const { allProjects } = this.props;


    return (
      <div className="projects-grid">
        { allProjects.map(project => <ProjectIndexItemContainer key={project.id} project={ project }/>) }
        <div className="flex-spacer"></div>
        <div className="flex-spacer"></div>
        <div className="flex-spacer"></div>
        <div className="flex-spacer"></div>
      </div>
    );
  }
}

export default ProjectsIndex;
