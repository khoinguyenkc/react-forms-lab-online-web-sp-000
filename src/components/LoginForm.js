import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if ( this.state.username && this.state.password ) {
      this.props.handleLogin( this.state )
    }
  }
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input
              onChange={ event => this.handleInputChange(event)}
              value={this.state.username}
              id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              onChange={ event => this.handleInputChange(event)}
              value={this.state.password}
              id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
