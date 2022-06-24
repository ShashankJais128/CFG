import React, {useState} from 'react'
import { Link } from "react-router-dom";
import menu from "../public/menuicon.png"


function Navbar() {
    const [visible, setVisible] = useState("right-[100%]");
  console.log(visible);
  function menuClick() {
    if (visible) {
      setVisible("");
    } else if (visible === "") {
      setVisible("right-[100%]");
    }
  }
  return (
    <>
        <nav className="bg-gray-300 w-full sticky top-0 z-50">
        <div className="mx-auto px-6">
          <div className="flex justify-between">
            <div className="flex w-full justify-between ">
              {/* logo */}
              <div className="flex">
                <Link to="/" className="flex items-center py-5 px-1">
                  <img className="w-10 rounded-full ml-4 cursor-pointer" src="" alt="logo" />
                </Link>
                <Link to="/" className="flex items-center py-5 px-1">
                    <h1 className=' text-lg font-bold'>Name</h1>
                </Link>
              </div>
              {/* primary nav */}
              <div className="hidden lg:flex items-center space-x-2 text-lg">
                <Link to="/" className="py-5 px-2 hover:font-semibold hover:underline hover:underline-offset-2">
                  Home
                </Link>
                <Link to="/aboutus" className="py-5 px-2 hover:font-semibold hover:underline hover:underline-offset-2">
                  About Us
                </Link>
                <Link to="/contactus" className="py-5 px-2 hover:font-semibold hover:underline hover:underline-offset-2">
                  Contact Us
                </Link>
                {/* <Link to="/admin" className="py-5 px-3 text-gray-700 hover:text-black hover:underline hover:underline-offset-2">
                  Admin
                </Link> */}
              </div>
              
            {/* secondary nav */}
            <div className="hidden lg:flex my-4 rounded-full bg-gray-500 hover:bg-gray-400 items-center text-lg">
              <Link to="/signin" className="py-1 px-3  rounded transition duration-300">
                Log in
              </Link>
            </div>
            </div>
            {/* mobile button goes here */}
            <div className="lg:hidden flex items-center">
              <button className="mobile-menu-button" onClick={menuClick}>
                <img className="w-6 fill-yellow-500 cursor-pointer" src={menu} alt="menu" />
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div className={`mobile-menu  flex flex-col ${visible}  font-semibold bg-gray-500 w-full h-[100vh] items-center absolute lg:hidden`}>
          <Link to="/" className="block py-2 px-4 my-1 text-sm">
            Home
          </Link>
          <hr className="w-[50%]" />
          <Link to="/About" className="block py-2 px-4 my-1 text-sm">
            About Us
          </Link>
          <hr className="w-[50%]" />
          <Link to="/contactus" className="block py-2 px-4 my-1 text-sm">
            Contact Us
          </Link>
          <hr className="w-[50%]" />
          <Link to="/signin" className="block py-2 px-4 my-1 text-sm">
            Log in
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar