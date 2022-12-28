import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../auth/context/UserContext'
import { LoginPage } from '../auth/pages/LoginPage'
import { RegisterUser } from '../auth/pages/RegisterUser'
import { HeroRoute } from '../heroes/routes/HeroRoute'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRoutes = () => {
  return (
    <>
    <UserContext >
        <Routes >
            <Route 
              path='/login' element={
                <PublicRoute >
                  <LoginPage/>
                </PublicRoute>
              }
              />
            <Route 
              path='/registerPage' element={
                <PublicRoute>
                  <RegisterUser/>
                </PublicRoute>
              }
              />

            <Route 
              path='/*' element={
                <PrivateRoute >
                  <HeroRoute />
                </PrivateRoute>
               }
               />
            {/* <Route path='/*' element={<HeroRoute /> } /> */}
        </Routes>
    </UserContext>
    </>
  )
}
