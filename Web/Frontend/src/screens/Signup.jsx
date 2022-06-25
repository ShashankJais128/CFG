import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../pages/Navbar'
import {useSelector, useDispatch} from 'react-redux'
import { register } from '../actions/userActions.jsx'
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUserName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const userRegister = useSelector(state => state.userRegister)
  const { loading , error , userInfo} = userRegister

  useEffect(()=> {
    if(userInfo)
        navigate('/')
  },[navigate, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
        setMessage("Passowords Don't Match")
    }else {
        dispatch(register(username, email, password))
    }
  }

  return (
    <div>
        <Navbar />
        <div className='flex justify-center items-center h-[90vh]'>
            <div className='flex flex-col justify-center items-center bg-gray-300 border-2 border-gray-500 p-5 sm:p-10 rounded-xl backdrop-blur-2xl'>
                <img className="w-16 rounded-full" src="" alt="Logo" /><br />
                <h1 className='text-3xl font-bold'>Welcome to Name</h1><br /><br />
                <input className='w-[300px] sm:w-[400px] p-1.5 text-lg rounded' type="text" name="" id="name" placeholder='Enter Username' value={username} onChange={(e) => setUserName(e.target.value)}/><br />
                <input className='w-[300px] sm:w-[400px] p-1.5 text-lg rounded' type="text" name="" id="email" placeholder='Enter email address' value={email} onChange={(e) => setEmail(e.target.value)}/><br />
                <input className='w-[300px] sm:w-[400px] p-1.5 text-lg rounded' type="password" name="" id="password" placeholder='Create Password' value={password} onChange={(e) => setPassword(e.target.value)}/><br />
                <input className='w-[300px] sm:w-[400px] p-1.5 text-lg rounded' type="password" name="" id="cpassword" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <h2 className='text-blue-700 leading-10'><Link to='/signin' >already a user?</Link></h2><br />
                <button className='w-[200px] bg-gray-500 text-lg rounded p-1.5 font-bold' onClick={submitHandler}><Link to='/signin'>Sign up</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Signup