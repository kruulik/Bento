import React from 'react';
import { Route, Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      f_name: "",
      l_name: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({
      username: "",
      password: "",
    });
  }

  update(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  }

  render() {
    const header = this.props.formType;
    const errors = this.props.errors.responseJSON;
    const fields = (
      [
      <label htmlFor="f_name">First Name</label>,

      <input type="text" id="f_name" value={this.state.f_name} onChange={this.update('f_name')}/>,

      <label htmlFor="l_name">Last Name</label>,

      <input type="text" id="l_name" value={this.state.l_name} onChange={this.update('l_name')}/>
      ]
    );
    // debugger
    return (
      <div>
        <h3>{header}</h3>
      {this.props.loggedIn ? <Redirect to='/'/> : <div></div>}
        <form onSubmit={this.handleSubmit}>
          <h6>{errors}</h6>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" value={this.state.email} onChange={this.update('email')}/>

          {(this.props.formType === 'signup') ? fields : null }

          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={this.state.password} onChange={ this.update('password') }/>

          <button>{this.props.formType}</button>
        </form>

      </div>
    );
  }

}

export default SessionForm;
