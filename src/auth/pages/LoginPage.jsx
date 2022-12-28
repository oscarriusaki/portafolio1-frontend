import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);
  const [msg, setMsg] = useState('')
  const  { onChange, email, password} = useForm({
    email: '',
    password: ''
  })

  const onLogin = async() => {
    const path = localStorage.getItem('path') || '/';

    const method = 'POST';
    const headers ={
        'Context-Type':'application/json'
    };
    const formData = new FormData();
    formData.append('email', email);
    formData.append('pas', password);

    const resp = await fetch('http://localhost:8080/login',{
        method: method,
        headers: headers,
        body: formData,
    });
    const data = await resp.json();
    if(data.msg !== 'successfully logged' && !data.token) { 
        setMsg(data.msg)
    }else{ 
      const token = data.token
      login('Oscar', email, password, token)
      navigate(path, {
        replace:true,
      })
    }
  }
  const onRegisterPage = () => {
    navigate('/registerPage', {
      replace: true
    })
  }

  const onInputSubmit = (value) => {
    value.preventDefault();
    // if(email.trim().length <= 0 || password.trim().length <= 0) return;
    onLogin()
  }
  const rese = () => {
    setMsg('')
  }

  return (
    <>
      <div className="row justify-content-center margen">
        <div className="col-md-5">
          <div className="card p-3 text-center">
            <h1>Login</h1>
            <div className="row justify-content-center mt-2 mb-2">
              <div className="col-md-12">
                <form onSubmit={onInputSubmit}>
                  <input 
                    type="email" 
                    placeholder='Email'
                    className='form-control mb-3'
                    name='email'
                    value={email}
                    onChange={onChange}
                    onMouseDown = {rese}
                    />
                  <input
                    type="password" 
                    placeholder='Password'
                    className='form-control mb-3'
                    autoComplete='off'
                    name='password'
                    value={password}
                    onChange={onChange}
                    onMouseDown = {rese}
                  />
                  <button className='btn btn-outline-primary w-100 mb-2'>Login</button>
                </form>
                  <div>
                  <span className='color'>{msg}</span> <br />
                  not have account?/<a type="submit" className='text-primary' onClick={onRegisterPage}>register</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
