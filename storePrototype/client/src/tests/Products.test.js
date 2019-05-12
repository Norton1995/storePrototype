import React from 'react';
import ReactDOM from 'react-dom';
import Products from '../pages/Products';
import {configure, shallow} from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";

configure({ adapter: new Adapter() });

describe('Home renders correctly', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Products />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Page should match snapshot', () => {
        const component = shallow(<Products />);
        expect(component).toMatchSnapshot();
    });
});