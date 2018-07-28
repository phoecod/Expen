import {createStore, combineReducers } from 'redux';
import uuid from 'uuid';


const addExpense = ({ description = '', note = '', amount = 0, createdAt = undefined } = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description: description,
		note: note,
		amount: amount,
		createdAt: createdAt
	}
});

const removeExpense = ({id = undefined}) => (
	{
		type: 'REMOVE_EXPENSE',
		id: id
	}
);

const editExpense = (id, updates) => (
	{
	type: 'EDIT_EXPENSE',
	id: id,
	updates: updates
	}	
);

const setTextFilter = (text= '') => (
	{	
		type: 'SET_TEXT',
		text: text
	}
);

const setSortByFilter = (sortBy= '') => (
	{	
		type: 'SET_SORT_BY',
		sortBy: sortBy
	}
);

const setStartDateFilter = (startDate= undefined) => (
	{	
		type: 'SET_START_DATE',
		startDate: startDate
	}
);

const setEndDateFilter = (endDate= undefined) => (
	{	
		type: 'SET_END_DATE',
		endDate: endDate
	}
);
// Reducers

const defaultState = {
	expenses: [],
	filters: {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}
};

const expensesReducer = (state = defaultState.expenses, action) => {

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
		default:
			return state;
	}
}

const filterReducer = (state = defaultState.filters, action) => {
	switch (action.type) {
		case 'SET_TEXT':
			return {
				...state,
				text: action.text
			}
		case 'SET_SORT_BY':
			return {
				...state,
				sortBy: action.sortBy
			}
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate
			}
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate
			} 
		default:
			return state;
	}
}

const getExpenses = (expenses, {text, sortBy, startDate, endDate }) => {
	return expenses.filter ((expense) => {

	
	const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
	const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
	const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

	return startDateMatch && endDateMatch;
	}).sort((a, b) => {
		if (sortBy ==='date') {
			return  b.createdAt - a.createdAt;
		} else if (sortBy ==='amount') {
			return b.amount - a.amount;
		}
	});
}

const store = createStore (
	combineReducers ({
		expenses: expensesReducer,
		filters: filterReducer
	})
);

store.subscribe(() => {
	const state = store.getState();
	console.log(state);
	console.log(getExpenses(state.expenses, state.filters));
});

const one = store.dispatch(addExpense({
		amount: 100,
		createdAt: 140,
		description: 'rent'
	})
);

const two = store.dispatch(addExpense({
		description: 'Bagel',
		createdAt: 125
	})
);

const three = store.dispatch(addExpense({
		description: 'dinner',
		amount: 20,
		createdAt: 149
	})
);
// store.dispatch(removeExpense({id: one.expense.id} = {}));
// store.dispatch(editExpense (two.expense.id, {amount: 500}));
store.dispatch(setTextFilter ('re'));
store.dispatch(setSortByFilter('date'));
// store.dispatch(setSortByFilter('amount'));
store.dispatch(setStartDateFilter(125));
// store.dispatch(setStartDateFilter(100));
store.dispatch(setEndDateFilter(150));
