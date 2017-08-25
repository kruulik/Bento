import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import modalStyle from './modal_style.js';


class ProjectIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     modalOpen: false
   };
  }

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
          <div className="thumb"></div>
          <div className="details">
            <Link to='#' className="title">{this.props.project.title} </Link>
            {owners}
          </div>
        </div>

        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          style = {style}
          contentLabel="Board Modal">
          <div className="x-button">
            <button onClick={this.closeModal}><i aria-hidden="true"></i>
            </button>
          </div>
        </Modal>

      </div>


    );
  }
}

export default ProjectIndexItem;
