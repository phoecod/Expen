import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expensesTotal';
import {NavLink} from 'react-router-dom';
import numeral from 'numeral';

export const ExpenseSummary = ({expensesCount, expensesTotal}) => {

	const expenseWord = expensesCount > 1 ? 'expenses' : 'expense';
	const totalExpensesFormat = numeral(expensesTotal).format('$0.00');
	return (
		<div className="page-header">
			<div className="frame">
				{
					<h3 className="header-title"> 
						Viewing <span className="variable-text">{expensesCount}</span> {expenseWord} totalling <span className="variable-text">{totalExpensesFormat}</span>
					</h3>
					
				}
				<NavLink to="/create" className="summary-btn btn">Add Expense</NavLink>
			</div>
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
