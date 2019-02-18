import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../pages/Home';
Enzyme.configure({ adapter: new Adapter() });
describe('Home Page', () => {
	let Homepage = shallow(<Home />);
	// it('renders the `Flashcard Pro` title', () => {
	// 	expect(app.find('h2').text()).toEqual('Flashcard Pro');
	// });
 
});
