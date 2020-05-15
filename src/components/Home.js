import React from 'react'
import AccountBalance from './AccountBalance.js'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {

    render() {
        return (<div>
            <img src="https://cdn2.iconfinder.com/data/icons/finance-icons/256/Bank-128.png" alt="bank" />
            <h1>Bank of React</h1>

            <Link to="/userProfile">User Profile</Link>
            {/* <a href="/userProfile">User Profile</a> */}

            <AccountBalance accountBalance={this.props.accountBalance} />
        </div>)
    }
}