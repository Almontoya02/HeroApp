import React from 'react'
import { useParams,Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from './../../selectors/getHeroById';

export const Hero = () => {

  const {heroId} = useParams();
  const hero = getHeroById(heroId)
  const navigate = useNavigate()
  const handleReturn = ()=>{
    navigate(-1)
  }
  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero
  const imagePath =`/assets/${id}.jpg`
  if(!hero){
    return <Navigate to="/"/>
  }
  return (
    <div className='row mt-5'>
      <div className='col-4'>
          <img 
            src={imagePath}
            alt="" 
            className='img-thumbnail animate__animated animate__fadeInLeft'
          />
      </div>
      <div className='col-8'>
          <h3>{superhero}</h3>
          <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                  <b>Alter ego: </b>{alter_ego}
              </li>
              <li className='list-group-item'>
                  <b>Publisher: </b>{publisher}
              </li>
              <li className='list-group-item'>
                  <b>First appearance: </b>{first_appearance}
              </li>
              <h5><b>Characters</b></h5>
              <p>{characters}</p>
              <button 
                className='btn btn-outline-info'
                onClick={handleReturn}
              >Regresar</button>
          </ul>
      </div>
    </div>
  )
}
