import {startAddExpense, addExpense, editExpense, removeExpense, startRemoveExpense, setExpenses} from '../../actions/expenses';
import expenses from '../fixtures/expenseData';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';


const createMockStore = configureMockStore([thunk]);
const store = createMockStore({});
let expensesData = {};

beforeEach((done) => {
	
	expenses.forEach(({id, description, amount, note, createdAt}) => {
		expensesData[id] = {description, amount, note, createdAt};
		
	});
	database.ref('expenses').set(expensesData).then(() => done());
});

	/////////////////////////////////////////
	/*  REMOVE EXPENSE FUNCTIONS TESTING   */
	/////////////////////////////////////////

test('should remove expense from firebase', (done) => {
	const store = createMockStore({});
	const id = expensesData[1].id;
	store.dispatch(startRemoveExpense({id})).then(() => {
		const action = store.getActions();
		expect(action[0]).toEqual({
			type: 'REMOVE_EXPENSE',
			id
		})
		database.ref(`expenses/${id}`).once('value')
		.then((snap) => {
			expect(snap.val()).toBeFalsy();
			done();
		})
	});
});

////////////////////////////////////////////////
/*        ADD EXPENSE FUNCTIONS TESTING       */
////////////////////////////////////////////////

test('should add expense to database and redux store', (done) => {

	const expData = {
		description: 'cigars',
		amount: 1000,
		createdAt: 100000,
		note: 'cubanos'
	}

	const actions = store.getActions();

	store.dispatch(startAddExpense(expData)).then(() => {

		// testing store action used and data stored in store
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expData
			}
		})

		//returns firebase database fetch promise to be tested
		return database.ref(`expenses/${actions[0].expense.id}`).once('value')
	})		
	.then( (snapshot) => {
		expect(snapshot.val()).toEqual(expData);
		done();
	});
});

test('should add expense by default values to database and redux store', (done) => {
	const expDefaults = {description: '', amount: 0, createdAt: 0, note: ''};
	const actions = store.getActions();
	store.dispatch(startAddExpense({})).then(() => {

		// testing store action used and data stored in store
		expect(actions[1]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expDefaults
			}
		})

		//returns firebase database fetch promise to be tested
		return database.ref(`expenses/${actions[0].expense.id}`).once('value')
	})		
	.then( (snapshot) => {
		expect(snapshot.val()).toEqual(expDefaults);
		done();
	});
});

test('should add expense with given values', () => {

	const action = addExpense(expenses[1]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[1]
		});
});

	///////////////////////////////////////////
	////      UPDATE FUNCTION TESTING    //////
	///////////////////////////////////////////

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

	////////////////////////////////
	// FETCH EXPENSES TEST       //
	//////////////////////////////

test('should setup set expense action object with data', () => {
	const action = setExpenses(expenses);
	expect(action).toEqual({
		type: 'SET_EXPENSE',
		expenses
	});
})