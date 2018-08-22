import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {setTextFilter, setSortByFilter, setStartDateFilter, setEndDateFilter} from './actions/filters';
import getExpense from './selectors/expenses';
import moment from 'moment';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'; 
import './firebase/firebase';

const store = configureStore;
store.subscribe(() => {
	const state = store.getState();
});

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
)


ReactDOM.render("Loading....", document.getElementById('app')); 

store.dispatch(startSetExpenses()).then(() => {
	ReactDOM.render(jsx, document.getElementById('app'));
  });