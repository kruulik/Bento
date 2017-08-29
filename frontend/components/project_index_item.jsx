import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ModalStyle from './modal_style.js';
import ProjectWrapContainer from './project_wrap_container';
import ProjectSidebarContainer from './project_sidebar_container';


class ProjectIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     modalOpen: false
   };

   this.closeModal = this.closeModal.bind(this);
   this.openModal = this.openModal.bind(this);
  }

  closeModal() {
  this.setState({ modalOpen: false });
  }


  openModal() {
    this.setState({
      modalOpen: true });
  }

  render () {
    const { projectOwners, project } = this.props;
    let owners, ownerList;



    if ( projectOwners.length > 1 ) {
      ownerList = projectOwners.map((owner, idx) => {
        // debugger
        return (
        <div key={idx} className="owner">
          <span className="owner-image-container">
            <img src={owner.avatar_url} className="owner-image"/>
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
      <div >
        <div className="project-card">
          <div className="thumb" onClick={this.openModal}></div>
          <div className="details">
            <div onClick={this.openModal} className="title">{this.props.project.title} </div>
            {owners}
          </div>
        </div>

        <Modal
          onScroll={this.handleScroll}
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style = { ModalStyle }
          contentLabel="Project Modal"
          className='modal-wrap'>
          <div className="project-wrapper">
            <ProjectSidebarContainer project={ project } />
            <ProjectWrapContainer project={ project } />
            
          </div>
        </Modal>
      </div>
    );
  }
}

export default ProjectIndexItem;
