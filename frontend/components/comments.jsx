import React from 'react';
import {Link} from 'react-router-dom';

class Comments extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestComments(this.props.project.id);
  }

  render() {
    let comments;
    const {projectComments, state} = this.props;

    if (!projectComments[0]) {
      return (
        <div className="modules-loading">
          <span>No comments. Add one!</span>
        </div>
      );
    } else {
      comments = projectComments.map((comment, idx) => {
        return (
          <li className="comment-container" key={idx}>
            <Link className="user-avatar" to={`/api/users/${comment.user_id}`}>
              <img className="avatar-image" src={state.users[comment.user_id].avatar_url}/>
            </Link>
            <div className="comment-text-container">
              <div className="comment-user-date">
                <div className="username bold">
                  <Link className="user-avatar" to={`/api/users/${comment.user_id}`}>
                    {comment.username}
                  </Link>
                </div>
              </div>
              <div className="comment-text">
                {comment.body}
              </div>
              <div className="comment-date">
                'Need data for this'
              </div>
              <div className="comment-action" onClick={() => this.deleteComment(comment.id)}>
                <svg viewPort="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <line x1="1" y1="8" x2="8" y2="1" stroke="gray" stroke-width="2.5"/>
                  <line x1="1" y1="1" x2="8" y2="8" stroke="gray" stroke-width="2.5"/>
                </svg>
              </div>

              <div className="comment-actions">
              </div>
            </div>
          </li>
        );
      });
    }
    
    return (
      <div className="comments-block">
        <h3 className="project-block-header">Comments</h3>
        <div className="comment-post-container">
          <Link className="user-avatar" to={`/api/users/${state.session.currentUser.id}`}>
            <img className="avatar-image" src={state.users[state.session.currentUser.id].avatar_url}/>
          </Link>
          <div className="comment-post">
            <div>
              <ul className="comments-list">
                {comments}
              </ul>
            </div>
          </div>
        </div>
      </div>

    );

  }

}

export default Comments;
