import React from 'react';
import {shallow} from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render Login Page', () => {
	const startLogin = jest.fn();
	const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
	expect(wrapper).toMatchSnapshot();
});

test('should call login in function', () => {
	const startLogin = jest.fn();
	const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
	wrapper.find('button').simulate('click');
	expect(startLogin).toHaveBeenCalled();
});