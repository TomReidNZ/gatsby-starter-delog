import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import "./ImageHero.scss";

const ImageHero = ({ title, subtitle}) => (
  <Jumbotron>
    <Container>
      <Row>
      <Col xs="12" md="10">
          <h1 className="hi-im-tom">A full-service technology agency</h1>
          <h2 className="hi-im-tom">Artificial intelligence specialists</h2>
          <p className="hi-im-tom-description">{subtitle}</p>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default ImageHero;
