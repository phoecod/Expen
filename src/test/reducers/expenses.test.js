import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenseData'
import moment from 'moment';

test('should set default state', () => {
	const state = expenseReducer(undefined, { type: '@@INIT'});
	expect(state).toEqual([]);
});

test('remove expense by ID', () => {

	const state = expenseReducer(expenses, {type: 'REMOVE_EXPENSE', id:expenses[0].id});
	expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove expense by invalid ID', () => {

	const state = expenseReducer(expenses, {type: 'REMOVE_EXPENSE', id:'10000'});
	expect(state).toEqual(expenses);
});


test('return edited expense', () => {

	const action = {
		type: 'EDIT_EXPENSE',
		id:expenses[0].id,
		updates: { 
			text:'YOLO'
		} 
	}
	const state = expenseReducer(expenses, action);
	expect(state[0].text).toEqual('YOLO');
});


test('return unedited expense if not found', () => {

	const action = {
		type: 'EDIT_EXPENSE',
		id:'-1',
		updates: {
			text:'YOLO'
		} 
	}
	const state = expenseReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('return added expense', () => {

	const action = {
		type: 'ADD_EXPENSE',
		expense: {
			amount: 20000,
			createdAt: moment(),
			note: '',
			text:'YOLO'
		} 
	}
	const state = expenseReducer(expenses, action);
	expenses[0].text = 'YOLO';
	expect(state).toEqual(expenses.concat(action.expense));
});

test('set expenses', () => {
	const action = {
		type: 'SET_EXPENSES',
		expenses: [expenses[1]]
	}
	const state = expenseReducer([expenses[1]], action);
	expect(state).toEqual([expenses[1]]);
});