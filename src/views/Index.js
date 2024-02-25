import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import CardApropos from "./index-sections/CardApropos";
// index sections
import MapComponent from "views/index-sections/MapComponent.js";
import SectionCards from "views/index-sections/SectionCards.js";
import { Row, Col, Container } from "reactstrap";
function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    window.scrollTo({ top: 0 });

    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar changeColor={true} />
      <IndexHeader />
      <div className="main">
        <br />
        <SectionCards />
        <br />
        <br />
        <Container id="menu-dropdown">
          <Row>
            <Col md="5" lg="6" sm="6">
              <CardApropos />
            </Col>
            <Col md="6" lg="6" sm="6">
              <div className="title">
                <h2>Map</h2>
              </div>

              <MapComponent
                longitude={35.76440286851841}
                latitude={10.840828573030606}
              />
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />

        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
