import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseForm} from '../../components/ExpenseForm';
import expenseData from '../fixtures/expenseData';
import moment from 'moment';

test('should render expense form correctly', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
});

test('should render expense form with expense form', () => {
	const wrapper = shallow(<ExpenseForm  expense={expenseData[0]}/>);
	expect(wrapper).toMatchSnapshot();
});

test('should render expense form with no description', () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {}
	});
	expect(wrapper.state('description').length).toEqual(0);
});

test('should set description on input change', () => {
	const wrapper = shallow(<ExpenseForm/>);
	const value = 'desc';
	wrapper.find('input').at(0).simulate('change', {
		target: {value}
	});
	expect(wrapper.state('description')).toBe(value);
});

test('should set note on input change', () => {
	const wrapper = shallow(<ExpenseForm/>);
	const value = 'test';
	wrapper.find('textarea').simulate('change', {
		target: {value}
	});
	expect(wrapper.state('note')).toBe(value);
});

test('should set amount on input change', () => {
	const wrapper = shallow(<ExpenseForm/>);
	const value = '13.25';
	
	wrapper.find('input').at(1).simulate('change', {
		target: {value}
	});
	expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount on input change as format is wrong', () => {
	const wrapper = shallow(<ExpenseForm/>);
	const value = '13.2564';
	
	wrapper.find('input').at(1).simulate('change', {
		target: {value}
	});
	expect(wrapper.state('amount')).toBe("");
});


test('should call onSubmit prop for valid form submission', () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(<ExpenseForm expense={expenseData[0]} onSubmit={onSubmitSpy}/>);
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {}
	});
	expect(wrapper.state('amountError')).toBe(undefined);
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		description: expenseData[0].description,
		amount: expenseData[0].amount,
		note: expenseData[0].note,
		createdAt: expenseData[0].createdAt
	});
});

test('should call onDateChange prop', () => {
	const now = moment();
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('SingleDatePicker').prop('onDateChange')(now);
	expect(wrapper.state('createdAt')).toEqual(now);
});

test('should call onFocusChange prop', () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('SingleDatePicker').prop('onFocusChange')({focused: true});
	expect(wrapper.state('calendarFocused')).toBe(true);
});