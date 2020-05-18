import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'

import Home from './components/Home.js'
import FourZeroFour from './components/FourZeroFour.js'
import UserProfile from './components/UserProfile.js'
import Login from './components/Login.js'
import Debits from './components/Debits.js'
import Credits from './components/Credit.js'

class App extends Component {
  state = {
    currentUser: {
      userName: 'bob_loblaw',
      memberSince: '08/23/99',
    },
    debits: [],
    credits: []
  }

  getBalance = () => {
    let sum = 0
    const { credits, debits } = this.state

    credits.forEach((credit) => {
      sum += credit.amount
    })

    debits.forEach((debit) => {
      sum -= debit.amount
    })

    return sum
  }

  addDebit = (debitObj) => {
    const newState = { ...this.state }
    newState.debits.push(debitObj)
    this.setState(newState)
  }

  addCredit = (creditObj) => {
    const newState = { ...this.state }
    newState.credits.push(creditObj)
    this.setState(newState)
  }

  getHomeComponent = () => {
    return (<Home
      accountBalance={this.state.accountBalance}
      getBalance={this.getBalance} />)
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
          <Link to='/debits'>Debits</Link>
          <Link to='/credits'>Credits</Link>
        </nav>
        <div className="container">
          <Switch>
            <Route exact path="/" component={this.getHomeComponent} />
            <Route exact path="/userProfile" component={this.getUserProfile} />
            <Route exact path="/login" component={this.getLogin} />

            <Route exact path="/debits">
              <Debits
                getBalance={this.getBalance}
                debits={this.state.debits}
                addDebit={this.addDebit} />

            </Route>

            <Route exact path="/credits">
              <Credits
                getBalance={this.getBalance}
                credits={this.state.credits}
                addCredit={this.addCredit} />

            </Route>

            <Route path="/" component={FourZeroFour} />

          </Switch>
        </div>
      </Router>

    )
  }
}

export default App