import React from 'react';
import {Link} from 'react-router-dom';
// import SessionFormContainer from './session_form_container';


class Header extends React.Component {


  render() {
    debugger
    const logo = (
      <Link to="/" className="header-link"><h1>Bentö</h1></Link>
    );

    let sessionAction;

    if (this.props.currentUser) {
      sessionAction = ([
        <div className="profile-actions">
          <h2>Welcome {this.props.currentUser.f_name}</h2>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      ]);
    } else {
      sessionAction = ([
        <div className="profile-actions">
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      ]);
    }

    return (
      <nav>
        { logo }
        { sessionAction }
      </nav>
    );

  }
}

export default Header;
