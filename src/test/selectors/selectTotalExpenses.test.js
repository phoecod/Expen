import selectExpensesTotal from '../../selectors/expensesTotal';
import expenses from '../fixtures/expenseData';
import moment from 'moment';

test('should return 0 total and count if no expenses are given',() => {
	const res = selectExpensesTotal([]);
	expect(res).toEqual(0);
});

test('should add a single expense', () => {

	const res = selectExpensesTotal([expenses[0]]);
	expect(res).toEqual(195);
});

test('should add several expense', () => {
	const res = selectExpensesTotal(expenses);
	expect(res).toBe(5205);
});