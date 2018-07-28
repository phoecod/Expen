import uuid from 'uuid';

export const addExpense = ({ description = '', note = '', amount = 0, createdAt = undefined } = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description: description,
		note: note,
		amount: amount,
		createdAt: createdAt
	}
});

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