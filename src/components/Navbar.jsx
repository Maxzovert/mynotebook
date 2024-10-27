import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
// import './styles/navbar.css'
import LoginSigncom from './Loginsignup'

const Navbar = ({ setIsAuthenticated }) => {
let navigate = useNavigate();
const handleLogout=()=>{
  localStorage.removeItem('token')
  navigate('/')
}

  let location = useLocation();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsAuthenticated(false);
      navigate('/');
    }
    console.log(location.pathname);
  }, [location, navigate]);
  return (
    <>
      <div className="flex justify-around w-full bg-lgrey h-16">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""} mt-3 px-4 py-2 text-sm font-bold  bg-black rounded-md h-10 w-1/6 text-center text-lgrey hover:text-white sm:text-3xl sm:py-0`}  aria-current="page" to="/about">About</Link>

              <Link className="mt-3 py-2 px-4 text-sm font-bold  bg-black rounded-md h-10 w-1/4 text-center text-lgrey hover:text-white sm:text-3xl sm:py-0" to="/">
              SNAPNOTES</Link>

          <button onClick={handleLogout} className="mt-3 px-4 text-sm font-bold  bg-black rounded-md h-10 w-1/6 text-center text-lgrey hover:text-white sm:text-3xl">Logout</button>
        </div>
    </>
    )
}

export default Navbar
