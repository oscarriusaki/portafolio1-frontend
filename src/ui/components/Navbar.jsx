import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {

  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const onLogout = () => {
    logout()
    navigate('/login',{
      replace:true
    })
  }

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">HeroApp</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <NavLink className={({isActive}) => `nav-link ${isActive ? 'active': ''}`} to='/' >Marvel</NavLink>
                  <NavLink className={({isActive}) => `nav-link ${isActive ? 'active': ''}`} to='/dc' >DC</NavLink>
                  <NavLink className={({isActive}) => `nav-link ${isActive ? 'active': ''}`} to='/search' >Search</NavLink>
                  <NavLink className={({isActive}) => `nav-link ${isActive ? 'active': ''}`} to='/registerHero' >Register</NavLink>
                </ul>
                </div>
                <div className="collapse navbar-collapse justify-content-end">
                  <ul className='navbar-nav'>
                    <span className='nav-item nav-link text-primary'>{user?.name}</span>
                    <button className='btn nav-item nav-link' onClick={onLogout}>Logout</button>
                  </ul>
                </div>
            </div>
            </nav>
    </>
  )
}
