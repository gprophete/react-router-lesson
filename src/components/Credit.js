import React from 'react'
import moment from 'moment'
export default class Credits extends React.Component {
    state = {
        newCredit: {
            description: '',
            amount: 0,
        }
    }

    onCreditUpdate = (evt) => {
        const newState = { ...this.state }
        newState.newCredit[evt.target.name] = evt.target.value
        this.setState(newState)
    }

    onSubmit = (evt) => {
        evt.preventDefault()

        const newState = { ...this.state }
        const newCredit = { ...this.state.newCredit }

        newCredit.amount = Number(newCredit.amount)
        newCredit.date = new Date().toISOString()

        this.props.addCredit(newCredit)

        newState.newCredit.description = ''
        newState.newCredit.amount = 0
        this.setState(newState)
    }

    render() {
        return (<div>
            <h1>Credits</h1>

            <h5>Balance: {this.props.getBalance()}</h5>

            {this.props.credits.map((credit) => {
                return (<div>
                    <div>{credit.description}</div>
                    <div>{credit.amount}</div>
                    <div>{moment(credit.date).format('llll')}</div>
                </div>)
            })}

            <form onSubmit={this.onSubmit}>
                <div>
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        onChange={this.onCreditUpdate}
                        value={this.state.newCredit.description} />
                </div>
                <div>
                    <label htmlFor="description">Amount</label>
                    <input
                        type="number"
                        name="amount"
                        onChange={this.onCreditUpdate}
                        value={this.state.newCredit.amount} />
                </div>
                <input type="submit" value="Add Credit" />
            </form>
        </div>)
    }
}