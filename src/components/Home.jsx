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
    <div className='flex h-screen justify-between'>
      <Left/>
      {showBlank && <Blank ShowNotescomp={ShowNotescomp}/>}
      {!showBlank && <Notes/>}
    </div>
  )
}

export default Home
