import React from 'react';

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
    const {projectOwners, project} = this.props;
    let owners,
      ownerList;

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
            <div className="tooltip">
              {ownerList}
            </div>
          </span>

        </div>
      );
    } else {
      owners = <div className="owners">
        <div className="name">{projectOwners[0].f_name + " " + projectOwners[0].l_name}</div>
        <img src={projectOwners[0].avatar_url} className="owner-image medium"/>
      </div>;
    }

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
                  <span className="field">Photography*
                  </span>
                  <span className="field">Branding*
                  </span>
                  <span className="field">Graphic Design*
                  </span>
                </div>
                <div className="stats">
                  <span className="views">2000</span>
                  <span className="likes">200</span>
                  <span className="comments">20</span>
                </div>
                <div className="published">
                  <span className="timestamp">Published: Aug24, 2017**</span>
                </div>
              </div>
            </div>
            <div className="project-detail-block">

              <div className="button__container menu-item">
                <div className="form-button appreciate">
                  <span className="button__label">Appreciate Project</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectSidebar;

// className={'project-info ' + this.state.pos}
