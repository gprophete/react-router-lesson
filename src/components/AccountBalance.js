import React from 'react'

export default class AccountBalance extends React.Component {

    render() {
        return (
            <div>
                Balance: {this.props.getBalance()}
            </div>
        )
    }
}