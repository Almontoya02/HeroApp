import React from 'react'
import { getHeroByPublisher } from './../../selectors/getHeroByPublisher';
import { HeroCard } from './HeroCard';
import "./hero.css"
export const HeroList = ({publisher}) => {

    const heroes = getHeroByPublisher(publisher);
  return (
    <div className='row rows-col-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
        {
            heroes.map(hero=>(
                <HeroCard 
                    key={hero.id}
                    {...hero}
                />
            ))
        }
    </div>
  )
}
