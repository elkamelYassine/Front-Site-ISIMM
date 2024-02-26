import { useState } from "react";
import tree from "assets/img/cards/tree.jpg";
import biblio from "assets/img/cards/biblio.jpg";
function Actualite() {
  const [actualities, setActualities] = useState([
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
  ]);
  return {
    actualities,
  };
}
export default Actualite;
