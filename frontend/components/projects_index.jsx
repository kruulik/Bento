import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexItemContainer from './project_index_item_container';

class ProjectsIndex extends React.Component {

  componentDidMount() {
    this.props.requestProjects().then(
    this.props.requestTags());
  }

  handleScroll(){
    console.log('scrolling');
  }


  render () {
    // debugger
    const { allProjects } = this.props;
// debugger
    return (
      <div className="projects-grid" onScroll={this.handleScroll}>

        { allProjects.map(project => <ProjectIndexItemContainer key={project.id} project={ project } />) }
        <div className="flex-spacer"></div>
        <div className="flex-spacer"></div>
        <div className="flex-spacer"></div>
        <div className="flex-spacer"></div>
      </div>
    );
  }
}

export default ProjectsIndex;
