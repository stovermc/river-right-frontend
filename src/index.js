import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import './index.css'
import App from './components/App'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import User from './components/User.jsx'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
      <Route path="user" component={User} />
    </Route>
  </Router>,
  document.querySelector('#root')
)
