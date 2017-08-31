import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

class Comments extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      body: '',
      project_id: this.props.project_id
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestComments(this.props.project.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    let commentBody = this.state.body;
    let projectId = this.props.project.id;
    this.props.createComment({body: commentBody, project_id: projectId}).then();
    this.setState({body: ""});
  }

  handleChange(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({body: e.currentTarget.value});
  }

  render() {
    let comments,
      commentForm,
      commentAction;
    const {projectComments, state, deleteComment} = this.props;
    const {currentUser} = this.props.state.session;
    if (!state.session.currentUser) {
      commentForm = (
        <div className="post-comment-logged-out">
          You must <Link to='/signup'>sign up</Link> to join the conversation.
        </div>
      );
    } else {
      debugger
      commentForm = (
        <div className="comment-post-container clearfix">

          <Link className="user-avatar" to={`/api/users/${state.session.currentUser.id}`}>
            <img className="avatar-image" src={state.users[state.session.currentUser.id].avatar_url}/>
          </Link>

          <div className="comment-post">
            <form className="comments-form" onSubmit={this.handleSubmit}>
              <div className="comment-container">
                <textarea id="comment" className="text-area" value={this.state.body} onChange={this.handleChange}/>
              </div>
              <button className="button__container form-button">Post a Comment</button>
            </form>

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
      //
      //
      //
      //
      // sorting before map causes my list of comments to switch order every time a letter is typed into the form!

      comments = projectComments.slice().reverse().map((comment, idx) => {
        if (!comment) {
          return (null);
        }
        if (currentUser && comment.user_id === currentUser.id) {
          commentAction = (
            <div className="comment-action">
              <svg className="delete-comment" version="1.1" xmlns="http://www.w3.org/2000/svg" onClick={deleteComment.bind(null, comment)}>
                <line x1="1" y1="8" x2="8" y2="1" stroke="#6f6f6f" strokeWidth="2.5"/>
                <line x1="1" y1="1" x2="8" y2="8" stroke="#6f6f6f" strokeWidth="2.5"/>
              </svg>
            </div>
          );
        } else {
          (
            <div className="comment-action"></div>
          );
        }

        return (
          <li className="user-comment clearfix" key={idx}>
            <Link className="user-avatar" to={`/api/users/${comment.user_id}`}>
              <img className="avatar-image" src={state.users[comment.user_id].avatar_url}/>
            </Link>
            <div className="comment-text-container">
              <div className="comment-user-date">
                <span className="username">
                  <Link to={`/api/users/${comment.user_id}`}>
                    {comment.username}
                  </Link>
                </span>
                <span className="comment-date">
                  {moment(comment.createdOn).fromNow()}
                </span>
              </div>
              <div className="comment-text">
                {comment.body}
              </div>

            </div>
            {commentAction}
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
