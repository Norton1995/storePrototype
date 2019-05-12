import React from 'react';
import ReactDOM from 'react-dom';
import InfoPage from '../pages/InfoPage';
import {configure, shallow} from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";

configure({ adapter: new Adapter() });

describe('Info renders correctly', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<InfoPage />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Page should match snapshot', () => {
        const component = shallow(<InfoPage/>);
        expect(component).toMatchSnapshot();
    });
});