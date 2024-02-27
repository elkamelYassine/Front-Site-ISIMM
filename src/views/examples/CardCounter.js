import React, { useState, useEffect } from "react";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";

const CardCounter = ({ endNumber, title, image ,intervalDuration}) => {
  const [count, setCount] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      if (count < endNumber) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, intervalDuration); // Adjust interval duration as needed

    return () => clearInterval(interval);
  }, [count, endNumber]);
  return (
    <Card>
      <CardBody className="stats">
        <center>
          <img src={image} />

          <h2>{count}</h2>
          <h3>{title}</h3>
        </center>
        <br />
        <br />
      </CardBody>
    </Card>
  );
};

export default CardCounter;
