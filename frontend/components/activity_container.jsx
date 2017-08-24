import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import Activity from './activity';

const mapStateToProps = ({ session }) => {
  // debugger
  return {
    currentUser: session.currentUser,
  };
};


export default connect(mapStateToProps)(Activity);
