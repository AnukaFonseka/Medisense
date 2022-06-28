import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import './login.css'
import {increment, loginSelector} from "./index";
import {loginThunk} from "../../apiCalls/apiCalls";
import {useHistory} from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [displayLoginError, setDisplayLoginError] = useState(false)
    // const user = useSelector((state) => state.login.user)
    const {isLoginPending, isLoginSuccess, isLoginError, user} = useSelector(loginSelector)
    const history = useHistory();

    useEffect(() => {
        if(isLoginSuccess) {
            history.push('/receptionHome')
        } else {
            setDisplayLoginError(true)
        }
    }, [user])

    return (
        <div>
            <div className='login'>
                <div className='login__form'>
                <form className='login__form__inputs'>

                    <h1>Medisense</h1>

                    <input
                        type="text"
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className={"feedback"}>
                        {displayLoginError && user.status === '420' ?
                            <p>
                                Username or password invalid
                            </p> :
                            <></>
                        }
                    </div>

                    {/* <button type='submit' className='login__btn'
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(login({username: "pedro", password: "pass"}))
                }}
            >Login</button> */}


                </form>
                <button className="login__btn"
                        onClick={() => {
                            let obj = {username: username, password: password}
                            dispatch(loginThunk(obj))
                        }}
                > Login
                </button>
                </div>

            </div>
        </div>
    )
}

export default Login