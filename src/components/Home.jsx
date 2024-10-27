import React, { useState } from 'react';
import Notes from './Notes'; 
import Left from './Left';
import Blank from './Blank';

const Home = ({ShowNotescomp}) => {

    const [showNote , setShowNote] = useState(false)
    const [showBlank , setShowBlank] = useState(true)

    function ShowNotescomp () {
        setShowNote(true)
        setShowBlank(false)
    }

  // const {showAlert} = props
  return (
    <div className='flex h-screen justify-between '>
      <Left/>
      {/* <div className='flex justify-center flex-row w-1/4'> */}
      {showBlank && <Blank ShowNotescomp={ShowNotescomp}/>}
      {/* </div> */}
      <div className='flex  flex-col'>
      {!showBlank && <Notes/>}
      </div>
    </div>
  )
}

export default Home
