import database from '../firebase/firebase';

export const addExpense = (expense) => ({
			type: 'ADD_EXPENSE',
			expense
		}
	);

export const startAddExpense = (expData) => {
	return (dispatch) => {

		if (Object.keys(expData).length === 0 && expData.constructor === Object) {
			expData = {
				description: '',
				note: '',
				amount: 0,
				createdAt: 0
			}
		}

		return database.ref('expenses').push(expData)
		.then((ref) => {
			dispatch(addExpense({
				id: ref.key,
				...expData
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
	id: id,
	updates: updates
	}	
);

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
