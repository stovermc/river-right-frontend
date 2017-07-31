import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import Auth from './Auth.jsx'
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authStatus: {
        loggedIn: false,
        username: '',
        token: ''
      },
      trips: []
    }

    this.updateAuthStatus = this.updateAuthStatus.bind(this)
  }

  updateAuthStatus(authStatus, redirect) {
    this.setState({authStatus}, browserHistory.push(`/${redirect}`))
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    let firstName = localStorage.getItem('token')
    let lastName = localStorage.getItem('token')

    if (token && firstName && lastName) {
      this.setState({
        authStatus: {
          loggedIn: true,
          firstName,
          token
        }
      })
    }
  }
  render() {
    const { trips } = this.state
    const { authStatus } = this.state
    return (
      <div className="App">
        <h2>Welcome to River Right!</h2>
          <Auth
            firstName={authStatus.firstName}
            updateAuthStatus={this.updateAuthStatus}
          />
          {React.cloneElement(
            this.props.children,
            {
              authStatus,
              updateAuthStatus: this.updateAuthStatus,
              trips
            }
          )}
      </div>

    )
  }
}

export default App;
