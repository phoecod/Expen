import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expData from '../fixtures/expenseData';


let editExpense, history, wrapper;

beforeEach(() => {
	editExpense = jest.fn();
	history = {push: jest.fn()};
	wrapper = shallow(<EditExpensePage editExpense={editExpense} history={history} expense={expData[1]} />);
});

test('should render EditExpensePage correctly', () => {
	
	expect(wrapper).toMatchSnapshot();
});


test('should handle edit onSubmit', () => {
	wrapper.find('Connect(ExpenseForm)').prop('onSubmit')(expData[1]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(editExpense).toHaveBeenLastCalledWith(expData[1].id, expData[1]);
});