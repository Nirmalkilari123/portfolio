import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nirmal kumar </span>
            from <span className="purple"> Kilari, India.</span>
            <br /> I am graduated in B.E. in Mechanical Engineering from
            (N.B.K.R.INSTITUTE OF SCIENCE AND TECHNOLOGY)JNTU,Anantapuram
            University.
            <br />
            <br />
            Some of my hobbies are
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Partying
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
          </ul>
        </blockquote>
      </Card.Body>
      x
    </Card>
  );
}

export default AboutCard;
