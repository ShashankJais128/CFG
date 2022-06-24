import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Signup() {
  return (
    <div>
        <Navbar />
        <div className='flex justify-center items-center h-[90vh]'>
            <div className='flex flex-col justify-center items-center bg-gray-300 border-2 border-gray-500 p-5 sm:p-10 rounded-xl backdrop-blur-2xl'>
                <img className="w-16 rounded-full" src="" alt="Logo" /><br />
                <h1 className='text-3xl font-bold'>Welcome to Name</h1><br /><br />
                <input className='w-[300px] sm:w-[400px] p-1.5 text-lg rounded' type="text" name="" id="name" placeholder='Enter Name' /><br />
                <input className='w-[300px] sm:w-[400px] p-1.5 text-lg rounded' type="text" name="" id="email" placeholder='Enter email address' /><br />
                <input className='w-[300px] sm:w-[400px] p-1.5 text-lg rounded' type="password" name="" id="password" placeholder='Create Password' /><br />
                <input className='w-[300px] sm:w-[400px] p-1.5 text-lg rounded' type="password" name="" id="cpassword" placeholder='Confirm Password' />
                <h2 className='text-blue-700 leading-10'><Link to='/signin' >already a user?</Link></h2><br />
                <button className='w-[200px] bg-gray-500 text-lg rounded p-1.5 font-bold'><Link to='/signin'>Sign up</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Signup