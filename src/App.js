import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'

import Home from './components/Home.js'
import FourZeroFour from './components/FourZeroFour.js'
import UserProfile from './components/UserProfile.js'
import Login from './components/Login.js'

class App extends Component {
  state = {
    accountBalance: 14958.00,
    currentUser: {
      userName: 'bob_loblaw',
      memberSince: '08/23/99',
    }
  }

  getHomeComponent = () => {
    return (<Home accountBalance={this.state.accountBalance} />)
  }

  getUserProfile = () => {
    return (<UserProfile
      userName={this.state.currentUser.userName}
      memberSince={this.state.currentUser.memberSince} />)
  }

  getLogin = () => {
    return (<Login
      setUserName={this.setUserName} />)
  }

  setUserName = (userName) => {
    const newState = { ...this.state }
    newState.currentUser.userName = userName
    this.setState(newState)
  }

  render() {
    return (
      <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/userProfile'>Profile</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={this.getHomeComponent} />
          <Route exact path="/userProfile" component={this.getUserProfile} />
          <Route exact path="/login" component={this.getLogin} />

          <Route path="/" component={FourZeroFour} />

        </Switch>
      </Router>
    )
  }
}

export default App