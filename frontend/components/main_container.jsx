import { connect } from 'react-redux';
import Main from './main';

const mapStateToProps = ({ session }) => {
  // debugger
  return {
    session
  };
};

export default connect(mapStateToProps)(Main);
