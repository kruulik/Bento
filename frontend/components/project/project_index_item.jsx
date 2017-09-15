import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ModalStyle from './modal_style.js';
import ProjectWrapContainer from './project_wrap_container';
import ProjectSidebarContainer from './project_sidebar_container';
import MdIconPack from 'react-icons/lib/md';
import MdRemoveRedEye from 'react-icons/lib/md/remove-red-eye';
import MdChatBubble from 'react-icons/lib/md/chat-bubble';
import MdThumbUp from 'react-icons/lib/md/thumb-up';


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
    const { projectOwners, project, projectTags } = this.props;
    let owners, ownerList, likes;
    likes = project.likes;

    if ( projectOwners.length > 1 ) {
      // debugger
      ownerList = projectOwners.map((owner, idx) => {
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
    } else if ( projectOwners.length === 1 ) {
      owners = <div className="owners">
        {projectOwners[0].f_name + " " + projectOwners[0].l_name}
      </div>;
    }
    return (
      <div >
        <div className="project-card">
          <img className="thumb" onClick={this.openModal} src={this.props.project.thumbnail_url}/>

          <div className="details">
            <div onClick={this.openModal} className="title">{this.props.project.title} </div>
            {owners}
            <div className="fields">
              <ul className="fields-list">
                <li className="field">
                  {projectTags[0]? <span>{projectTags[0].tag}</span>: null}
                </li>
              </ul>
            </div>
            <div className="stats">
              <span className="likes">
                <MdThumbUp />{likes.length}
              </span>
              <span className="comments">
                <MdChatBubble />{this.props.project.comment_ids.length}
              </span>
            </div>
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
            <ProjectSidebarContainer project={ project } projectTags={ projectTags }/>
            <ProjectWrapContainer project={ project } projectTags={ projectTags }/>

          </div>
        </Modal>
      </div>
    );
  }
}

export default ProjectIndexItem;
