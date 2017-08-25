import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import Discover from './discover';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
  };
};


export default connect(mapStateToProps)(Discover);
