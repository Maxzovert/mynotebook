import React from 'react';
import './GetStarted.css';
import Welcomelog from '../Assets/Welcom-logo.png';

const GetStarted = ({ setWelScr }) => {
  
  const handleClick = () => {
    // Set the welcome screen state to false
    setWelScr(false);
  };

  return (
    <div className='con'>
      <div className='wlimg'>
        <img src={Welcomelog} alt="Welcome" />
      </div>
      <p>Welcome to MyNoteBook</p>
      <div className='wlbtn'>
        <button onClick={handleClick}>Get Started</button>
      </div>
    </div>
  );
};

export default GetStarted;
