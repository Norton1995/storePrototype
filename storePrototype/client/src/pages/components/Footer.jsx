import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
//Import font awesome library to display Stripe logo
import {Icon} from 'react-fa';

import '../../styles/App.css';
class Footer extends Component {
    render() {
        return (
          <div className="footer text-center">
            <div>
            <Container>
        <Row>
            <Col className="col-md-4">
                <Icon name="facebook fa-4x" />
            </Col>
            <Col className="col-md-4">
                <p>
              <Icon name="twitter fa-4x" />
                </p>
            </Col>
            <Col className="col-md-4">
                <Icon name="instagram fa-4x" />
            </Col>
        </Row>
        </Container>
            </div>
          </div>
          );
        }
      }

export default Footer;
