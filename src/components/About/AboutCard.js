import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCards() {
  return (
    <Row className="justify-content-center">
      {/* Card 1 - Web Development */}
      <Col md={4} className="mb-3">
        <Card className="quote-card-view">
          <Card.Body>
            <Card.Title>Web Development</Card.Title>
            <Card.Text>
              As a developer, I specialize in crafting dynamic and responsive web applications using technologies like React.js and Node.js. I enjoy exploring tools such as Visual Studio Code, Git, and Webpack to enhance development workflows.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 2 - UI/UX */}
      <Col md={4} className="mb-3">
        <Card className="quote-card-view">
          <Card.Body>
            <Card.Title>UI/UX Design</Card.Title>
            <Card.Text>
              In the realm of UI/UX, I bring designs to life with tools like Figma and Adobe XD. Keeping user experience at the forefront, I aim to create seamless interactions using technologies such as HTML, CSS, and JavaScript.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 3 - App Development */}
      <Col md={4} className="mb-3">
        <Card className="quote-card-view">
          <Card.Body>
            <Card.Title>App Development</Card.Title>
            <Card.Text>
              With a passion for mobile app development, I specialize in crafting Android and iOS applications using Java and Swift. Leveraging frameworks like React Native, I strive to build cross-platform apps that deliver a stellar user experience.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 4 - IoT */}
      <Col md={4} className="mb-3">
        <Card className="quote-card-view">
          <Card.Body>
            <Card.Title>IoT (Internet of Things)</Card.Title>
            <Card.Text>
              Exploring the possibilities of IoT, I design interconnected systems using platforms such as Arduino and Raspberry Pi. Embracing MQTT and Node-RED, I create smart solutions that bridge the physical and digital worlds.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 5 - Cloud Computing */}
      <Col md={4} className="mb-3">
        <Card className="quote-card-view">
          <Card.Body>
            <Card.Title>Cloud Computing</Card.Title>
            <Card.Text>
              With a focus on cloud technologies, I deploy scalable and reliable solutions using platforms like AWS and Azure. Utilizing Docker and Kubernetes, I orchestrate containerized applications for optimal performance and efficiency.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default AboutCards;
