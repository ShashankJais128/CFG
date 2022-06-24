import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
        <div className="bg-gray-300 w-full flex justify-between">
            {/* name and logo */}
            <div className="w-1/5 py-5 px-5">
                <Link to="/" className="flex items-center py-2 px-1">
                    <img className="w-20 rounded-full ml-4 cursor-pointer" src="" alt="logo" />
                </Link>
                <Link to="/" className="flex items-center py-2 px-1">
                    <h1 className=' text-4xl font-bold'>Name</h1>
                </Link>
            </div>
            {/* navigation links */}
            <div className="w-1/5 py-5 px-5 flex flex-col">
                <h1 className='px-2 font-bold'>Links</h1>
                <Link to="/" className="py-2 px-2 hover:font-semibold hover:underline hover:underline-offset-2">
                    Home
                </Link>
                <Link to="/aboutus" className="py-2 px-2 hover:font-semibold hover:underline hover:underline-offset-2">
                    About Us
                </Link>
                <Link to="/contactus" className="py-2 px-2 hover:font-semibold hover:underline hover:underline-offset-2">
                    Contact Us
                </Link>
            </div>
            {/* social links */}
            <div className="w-1/5 py-5 px-5 flex flex-col">
                <h1 className='px-2 font-bold'>Follow us</h1>
                <Link to="/" className="py-2 px-2 hover:font-semibold hover:underline hover:underline-offset-2 flex space-x-1">
                    <img src="" alt="i" />
                    <h1>Instagram</h1>
                </Link>
                <Link to="/" className="py-2 px-2 hover:font-semibold hover:underline hover:underline-offset-2 flex space-x-1">
                    <img src="" alt="f" />
                    <h1>Facebook</h1>
                </Link>
                <Link to="/" className="py-2 px-2 hover:font-semibold hover:underline hover:underline-offset-2 flex space-x-1">
                    <img src="" alt="t" />
                    <h1>Twitter</h1>
                </Link>
            </div>
            {/* contact */}
            <div className="w-1/5 py-5 px-5 space-y-3 flex flex-col">
                <h1 className='font-bold'>Contact us</h1>
                <div>
                    <div className='flex space-x-1'>
                        <img src="" alt="c" />
                        <h1 className='font-semibold'>Call us:</h1>
                    </div>
                    <h2 className='pl-8'>9999999999</h2>
                </div>
                <div>
                    <div className='flex space-x-1'>
                        <img src="" alt="e" />
                        <h1 className='font-semibold'>Email:</h1>
                    </div>
                    <h2 className='pl-8'>xyz@gmail.com</h2>
                </div>
                <div>
                    <div className='flex space-x-1'>
                        <img src="" alt="c" />
                        <h1 className='font-semibold'>Address:</h1>
                    </div>
                    <h2 className='pl-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, quod!</h2>
                </div>
                                
            </div>
        </div>
    </>
  )
}

export default Footer