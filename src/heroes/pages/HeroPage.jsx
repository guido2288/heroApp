import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";


export const HeroPage = () => {

  const { id } = useParams();

  const hero = useMemo(() => getHeroById(id), [id]);

  const navigate = useNavigate();

  const onNavigateBack = () => {

    navigate(-1);
  }

  if (!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <div className="row mt-5">
      <div className="col col-sm-4 col-12  animate__animated animate__fadeInLeft">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>

      <div className="col col-sm-8 col-12 ">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter Ego:</b> {hero.alter_ego}  </li>
          <li className="list-group-item"> <b>Publisher:</b> {hero.publisher}  </li>
          <li className="list-group-item"> <b>First Appearance:</b> {hero.first_appearance}  </li>
        </ul>

        <p className="mt-3">{hero.bio}</p>

        <h5 className="mt-3"> Characters </h5>
        <p>{hero.characters}</p>

        <button
          className="btn btn-outline-primary mb-3"
          onClick={onNavigateBack}
        >
          Return
        </button>


      </div>

    </div>
  )
}
