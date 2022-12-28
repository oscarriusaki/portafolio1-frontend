import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';

export const HeroPage = () => {

  const { id } = useParams();
  const hero = getHeroById(id)
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1)
  }

  return (
    <>
        <h1>HeroPage</h1>
        <hr />
        <div className="row">
          <div className="col-md-5">
            <img className='img-thumbnail' src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} />
          </div>
          <div className="col-md-7">
            <p><b>Superhero: </b> {hero.superhero} </p>
            <p><b>Publisher: </b>{hero.publisher}</p>
            <p><b>Alter Ego: </b>{hero.alter_ego}</p>
            {
              (hero.alter_ego === hero.characters ) && (<p><b>Characters: </b> {hero.characters}</p>)
            }
            <p><b>FirstAppearance: </b>{hero.first_appearance}</p>
            <button className='btn btn-outline-primary' onClick={onBack}>Back</button>
          </div>
        </div>
        
    </>
  )
}
