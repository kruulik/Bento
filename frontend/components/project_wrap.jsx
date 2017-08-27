import React from 'react';

const handleStateChange = (status) => {
  if (status.status === Sticky.STATUS_FIXED) {
      console.log('the component is sticky');
  }
};

class ProjectWrap extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (

    <div className="project-container">

      <div className="project-canvas">

        <div className="project-modules">
          <div className="project-module"></div>
          <div className="project-module"></div>
          <div className="project-module"></div>
          <div className="project-module"></div>

          <div className="project-module"></div>
          <div className="project-module"></div>
          <div className="project-module"></div>
          <div className="project-module"></div>
          <div className="bottom-boundry"></div>
        </div>

      </div>
    </div>

    );

  }

}

export default ProjectWrap;
