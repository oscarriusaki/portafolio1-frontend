import React, { useReducer } from 'react';
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { AuthReducer } from './AuthReducer';

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user,
        user:user,
    }
}

export const UserContext = ({children}) => {

    const [state, dispatch] = useReducer(AuthReducer, {}, init);

    const login = (name = '', email = '', password = '', token) => {
        const user = {
            id: 1234,
            name: name,
            email: email,
            token: token
        }
        const action = {
            type: types.login,
            user:user,
        }

        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
    }
    const register = (name = '', email = '', password = '', token) => {
        const user = {
            id: 123,
            name: name, 
            email: email,
            token: token
        }
        const action = {
            type: types.register,
            user:user
        }
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
    }
    const logout = () => {
        localStorage.removeItem('user');
        const action = {
            type: types.logout,
        }
        dispatch(action);
    }

  return (
    <AuthContext.Provider value={{
        ...state,
        login,
        register,
        logout
    }}>
        {children}
    </AuthContext.Provider>
  )
}
