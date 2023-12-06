/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
import ISIMMLogo from 'assets/img/logoISIMM-MEDUIM2.png';
import LinkedInLogoWhite from 'assets/img/LinkedInLogo-White-Small.png';
import FacebookLogoWhite from 'assets/img/FacebookLogo-White-Small.png';
import wikipediaLogoWhite from 'assets/img/WikipediaLogo-White-Small.png';

import LinkedInLogoGrey from 'assets/img/LinkedInLogo-Grey-Small.png';
import FacebookLogoGrey from 'assets/img/FacebookLogo-Grey-Small.png';
import wikipediaLogoGrey from 'assets/img/WikipediaLogo-Grey-Small.png';

// reactstrap components
import {
  Button,
  Collapse,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem, 
  DropdownToggle,
ButtonDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";



function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [fbLogo, setfbLogo] = React.useState(FacebookLogoWhite);
  const [LInLogo,setLInLogo]=React.useState(LinkedInLogoWhite);
  const [wikiLogo,setwikiLogo]=React.useState(wikipediaLogoWhite);
  

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };



  
  React.useEffect(() => {
    
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setfbLogo(FacebookLogoGrey);
        setLInLogo(LinkedInLogoGrey);
        setwikiLogo(wikipediaLogoGrey);
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setfbLogo(FacebookLogoWhite);
        setLInLogo(LinkedInLogoWhite);
        setwikiLogo(wikipediaLogoWhite);
        
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    
    
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
        <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Isimm Logo"
          >
          <img src={ISIMMLogo} alt="isimm LOGO"></img>  
          
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
        <Collapse
          navbar
          isOpen={navbarCollapse}
        >
        <Nav navbar>
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle
              aria-expanded={false} 
              aria-haspopup={true}
              caret
              color="default"
              data-toggle="dropdown"
              href="#pablo"
              id="dropdownMenuButton"
              nav
              onClick={(e) => e.preventDefault()}
              role="button"
              >
              Institut
            </DropdownToggle>
              <DropdownMenu
                aria-labelledby="dropdownMenuButton"
                className="dropdown-info"
              >

              <DropdownItem
                
                >
              
              <ButtonDropdown className="btn-link ml-1" direction="right" isOpen={dropdownOpen} toggle={() => { setDropdownOpen({ btnDropright: !dropdownOpen }); }}>
                  <DropdownToggle caret>
                    Isimm
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>

                </ButtonDropdown>

              </DropdownItem>

                <DropdownItem
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Another action
                </DropdownItem>
                        
                <DropdownItem
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Something else here
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Separated link
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Another separated link
              </DropdownItem>
              </DropdownMenu>
              </UncontrolledDropdown>
          </Nav>
        

      
          
          <Nav navbar>

          


            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/profile.php?id=100063489403806"
                target="_blank"
                title="Like us on Facebook"
              >
              <img src={fbLogo}/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/school/isimm/mycompany/"
                target="_blank"
                title="Follow us on LinkedIn"
              >
                <img src={LInLogo}/>
               
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://fr.wikipedia.org/wiki/Institut_sup%C3%A9rieur_d%27informatique_et_de_math%C3%A9matiques_de_Monastir"
                target="_blank"
                title="Read about in wikipedia"
              >
               <img src={wikiLogo}/>
                
              </NavLink>
            </NavItem>
                    <NavItem>
              <Button
                className="btn-round"
                color="info"
                href=""
                target="_blank"
              >
                <i ></i> Login
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
