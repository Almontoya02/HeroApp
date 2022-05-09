import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    publisher
}) => {

  const imagePath = `assets/${id}.jpg`
  return (
    <div className='col'>
      <Link to={`/hero/${id}`}>
      <div className=" card first hero animate__animated animate__fadeIn">
            <img className="hero-profile-img" src={imagePath} alt={superhero}/>
            <div className="hero-description-bk"></div>
            <div className="hero-logo">
              <img src={publisher==="DC Comics"?"https://www.cinemascomics.com/wp-content/uploads/2021/05/logo-peliculas-dc-comics.jpg":"https://i.pinimg.com/originals/db/b2/12/dbb2129035f83c491af200bb58e257cc.jpg"} alt=""/>
            </div>
            <div className="hero-description">
              <p>{superhero}
              </p>
            </div>
          </div>
      </Link>
    </div>

  )
}
