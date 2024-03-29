import React from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

export default class ColorDropdown extends React.Component {
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
                    Select Colour
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Select Item Colour:</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Beige</DropdownItem>
                    <DropdownItem>Black</DropdownItem>
                    <DropdownItem>Brown</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}