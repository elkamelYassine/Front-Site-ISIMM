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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg") + ")",
        }}F
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 >Institut Supérieur d'Informatique et de Mathématiques de Monastir</h1>
             
            </div>
            <h2 className="presentation-subtitle text-center">
            	
المعهد العـالي للإعـلامية و الريـاضيــات بالمنـستير
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
        <h6 className="category category-absolute">
          Designed and coded by Yassine EL Kamel  & Nour El Houda Salem
        
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;
