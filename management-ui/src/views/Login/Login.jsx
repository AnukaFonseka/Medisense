import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {useDispatch} from 'react-redux';
import { login } from '../../Features/user'
import './login.css'

const Login = () => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div>
        <div className='login'>
        <form className='login__form'>

            <h1>Medisense</h1>

            <select class="form-select" aria-label="Default select example">
                <option selected>Department</option>
                <option value="1">Admin</option>
                <option value="2">Reception</option>
                <option value="3">Mini Lab</option>
            </select>

            <input
             type="text"
             placeholder='Username'
             value={username}
             onChange={(e)=> setUsername(e.target.value)}
            />
            <input
             type="password"
             placeholder='Password'
             value={password}
             onChange={(e)=> setPassword(e.target.value)}
            />

            {/* <button type='submit' className='login__btn'
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(login({username: "pedro", password: "pass"}))
                }}
            >Login</button> */}

            <NavLink to = "/receptionHome" className = "login__btn"
                onClick={() => {
                    dispatch(login({username: "pedro", password: "polls"}))
                }}
            > Login </NavLink>
        </form>

    </div>
    </div>
  )
}

export default Login