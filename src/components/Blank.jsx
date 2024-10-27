import React, { useState } from 'react'
import noNotes from "../Assets/Welcom-logo.png"
import Button from './Button'
 
const Blank = ({ShowNotescomp}) => {
 
  return (
    <>
    <div className='flex justify-center flex-row w-1/4'>
    <div className="flex justify-center flex-col mt-2 text-center w-2/3">
    <img 
    src={noNotes} 
    alt="An Empty Task List"
    className="w-20 h-20 object-contain mx-auto"
    />
    <h2 className="text-xl font-bold text-stone-500 my-4">Add Your First note</h2>
    <p className="mt-8">
    {/* <Button>Create New</Button> */}
    <Button onClick={ShowNotescomp}>Create New</Button>
    </p>
  </div>
  </div>
</>
  )
}

export default Blank
