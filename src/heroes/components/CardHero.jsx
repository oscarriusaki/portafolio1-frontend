import React from 'react'
import { Link } from 'react-router-dom';

export const CardHero = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters

}) => {

  const img = `assets/heroes/${id}.jpg`;

  return (
    <>
        <div className="row">
            <div className="col-5">
              <div className="card">
                <img src={img} alt={superhero} />
              </div>
            </div>
            <div className="col-7">
              <p>{superhero}</p>
              <p>{publisher}</p>
              <p>{alter_ego}</p>
              {
                (alter_ego !== characters) && (<p>{characters}</p>)
              }
              <p className='text-muted'>{first_appearance}</p>
              <Link to={`/hero/${id}`}>Mas...</Link>
            </div>
        </div>
    </>
  )
}
