//Functionally, this page uses no unique code that does not appear in "Home.jsx"
//The comments in that file should sufficiently document functionality
import React, { Component } from 'react';
import '../styles/App.css';
import { Container, Row, Col, Jumbotron, Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class FAQ extends Component {
    render() {
        return (
          <div>
            <div>
                <Jumbotron>
                  <h1 className="display-3 testing">Customer Support Section</h1>
                    <p className="lead">Makes it easy for customers to get answers to their queries, reducing strain on the customer support team.</p>
                    <p className="lead">If these FAQ's do not answer your question, contact the customer team at <b>0113 123 4567</b> or contact the customer support chat service</p>
                  <hr className="my-2" />
                    <Button className="secondary" href="https://www.messenger.com/t/1548605958727322">Customer Support</Button>
                    <p className="lead">
                  </p>
                </Jumbotron>
            </div>
            <div class="container">
            <Container>
              <Row>
                <Col>
                  <div>
                    <Card>
                      <CardBody>
                          <h3> <CardTitle>FAQ #1</CardTitle></h3>
                        <CardText>
                            Filler text here answering question
                        </CardText>
                          <h3><CardSubtitle>FAQ #2</CardSubtitle></h3>
                          <CardText>
                              Filler text here answering question
                          </CardText>
                          <h3><CardSubtitle><h3>FAQ #3</h3></CardSubtitle></h3>
                          <CardText>
                              Filler text here answering question
                          </CardText>
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

export default FAQ;
