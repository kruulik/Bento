import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ModalStyle from './modal_style.js';


class ProjectIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     modalOpen: false
   };
   this.closeModal = this.closeModal.bind(this);
   this.openModal = this.openModal.bind(this);
  //  this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  closeModal() {
  this.setState({ modalOpen: false });
  // style.content.opacity = 0;
}

openModal() {
  this.setState({ modalOpen: true });
}

// afterModalOpen() {
//   style.content.opacity = 100;
// }

  render () {
    const { projectOwners } = this.props;
    let owners, ownerList;

    if ( projectOwners.length > 1 ) {
      ownerList = projectOwners.map((owner, idx) => {

        return (
        <div key={idx} className="owner">
          <span className="owner-image-container">
            <img src="" className="owner-image"/>
          </span>
          <span className="owner-name">
            {owner.f_name + " " +  owner.l_name}
          </span>
        </div>);
      });
      owners = (
        <div className="owners" >
          <span
            className="tooltip-container">Multiple Owners
            <div className="tooltip">
              {ownerList}
            </div>
          </span>

        </div>
      );
    } else {
      owners = <div className="owners">
        {projectOwners[0].f_name + " " + projectOwners[0].l_name}
      </div>;
    }

    return (
      <div>

        <div className="project-card">
          <div className="thumb" onClick={this.openModal}></div>
          <div className="details">
            <div onClick={this.openModal} className="title">{this.props.project.title} </div>
            {owners}
          </div>
        </div>

        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          style = { ModalStyle }
          contentLabel="Project Modal"
          className='modal-wrap'>

            <div className="project-sidebar">
              <div className="test-project-info">
                <div className="project-detail-block">
                  <div className="project-owner">
                    <span className="owner-name">{owners}</span>
                  </div>
                </div>
              </div>
            </div>
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
                </div>
              </div>

            </div>

        </Modal>

      </div>


    );
  }
}

export default ProjectIndexItem;
