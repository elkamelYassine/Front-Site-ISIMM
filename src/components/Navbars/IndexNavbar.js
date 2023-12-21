import React, { StrictMode } from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
import ISIMMLogo from "assets/img/logoISIMM-MEDUIM2.png";
import { Link } from "react-router-dom";
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
function IndexNavbar({ changeColor, color }) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [dropdownOpen2, setDropdownOpen2] = React.useState(false);
  const [dropdownOpen3, setDropdownOpen3] = React.useState(false);
  const [dropdownOpen4, setDropdownOpen4] = React.useState(false);
  const [dropdownOpen5, setDropdownOpen5] = React.useState(false);
  const [direction, setDirection] = React.useState("right");

  const toggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const onMouseEnter = () => {
    setDropdownOpen(true);
  };

  const onMouseLeave = () => {
    setDropdownOpen(false);
  };

  const toggle2 = () => {
    setDropdownOpen2((prevState) => !prevState);
  };

  const onMouseEnter2 = () => {
    setDropdownOpen2(true);
  };

  const onMouseLeave2 = () => {
    setDropdownOpen2(false);
  };

  const toggle3 = () => {
    setDropdownOpen3((prevState) => !prevState);
  };

  const onMouseEnter3 = () => {
    setDropdownOpen3(true);
  };

  const onMouseLeave3 = () => {
    setDropdownOpen3(false);
  };

  const toggle4 = () => {
    setDropdownOpen4((prevState) => !prevState);
  };

  const onMouseEnter4 = () => {
    setDropdownOpen4(true);
  };

  const onMouseLeave4 = () => {
    setDropdownOpen4(false);
  };

  const toggle5 = () => {
    setDropdownOpen5((prevState) => !prevState);
  };

  const onMouseEnter5 = () => {
    setDropdownOpen5(true);
  };

  const onMouseLeave5 = () => {
    setDropdownOpen5(false);
  };

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    setDirection("down");
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    if (!changeColor) setNavbarColor({ color });
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
                  Institut
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <UncontrolledDropdown
                      direction={direction}
                      onMouseOver={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                      isOpen={dropdownOpen}
                      toggle={toggle}
                    >
                      <DropdownToggle
                        caret
                        className="btn-link"
                        color="default"
                        size="lg"
                        aria-expanded={false}
                        aria-haspopup={true}
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        ISIMM
                      </DropdownToggle>
                      <DropdownMenu>
                        <Link to={"/histoire"}>
                          <DropdownItem>Histoire</DropdownItem>
                        </Link>
                        <DropdownItem>
                          <UncontrolledDropdown
                            direction={direction}
                            onMouseOver={onMouseEnter5}
                            onMouseLeave={onMouseLeave5}
                            isOpen={dropdownOpen5}
                            toggle={toggle5}
                          >
                            <DropdownToggle
                              caret
                              className="btn-link"
                              color="default"
                              size="sm"
                              aria-expanded={false}
                              aria-haspopup={true}
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Equipe
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem>Conseil scientifique</DropdownItem>
                              <DropdownItem>Departements</DropdownItem>
                              <DropdownItem>Centre 4C</DropdownItem>
                              <DropdownItem>Comité de qualité</DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </DropdownItem>

                  <DropdownItem>
                    <UncontrolledDropdown
                      direction={direction}
                      onMouseOver={onMouseEnter2}
                      onMouseLeave={onMouseLeave2}
                      isOpen={dropdownOpen2}
                      toggle={toggle2}
                    >
                      <DropdownToggle
                        caret
                        aria-expanded={false}
                        aria-haspopup={true}
                        className="btn-link"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Vie étudiant
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Foyers</DropdownItem>
                        <DropdownItem>Restauration</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </DropdownItem>

                  <DropdownItem>
                    <UncontrolledDropdown
                      direction={direction}
                      onMouseOver={onMouseEnter3}
                      onMouseLeave={onMouseLeave3}
                      isOpen={dropdownOpen3}
                      toggle={toggle3}
                    >
                      <DropdownToggle
                        caret
                        aria-expanded={false}
                        aria-haspopup={true}
                        className="btn-link"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Vie association
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Associations</DropdownItem>
                        <DropdownItem>Clubs</DropdownItem>
                        <DropdownItem>Activités</DropdownItem>
                        <DropdownItem>Evenements</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </DropdownItem>

                  <DropdownItem>
                    <UncontrolledDropdown
                      direction={direction}
                      onMouseOver={onMouseEnter4}
                      onMouseLeave={onMouseLeave4}
                      isOpen={dropdownOpen4}
                      toggle={toggle4}
                    >
                      <DropdownToggle
                        caret
                        aria-expanded={false}
                        aria-haspopup={true}
                        className="btn-link"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        International
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Programme de mobilité</DropdownItem>
                        <DropdownItem>Stage à l'éxterieur</DropdownItem>
                        <DropdownItem>Partenaire Internationaux</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </DropdownItem>
                  <DropdownItem>Consultation et offres</DropdownItem>
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
                  Formation
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <UncontrolledDropdown
                      direction={direction}
                      onMouseOver={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                      isOpen={dropdownOpen}
                      toggle={toggle}
                    >
                      <DropdownToggle
                        caret
                        className="btn-link"
                        color="default"
                        size="lg"
                        aria-expanded={false}
                        aria-haspopup={true}
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Cycle Ingenieur
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Informatique</DropdownItem>
                        <DropdownItem>Electronique</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </DropdownItem>

                  <DropdownItem>
                    <UncontrolledDropdown
                      direction={direction}
                      onMouseOver={onMouseEnter2}
                      onMouseLeave={onMouseLeave2}
                      isOpen={dropdownOpen2}
                      toggle={toggle2}
                    >
                      <DropdownToggle
                        caret
                        aria-expanded={false}
                        aria-haspopup={true}
                        className="btn-link"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Master
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Master1</DropdownItem>
                        <DropdownItem>Master2 ...</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </DropdownItem>

                  <DropdownItem>Cycle préparatoire</DropdownItem>

                  <DropdownItem>Licence</DropdownItem>
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
                  Recherche
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Laboratoire et unité de recherche</DropdownItem>

                  <DropdownItem>Projet de recherche</DropdownItem>
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
                  Entreprise
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Les entreprises partenaire</DropdownItem>
                  <DropdownItem>
                    Listes des étudiants cherchant des stages
                  </DropdownItem>
                  <DropdownItem>Devenir un partenaire</DropdownItem>
                  <DropdownItem>Offre de stages</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </StrictMode>
  );
  IndexNavbar.prototype = {
    changeColor: PropTypes.bool.isRequired,
    color: PropTypes.string,
  };
}

export default IndexNavbar;
