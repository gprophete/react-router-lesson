import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Home.js'
import FourZeroFour from './components/FourZeroFour.js'
import UserProfile from './components/UserProfile.js'

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

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={this.getHomeComponent} />
          <Route exact path="/userProfile" component={this.getUserProfile} />

          <Route path="/" render={FourZeroFour} />

        </Switch>
      </Router>
    )
  }
}

export default App