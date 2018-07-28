import React from 'react';
import {shallow} from 'enzyme';
import {CreateExpensePage} from '../../components/CreateExpensePage';
import expData from '../fixtures/expenseData';

let addExpense, history, wrapper;

beforeEach(() => {
	addExpense = jest.fn();
	history = {push: jest.fn()};
	wrapper = shallow(<CreateExpensePage addExpense={addExpense} history={history} />);
});

test('should render CreateExpensePage correctly', () => {
	
	expect(wrapper).toMatchSnapshot();
});


test('should handle onSubmit', () => {
	wrapper.find('Connect(ExpenseForm)').prop('onSubmit')(expData[1]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(addExpense).toHaveBeenLastCalledWith(expData[1]);
});

