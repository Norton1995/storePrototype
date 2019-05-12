//The products page pulls data from the server as well as utilises the Checkout component
//Comments in "client/logic/Checkout.js" explain the functionality of this component in detail

import React, { Component } from 'react';
import axios from 'axios';
import Checkout from '../logic/Checkout';
import Modal from './components/Modal';
import { Button, Container, Col, Row, Jumbotron, Card, CardHeader, CardBody, } from 'reactstrap';
import { ReactComponent as Placeholder } from './placeholder.svg';


//Variables to parse the data recieved from server later
let productData
let parsedData
let skuData
let parsedSku

class Products extends Component {
  //Creates state variables, these can be set based on different conditions
  state = {name : null, description : null, price : null};

  componentDidMount() {
    //When Products component mounts, use axios to get product data
    axios.get('http://localhost:8080/products')
      .then(response => {
        //Parse product data, this functionality is intentionally left in the server and the client side
        //To demonstrate how it would work on both sides, giving the user the freedom to choose either
        //If a decision is made to use a different backend with the framework
        productData = JSON.stringify(response);
        parsedData = JSON.parse(productData);
        //Set product name and description state variables with the values from the JSON returned from endpoint
        this.setState({name : parsedData.data.parsedData.data[0].name})
        this.setState({description : parsedData.data.parsedData.data[0].description})
      })
      .catch(error => {
        console.log('Error getting Product data', error);
      });
      //Get sku data and process it into state, as done with product data
      axios.get('http://localhost:8080/skus')
        .then(response => {
          skuData = JSON.stringify(response);
          parsedSku = JSON.parse(skuData);
          this.setState({price : parsedSku.data.parsedSku.data[0].price})
        })
        .catch(error => {
          console.log('Error getting Sku data', error);
        });
    }

    render(productData, parsedData) {
          return (
              <div>
                  <div>
                      {/*Individual JSX elements must be contained within a closing div*/}
                      <Jumbotron className="main" dark>
                          <h1 className="display-3">Products page:</h1>
                          <p className="lead">Checkout button available for quick purchasing or detailed product info available at a click.</p>
                          <hr className="my-2" />
                          <p className="lead">
                              {/*Colours such as primary used here map to the SCSS variables
                      see more in the README and "client/styles/app.scss"*/}
                              <Button color="primary" href="/about">Learn more</Button>
                          </p>
                      </Jumbotron>
                  </div>
                  <div className="container">
                      <Container>
                          {/*Grid system is used to ensure the page is ordered in a way that works for all screen sizes*/}
                          <Row>
                              <Col>
                                  <div className="text-center">
                                      {/*Card components are used to display page content*/}
                                      <Card>
                                          <CardHeader tag="h3">Example Product</CardHeader>
                                          <CardBody>
                                              <br />
                                              <Placeholder/>
                                              <hr />
                                              <Row>
                                                  <Col className="col-md-6">
                                                      <Button color="danger">
                                                          {/*Utilise the state variables, set the product name, desc and price to state (just for demonstration purposes, would need refactoring to iterate through products in full product */}
                                                          <Checkout
                                                              name={this.state.name}
                                                              description={this.state.description}
                                                              amount={this.state.price}/>
                                                      </Button>
                                                  </Col>
                                                  <Col className="col-md-6">
                                                      <Modal> </Modal>
                                                  </Col>
                                              </Row>
                                          </CardBody>
                                      </Card>
                                  </div>
                              </Col>
                              <Col>
                                  <div className="text-center">
                                      {/*Card components are used to display page content*/}
                                      <Card>
                                          <CardHeader tag="h3">Example Product</CardHeader>
                                          <CardBody>
                                              <br />
                                              <Placeholder/>
                                              <hr />
                                              <Row>
                                                  <Col className="col-md-6">
                                                      <Button color="danger">
                                                          {/*Utilise the state variables, set the product name, desc and price to state */}
                                                          <Checkout
                                                              name={this.state.name}
                                                              description={this.state.description}
                                                              amount={this.state.price}/>
                                                      </Button>
                                                  </Col>
                                                  <Col className="col-md-6">
                                                      <Modal> </Modal>
                                                  </Col>
                                              </Row>
                                          </CardBody>
                                      </Card>
                                  </div>
                              </Col>
                              <Col>
                                  <div className="text-center">
                                      {/*Card components are used to display page content*/}
                                      <Card>
                                          <CardHeader tag="h3">Example Product</CardHeader>
                                          <CardBody>
                                              <br />
                                              <Placeholder/>
                                              <hr />
                                              <Row>
                                                  <Col className="col-md-6">
                                                      <Button color="danger">
                                                          {/*Utilise the state variables, set the product name, desc and price to state */}
                                                          <Checkout
                                                              name={this.state.name}
                                                              description={this.state.description}
                                                              amount={this.state.price}/>
                                                      </Button>
                                                  </Col>
                                                  <Col className="col-md-6">
                                                      <Modal> </Modal>
                                                  </Col>
                                              </Row>
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

export default Products;
