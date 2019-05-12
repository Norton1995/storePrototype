import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App renders correctly', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render correctly in "debug" mode', () => {
        const component = shallow(<App debug />);

        expect(component).toMatchSnapshot();
    });

    it('should render correctly with no props', () => {
        const component = shallow(<App/>);
        expect(component).toMatchSnapshot();
    });
});