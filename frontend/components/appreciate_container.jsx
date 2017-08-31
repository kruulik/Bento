import { connect } from 'react-redux';
import Appreciate from './appreciate';


const mapStateToProps = (state, ownProps) => {
  // debugger
  const project_id = ownProps.project.id;
  const type = ownProps.type;
  // debugger
  return {
    user: state.session.currentUser,
    project_id,
    type
  };
};

const mapDispatchToProps = dispatch => {
  return {
    likeProject: like => dispatch(likeProject(like)),
    unlikeProject: like => dispatch(unlikeProject(like))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Appreciate);
