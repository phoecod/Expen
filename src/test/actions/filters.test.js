
import moment from 'moment';
import {setTextFilter, setSortByFilter, setStartDateFilter, setEndDateFilter} from '../../actions/filters';

test('should generate set start date action object', ()=> {
	const startDate = moment();
	const action = setStartDateFilter(startDate);
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate
	})
});

test('should generate set end date action object', ()=> {
	const endDate = moment();
	const action = setEndDateFilter(endDate);
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate
	})
});

test('should set sort by filter to date', ()=> {
	const action = setSortByFilter("Date");
	expect(action).toEqual({
		type: 'SET_SORT_BY',
		sortBy: "Date"
	})
});

test('should set sort by filter to amount', ()=> {
	const action = setSortByFilter("Amount");
	expect(action).toEqual({
		type: 'SET_SORT_BY',
		sortBy: "Amount"
	})
});

test('should generate set text action object', ()=> {
	const text = "Rent"
	const action = setTextFilter(text);
	expect(action).toEqual({
		type: 'SET_TEXT',
		text
	})
});

test('should generate set text action object with default value', ()=> {
	const action = setTextFilter();
	expect(action).toEqual({
		type: 'SET_TEXT',
		text: ""
	})
});