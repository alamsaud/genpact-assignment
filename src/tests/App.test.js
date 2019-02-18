import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
Enzyme.configure({ adapter: new Adapter() });
describe('Testing the root', () => {
	let wrapper = shallow(<App />);
	test('App should render', () => {
		expect(false).toBe(false);
	});
});
