import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui/components/Navbar'
import { DcPage } from '../pages/DcPage'
import { HeroPage } from '../pages/HeroPage'
import { MarvelPage } from '../pages/MarvelPage'
import { RegisterHeroPage } from '../pages/RegisterHeroPage'
import { SearchPage } from '../pages/SearchPage'

export const HeroRoute = () => {
  return (
    <>
        <Navbar />
        <Routes >
            <Route path='/' element={<MarvelPage /> } />
            <Route path='/dc' element={<DcPage /> } />
            <Route path='/hero/:id' element={<HeroPage /> } />
            <Route path='/search' element={<SearchPage /> } />
            <Route path='/registerHero' element={<RegisterHeroPage/> } />
        </Routes>
    </>
  )
}
