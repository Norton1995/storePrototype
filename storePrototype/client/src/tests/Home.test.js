import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/Home';
import {configure, shallow} from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";

configure({ adapter: new Adapter() });

describe('Home renders correctly', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Home />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Page should match snapshot', () => {
        const component = shallow(<Home/>);
        expect(component).toMatchSnapshot();
    });
});