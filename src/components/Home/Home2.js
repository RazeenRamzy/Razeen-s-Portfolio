import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/bk-img4.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> MAKING MAGIC WITH CODE </span>
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
              Hi there! I'm a <i className="primary-header">
                Software Engineer 
              </i>{" "}
               who's all about making the impossible, possible.
              <br />
              <br />I thrive on challenges, and there's nothing I love more than diving into the latest <i className="primary-header">tech innovations</i> to create something extraordinary.
              <br />
              <br />From crafting elegant websites to building robust applications, I'm your go-to person for turning dreams into digital realities.
              <br />
              <br />With my expertise in <i className="primary-header">latest</i> tech <i className="primary-header">stack</i>, I weave enchanting experiences that leave users spellbound.
              <br />
              <br />
              Always upping my game, I'm on a mission to push boundaries, innovate relentlessly, and sprinkle a little magic wherever I go.
            </p>

          </Col>
          <Col md={4} className="myAvtar">
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/Rahuljha4171"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
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
                  className="icon-colour  home-social-icons"
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
                  className="icon-colour  home-social-icons"
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
                  className="icon-colour  home-social-icons"
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
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
