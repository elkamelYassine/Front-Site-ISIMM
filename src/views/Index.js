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

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
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
        <br />
        <MapComponent />
        <br />
        <br />
        <SectionCards />
        <br />
        <br />

        <CardApropos />
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <span>s</span>

        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
