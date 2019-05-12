import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class SizeDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    Select size
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>UK Size 5</DropdownItem>
                    <DropdownItem>UK Size 6</DropdownItem>
                    <DropdownItem>UK Size 7</DropdownItem>
                    <DropdownItem>UK Size 8</DropdownItem>
                    <DropdownItem>UK Size 9</DropdownItem>
                    <DropdownItem>UK Size 10</DropdownItem>
                    <DropdownItem>UK Size 11</DropdownItem>
                    <DropdownItem>UK Size 12</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}
