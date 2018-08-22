const defaultState = {
	expenses: [],
	filters: {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}
};

export default (state = defaultState.expenses, action) => {

	switch (action.type) {
		case 'ADD_EXPENSE':
			return state.concat(action.expense);
		case 'REMOVE_EXPENSE':
			return state.filter(({id}) => {
				return id !== action.id
			});
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id === action.id) {
					return {
						...expense, 
						...action.updates
					}
				} else {
					return expense;
				}
			});
		case 'SET_EXPENSE':
			return action.expenses;
		default:
			return state;
	}
}