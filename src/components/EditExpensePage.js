import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component {
	constructor (props) {
		super(props);
	}
	onSubmit = (expense) => {
		this.props.startEditExpense(this.props.expense.id, expense);
		this.props.history.push('/dashboard');
	}
	render () {
		return (
			<div>
				<ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find((expense) => expense.id === props.match.params.id),
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);