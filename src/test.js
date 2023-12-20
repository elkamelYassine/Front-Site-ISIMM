import React, { useState } from "react";
// nodejs library that concatenates strings

// reactstrap components
import {
  UncontrolledDropdown,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

function Test() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [dropdownOpen4, setDropdownOpen4] = useState(false);
  const [dropdownOpen5, setDropdownOpen5] = useState(false);

  const toggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const onMouseEnter = () => {
    setDropdownOpen(true);
  };

  const onMouseLeave = () => {
    setDropdownOpen(true);
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

  return (
    <Dropdown
      onMouseOver={onMouseEnter}
      onMouseLeave={onMouseLeave}
      isOpen={dropdownOpen}
      toggle={toggle}
    >
      <DropdownToggle
        caret
        aria-expanded={false}
        aria-haspopup={true}
        color="white"
        size="large"
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
          <Dropdown
            direction="right"
            className="d-inline-block submenu"
            onMouseOver={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
            isOpen={dropdownOpen2}
            toggle={toggle2}
          >
            <DropdownToggle
              caret
              aria-expanded={false}
              aria-haspopup={true}
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <div className="submenu-item">ISIMM</div>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Histoire</DropdownItem>
              <DropdownItem>Equipe</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </DropdownItem>

        <DropdownItem>
          <Dropdown
            direction="right"
            className="d-inline-block submenu"
            onMouseOver={onMouseEnter3}
            onMouseLeave={onMouseLeave3}
            isOpen={dropdownOpen3}
            toggle={toggle3}
          >
            <DropdownToggle
              caret
              aria-expanded={false}
              aria-haspopup={true}
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <div className="submenu-item">Vie étudiant</div>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Foyers</DropdownItem>
              <DropdownItem>Restauration</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </DropdownItem>

        <DropdownItem>
          <Dropdown
            direction="right"
            className="d-inline-block submenu"
            onMouseOver={onMouseEnter4}
            onMouseLeave={onMouseLeave4}
            isOpen={dropdownOpen4}
            toggle={toggle4}
          >
            <DropdownToggle
              caret
              aria-expanded={false}
              aria-haspopup={true}
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <div className="submenu-item">Vie association</div>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Associations</DropdownItem>
              <DropdownItem>Clubs</DropdownItem>
              <DropdownItem>Activités</DropdownItem>
              <DropdownItem>Evenements</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </DropdownItem>

        <DropdownItem>
          <Dropdown
            direction="right"
            className="d-inline-block submenu"
            onMouseOver={onMouseEnter5}
            onMouseLeave={onMouseLeave5}
            isOpen={dropdownOpen5}
            toggle={toggle5}
          >
            <DropdownToggle
              caret
              aria-expanded={false}
              aria-haspopup={true}
              color="neutral"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <div className="submenu-item">International</div>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Programme de mobilité</DropdownItem>
              <DropdownItem>Stage à l'éxterieur</DropdownItem>
              <DropdownItem>Partenaire Internationaux</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </DropdownItem>
        <DropdownItem>Consultation et offres</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Test;
