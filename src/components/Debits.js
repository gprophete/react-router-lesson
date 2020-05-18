import React from 'react'
import moment from 'moment'

export default class Debits extends React.Component {
    state = {
        newDebit: {
            description: '',
            amount: 0,
        }
    }

    onDebitUpdate = (evt) => {
        const newState = { ...this.state }
        newState.newDebit[evt.target.name] = evt.target.value
        this.setState(newState)
    }

    onSubmit = (evt) => {
        evt.preventDefault()

        const newState = { ...this.state }
        const newDebit = { ...this.state.newDebit }

        // convert amount string to number
        newDebit.amount = Number(newDebit.amount)
        // get current date and store as ISO string
        newDebit.date = new Date().toISOString()

        this.props.addDebit(newDebit)

        newState.newDebit.description = ''
        newState.newDebit.amount = 0
        this.setState(newState)
    }

    render() {
        return (<div>
            <h1>Debits</h1>

            <h5>Balance: {this.props.getBalance()}</h5>

            {this.props.debits.map((debit) => {
                return (<div>
                    <div>{debit.description}</div>
                    <div>{debit.amount}</div>
                    <div>{moment(debit.date).format('llll')}</div>
                </div>)
            })}

            <form onSubmit={this.onSubmit}>
                <div>
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        onChange={this.onDebitUpdate}
                        value={this.state.newDebit.description} />
                </div>
                <div>
                    <label htmlFor="description">Amount</label>
                    <input
                        type="number"
                        name="amount"
                        onChange={this.onDebitUpdate}
                        value={this.state.newDebit.amount} />
                </div>
                <input type="submit" value="Add Debit" />
            </form>
        </div>)
    }
}