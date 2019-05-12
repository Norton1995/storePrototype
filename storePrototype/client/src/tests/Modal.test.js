import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../pages/InfoPage';
import {configure, shallow} from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";

configure({ adapter: new Adapter() });

describe('Info renders correctly', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Modal />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Page should match snapshot', () => {
        const component = shallow(<Modal />);
        expect(component).toMatchSnapshot();
    });
});