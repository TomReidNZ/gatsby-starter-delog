import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Layout from "../layout";


class NotFound extends Component {
  render() {

    return (
      <Layout>
        <Container id="about-main">
          <h4>
            Page not found :(
          </h4>
        </Container>
      </Layout>
    );
  }
}

export default NotFound;
