import React from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ConnectedNavbar from "components/Navbars/ConnectedNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import imageSource from "assets/img/user.png";
function Emploi() {
  const [activeTab, setActiveTab] = React.useState("1");
  const NameEtudiant = "Yassine EL Kamel";
  const Niveau = "ING INFO 1";

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ConnectedNavbar changeColor={false} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <div className="main">
        <Container>
          <Row>
            <Col className="mx-auto" lg="2" md="4" xs="4">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={imageSource}
              />
            </Col>

            <Col lg="" md="4" xs="5">
              <h3>{NameEtudiant}</h3>
              <br />
              <h5>{Niveau}</h5>
              <h6 className="description">Etudiant</h6>
            </Col>
          </Row>

          <center>
            <h1 className="title text-primary">Emploi du temps </h1>
          </center>
          <br />
          <br />
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Horaire</th>
                <th scope="col">8:30 - 10:00</th>
                <th scope="col">10:15 - 11:45</th>
                <th scope="col">10:15 - 11:45</th>
                <th scope="col">13:00 - 14:30</th>
                <th scope="col">14:45 - 16:15</th>
                <th scope="col">16:30 - 18:00</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Lundi</th>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>
              <tr>
                <th scope="row">Mardi</th>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>
              <tr>
                <th scope="row">Mercredi</th>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>

              <tr>
                <th scope="row">Jeudi</th>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>

              <tr>
                <th scope="row">Vendredi</th>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>

              <tr>
                <th scope="row">Samedi</th>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>
            </tbody>
          </table>
          <br />
        </Container>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <DemoFooter />
    </>
  );
}

export default Emploi;
