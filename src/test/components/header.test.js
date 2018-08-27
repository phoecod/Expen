import { shallow } from 'enzyme';
import React from 'react';
import {Header} from '../../components/header';

test('should render Header correctly', () => {
	const wrapper = shallow(<Header startLogout={() => {}}/>);
	expect(wrapper).toMatchSnapshot();
});

test('should call logout function', () => {
	const startLogout = jest.fn();
	const wrapper = shallow(<Header startLogout={startLogout}/>);
	wrapper.find('button').simulate('click');
	expect(startLogout).toHaveBeenCalled();
});