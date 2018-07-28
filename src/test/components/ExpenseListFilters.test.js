import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';


let setTextFilter, setSortFilter, setStartDate, setEndDate, wrapper;


beforeEach (() => {
	setTextFilter = jest.fn();
	setSortFilter = jest.fn();
	setStartDate = jest.fn();
	setEndDate = jest.fn();
	wrapper = shallow(<ExpenseListFilters
						filters={filters}
						sortByFilter={setSortFilter}
						setStartDate={setStartDate}
						setEndDate={setStartDate}
						setTextFilter={setTextFilter} />
	);

});

test('should render ExpenseListFilters', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with altFilters', () => {
	wrapper.setProps({
		filters: altFilters
	})
	expect(wrapper).toMatchSnapshot();
});

test('should handle text changes', () => {
	const value = 'bill'
	wrapper.find('input').simulate('change', () => {
		target: {value}
	})
	expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
  const value = 'date';
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByFilter).toHaveBeenCalled();
});
