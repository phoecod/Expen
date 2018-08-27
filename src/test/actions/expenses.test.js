import {startAddExpense, startRemoveExpense, setExpenses, startEditExpense} from '../../actions/expenses';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import expenses from '../fixtures/expenseData';
import database from '../../firebase/firebase';

const uid = 'testuid';
const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ auth: { uid } });
let expensesData = {};

beforeAll((done) => {
	expenses.forEach(({id, description, amount, note, createdAt}) => {
		expensesData[id] = {description, amount, note, createdAt};
	});
	
	database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

	/////////////////////////////////////////
	/*  REMOVE EXPENSE FUNCTIONS TESTING   */
	/////////////////////////////////////////

test('should remove expense from firebase', (done) => {

	const id = expensesData[1].id;
	store.dispatch(startRemoveExpense({id})).then(() => {
		const action = store.getActions();
		expect(action[0]).toEqual({
			type: 'REMOVE_EXPENSE',
			id
		})
		database.ref(`users/${uid}/expenses/${id}`).once('value')
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

	
	store.dispatch(startAddExpense(expensesData[1])).then(() => {

		const actions = store.getActions();
		// testing store action used and data stored in store
		expect(actions[1]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expensesData[1]
			}
		})

		//returns firebase database fetch promise to be tested
		return database.ref(`users/${uid}/expenses/${actions[1].expense.id}`).once('value')
	})		
	.then( (snapshot) => {
		expect(snapshot.val()).toEqual(expensesData[1]);
		done();
	});
});

test('should add expense default values to database and redux store', (done) => {
	const expDefaults = {description: '', amount: 0, createdAt: 0, note: ''};
	
	store.dispatch(startAddExpense({})).then(() => {
		const actions = store.getActions();
		// testing store action used and data stored in store
		expect(actions[2]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expDefaults
			}
		})

		//returns firebase database fetch promise to be tested
		return database.ref(`users/${uid}/expenses/${actions[2].expense.id}`).once('value')
	})		
	.then( (snapshot) => {
		expect(snapshot.val()).toEqual(expDefaults);
		done();
	});
});

	///////////////////////////////////////////
	////      UPDATE FUNCTION TESTING    //////
	///////////////////////////////////////////

test('Should setup edit expense action object', (done) => {

	const id = Object.keys(expensesData)[0];
	const updates = {description: 'cocaine', amount: 2000}
	store.dispatch(startEditExpense(id, updates)).then(() => {
		const actions = store.getActions();
		expect(actions[3]).toEqual({
			type: 'EDIT_EXPENSE',
			id,
			updates
		})
		done();
	})
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