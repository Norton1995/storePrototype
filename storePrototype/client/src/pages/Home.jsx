import React, { Component } from 'react';
import '../styles/App.css';
import { Container, Row, Col, Jumbotron, Card, CardHeader, CardBody, Button, } from 'reactstrap';
import { ReactComponent as Placeholder } from './placeholder.svg';


class Home extends Component {
    //Render page layout within component
    render() {
        return (
            <div>
                <div>
                    {/*Individual JSX elements must be contained within a closing div*/}
                    <Jumbotron className="main" dark>
                        <h1 className="display-3">Store Prototype</h1>
                        <p className="lead">This puts categories of products front and centre on the homepage.</p>
                        <hr className="my-2" />
                        <p className="lead">
                            <Button color="primary" href="/about">Learn more</Button>
                        </p>
                    </Jumbotron>
                </div>
                <div className="container">
                    <Container>
                        {/*Bootstrap Grid system is used to ensure the page is ordered in a way that works for all screen sizes*/}
                        <Row>
                            <Col>
                                <div className="text-center">
                                    <Card>
                                        <CardHeader tag="h3">Product Category</CardHeader>
                                        <CardBody>
                                            <br />
                                            <Placeholder/>
                                            <hr />
                                            <Button color="primary" href="/products">More like this</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                            <Col>
                                <div className="text-center">
                                    <Card>
                                        <CardHeader tag="h3">Product Category</CardHeader>
                                        <CardBody>
                                            <br />
                                            <Placeholder/>
                                            <hr />
                                            <Button color="primary" href="/products">More like this</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                            <Col>
                                <div className="text-center">
                                    <Card>
                                        <CardHeader tag="h3">Product Category</CardHeader>
                                        <CardBody>
                                            <br />
                                            <Placeholder/>
                                            <hr />
                                            <Button color="primary" href="/products">More like this</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="text-center">
                                    <Card>
                                        <CardHeader tag="h3">Product Category</CardHeader>
                                        <CardBody>
                                            <br />
                                            <Placeholder/>
                                            <hr />
                                            <Button color="primary" href="/products">More like this</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                            <Col>
                                <div className="text-center">
                                    <Card>
                                        <CardHeader tag="h3">Product Category</CardHeader>
                                        <CardBody>
                                            <br />
                                            <Placeholder/>
                                            <hr />
                                            <Button color="primary" href="/products">More like this</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                            <Col>
                                <div className="text-center">
                                    <Card>
                                        <CardHeader tag="h3">Product Category</CardHeader>
                                        <CardBody>
                                            <br />
                                            <Placeholder/>
                                            <hr />
                                            <Button color="primary" href="/products">More like this</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Home;

