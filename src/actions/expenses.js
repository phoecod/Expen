import database from '../firebase/firebase';

export const addExpense = (expense) => ({
			type: 'ADD_EXPENSE',
			expense
		}
	);

export const startAddExpense = (expData) => {
	return (dispatch) => {
		console.log("/////////Before////////////");
		console.log(expData);
		console.log("/////////////////////");

		if (Object.keys(expData).length === 0 && expData.constructor === Object) {
			console.log("in");
			expData = {
				description: '',
				note: '',
				amount: 0,
				createdAt: 0
			}
		}

		console.log("//////////After///////////");
		console.log(expData);
		console.log("/////////////////////");
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