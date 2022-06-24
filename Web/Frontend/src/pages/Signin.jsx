import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import {login, register} from '../actions/userActions.jsx'
import {useSelector, useDispatch} from 'react-redux'
import Navbar from './Navbar'

function Signin() {
  const [username, setUserName] = useState('')
  const [password, setPassword] =  useState('')

  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { loading , error , userInfo} = userLogin

  const navigate = useNavigate()

  useEffect(()=> {
    if(userInfo)
        navigate('/')
},[navigate, userInfo])

const signinHandler = (e) => {
  e.preventDefault();
  console.log(password)
  dispatch(login(username,password))
}

  return (
    <div className='flex justify-center items-center h-[90vh]'>
      <div className='flex flex-col justify-center items-center bg-gray-300 border-2 border-gray-500 p-5 sm:p-10 rounded-xl backdrop-blur-2xl'>
        <img className="w-16 rounded-full" src="" alt="Logo" /><br />

        <h1 className='text-3xl font-bold'>Login</h1><br /><br />

        <input className='w-[300px] sm:w-[400px] p-1.5 text-lg rounded' type="text" name="" id="username" value={username} onChange= {(e) => setUserName(e.target.value)} placeholder='Enter Username' /><br />

        <input className='w-[300px] sm:w-[400px] p-1.5 text-lg rounded' type="password" name="" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>

        <h2 className='text-blue-700 leading-10'><Link to='/signin' >forgot password?</Link></h2><br />

        <button className='w-[200px] bg-gray-500 text-lg rounded p-1.5 font-bold' onClick={signinHandler}><Link to='/signin'>Log in</Link></button>

      </div>
    </div>
  )
}

export default Signin