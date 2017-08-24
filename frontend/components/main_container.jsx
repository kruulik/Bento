import { connect } from 'react-redux';
import Main from './main';

const mapStateToProps = ({ session }) => {
  return {
    session
  };
};

export default connect(mapStateToProps)(Main);
