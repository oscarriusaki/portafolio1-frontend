import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../context/AuthContext';

export const RegisterUser = () => {

  const navigate = useNavigate();
  const [msg, setMsg] = useState('');
  const { register, login } = useContext(AuthContext);
  const { onChange, name, email, password} = useForm({
    name: '',
    email: '',
    password: '',
  });

  const onRegisterPage = async () => {

    const method = 'POST';
    const headers = {
      'Context-Type': 'application/json'
    }
    const formData = new FormData();
    formData.append('first_name', name)
    formData.append('email', email)
    formData.append('pas', password)
    const resp = await fetch('http://localhost:8080/user',{
      method: method,
      headers: headers,
      body: formData,
    });
    const data = await resp.json();
    console.log(data)

    if(data.msg !== 'registered succesfully' && !data.token){
      setMsg(data.msg)
      return
    }else{
      const token = data.token
      register(name, email, password, token)
      navigate('/', {
        replace: true
      })
    };

    register(name, email, password)
    navigate('/', {
      replace: true
    })
  }

  const onInputSubmit = (value) => {
    value.preventDefault();
    if(name.trim().length <= 0 && email.trim().length <= 0 && password.trim().length <= 0){
      return;
    }
    console.log(email)
    onRegisterPage();
  }
  const reset = () => {
    setMsg('')
  }
  const onLogin=() => {
    navigate('/login', {
      replace: true
    })
  }
  return (
    <>
        <div className="row justify-content-center margen">
          <div className="col-md-5">
            <div className="card p-3 text-center">
              <h1>Register User</h1>
              <div className="row justify-content-center mt-2 mb-2">
                <div className="col-md-12">
                  <form onSubmit={onInputSubmit}>
                    <input 
                      type="text" 
                      placeholder='Firs name'
                      className='form-control mb-3'
                      name='name'
                      value={name}
                      onChange={onChange}
                      onMouseDown={reset}
                      />
                    <input 
                      type='email'
                      placeholder='Email'
                      className='form-control mb-3'
                      name='email'
                      value={email}
                      onChange={onChange}
                      onMouseDown={reset}
                    />
                    <input 
                      type='password'
                      placeholder='Password'
                      className='form-control mb-3'
                      autoComplete='off'
                      name='password'
                      value={password}
                      onChange={onChange}
                      onMouseDown={reset}
                    />
                    <button className='btn btn-outline-primary mb-2 w-100' type='submit'>Register</button>
                    <span className='color'>{msg}</span><br />
                    you have an account?/<a type="submit" className='text-primary' onClick={onLogin}>login</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
