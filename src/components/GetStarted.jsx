import React from 'react';
import './styles/GetStarted.css';
import Welcomelog from '../Assets/Welcom-logo.png';

const GetStarted = ({ setWelScr , setShowLogSign}) => {
  
  const handleClick = () => {
    // Set the welcome screen state to false
    setWelScr(false);
    setShowLogSign(true)
  };

  return (
    <>
    <div className='getscon'>
        <img className='getsimg' src={Welcomelog} alt="Welcome" />
      
      <p className='weltext'>Welcome <span style={{color:'yellow'}}>To</span> MyNoteBook</p>
        <button className='getsbtn' onClick={handleClick}>Get Started &gt; &gt; &gt; &gt;</button>
      </div>
    </>
  );
};

export default GetStarted;
