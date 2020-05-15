import React from 'react'
import { Link } from 'react-router-dom'

export default class UserProfile extends React.Component {

    render() {
        return (<div>
            <h1>User Profile</h1>
            <div>UserName : {this.props.userName}</div>
            <div>Member Since : {this.props.memberSince}</div>

            <Link to="/">User Profile</Link>
        </div>)
    }
}