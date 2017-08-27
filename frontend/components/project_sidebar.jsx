import React from 'react';
import Sticky from 'react-stickynode';

class ProjectSidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pos: 'unfixed',
      stickystyle: {position: 'relative'}
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    let mod = document.querySelector('.ReactModal__Overlay');
    mod.addEventListener('scroll', this.handleScroll);
  }

  getStickyTop(){
    let mod = document.querySelector('.ReactModal__Overlay');
    let modRec = mod.getBoundingClientRect();
    let sb = document.querySelector('.project-sidebar');
    let sbRec = sb.getBoundingClientRect();

    return Math.abs(sbRec.height - modRec.height);
  }

  handleScroll(){

    let sb = document.querySelector('.project-sidebar');
    let sbRec = sb.getBoundingClientRect();
    let mod = document.querySelector('.ReactModal__Overlay');
    let modRec = mod.getBoundingClientRect();
    // need ro refactor this to make it DRY

    if ( sbRec.top < 1 && (sbRec.bottom - modRec.bottom) > 0) {
      this.setState({
          stickystyle: {position: 'fixed', top: 0}
        });
    } else {
      let pos = this.getStickyTop();
      if ( sbRec.top < 1 ) {
        // Add condition for project-info bottom overflowing container
        this.setState({
          stickystyle: {position: 'absolute', top: pos}
        });
      } else {
        this.setState({
          stickystyle: {position: 'absolute', top: 0}
        });

      }
    }

    // if ( sbRec.top < 1 && (sbRec.bottom - modRec.bottom) > 0) {
    //   // debugger
    //   this.setState({
    //     stickystyle: {position: 'fixed', top: 0}
    //   });
    // } else {
    //   let pos = this.getStickyTop();
    //   // debugger
    //   this.setState({
    //     stickystyle: {position: 'absolute', top: pos}
    //   });
    // }
  }


  render() {
    let style = this.state.stickystyle;

    return (
    <div className="project-sidebar">
      <div className="stickycontainer">
      <div className="project-info" style={style}>
        <div className="project-detail-block">
          blablabla
        </div>
        <div className="project-detail-block">
          blablabla
        </div>
        <div className="project-detail-block">
          blablabla
        </div>
        <div className="project-detail-block">
          blablabla
        </div>
        <div className="project-detail-block">
          blablabla
        </div>



      </div>
      </div>
    </div>
  );
}
}

export default ProjectSidebar;

// className={'project-info ' + this.state.pos}
