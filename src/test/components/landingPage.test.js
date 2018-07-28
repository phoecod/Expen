import React from 'react';
import {shallow} from 'enzyme';
import landingPage from '../../components/landingPage';

test('should render expense landing page', () => {
	const wrapper = shallow(<landingPage />);
	expect(wrapper).toMatchSnapshot();
});