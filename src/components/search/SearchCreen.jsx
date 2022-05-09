import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from './../../hooks/useForm';
import { getHeroByName } from './../../selectors/getHeroByName';
import { HeroCard } from './../hero/HeroCard';

export const SearchCreen = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const {q=''} = queryString.parse(location.search)
  const [values,handleInputChange] =useForm({
    searchText:q
  })
  const {searchText} = values
  const handleSearch = (e)=>{
    e.preventDefault();
    navigate(`?q=${searchText}`)
  }
  
  
  const heroesFiltered = useMemo(()=>getHeroByName(q),[q])//recibe una funcion callback el retorno es lo que se memoriza;

  return (
    <div>
        <h1>Buscar Heroe</h1>
        <hr/>
        <div className='row'>
          <div className='col-5'>
              <h4>Buscar</h4>
              <hr/>
              <form onSubmit={handleSearch}>
                <input 
                  type="text"
                  placeholder='Buscar Heroe'
                  className="form-control"
                  name='searchText'
                  value={searchText}
                  onChange={handleInputChange}

                />
                <button 
                  className='btn btn-outline-primary m-1'
                  type='submit' 
                  onClick={handleSearch}
                >
                    Buscar...
                </button>
              </form>
          </div>
          <div className='col-7'>
           <h4>Resultados</h4>
           <hr/>
           {
             (q==="")?<div className='alert alert-info'>Sin resultados</div>
                     :(heroesFiltered.length===0) && <div className='alert alert-danger'>No hay resultados de: {q}</div>

             
           }
           {
             heroesFiltered.map(hero=>(
               <HeroCard 
                key={hero.id}
                {...hero}
               />
             ))
           } 
          </div>
        </div>
    </div>
  )
}
