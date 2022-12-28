import React from 'react'
import { getHeroByPublisher } from '../helpers/getHeroByPublisher'
import { CardHero } from './CardHero';

export const HeroList = ({publisher}) => {

  const heroes = getHeroByPublisher(publisher);
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {
            heroes.map(hero => (
                <CardHero key={hero.id} {...hero} />
            ))
        }
    </div>
  )
}
