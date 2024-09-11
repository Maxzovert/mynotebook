import React from 'react';
import './GetStarted.css';
import Welcomelog from '../Assets/Welcom-logo.png';

const GetStarted = ({ setWelScr , setShowLogSign}) => {
  
  const handleClick = () => {
    // Set the welcome screen state to false
    setWelScr(false);
    setShowLogSign(true)
  };

  return (
    <>
    <div className='con'>
        <img src={Welcomelog} alt="Welcome" />
      
      <p>Welcome to MyNoteBook</p>
        <button onClick={handleClick}>Get Started</button>
      </div>
    </>
  );
};

export default GetStarted;
