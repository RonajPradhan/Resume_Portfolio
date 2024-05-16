import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ronaj Pradhan </span>
            originally from <span className="purple">Kathmandu, Nepal</span>
            <br />
            Moved to USA to pursue my Masters degree in computer science from University of South Dakota.
            <br />
            I have just graduated and currently looking for opportunities in Full Stack Software Development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning About New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Trekking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Striving to build things that makes a difference!"{" "}
          </p>
          {/* <footer className="blockquote-footer">Ronaj</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
