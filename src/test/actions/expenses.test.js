import {addExpense, editExpense, removeExpense} from '../../actions/expenses';


test('Should setup remove expense action object', () => {
	const action = removeExpense({id: '123abc'});
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});


test('Should setup edit expense action object', () => {
	const action = editExpense('123abc', {name: 'bouga'});
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			name: 'bouga'
		}
	});
});

test('should add expense with given values', () => {
	const expenseData = {
		amount: 2000,
		description: 'yo mama',
		createdAt: 1000,
		note: "omak"
	}
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String)
		}
		});
});

test('should add expense with default values', () => {
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			amount: 0,
			description: "",
			note: "",
			createdAt: undefined
		}
		});
});