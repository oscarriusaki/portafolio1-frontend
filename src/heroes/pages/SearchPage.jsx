import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { CardHero } from '../components/CardHero'
import { getHeroByName } from '../helpers/getHeroByName'
import queryString from 'query-string'

export const SearchPage = () => {

  const { data , onChange } = useForm({
    data: '',
  })
  const navigate = useNavigate();
  const { search } = useLocation();
  const { q = '' } = queryString.parse(search);

  const onInputSubmit = (value) => {
    value.preventDefault();
    // if(data.length <= 0) return;
    navigate(`?q=${data}`)
  }
  const heroes = getHeroByName(q);

  return (
    <>
        <div className="row">
          <div className="col-md-5">
            <h1>Search page</h1>
            <hr />
            <form onSubmit={onInputSubmit}>
              <input 
                type="text" 
                placeholder='search'
                className='form-control mb-2'
                name='data'
                value={data}
                onChange={ onChange }
                />
              <button className='btn btn-outline-primary'>search</button>
            </form>
            
          </div>
          <div className="col-md-7">
            <h1>Heros</h1>
            <hr />
            {
              (q.length === 0) 
              ? 
              <div className="alert alert-primary">
                Search a hero
              </div>
              : (heroes.length === 0) && 
              <div className="alert alert-danger">
                No hero with <b>{ q }</b>
              </div>
            }
            {heroes.map(hero => (
              <CardHero key={hero.id} {...hero} />
            ))}
          </div>
          <h1 className="text-2xl font-bold underline">
      Hello world!
    </h1>
    <div>

    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <input
    className="bg-gray-200 rounded-full p-2 w-full focus:outline-none focus:shadow-outline-blue"
    type="text"
    placeholder="Escribe tu nombre"
    />
    <button className="rounded-full bg-blue-500 border-slate-50">Save Changes</button>
    </div>
<h1 className="text-3xl bg-red-500 font-bold underline">
      Hello world!
    </h1>
        </div>
    </>
  )
}
