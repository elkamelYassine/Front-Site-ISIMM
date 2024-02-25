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

const Cards = ({ title, description, imageSrc, link }) => {
  return (
    <>
      <Card className="card-meduim">
        <CardImg top src={imageSrc} alt={title} className="images-card" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
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
