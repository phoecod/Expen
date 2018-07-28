import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter, setSortByFilter, setStartDateFilter, setEndDateFilter} from './actions/filters';
import getExpense from './selectors/expenses';
import moment from 'moment';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore;
store.subscribe(() => {
	const state = store.getState();
	console.log(state);
});

const expOne = {
	amount: 10000,
	description: 'Gas Bill',
	note: 'how clearer can I be',
	createdAt: moment().set({'year': 2018, 'month': 5, 'date': 4})
}

const expTwo = {
	amount: 1200,
	description: 'phone Bill',
	note: 'Hello?',
	createdAt: moment().set({'year': 2018, 'month': 5, 'date': 24})
}

const expThree = {
	amount: 12000,
	description: 'shoes',
	createdAt: moment().set({'year': 2010, 'month': 6, 'date': 26})
}


store.dispatch(addExpense(expOne));
store.dispatch(addExpense(expTwo));
store.dispatch(addExpense(expThree));

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
)
ReactDOM.render(jsx, document.getElementById('app')); 