import React from "react";
// reactstrap components

// core components

function ProfilePageHeaderProf() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/professeur-banner.jpg") + ")",
        }}
        className="page-header page-header-xs page-header-bottom"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
      </div>
    </>
  );
}

export default ProfilePageHeaderProf;
