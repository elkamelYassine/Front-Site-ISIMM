import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Container,
  Row,
} from "reactstrap";
import PropTypes from "prop-types";

const Cards = ({ title,subtitle, description, imageSrc, link }) => {
  return (
    <>
      <Card style={{ width: "20rem", marginLeft: "40px" }}>
        <CardImg top src={imageSrc} alt={title} className="images-card" />
        <CardBody>
          <CardTitle style={{ textalign: 'center',  fontSize: '24px', fontWeight:'600'}}>{title}</CardTitle><br/>
          <CardText><strong>{subtitle}</strong>{description}</CardText>
          <Button color="primary" href={link}>
            savoir plus
          </Button>
        </CardBody>
      </Card>
    </>
  );
};
Cards.prototype = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Cards;
