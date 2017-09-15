import React from 'react';
import CommentsContainer from '../comment/comments_container';

class ProjectWrap extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestItems(this.props.project.id);
  }

  componentWillUnmount(){
    this.props.clearItems();
    this.props.clearComments();
  }

  render() {

// create a placeholder item if in editing mode
// when a new item is added, DOM should rerender with state; this will trigger the else statement because now it will have items to iterate over
// need additional logic to render the add content components above/below each item
debugger
    let modules, placeholder;
    const { projectItems, project, editing } = this.props;

    if (!editing) {
      placeholder = (<div className="modules-loading"><span>Loading... (or there's no content)</span></div>);
    } else {
      placeholder = (<div className="place-holder-module"></div>);
    }

    
    if (!projectItems[0]) {
      return placeholder;
    } else {

    modules = projectItems.map((item, idx) => {
      const editable = editing ?  "editable" : null;
      if ( item.image_url ) {
        return (
          <div key={idx} className={'project-module image-module' + editable}>
            <img className="image medium" src={item.image_url}/>
          </div>
        );
      } else {
        return (
          <div key={idx} className={'project-module text-module' + editable}>
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
        </div>
      </div>
      <div className="project-bottom">
        <div className="bottom-inner">
          <CommentsContainer project={ project } />
        </div>
      </div>
    </div>

    );

  }

}
}

export default ProjectWrap;
