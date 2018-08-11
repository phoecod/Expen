import React from 'react';
import {shallow} from 'enzyme';
import ExpenseSummary from '../../components/ExpenseSummary';


test('display summary expense page', ()=> {
	const wrapper = shallow(<ExpenseSummary expensesCount={3} expensesTotal={200}/>);
	expect(wrapper).toMatchSnapshot();
});