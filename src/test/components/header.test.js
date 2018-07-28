import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../components/header';

test('should render Header correctly', () => {
	const wrapper = shallow(<Header />);
	expect(wrapper).toMatchSnapshot();
});