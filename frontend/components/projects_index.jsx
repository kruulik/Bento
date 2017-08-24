import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexItem from './project_index_item';

class ProjectsIndex extends React.Component {

  componentDidMount() {
    this.props.requestProjects();
  }

  render () {
    debugger
    const { allProjects } = this.props;

    return (
      <div className="projects-grid">
        { allProjects.map(project => <ProjectIndexItem key={project.id} project={ project }/>) }
      </div>
    );
  }
}

export default ProjectsIndex;
