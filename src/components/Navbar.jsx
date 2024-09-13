import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './styles/navbar.css'
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
      <div className="nav-main">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about">About</Link>
              <Link className="nav-logo nav-link" to="/">Tag-Matrix</Link>
          <button onClick={handleLogout} className="logout-btn">Logout</button>  
        </div>
    </>
  )
}

export default Navbar
