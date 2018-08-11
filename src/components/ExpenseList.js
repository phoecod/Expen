import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import expenses from '../test/fixtures/expenseData.js';

export const ExpenseList = (props) => {

	return (
		<div>
			{
				props.expenses.length === 0 ? (
					<p> no expenses </p>
				) : (
				props.expenses.map((expense, index) => {
					return <ExpenseListItem key={index} {...expense}/>
				})
				)
			}
		</div>
	);
}
const connectedExpenseList = connect ((state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	}
})(ExpenseList);

export default connectedExpenseList;