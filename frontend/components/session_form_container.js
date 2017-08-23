import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, receiveErrors, clearErrors } from '../actions/session_actions';
import { withRouter } from 'react-router-dom';



  const mapStateToProps = (state, ownProps) => {
    const formType = ownProps.location.pathname.slice(1);
    return {
      loggedIn: Boolean(state.session.currentUser),
      errors: state.session.errors,
      formType,
    };
  };

  const mapDispatchToProps = (dispatch, ownProps) => {
    const formType = ownProps.location.pathname.slice(1);
    const processForm = (formType === 'login') ? login : signup;
    return {
      processForm: user => dispatch(processForm(user)),
      login: user => dispatch(login(user)),
      clearErrors: () => dispatch(clearErrors()),
      formType
    };

  };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
