import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expensesTotal';
import numeral from 'numeral';

export const ExpenseSummary = ({expensesCount, expensesTotal}) => {

	const expenseWord = expensesCount > 1 ? 'expenses' : 'expense';
	const totalExpensesFormat = numeral(expensesTotal).format('$0.00');
	return (
		<div>
				{
					<h1> 
						Viewing {expensesCount} {expenseWord} totalling {totalExpensesFormat}
					</h1>
				}
		</div>
	);
}

const mapStateToProps = (state) => {
	const visibleExpenses = selectExpenses(state.expenses, state.filters);
	return {
		expensesTotal: selectExpensesTotal(visibleExpenses),
		expensesCount: visibleExpenses.length
	}
}

export default connect(mapStateToProps)(ExpenseSummary);
