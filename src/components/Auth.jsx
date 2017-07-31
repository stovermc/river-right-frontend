import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';

const Auth = ({ firstName, updateAuthStatus }) => {
  const logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    updateAuthStatus({
      loggedIn: false,
      firstName: '',
      token: ''
    }, 'login')
  }
  return (
    <div className="auth">
      { firstName &&
        <p>
          Logged in as {firstName}.
          <a onClick={event => logOut(event)} href="#">Logout</a>
        </p>
      }

      { !firstName &&
        <Link to="/login/">Login</Link>
      }
    </div>
  )
}

export default Auth
