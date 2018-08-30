import database from '../firebase/firebase';
import { doesNotReject } from 'assert';


export const startAddExpense = (expense) => {
	return (dispatch, getState) => {

		const uid = getState().auth.uid;

		if (Object.keys(expense).length === 0 && expense.constructor === Object) {
			expense = {
				description: '',
				note: '',
				amount: 0,
				createdAt: 0
			}
		}
		return database.ref(`users/${uid}/expenses`).push(expense)
		.then((ref) => {
			dispatch(addExpense({
				id: ref.key,
				...expense
			}));
		}).catch((err) => {
			console.log(err)
		});
	}
}

export const addExpense = (expense) => ({
	type: 'ADD_EXPENSE',
	expense
});

export const startEditExpense = (id, updates) => {

	return (dispatch, getState) => {

		const uid = getState().auth.uid;
		return database.ref(`users/${uid}/expenses/${id}`).update(updates)
		.then(() => {
			dispatch(editExpense(id,updates));
		}).catch((err) => {
			console.log(err)
		});
	}
}

export const editExpense = (id, updates) => (
	{
		type: 'EDIT_EXPENSE',
		id,
		updates
	}	
);

export const startSetExpenses = () => {

	return (dispatch, getState) => {
		const uid = getState().auth.uid;

		return database.ref(`users/${uid}/expenses`).once('value')
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

export const setExpenses = (expenses) => ({
	type: 'SET_EXPENSE',
	expenses
});

export const startRemoveExpense = (id) => {

	return (dispatch,getState) => {
		const uid = getState().auth.uid;
		return database.ref(`users/${uid}/expenses/${id.id}`).remove()
		.then((res) => {
			dispatch(removeExpense(id));
		})
	}
}

export const removeExpense = ({id = undefined}) => (
	{
		type: 'REMOVE_EXPENSE',
		id: id
	}
);
