import React from 'react';
import { Route, Redirect } from 'react-router';
import { withRouter, Link } from 'react-router-dom';


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
    // const header = this.props.formType;
    let header, back, button, errors;

    if (this.props.formType === 'signup') {
      header = 'Sign up to continue';
      back = <div className="row"><span>Already have an account? </span><Link to="/login">Sign in</Link></div>;
      button = 'Sign Up';
    } else {
      header = 'Sign up to continue';
      back = <div className="row"><span>Not a member yet? </span><Link to="/signup">Create an account</Link></div>;
      button = 'Sign In';
    }

    // const errors = this.props.errors.responseJSON;
    // debugger
    if (this.props.errors.responseJSON) {
    errors = this.props.errors.responseJSON.map((err) => <li>{err}</li>);
    }
    // debugger
    const fields = (
      [
      <fieldset className="names">
        <div className="grid_1">
          <input type="text" id="f_name" value={this.state.f_name}
          placeholder="First name"
          onChange={this.update('f_name')}/>
          </div>
        <div className="grid_1">
          <input type="text" id="l_name" value={this.state.l_name}
          placeholder="Last name" onChange={this.update('l_name')}/>
        </div>
      </fieldset>

      ]
    );
    return (
      <div className="form-container">
        <div className="page-action">
          <h1>{header}</h1>
        </div>
        <div className="form-logo">
          <span className="logo">
            <Link to="/">Bentö</Link>
          </span>
        </div>
      {this.props.loggedIn ? <Redirect to='/'/> : <div></div>}
        <form onSubmit={this.handleSubmit}>

          {(this.props.formType === 'signup') ? fields : null }
          <fieldset className="email">
            <input className="grid" type="text" id="email" value={this.state.email}
              placeholder="Email address" onChange={this.update('email')}/>
          </fieldset>

          <fieldset className="pass">
            <input className="grid" type="password" id="password"
              placeholder="Password" value={this.state.password} onChange={ this.update('password') }/>
          </fieldset>

          <div className="row">
            <button className="button__container form-button">{button}</button>
          </div>
          <div className="errors">{errors}</div>

          <div className="row">
            {back}
          </div>


        </form>

      </div>
    );
  }

}

export default SessionForm;
