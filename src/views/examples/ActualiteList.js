import { Link } from "react-router-dom";
import Actualite from "./Actualite";

function ActualitieList() {
    const { actualities } = Actualite();
  
  return (
    <div>
      {actualities.map((actualitie) => (
        <Link key={actualitie.id} to={`/actualitie/${actualitie.id}`}>
          <SingleActuality
            title={actualitie.title}
            data={actualitie.data}
            pictureUrl={actualitie.picture}
          />
        </Link>
      ))}
    </div>
  );
}
export default ActualitieList;
