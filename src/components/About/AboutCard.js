import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCode, FaPalette, FaMobileAlt, FaWifi, FaCloud } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";

function AboutCards() {
  return (
    <Container className="custom-card-container">
      <Row>
        {/* Card 1 - Web Development */}
        <Col xs={12} sm={6} lg={4} className="mb-4">
          <div className="custom-card">
            <FaCode className="card-icon" />
            <h5>Web Development</h5>
            <p>
              As a developer, I specialize in crafting dynamic and responsive web applications using technologies like React.js and Node.js. I enjoy exploring tools such as Visual Studio Code, Git, and Webpack to enhance development workflows.
            </p>
          </div>
        </Col>
        {/* Card 2 - UI/UX */}
        <Col xs={12} sm={6} lg={4} className="mb-4">
          <div className="custom-card">
            <FaPalette className="card-icon" />
            <h5>UI/UX Design</h5>
            <p>
              In the realm of UI/UX, I bring designs to life with tools like Figma and Adobe XD. Keeping user experience at the forefront, I aim to create seamless interactions using technologies such as HTML, CSS, and JavaScript.
            </p>
          </div>
        </Col>
        {/* Card 3 - App Development */}
        <Col xs={12} sm={6} lg={4} className="mb-4">
          <div className="custom-card">
            <FaMobileAlt className="card-icon" />
            <h5>App Development</h5>
            <p>
              With a passion for mobile app development, I specialize in crafting Android and iOS applications using Java and Swift. Leveraging frameworks like React Native, I strive to build cross-platform apps that deliver a stellar user experience.
            </p>
          </div>
        </Col>
        {/* Card 4 - IoT */}
        <Col xs={12} sm={6} lg={4} className="mb-4">
          <div className="custom-card">
            <FaWifi className="card-icon" />
            <h5>IoT (Internet of Things)</h5>
            <p>
              Exploring the possibilities of IoT, I design interconnected systems using platforms such as Arduino and Raspberry Pi. Embracing MQTT and Node-RED, I create smart solutions that bridge the physical and digital worlds.
            </p>
          </div>
        </Col>
        {/* Card 5 - Cloud Computing */}
        <Col xs={12} sm={6} lg={4} className="mb-4">
          <div className="custom-card">
            <FaCloud className="card-icon" />
            <h5>Cloud Computing</h5>
            <p>
              With a focus on cloud technologies, I deploy scalable and reliable solutions using platforms like AWS and Azure. Utilizing Docker and Kubernetes, I orchestrate containerized applications for optimal performance and efficiency.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutCards;