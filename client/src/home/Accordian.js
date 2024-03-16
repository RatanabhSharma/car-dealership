import Accordion from "react-bootstrap/Accordion";
import "./accordian.css";

import React from "react";

const Accordian = () => {
  return (
    <main className="accordian">
      <div className="questions">
        <h3>freequently asked questions</h3>
      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Can you help me get a new car that is not in your list?
          </Accordion.Header>
          <Accordion.Body>
            Yes we can, just specify the name of the car and the model.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Can you help me swap my car to a recent model?
          </Accordion.Header>
          <Accordion.Body>
            Yes we can, contact us and give us the details of the car.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Are this all the cars that you have?
          </Accordion.Header>
          <Accordion.Body>
            No, we have alot of them that are not listed in the website.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </main>
  );
};

export default Accordian;
