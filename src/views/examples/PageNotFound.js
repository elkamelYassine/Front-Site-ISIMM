import React from "react";
import { Container, Button } from "reactstrap";
const PageNotFound = () => (
  <Container>
    <div style={{ marginTop: "35%" }}>
      <center>
        <h1>Error 404 page not found</h1>
        <h4>We are sorry but the page you are looking for does not exist.</h4>
        <br />
        <Button href={"/"}>return to main page</Button>
      </center>
    </div>
  </Container>
);

export default PageNotFound;
