import React from 'react';
import {shallow} from 'enzyme';
import notFoundPage from '../../components/notFoundPage';

test('should render not found page', () => {
	const wrapper = shallow(<notFoundPage />);
	expect(wrapper).toMatchSnapshot();
});
