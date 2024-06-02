import tree from "assets/img/cards/tree.jpg";
import biblio from "assets/img/cards/biblio.jpg";
import court from "assets/img/cards/court.jpg";
import court2 from "assets/img/cards/court2.jpg";
import salle from "assets/img/cards/salle.jpg";
import React, { useEffect, useState } from "react";
function Actualite() {
  const [actualities, setActualities] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api/actulaites");
      const jsonData = await response.json();
      setActualities(jsonData);
    };

    fetchData();
  }, []);
  /* const actualities = [
    {
      id: 1,
      title: "Actuality 1 Title",
      data: "Actuality 1 data content.",
      description: "quick description for Actuality 1",
      picture: tree,
    },
    {
      id: 2,
      title: "Actuality 2 Title",
      data: "Actuality 2 data content.",
      description: "quick description for Actuality 2",
      picture: biblio, // Replace with your image URL
    },
    {
      id: 3,
      title: "Actuality 3 Title",
      data: "Actuality 3 data content.",
      description: "quick description for Actuality 3",
      picture: court, // Replace with your image URL
    },
    {
      id: 4,
      title: "Actuality 4 Title",
      data: "Actuality 4 data content.",
      description: "quick description for Actuality 4",
      picture: court2, // Replace with your image URL
    },
    {
      id: 5,
      title: "Actuality 5 Title",
      data: "Actuality 5 data content.",
      description: "quick description for Actuality 5",
      picture: salle, // Replace with your image URL
    },
  ];
*/

  /*const actualities = fetch("http://localhost:8080/api/actulaites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  }).then((data) => data.json());*/

  console.log(actualities);
  return {
    actualities,
  };
}
export default Actualite;
