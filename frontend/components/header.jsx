import React from 'react';
import { Switch, Link, NavLink} from 'react-router-dom';
import DiscoverContainer from './discover_container';
import MdIconPack from 'react-icons/lib/md';
import MdPowerSettingsNew from 'react-icons/lib/md/power-settings-new';

class Header extends React.Component {

  render() {
    const logo = (
      <Link to="/" className="nav-logo">
        <h1>Bentö</h1>
      </Link>
    );
    let sessionAction, mainMenu;
    if (this.props.currentUser) {
    sessionAction = (
      <div className = "session-actions">
        <div className="user-profile-action">
          <img className="avatar thumb-small" src={this.props.currentUser.avatar_url} />
          <span className="tooltip-container">
            <div className="tooltip">
              <div className="profile clearfix">
                <img className="avatar thumb-med" src={this.props.currentUser.avatar_url} />
                <span className="name">{this.props.currentUser.f_name}</span>
                <span className="email">{this.props.currentUser.email}</span>
              </div>
              <button className="sign-out-button" onClick = {this.props.logout}><MdPowerSettingsNew />Sign Out</button>
            </div>
          </span>
        </div>
      </div>
    );

    mainMenu = (
      <ul className="main-menu">
        <li className="menu-item">
          <NavLink className="link" activeClassName="active" to="/activity">Activity</NavLink>
        </li>
        <li className="menu-item">
          <NavLink className="link" activeClassName="active" to="/discover" >Discover</NavLink>
        </li>
        <li className="menu-item">
          <NavLink className="link" activeClassName="active" to="/profile">Profile</NavLink>
        </li>
        <li className="menu-item">
          <div className="button__container menu-item">
            <Link className="form-button" to="/signup">
              <span className="button__label">Create a Project</span>
            </Link>
          </div>
        </li>
      </ul>
    );


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
        {mainMenu}
        {sessionAction}
          <Link className="link menu-item github" to="https://github.com/kruulik/Bento"> GitHub </Link>
      </nav>
    );

  }
}

export default Header;
