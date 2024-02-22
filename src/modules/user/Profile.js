import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

import SectionCards from "views/index-sections/SectionCards.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import imageSource from "assets/img/user.png";
import PropTypes from "prop-types";
function Profile({ NavBar, ProfilePageHeader }) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  const NameEtudiant = "Yassine EL Kamel";
  const Niveau = "ING INFO 1";

  return (
    <>
      <NavBar changeColor={true} />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={imageSource}
              />
            </div>
            <div className="name">
              <h4 className="title">{NameEtudiant}</h4>
              <h5>{Niveau}</h5>
              <h6 className="description">Etudiant</h6>
            </div>
          </div>

          <SectionCards />
          <br />
        </Container>
      </div>
      <br />
      <br />

      <DemoFooter />
    </>
  );
}

Profile.propTypes = {
  NavBar: PropTypes.elementType.isRequired,
  ProfilePageHeader: PropTypes.elementType.isRequired,
};
export default Profile;
