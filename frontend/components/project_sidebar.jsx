import React from 'react';
import AppreciateContainer from './appreciate_container';
import MdIconPack from 'react-icons/lib/md';
import MdRemoveRedEye from 'react-icons/lib/md/remove-red-eye';
import MdChatBubble from 'react-icons/lib/md/chat-bubble';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import moment from 'moment';


class ProjectSidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pos: 'unfixed',
      stickystyle: {
        position: 'relative'
      }
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    let mod = document.querySelector('.ReactModal__Overlay');
    mod.addEventListener('scroll', this.handleScroll);
  }

  getStickyTop() {
    let mod = document.querySelector('.ReactModal__Overlay');
    let modRec = mod.getBoundingClientRect();
    let sb = document.querySelector('.project-sidebar');
    let sbRec = sb.getBoundingClientRect();

    return Math.abs(sbRec.height - modRec.height);
  }

  handleScroll() {

    let sb = document.querySelector('.project-sidebar');
    let sbRec = sb.getBoundingClientRect();
    let mod = document.querySelector('.ReactModal__Overlay');
    let modRec = mod.getBoundingClientRect();
    // need ro refactor this to make it DRY

    if (sbRec.top < 1 && (sbRec.bottom - modRec.bottom) > 0) {
      this.setState({
        stickystyle: {
          position: 'fixed',
          top: 0
        }
      });
    } else {
      let pos = this.getStickyTop();
      if (sbRec.top < 1) {
        // Add condition for project-info bottom overflowing container
        this.setState({
          stickystyle: {
            position: 'absolute',
            top: pos
          }
        });
      } else {
        this.setState({
          stickystyle: {
            position: 'absolute',
            top: 0
          }
        });

      }
    }
  }

  render() {
    let style = this.state.stickystyle;
    const {projectOwners, project, likes, projectTags} = this.props;
    let owners,
      ownerList, fields;
    if (projectOwners.length > 1) {
      ownerList = projectOwners.map((owner, idx) => {

        return (
          <div key={idx} className="owner">
            <span className="owner-image-container">
              <img src={owner.avatar_url} className="owner-image"/>
            </span>
            <span className="owner-name">
              {owner.f_name + " " + owner.l_name}
            </span>
          </div>
        );
      });
      owners = (
        <div className="owners">
          <span className="tooltip-container">Multiple Owners
            <div className="sidebar tooltip">
              {ownerList}
            </div>
          </span>

        </div>
      );
    } else {
      owners = (
        <div className="owners">
          <div className="name">{projectOwners[0].f_name + " " + projectOwners[0].l_name}</div>
          <img src={projectOwners[0].avatar_url} className="owner-image medium"/>
        </div>
      );

    }


    fields = projectTags.map((tag, idx) => {
      return (
        <li className="field" key={idx}>
          <span>{tag.tag}, </span>
        </li>
      );
    });

    return (
      <div className="project-sidebar">
        <div className="stickycontainer">
          <div className="project-info" style={style}>
            <div className="project-detail-block">
              <div className="owners-block">
                {owners}
                <div className="owner-actions">
                  <div className="button__container menu-item button-small">
                    <div className="form-button">
                      <span className="button__label">Follow</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-detail-block">
              <div className="info">
                <div className="title">
                  {this.props.project.title}
                </div>
                <div className="fields">
                  <ul className="fields-list">
                    {fields}
                  </ul>
                </div>
                <div className="stats">
                  <span className="views">
                    <MdRemoveRedEye />0
                  </span>
                  <span className="likes">
                    <MdThumbUp />{likes}
                  </span>
                  <span className="comments">
                    <MdChatBubble />{this.props.project.comment_ids.length}
                  </span>
                </div>
                <div className="published">
                  <span className="timestamp">Published: {moment(project.createdOn).format("MMMM Do, YYYY")}</span>
                </div>
              </div>
            </div>
            <div className="project-detail-block">

              <AppreciateContainer project={ project } type="a" />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectSidebar;
