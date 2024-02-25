import React, { StrictMode } from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
import ISIMMLogo from "assets/img/logoISIMM-MEDUIM2.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useToken from "config/useToken";
// reactstrap components
import {
  Collapse,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
} from "reactstrap";
import PropTypes from "prop-types";
function EtudiantNavbar({ changeColor, color }) {
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const { destroyToken } = useToken();

  const [direction, setDirection] = React.useState("right");
  let navigate = useNavigate();

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    setDirection("down");
    document.documentElement.classList.toggle("nav-open");
  };
  if (changeColor) color = "navbar-transparent";

  const [navbarColor, setNavbarColor] = React.useState(color);

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        (document.documentElement.scrollTop > 299 ||
          document.body.scrollTop > 299) &&
        changeColor
      ) {
        setNavbarColor("");
      } else if (
        (document.documentElement.scrollTop < 300 ||
          document.body.scrollTop < 300) &&
        changeColor
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <StrictMode>
      <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              target="_blank"
              title="Isimm Logo"
            >
              <Link to={"/index"}>
                <img src={ISIMMLogo} alt="isimm LOGO"></img>
              </Link>
            </NavbarBrand>

            <button
              aria-expanded={navbarCollapse}
              className={classnames("navbar-toggler navbar-toggler", {
                toggled: navbarCollapse,
              })}
              onClick={toggleNavbarCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse navbar isOpen={navbarCollapse}>
            <Nav navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  href="#pablo"
                  id="dropdownMenuButton"
                  nav
                  onClick={(e) => navigate("/etudiant/emploi")}
                  role="button"
                >
                  Emploi
                </DropdownToggle>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  caret
                  aria-expanded={false}
                  aria-haspopup={true}
                  data-toggle="dropdown"
                  href="#pablo"
                  id="dropdownMenuButton"
                  nav
                  onClick={(e) => e.preventDefault()}
                  role="button"
                >
                  Feuille adminestrative
                </DropdownToggle>
                <DropdownMenu>
                  <Link to="/etudiant/certificatpresence">
                    <DropdownItem>Certificat de présence</DropdownItem>
                  </Link>
                  <Link to="/etudiant/certificatreussite">
                    <DropdownItem>Certificat de réussite</DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  caret
                  aria-expanded={false}
                  aria-haspopup={true}
                  data-toggle="dropdown"
                  href="#pablo"
                  id="dropdownMenuButton"
                  nav
                  onClick={(e) => e.preventDefault()}
                  role="button"
                >
                  Espace éducatif
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Résultats et Notes</DropdownItem>
                  <DropdownItem>Séance Rattrapage</DropdownItem>
                  <DropdownItem>Espace cours</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  caret
                  aria-expanded={false}
                  aria-haspopup={true}
                  data-toggle="dropdown"
                  href="#pablo"
                  id="dropdownMenuButton"
                  nav
                  onClick={(e) => e.preventDefault()}
                  role="button"
                >
                  Domiane professionnel
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Creation d'un CV</DropdownItem>
                  <DropdownItem>Offre de stage</DropdownItem>
                  <DropdownItem>Offre d'emploi</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  data-toggle="dropdown"
                  href="#pablo"
                  id="dropdownMenuButton"
                  nav
                  onClick={(e) => e.preventDefault()}
                  role="button"
                >
                  <i class="nc-icon nc-minimal-down" />
                </DropdownToggle>
                <DropdownMenu>
                  <Link to={"/etudiant"}>
                    <DropdownItem>
                      <i class="nc-icon nc-single-02" />
                      Profile
                    </DropdownItem>
                  </Link>
                  <Link to={"/etudiant/settings"}>
                    <DropdownItem>
                      <i class="nc-icon nc-settings-gear-65" />
                      Paramètre
                    </DropdownItem>
                  </Link>
                  <DropdownItem
                    onClick={(e) => {
                      destroyToken();
                      window.location.reload();
                    }}
                  >
                    <i class="nc-icon nc-button-power" />
                    Déconnecter
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </StrictMode>
  );
  EtudiantNavbar.prototype = {
    changeColor: PropTypes.bool.isRequired,
    color: PropTypes.string,
  };
}

export default EtudiantNavbar;
