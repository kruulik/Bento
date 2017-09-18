import React from 'react';
import CommentsContainer from '../comment/comments_container';
import ProjectWrapContainer from './project_wrap_container';
import UploadItemsContainer from '../edit_project/upload_items_container';

class ProjectWrap extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestItems(this.props.project.id);
  }

  componentWillUnmount() {
    this.props.clearItems();
    this.props.clearComments();
  }

  render() {

    let modules,
      placeholder,
      addContent, insertModule = null;
    const {projectItems, project, editing, formType} = this.props;

    if (!editing) {
      placeholder = (
        <div className="modules-loading">
          <span>Loading... (or there's no content)</span>
        </div>

      );
    } else {
      placeholder = (<UploadItemsContainer section="module" project={project} />);
      insertModule = (<UploadItemsContainer section="insert" project={project} />);
    }

    if (!projectItems[0]) {
      return placeholder;

    } else {
      modules = projectItems.map((item, idx) => {
        const editable = editing ? "editable" : null;
        if (item.image_url) {
          return (
            <div key={idx} className={'project-module image-module' + editable}>
              {insertModule}
              <img className="image medium" src={item.image_url}/>
            </div>
          );
        } else {
          return (
            <div key={idx} className={'project-module text-module' + editable}>
              {insertModule}
              <span className="main-text">{item.body}</span>
            </div>
          );
        }
      });

      return (
        <div className="project-container">
          <div className="project-canvas">
            <div className="project-modules">
              {modules}
              {insertModule}
            </div>
          </div>
          <div className="project-bottom">
            <div className="bottom-inner">
              <CommentsContainer project={project}/>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ProjectWrap;
