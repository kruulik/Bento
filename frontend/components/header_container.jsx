import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import {withRouter} from 'react-router-dom';
import Header from './header';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
