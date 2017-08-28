import React from 'react';

class ProjectWrap extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    this.props.requestItems(this.props.project.id);
  }

  render() {
    // debugger

    let modules;
    const { projectItems } = this.props;

    if (!projectItems[0]) {
      console.log('loading...');
      return (<div className="modules-loading"><span>Loading... (or there's no content)</span></div>);
    } else {



    // debugger
    modules = projectItems.map((item, idx) => {
      if ( item.image_url ) {
        return (
          <div key={idx} className="project-module image-module">
            <img className="image" src={item.image_url}/>
          </div>
        );
      } else {
        return (
          <div key={idx} className='project-module text-module'>
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
    </div>

    );

  }

}
}

export default ProjectWrap;
