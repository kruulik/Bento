import React from 'react';
import { Link } from 'react-router-dom';
import ProjectWrapContainer from '../project/project_wrap_container';

class CreateProject extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "Untitled",
      owner_ids: this.props.state.session.currentUser.id,
      item_ids: [],
    };
  }

  componentDidMount() {

  }

  render () {
    const project = this.state;

    return (
      <div className="editor-container">
        <div className="editor-nav">
        </div>
        <div className="editor-content">
          <ProjectWrapContainer project={ project } editing={ true }/>
        </div>
      </div>
    );
  }

}

export default EditProject;
