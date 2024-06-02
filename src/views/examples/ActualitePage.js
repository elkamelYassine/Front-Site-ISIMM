import React, { useEffect, useState } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import SectionCards from "views/index-sections/SectionCards";
import PageNotFound from "./PageNotFound";

const ActualitePage = () => {
  const [actuality, setActuality] = useState(null);

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
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/actulaites/" + actualitieId
        );

        // Check for successful response status code (usually 200)
        if (!response.ok) {
          throw new Error("Actuality not found"); // Or a more descriptive error message
        }

        const jsonData = await response.json();
        setActuality(jsonData);
      } catch (error) {
        // Set actuality to null or handle the error differently based on your needs
        setActuality(null); // Set to null if not found
      }
    }; /* const foundActuality = actualities.find(
      (act) => act.id === Number(actualitieId)
    ); // Locate matching actuality by ID
*/
    fetchData();
  }, [actualitieId]); // Run useEffect only when ID changes

  if (!actuality) {
    return <PageNotFound></PageNotFound>; // Display loading message while data is being fetched
  }

  // Destructure actuality data for conciseness (optional)

  console.log(actuality);
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
            <h2>{actuality.title}</h2>
          </div>

          <center>
            <img
              src={`data:image/png;base64,${actuality.image}`}
              alt={actuality.title}
              height="490px"
            />
          </center>
          <div className="Contenu ">{actuality.data}</div>
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
  image: PropTypes.string.isRequired,
};

export default ActualitePage;
