import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// import "./about.css";

function Certifications() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Hii</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Sample Certification 1</Card.Title>
              <Card.Text>
                This is a sample certification card description.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Sample Certification 2</Card.Title>
              <Card.Text>
                This is another sample certification card description.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Sample Certification 1</Card.Title>
              <Card.Text>
                This is a sample certification card description.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Sample Certification 2</Card.Title>
              <Card.Text>
                This is another sample certification card description.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Sample Certification 1</Card.Title>
              <Card.Text>
                This is a sample certification card description.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Sample Certification 2</Card.Title>
              <Card.Text>
                This is another sample certification card description.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Certifications;
