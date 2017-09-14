import React from 'react';
import {Link} from 'react-router-dom';


class Greeting extends React.Component {


  render() {
    if (this.props.currentUser) {
      return (
        <div className="profile-actions">
          <h2>Welcome {this.props.currentUser.f_name}</h2>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div className="profile-actions">
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      );
    }
  }
}

export default Greeting;
