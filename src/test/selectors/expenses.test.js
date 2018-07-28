import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenseData';
import moment from 'moment';




test('should find results by text filter', () => {
	const filters = {
	text: 'e',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
	}
	const result = selectExpenses(expenses,filters);
	expect(result).toEqual([expenses[2]])
});

test('should find results by start date', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: moment(0),
		endDate: undefined
	}
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[1],expenses[0]]);
});


test('should find results by end date', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: moment(0).add(2, 'days').valueOf()
	}
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[0],expenses[2]]);
});

test('should find sorted by date', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	}
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[1],expenses[0],expenses[2]]);
});

test('should find results sorted by amount', () => {
	const filters = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
});