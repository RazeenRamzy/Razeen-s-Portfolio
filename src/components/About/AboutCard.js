import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FaCode, FaPalette, FaMobileAlt, FaWifi, FaCloud } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import "bootstrap/dist/css/bootstrap.min.css";
import "./what.css";

function AboutCards({ isDarkMode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);

  const cards = [
    { icon: FaCode, title: "Web Development", content: "As a developer, I specialize in crafting dynamic and responsive web applications using technologies like React.js and Node.js. I enjoy exploring tools such as Visual Studio Code, Git, and Webpack to enhance development workflows." },
    { icon: FaPalette, title: "UI/UX Design", content: "In the realm of UI/UX, I bring designs to life with tools like Figma and Adobe XD. Keeping user experience at the forefront, I aim to create seamless interactions using technologies such as HTML, CSS, and JavaScript." },
    { icon: FaMobileAlt, title: "App Development", content: "With a passion for mobile app development, I specialize in crafting Android and iOS applications using Java and Swift. Leveraging frameworks like React Native, I strive to build cross-platform apps that deliver a stellar user experience." },
    { icon: FaWifi, title: "IoT (Internet of Things)", content: "Exploring the possibilities of IoT, I design interconnected systems using platforms such as Arduino and Raspberry Pi. Embracing MQTT and Node-RED, I create smart solutions that bridge the physical and digital worlds." },
    { icon: FaCloud, title: "Cloud Computing", content: "With a focus on cloud technologies, I deploy scalable and reliable solutions using platforms like AWS and Azure. Utilizing Docker and Kubernetes, I orchestrate containerized applications for optimal performance and efficiency." },
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const handleSwipe = (direction) => {
    if (isResetting) return;
    
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsResetting(true);
    }
  };

  useEffect(() => {
    if (isResetting) {
      const timer = setTimeout(() => {
        setCurrentIndex(0);
        setIsResetting(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isResetting]);

  return (
    <Container className={`card-stack-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {cards.map((card, index) => (
        <div
          key={index}
          {...handlers}
          className={`stacked-card ${index === currentIndex ? 'active' : ''} ${index < currentIndex ? 'swiped' : ''}`}
          style={{ zIndex: cards.length - index }}
        >
          <card.icon className="card-icon" />
          <h5>{card.title}</h5>
          <p>{card.content}</p>
        </div>
      ))}
    </Container>
  );
}

export default AboutCards;