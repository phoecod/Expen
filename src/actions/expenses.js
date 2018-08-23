import database from '../firebase/firebase';
import { doesNotReject } from 'assert';

export const addExpense = (expense) => ({
			type: 'ADD_EXPENSE',
			expense
		}
	);

export const startAddExpense = (expense) => {
	return (dispatch) => {

		if (Object.keys(expense).length === 0 && expense.constructor === Object) {
			expense = {
				description: '',
				note: '',
				amount: 0,
				createdAt: 0
			}
		}
		return database.ref('expenses').push(expense)
		.then((ref) => {
			dispatch(addExpense({
				id: ref.key,
				...expense
			}));
		})
	}
}

export const removeExpense = ({id = undefined}) => (
	{
		type: 'REMOVE_EXPENSE',
		id: id
	}
);

export const editExpense = (id, updates) => (
	{
		type: 'EDIT_EXPENSE',
		id,
		updates
	}	
);

export const startEditExpense = (id, updates) => {

	return (dispatch) => {
		return database.ref(`expenses/${id}`).update(updates)
		.then(() => {
			dispatch(editExpense(id,updates));
		});
	}
}

export const setExpenses = (expenses) => ({
	type: 'SET_EXPENSE',
	expenses
});

export const startSetExpenses = () => {

	return (dispatch) => {
		return database.ref('expenses').once('value')
		.then( (snapshot) => {
			let expenses = [];
			snapshot.forEach((child) => {
				expenses.push({
					id: child.key,
					...child.val()
				});
			});
			dispatch(setExpenses(expenses));
		});
	}
}

export const startRemoveExpense = (id) => {

	return (dispatch) => {
		return database.ref(`expenses/${id.id}`).remove()
		.then((res) => {
			dispatch(removeExpense(id));
		})
	}
}
