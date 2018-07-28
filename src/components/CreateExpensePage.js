import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

export class CreateExpensePage extends React.Component {

	onSubmit = (expense) => {
		this.props.addExpense(expense);
		this.props.history.push('/');
	}
	render() {
		return (
			<div>
				<h3>Add Expense</h3>
				<ExpenseForm onSubmit={this.onSubmit} />
			</div>
		)
	}
}
const mapDispatchtoProps = (dispatch) => ({
	addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchtoProps)(CreateExpensePage);