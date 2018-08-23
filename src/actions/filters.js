export const editExpense = (id, updates) => (
	{
	type: 'EDIT_EXPENSE',
	id: id,
	updates: updates
	}	
);

export const setTextFilter = (text= '') => (
	{	
		type: 'SET_TEXT',
		text: text
	}
);

export const setSortByFilter = (sortBy= '') => (
	{	
		type: 'SET_SORT_BY',
		sortBy: sortBy
	}
);

export const setStartDateFilter = (startDate= undefined) => (
	{	
		type: 'SET_START_DATE',
		startDate: startDate
	}
);

export const setEndDateFilter = (endDate= undefined) => (
	{	
		type: 'SET_END_DATE',
		endDate: endDate
	}
);