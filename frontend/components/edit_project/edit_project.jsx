import React from 'react';
import {Link} from 'react-router-dom';
import ProjectWrapContainer from '../project/project_wrap_container';
import UploadItemsContainer from './upload_items_container';

class EditProject extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    const { project } = this.props;
    // I'm assumimg when I add/edit an item it will change the state, causing a rerender... that's why I needed to store the project info in props
    return (
      <div className="site-content wide">
        <div className="editor-nav"></div>
        <div className="editor-container">
          <div className="project-wrap">
            <UploadItemsContainer section="sidebar" />
            <div className="project">
              <ProjectWrapContainer project={project} editing={true}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default EditProject;
