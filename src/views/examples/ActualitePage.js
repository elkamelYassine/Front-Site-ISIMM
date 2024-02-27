import React, { useEffect, useState } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import Actualite from "./Actualite";
import { useParams } from "react-router-dom";

import tree from "assets/img/cards/tree.jpg";
import SectionCards from "views/index-sections/SectionCards";

const ActualitePage = () => {
  const [actuality, setActuality] = useState(null);
  const { actualities } = Actualite();
  const { actualitieId } = useParams();

  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("Actualite");
    window.scrollTo({ top: 0 });
    return function cleanup() {
      document.body.classList.remove("Actualite");
    };
  });

  useEffect(() => {
    const foundActuality = actualities.find(
      (act) => act.id === Number(actualitieId)
    ); // Locate matching actuality by ID

    if (foundActuality) {
      setActuality(foundActuality); // Update state with found actuality
    } else {
      console.error("Actuality with ID", actualitieId, "not found"); // Handle potential ID mismatch
    }
  }, [actualitieId]); // Run useEffect only when ID changes

  if (!actuality) {
    return <div>Loading actuality data...</div>; // Display loading message while data is being fetched
  }

  // Destructure actuality data for conciseness (optional)
  const { title, data, description, picture } = actuality;
  console.log(tree);
  return (
    <>
      <IndexNavbar changeColor={false} color="" />

      <div className="main">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container>
          <div className="title">
            <h2>Actualite</h2>
          </div>

          <center>
            <img src={picture} alt={title} height="490px" />
          </center>
          <div className="title">
            <h3>{title}</h3>
          </div>
          <div className="Contenu ">{data}</div>
          <br />
          <SectionCards />
        </Container>
        <br />
      </div>
      <DemoFooter />
    </>
  );
};
ActualitePage.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default ActualitePage;
