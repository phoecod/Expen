import filterReducer from '../../reducers/filters';
import expenses from '../fixtures/expenseData';
import moment from 'moment';

test('return default state', () => {
	const state = filterReducer(undefined, { type: '@@INIT'});
	expect(state).toEqual( {
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	})
});

test('should set sortBy to amount', () => {
	const state = filterReducer(undefined, { type: 'SET_SORT_BY', sortBy:'amount'});
	expect(state).toEqual( {
		text: '',
		sortBy: 'amount',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	})
});

test('should set sortBy to date', () => {
	const state = filterReducer(undefined, { type: 'SET_SORT_BY', sortBy:'date'});
	expect(state).toEqual( {
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	})
});

test('should set text filter', () => {
	const state = filterReducer(undefined, { type: 'SET_TEXT', text:'rent'});
	expect(state).toEqual( {
		text: 'rent',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	})
}); 

test('should set start date', () => {
	const state = filterReducer(undefined, { type: 'SET_START_DATE', startDate:moment().add(2, 'days') });
	expect(state).toEqual( {
		text: '',
		sortBy: 'date',
		startDate: moment().add(2, 'days'),
		endDate: moment().endOf('month')
	})
}); 

test('should set end date', () => {
	const state = filterReducer(undefined, { type: 'SET_END_DATE', endDate:moment().add(2, 'weeks') });
	expect(state).toEqual( {
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().add(2, 'weeks')
	})
}); 