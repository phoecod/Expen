import React from 'react';
import {shallow} from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem';
import expenseData from '../fixtures/expenseData';


let wrapper,removeExpense;

beforeEach(() => {
	wrapper = shallow(<ExpenseListItem {...expenseData[0]}/>);

	removeExpense = jest.fn();
})
test('Should display a single list item', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should process delete expense', () => {
	wrapper.find('button').at(0).simulate('click');
	expect(removeExpense).toHaveBeenLastCalledWith(expenseData[1].id);
});