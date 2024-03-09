import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/bk-img4.png";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home2-container" id="about">
      <Row className="home2-row">
        <Col md={6} className="home2-image-col">
          <img
            src={myImg}
            className="img-fluid home2-image"
            alt="avatar"
          />
        </Col>
        <Col md={6} className="home2-content-col">
          <div className="home2-content" data-aos="fade-right">
            <h1 className="home2-header">
              <span className="primary-header">MAKING MAGIC WITH CODE</span>
            </h1>
            <p className="home2-body">
              Hi there! I'm a{" "}
              <i className="primary-header">Software Engineer</i> who's all about making the impossible, possible.
              <br />
              <br />I thrive on challenges, and there's nothing I love more than diving into the latest{" "}
              <i className="primary-header">tech innovations</i> to create something extraordinary.
              <br />
              <br />From crafting elegant websites to building robust applications, I'm your go-to person for turning dreams into digital realities.
              <br />
              <br />With my expertise in <i className="primary-header">latest</i> tech <i className="primary-header">stack</i>, I weave enchanting experiences that leave users spellbound.
              <br />
              <br />
              Always upping my game, I'm on a mission to push boundaries, innovate relentlessly, and sprinkle a little magic wherever I go.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="home2-social-row">
        <Col md={12} className="home2-social-col">
          <div className="home2-social-content">
            <h1 className="home2-social-header" data-aos="fade-right">
              <span className="primary-header">CONNECT</span> WITH ME
            </h1>
            <p className="home2-social-body" data-aos="fade-left">
              Feel free to connect with me
            </p>
            <ul className="home2-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/Rahuljha4171"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home2-social-icon"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/kumardotexe"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home2-social-icon"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:razeenramzy555@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home2-social-icon"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/razeen-ramzy-7b386121b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home2-social-icon"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dead.programmer/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home2-social-icon"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home2;
