import React from 'react'
import { Redirect } from 'react-router-dom'

export default class Login extends React.Component {

    state = {
        user: {
            userName: '',
            password: ''
        },
        redirect: false
    }

    handleOnChange = (evt) => {
        const newState = { ...this.state }
        newState.user[evt.target.name] = evt.target.value
        this.setState(newState)
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        const newState = { ...this.state }
        newState.redirect = true
        this.props.setUserName(this.state.user.userName)
        this.setState(newState)
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to="/userProfile" />)
        }

        return (<div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input
                        type="text"
                        name="userName"
                        onChange={this.handleOnChange}
                        value={this.state.user.userName}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={this.handleOnChange}
                        value={this.state.user.password}
                    />
                </div>
                <input type="submit" value="Log In" />
            </form>
        </div>)
    }
}