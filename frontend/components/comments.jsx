import React from 'react';
import {Link} from 'react-router-dom';

class Comments extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestComments(this.props.project.id);
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    // debugger
    let comments, commentForm;
    const {projectComments, state, deleteComment} = this.props;
    if (!state.session.currentUser) {
      commentForm = (
        <div className="post-comment-logged-out">
          You must <Link to='/signup'>sign up </Link>to join the conversation.
        </div>
      );
    } else {
      commentForm = (
        <div className="comment-post-container">
          <Link className="user-avatar" to={`/api/users/${state.session.currentUser.id}`}>
            <img className="avatar-image" src={state.users[state.session.currentUser.id].avatar_url}/>
          </Link>
          <div className="comment-post">

          </div>

        </div>
      );
    }

    if (!projectComments.length === 0) {
      // BUG FIX!
      // If the first comment is deleted, this component returns false for projectComments[0] (but why...?)
      // If a comment is delted at i > 0, the component will throw an error when tryung to render a comment that us undefined. Janky fix for now, but I've added a conditional to check whether the comment is undefined; returns null instead.
      return (
        <div className="modules-loading">
          <span>No comments. Add one!</span>
        </div>
      );
    } else {
      // debugger
      comments = projectComments.map((comment, idx) => {
        if (!comment) {
          return (null);
        }
        // debugger
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
              <div className="comment-action" onClick={ deleteComment.bind(null, comment) }>
                <svg  version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <line x1="1" y1="8" x2="8" y2="1" stroke="gray" strokeWidth="2.5"/>
                  <line x1="1" y1="1" x2="8" y2="8" stroke="gray" strokeWidth="2.5"/>
                </svg>
              </div>

              <div className="comment-actions">
              </div>
            </div>
          </li>
        );
      });
    }
    // debugger
    return (
      <div className="comments-block">
        <h3 className="project-block-header">Comments</h3>
          {commentForm}
        <div>
          <ul className="comments-list">
            {comments}
          </ul>
        </div>
      </div>

    );

  }

}

export default Comments;
