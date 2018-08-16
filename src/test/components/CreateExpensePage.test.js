import React from 'react';
import {shallow} from 'enzyme';
import {CreateExpensePage} from '../../components/CreateExpensePage';
import expData from '../fixtures/expenseData';

let startAddExpense, history, wrapper;

beforeEach(() => {
	startAddExpense = jest.fn();
	history = {push: jest.fn()};
	wrapper = shallow(<CreateExpensePage startAddExpense={startAddExpense} history={history} />);
});

test('should render CreateExpensePage correctly', () => {
	
	expect(wrapper).toMatchSnapshot();
});


test('should handle onSubmit', () => {
	wrapper.find('Connect(ExpenseForm)').prop('onSubmit')(expData[1]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startAddExpense).toHaveBeenLastCalledWith(expData[1]);
});

