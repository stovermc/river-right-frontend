import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  updateProperty(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  login(event) {
    const { updateAuthStatus } = this.props

    fetch('http://localhost:3000/authenticate', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }

      return response.json()
    })
    .then(({ firstName, token}) => {
      localStorage.setItem('token', token)
      localStorage.setItem('firstName', firstName)
      updateAuthStatus({
        loggedIn: true,
        firstName,
        token
      }, 'user')
    })
    .catch(error => {
      console.log('Error: ', error)
    })
  }

  render() {
    return (
      <div className="login">
        <label>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={event => this.updateProperty(event)}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={event => this.updateProperty(event)}
          />
        </label>
        <button id="submit"
          onClick={event => this.login(event)}>Login
        </button>
      </div>
    )
  }
}

export default Login
