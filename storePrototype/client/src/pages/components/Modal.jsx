/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row} from 'reactstrap';
import Checkout from '../../logic/Checkout';
import SizeDropdown from './SizeDropdown.jsx'
import ColorDropdown from './ColorDropdown.jsx'
import {Icon} from 'react-fa';


class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal

        }));
    }

    render() {
        return (
            <div>
                <Button color="info" onClick={this.toggle}>More info...</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Product Name</ModalHeader>
                    <ModalBody>
                        <h5>This is where detailed product data is shown, examples of data included:</h5>
                        <p>Size:</p>
                        <SizeDropdown />
                        <p>Colour:</p>
                        <ColorDropdown />
                        <p>Description:</p>
                        <p>Related products:</p>
                        <p>Remaining items in stock: <b>12</b></p>
                        <Row className="text-center">
                            <Col className="col-md-4">
                                <Icon name="facebook fa-2x" />
                            </Col>
                            <Col className="col-md-4">
                                <p>
                                    <Icon name="twitter fa-2x" />
                                </p>
                            </Col>
                            <Col className="col-md-4">
                                <Icon name="instagram fa-2x" />
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Row>
                        <Button color="danger">
                            {/*Utilise the state variables, set the product name, desc and price to state */}
                            <Checkout
                                name={"Example Product Checkout"}
                                description={"Description goes here"}
                                amount={200}/>
                        </Button>
                        <Button color="secondary" onClick={this.toggle}>close</Button>
                        </Row>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;