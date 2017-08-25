import React from 'react';
import { Link } from 'react-router-dom';


class ProjectIndexItem extends React.Component {

  render () {
    const { projectOwners } = this.props;
    let owners, ownerList;

    if ( projectOwners.length > 1 ) {
      ownerList = projectOwners.map((owner, idx) => {
        // debugger
        return (<div key={idx} className="owner">{owner.f_name} {owner.l_name}</div>);
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
      owners = <span className="single-owner">
        {projectOwners[0].f_name} {projectOwners[0].l_name}
      </span>;
    }




    return (
      <div className="project-card">
        <div className="thumb"></div>
        <div className="details">
          <Link to="#" className="title">{this.props.project.title} </Link>
          {owners}
        </div>
      </div>
    );
  }
}

export default ProjectIndexItem;
