import React from 'react';
import {Link} from 'react-router-dom';
// import SessionFormContainer from './session_form_container';

class Header extends React.Component {

  render() {
    const logo = (
      <Link to="/" className="nav-logo">
        <h1>Bentö</h1>
      </Link>
    );

    let sessionAction;

    if (this.props.currentUser) {
      sessionAction = ([
        <div className = "session-actions">
          <h2>{this.props.currentUser.f_name}</h2>
            <img className="avatar thumb-small" src={this.props.currentUser.avatar_url} />
            <button onClick = {this.props.logout}>Log Out</button>
        </div>
      ]);
    } else {
      sessionAction = (
      <div className="session-actions">
        <div className="button__container menu-item">
          <Link className="form-button" to="/signup">
            <span className="button__label">Sign Up With Email</span>
          </Link>
        </div>
        <Link className="link menu-item" to="/login"> Log In </Link>
      </div>
      );
    }

    return (
      <nav className="primary-nav">
        {logo}
        {sessionAction}
      </nav>
    );

  }
}

export default Header;
